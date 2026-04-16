import type { NextConfig } from "next";

const securityHeaders = [
  {
    // ป้องกัน XSS (Cross-Site Scripting)
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    // ป้องกัน Clickjacking
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    // ป้องกัน MIME type sniffing
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    // ควบคุม Referrer information
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    // ป้องกันการเข้าถึง features ที่ไม่จำเป็น
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  },
  {
    // Content Security Policy - ป้องกัน XSS และ injection attacks
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-src 'self' https://www.youtube.com https://www.google.com",
      "media-src 'self' https:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests"
    ].join('; ')
  },
  {
    // บังคับใช้ HTTPS (สำหรับ production)
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains'
  }
];

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Security Headers
  async headers() {
    return [
      {
        // ใช้กับทุก routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
