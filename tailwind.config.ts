import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Premium Color Palette - Luxury Black & Gold
                primary: {
                    50: '#faf9f7',
                    100: '#f5f3ee',
                    200: '#e8e4d9',
                    300: '#dbd4c4',
                    400: '#c1b59a',
                    500: '#D4AF37', // Gold accent
                    600: '#b89830',
                    700: '#9c8129',
                    800: '#806a21',
                    900: '#64531a',
                },
                dark: {
                    50: '#f7f7f7',
                    100: '#e3e3e3',
                    200: '#c8c8c8',
                    300: '#a4a4a4',
                    400: '#818181',
                    500: '#666666',
                    600: '#515151',
                    700: '#434343',
                    800: '#2d2d2d',
                    900: '#1a1a1a', // Deep black
                    950: '#0a0a0a',
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                },
                accent: {
                    blue: '#3E92CC',
                    navy: '#0A2463',
                    silver: '#C0C0C0',
                    platinum: '#E5E4E2',
                },
            },
            fontFamily: {
                sans: ['var(--font-dm-sans)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-playfair)', 'var(--font-outfit)', 'Georgia', 'serif'],
                body: ['var(--font-dm-sans)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
                kanit: ['var(--font-kanit)', 'sans-serif'],
                sarabun: ['var(--font-sarabun)', 'sans-serif'],
            },
            fontSize: {
                'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display-md': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
                'heading-xl': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
                'heading-lg': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
                'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
                'heading-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
                'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
                'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
                'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
                'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '100': '25rem',
                '112': '28rem',
                '128': '32rem',
            },
            boxShadow: {
                'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
                'large': '0 8px 32px rgba(0, 0, 0, 0.12)',
                'xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
                'premium': '0 20px 60px rgba(0, 0, 0, 0.2)',
                'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
                'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3)',
                'glow-blue': '0 0 20px rgba(62, 146, 204, 0.3)',
            },
            backdropBlur: {
                xs: '2px',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.4s ease-out',
                'slide-in-left': 'slideInLeft 0.4s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'bounce-soft': 'bounceSoft 1s ease-in-out',
                'shimmer': 'shimmer 2s linear infinite',
                'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                bounceSoft: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-premium': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #b89830 100%)',
                'gradient-overlay': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
            },
            transitionDuration: {
                '400': '400ms',
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
                'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            },
        },
    },
    plugins: [],
};

export default config;
