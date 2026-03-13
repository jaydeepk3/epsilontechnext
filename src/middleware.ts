import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  // Enforce non-www
  if (host?.startsWith('www.')) {
    const newHost = host.replace('www.', '');
    url.host = newHost;
    return NextResponse.redirect(url, 301);
  }

  // Ensure trailing slash for consistent SEO (if not already handled by next.config.ts)
  // Next.js handles this by default if trailingSlash: true is set, 
  // but middleware can also check it.
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
