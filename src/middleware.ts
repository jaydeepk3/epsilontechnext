import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const host = request.headers.get('host') || '';
    const hostname = host.split(':')[0]; // get domain without port

    // 1. Enforce non-www redirect for main domain
    if (host.startsWith('www.')) {
        const url = request.nextUrl.clone();
        url.host = host.replace('www.', '');
        return NextResponse.redirect(url, 301);
    }

    // 4. Protect all /admin routes except /admin/login
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const token = request.cookies.get('adminToken')?.value
        if (!token) {
            return NextResponse.redirect(new URL('/admin/login/', request.url))
        }

        const payload = await verifyToken(token)
        if (!payload) {
            return NextResponse.redirect(new URL('/admin/login/', request.url))
        }
    }

    // Redirect /admin to /admin/blogs
    if (pathname === '/admin' || pathname === '/admin/') {
        return NextResponse.redirect(new URL('/admin/blogs/', request.url))
    }

    return NextResponse.next()
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
}


