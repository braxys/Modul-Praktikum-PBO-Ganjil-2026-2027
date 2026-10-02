import { NextResponse } from 'next/server';
import { getSearchIndex } from '@/lib/modules';

export async function GET() {
  const index = getSearchIndex();
  return NextResponse.json(index);
}
