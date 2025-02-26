//export { auth as middleware } from "@/auth"

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log("Route Middleware", req.nextUrl.pathname);
  // You can add additional middleware logic here
  return NextResponse.next();
}


// Do not check static, images and assests in middleware. This is to make website faster.
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|_next/assets|favicon.ico).*)'],
}