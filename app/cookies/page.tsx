'use client';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { legalContent } from '@/lib/locales/legal';

export default function CookiePolicyPage() {
    const { language } = useLanguage();
    const content = legalContent[language].cookies;

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-thai-subtle pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                            <span>🍪</span>
                            <span>{content.badge}</span>
                        </div>
                        <h1 className="text-display-sm md:text-display-md font-bold text-slate-800 mb-4">
                            {content.title}
                        </h1>
                        <p className="text-lg text-slate-600">
                            {content.lastUpdated}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
                        {content.sections.map((section, index) => (
                            <section key={index} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                                <h2 className="text-xl font-bold text-slate-800 mb-3">
                                    {index + 1}. {section.title}
                                </h2>
                                <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </div>
                            </section>
                        ))}

                        {/* Contact */}
                        <div className="bg-emerald-50 rounded-xl p-6">
                            <h3 className="font-bold text-slate-800 mb-2">{content.contact.title}</h3>
                            <p className="text-slate-600 mb-4">
                                {content.contact.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:089-437-6117"
                                    className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:underline"
                                >
                                    📞 {content.contact.phone}
                                </a>
                                <a
                                    href="https://line.me/ti/p/~jarunee2536"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
                                >
                                    💬 {content.contact.line}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-8 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            {content.backToHome}
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

