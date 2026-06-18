import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join('/tmp', 'pawpalace-likes.json');

async function readData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function writeData(data: any) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug') || '';
  const all = await readData();
  return NextResponse.json(all[slug] || { likes: 0, dislikes: 0 });
}

export async function POST(req: NextRequest) {
  const { slug, type } = await req.json();
  if (!slug ||!['like', 'dislike'].includes(type)) {
    return NextResponse.json({ error: 'Invalid' }, { status: 400 });
  }

  const all = await readData();
  if (!all[slug]) all[slug] = { likes: 0, dislikes: 0 };

  if (type === 'like') all[slug].likes += 1;
  else all[slug].dislikes += 1;

  await writeData(all);
  return NextResponse.json(all[slug]);
}
