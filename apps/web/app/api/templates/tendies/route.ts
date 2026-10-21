import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  // The ZIP lives in public assets, which are available on both Node and Workers.
  return NextResponse.redirect(new URL('/templates/tendies.zip', request.url));
}
