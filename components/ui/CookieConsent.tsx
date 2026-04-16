'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const cookieConsent = localStorage.getItem('jarunee-cookie-consent');
        if (!cookieConsent) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('jarunee-cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('jarunee-cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="p-6">
                    <div className="flex items-start gap-4">
                        {/* Cookie Icon */}
                        <div className="hidden sm:flex w-12 h-12 rounded-full bg-amber-100 items-center justify-center shrink-0">
                            <span className="text-2xl">🍪</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                                        เราใช้คุกกี้
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ
                                        และวิเคราะห์การเข้าชมเว็บไซต์ เรียนรู้เพิ่มเติมได้ที่{' '}
                                        <Link href="/cookies" className="text-emerald-600 hover:underline font-medium">
                                            นโยบายคุกกี้
                                        </Link>{' '}
                                        และ{' '}
                                        <Link href="/privacy" className="text-emerald-600 hover:underline font-medium">
                                            นโยบายความเป็นส่วนตัว
                                        </Link>
                                    </p>
                                </div>

                                {/* Close button */}
                                <button
                                    onClick={declineCookies}
                                    className="text-slate-400 hover:text-slate-600 transition-colors shrink-0"
                                    aria-label="ปิด"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                <button
                                    onClick={acceptCookies}
                                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    ยอมรับทั้งหมด
                                </button>
                                <button
                                    onClick={declineCookies}
                                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full transition-all duration-300"
                                >
                                    ปฏิเสธ
                                </button>
                                <Link
                                    href="/cookies"
                                    className="px-6 py-2.5 text-slate-600 hover:text-emerald-600 font-medium rounded-full transition-all duration-300 text-center"
                                >
                                    ตั้งค่าคุกกี้
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
