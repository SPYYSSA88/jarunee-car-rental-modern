'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    const footerLinks = {
        services: [
            { label: t('footer.service1'), href: '/cars' },
            { label: t('footer.service2'), href: '/cars' },
            { label: t('footer.service3'), href: '/#contact' },
            { label: t('footer.service4'), href: '/#contact' },
        ],
        support: [
            { label: t('footer.faqs'), href: '/faq' },
            { label: t('footer.contactUs'), href: '/#contact' },
            { label: t('nav.howItWorks'), href: '/#how-it-works' },
            { label: t('footer.aboutUs'), href: '/about' },
        ],
        legal: [
            { label: t('footer.privacy'), href: '/privacy' },
            { label: t('footer.terms'), href: '/terms' },
            { label: t('footer.cookie'), href: '/cookies' },
        ],
    };

    return (
        <footer className="bg-thai-subtle text-slate-800 relative z-10">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand & Contact */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center">
                            <Image
                                src="/images/logo.svg"
                                alt="Jarunee Car Rental"
                                width={150}
                                height={48}
                                className="h-12 w-auto"
                            />
                        </div>
                        <p className="text-slate-600 text-body-sm max-w-sm">
                            {t('footer.description')}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="tel:089-437-6117" className="flex items-center gap-3 text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                                <Phone className="w-5 h-5 text-emerald-600" />
                                <span>089-437-6117</span>
                            </a>
                            <a href="https://line.me/ti/p/~0894376117" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-green-600 transition-colors font-medium">
                                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                <span>LINE: @0894376117</span>
                            </a>
                            <div className="flex items-start gap-3 text-slate-600">
                                <MapPin className="w-5 h-5 mt-1 text-red-500" />
                                <span>{t('footer.address')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-4">
                        <h4 className="font-display font-semibold text-heading-sm text-slate-800">{t('footer.servicesTitle')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 hover:text-emerald-600 transition-colors text-body-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-4">
                        <h4 className="font-display font-semibold text-heading-sm text-slate-800">{t('footer.support')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 hover:text-emerald-600 transition-colors text-body-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4">
                        <h4 className="font-display font-semibold text-heading-sm text-slate-800">{t('footer.legal')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 hover:text-emerald-600 transition-colors text-body-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-300">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <p className="text-slate-600 text-body-sm text-center md:text-left">
                            © {currentYear} Jarunee Car Rental. All rights reserved.
                        </p>

                        {/* Payment Methods */}
                        <div className="flex items-center gap-2 opacity-60">
                            <span className="text-xs text-slate-600 font-medium">{t('footer.accept')}:</span>
                            <div className="flex gap-2">
                                <div className="h-6 px-2 bg-white rounded flex items-center text-xs font-semibold text-dark-900">
                                    VISA
                                </div>
                                <div className="h-6 px-2 bg-white rounded flex items-center text-xs font-semibold text-dark-900">
                                    MC
                                </div>
                                <div className="h-6 px-2 bg-white rounded flex items-center text-xs font-semibold text-primary-500">
                                    PromptPay
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
