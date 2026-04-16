import React from 'react';
import Image from 'next/image';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating golden orbs */}
                <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-float-reverse" />
                <div className="absolute top-[50%] left-[60%] w-64 h-64 bg-amber-400/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center gap-8">

                {/* Spinning Ring Container */}
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                    {/* Outer spinning ring - gold gradient */}
                    <div className="absolute inset-0 rounded-full animate-spin-slow">
                        <div className="w-full h-full rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, transparent, #f59e0b, #eab308, transparent, #f59e0b, transparent)',
                                padding: '3px',
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-slate-950" />
                        </div>
                    </div>

                    {/* Middle spinning ring - emerald (reverse) */}
                    <div className="absolute inset-2 rounded-full animate-spin-reverse">
                        <div className="w-full h-full rounded-full"
                            style={{
                                background: 'conic-gradient(from 180deg, transparent, #10b981, transparent, #34d399, transparent)',
                                padding: '2px',
                            }}
                        >
                            <div className="w-full h-full rounded-full bg-slate-950" />
                        </div>
                    </div>

                    {/* Inner glow ring */}
                    <div className="absolute inset-4 rounded-full animate-pulse-glow">
                        <div className="w-full h-full rounded-full border-2 border-amber-400/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]" />
                    </div>

                    {/* Owner Profile Image */}
                    <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl shadow-amber-500/20 border-2 border-amber-400/40">
                        <Image
                            src="/images/owner-profile.png"
                            alt="Jarunee - Owner"
                            fill
                            className="object-cover object-top scale-110"
                            sizes="224px"
                            priority
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                    </div>

                    {/* Orbiting dots */}
                    <div className="absolute inset-0 animate-spin-orbit">
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                    </div>
                    <div className="absolute inset-0 animate-spin-orbit" style={{ animationDelay: '-2s', animationDuration: '4s' }}>
                        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    </div>
                </div>

                {/* Brand Name */}
                <div className="text-center space-y-3">
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                        <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                            Jarunee
                        </span>
                        <span className="text-white/80 ml-2 font-light">Car Rental</span>
                    </h1>
                    <p className="text-amber-300/60 text-sm tracking-[0.3em] uppercase font-medium animate-pulse">
                        กำลังโหลด...
                    </p>
                </div>

                {/* Loading Progress Bar */}
                <div className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 animate-loading-bar" />
                </div>

                {/* Bottom tagline */}
                <p className="text-white/30 text-xs tracking-wider">
                    ✨ Premium Car Rental Service — Chiang Mai ✨
                </p>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                @keyframes spin-orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.02); }
                }
                @keyframes loading-bar {
                    0% { width: 0%; transform: translateX(0); }
                    50% { width: 80%; }
                    100% { width: 100%; }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(30px, -30px); }
                    66% { transform: translate(-20px, 20px); }
                }
                @keyframes float-reverse {
                    0%, 100% { transform: translate(0, 0); }
                    33% { transform: translate(-30px, 20px); }
                    66% { transform: translate(20px, -30px); }
                }

                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
                .animate-spin-reverse {
                    animation: spin-reverse 4s linear infinite;
                }
                .animate-spin-orbit {
                    animation: spin-orbit 3s linear infinite;
                }
                .animate-pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
                }
                .animate-loading-bar {
                    animation: loading-bar 2s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                .animate-float-reverse {
                    animation: float-reverse 10s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
