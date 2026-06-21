import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug') || '';
  if (!slug) return NextResponse.json({ helpful: 0, not_helpful: 0 });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ helpful: 0, not_helpful: 0 });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('likes')
      .select('helpful, not_helpful')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      return NextResponse.json({ helpful: 0, not_helpful: 0 });
    }

    return NextResponse.json({ helpful: data.helpful, not_helpful: data.not_helpful });
  } catch {
    return NextResponse.json({ helpful: 0, not_helpful: 0 });
  }
}

export async function POST(req: NextRequest) {
  const { slug, type } = await req.json();
  if (!slug || !['helpful', 'not_helpful'].includes(type)) {
    return NextResponse.json({ error: 'Invalid' }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check if row exists
    const { data: existing } = await supabase
      .from('likes')
      .select('helpful, not_helpful')
      .eq('slug', slug)
      .single();

    if (!existing) {
      const { data, error } = await supabase
        .from('likes')
        .insert({
          slug,
          helpful: type === 'helpful' ? 1 : 0,
          not_helpful: type === 'not_helpful' ? 1 : 0,
          updated_at: new Date().toISOString(),
        })
        .select('helpful, not_helpful')
        .single();

      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ helpful: data.helpful, not_helpful: data.not_helpful });
    }

    const updateField = type === 'helpful' ? 'helpful' : 'not_helpful';
    const { data, error } = await supabase
      .from('likes')
      .update({
        [updateField]: existing[updateField] + 1,
        updated_at: new Date().toISOString(),
      })
      .eq('slug', slug)
      .select('helpful, not_helpful')
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ helpful: data.helpful, not_helpful: data.not_helpful });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
