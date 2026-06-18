import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join('/tmp', 'pawpalace-comments.json');

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
  return NextResponse.json(all[slug] || []);
}

export async function POST(req: NextRequest) {
  const { slug, name, comment } = await req.json();
  if (!slug ||!name ||!comment) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const all = await readData();
  if (!all[slug]) all[slug] = [];

  all[slug].push({
    id: Date.now(),
    name: name.slice(0, 30),
    comment: comment.slice(0, 500),
    date: new Date().toISOString(),
  });

  await writeData(all);
  return NextResponse.json({ success: true });
}
