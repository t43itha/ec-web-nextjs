import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// Simple token auth via env; optional
const TOKEN = process.env.REVALIDATE_TOKEN;

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const token = url.searchParams.get('token') || req.headers.get('x-revalidate-token');

  if (TOKEN && token !== TOKEN) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const path = body?.path || url.searchParams.get('path');

    if (!path) {
      return NextResponse.json({ message: 'Missing path' }, { status: 400 });
    }

    await revalidatePath(path);

    return NextResponse.json({ revalidated: true, path }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: String(err) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const token = url.searchParams.get('token') || req.headers.get('x-revalidate-token');
  if (TOKEN && token !== TOKEN) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const path = url.searchParams.get('path');
  if (!path) {
    return NextResponse.json({ message: 'Missing path' }, { status: 400 });
  }
  await revalidatePath(path);
  return NextResponse.json({ revalidated: true, path }, { status: 200 });
}


