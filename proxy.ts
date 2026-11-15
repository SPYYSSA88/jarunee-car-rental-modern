import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// =========================================================
// Middleware สำหรับป้องกัน Bot และ Rate Limiting เบื้องต้น
// หมายเหตุ: การป้องกัน DDoS เต็มรูปแบบต้องใช้ Cloudflare/Vercel
// =========================================================

// รายชื่อ User-Agent ที่เป็น Bot อันตราย
const BAD_BOTS = [
    'ahrefsbot',
    'semrushbot',
    'mj12bot',
    'dotbot',
    'blexbot',
    'dataforseobot',
    'petalbot',
    'megaindex',
    'bytespider',
    'gptbot',
    'ccbot',
    'anthropic-ai',
    'claude-web',
    'scrapy',
    'python-urllib',
    'python-requests',
    'go-http-client',
    'java/',
    'curl/',
    'wget/',
    'libwww-perl',
    'mechanize',
    'zgrab',
    'masscan',
    'nikto',
    'sqlmap',
    'nessus',
    'acunetix',
    'nmap',
    'dirbuster',
    'gobuster',
    'nuclei',
];

// Suspicious paths ที่ Bot ชอบยิง
const SUSPICIOUS_PATHS = [
    '/wp-admin',
    '/wp-login',
    '/wp-content',
    '/wordpress',
    '/xmlrpc',
    '/administrator',
    '/admin.php',
    '/phpmyadmin',
    '/mysql',
    '/backup',
    '/.env',
    '/.git',
    '/config',
    '/shell',
    '/cmd',
    '/eval',
    '/exec',
    '/api/admin',
];

export function proxy(request: NextRequest) {
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const pathname = request.nextUrl.pathname.toLowerCase();
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // 1. Block bad bots by User-Agent
    for (const bot of BAD_BOTS) {
        if (userAgent.includes(bot)) {
            console.log(`[BLOCKED] Bad bot detected: ${bot} from IP: ${ip}`);
            return new NextResponse('Access Denied', {
                status: 403,
                headers: {
                    'Content-Type': 'text/plain',
                }
            });
        }
    }

    // 2. Block empty User-Agents (but allow short ones from legitimate mobile browsers)
    if (!userAgent || userAgent.length < 5) {
        // Allow internal Next.js requests (prefetch, RSC, etc.)
        const isInternalRequest = request.headers.get('next-router-prefetch') || 
                                   request.headers.get('rsc') ||
                                   request.headers.get('next-url');
        if (!isInternalRequest) {
            console.log(`[BLOCKED] Empty/suspicious User-Agent from IP: ${ip}`);
            return new NextResponse('Access Denied', {
                status: 403,
                headers: {
                    'Content-Type': 'text/plain',
                }
            });
        }
    }

    // 3. Block suspicious paths (WordPress, phpmyadmin scans)
    for (const path of SUSPICIOUS_PATHS) {
        if (pathname.includes(path)) {
            console.log(`[BLOCKED] Suspicious path access: ${pathname} from IP: ${ip}`);
            return new NextResponse('Not Found', {
                status: 404,
                headers: {
                    'Content-Type': 'text/plain',
                }
            });
        }
    }

    // 4. Block requests without Accept header (likely bots)
    const acceptHeader = request.headers.get('accept');
    if (!acceptHeader && !pathname.startsWith('/api') && !pathname.includes('.')) {
        // Allow static files and API routes
        console.log(`[BLOCKED] No Accept header from IP: ${ip}`);
        return new NextResponse('Access Denied', {
            status: 403,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    // Allow the request to proceed
    return NextResponse.next();
}

// Matcher - ใช้กับทุก routes ยกเว้น static files
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico, sitemap.xml, robots.txt
         * - images folder
         */
        '/((?!_next/static|_next/image|favicon|sitemap|robots|images|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$).*)',
    ],
};
