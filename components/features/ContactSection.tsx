'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative overflow-hidden bg-thai-pattern" id="contact">
            {/* Thai pattern overlay for extra depth */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: `
                        radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 40%),
                        radial-gradient(circle at 80% 80%, rgba(74, 222, 128, 0.06) 0%, transparent 40%)
                    `,
                }}
            />

            {/* Green accent lines (Thai-inspired) */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-primary-700 font-bold text-sm mb-4">
                        {t('contact.badge')}
                    </span>
                    <h2 className="font-display text-display-md md:text-display-lg text-dark-900 mb-4">
                        {t('contact.title')} <span className="gradient-text">{t('contact.titleHighlight')}</span>
                    </h2>
                    <p className="text-body-lg text-neutral-700 max-w-2xl mx-auto">
                        {t('contact.description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {/* Phone Card */}
                        <motion.a
                            href="tel:0894376117"
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl hover:border-primary-200 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <p className="text-neutral-500 text-sm font-medium mb-1">{t('contact.phone')}</p>
                                <p className="text-dark-900 font-bold text-2xl tracking-wide group-hover:text-primary-600 transition-colors">
                                    089-437-6117
                                </p>
                            </div>
                        </motion.a>

                        {/* LINE Card */}
                        <motion.a
                            href="https://line.me/ti/p/~0894376117"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl hover:border-green-200 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                                <MessageCircle className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <p className="text-neutral-500 text-sm font-medium mb-1">LINE</p>
                                <p className="text-dark-900 font-bold text-2xl tracking-wide group-hover:text-green-600 transition-colors">
                                    089-437-6117
                                </p>
                            </div>
                        </motion.a>

                        {/* WhatsApp Card */}
                        <motion.a
                            href="https://api.whatsapp.com/send/?phone=%2B66894376117&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl hover:border-emerald-200 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-sm font-medium mb-1">{t('contact.whatsapp')}</p>
                                <p className="text-dark-900 font-bold text-2xl tracking-wide group-hover:text-emerald-600 transition-colors">
                                    +66 89-437-6117
                                </p>
                            </div>
                        </motion.a>

                        {/* Business Hours */}
                        <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg border border-neutral-100">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <p className="text-neutral-500 text-sm font-medium mb-1">{t('contact.businessHours')}</p>
                                <p className="text-dark-900 font-bold text-2xl tracking-wide">
                                    {t('contact.24hours')}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: LINE QR Code */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-neutral-100 text-center max-w-sm">
                            {/* Gold corner accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-400 rounded-tl-3xl" />
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary-400 rounded-tr-3xl" />

                            <h3 className="font-display font-bold text-2xl text-dark-900 mb-2">
                                {t('contact.addLine')}
                            </h3>
                            <p className="text-neutral-600 mb-6">
                                {t('contact.scanQR')}
                            </p>

                            {/* QR Code */}
                            <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-1 shadow-lg">
                                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center p-2 relative">
                                    <Image
                                        src="/images/line-qr.png"
                                        alt="LINE QR Code"
                                        fill
                                        sizes="192px"
                                        className="object-contain p-1"
                                    />
                                </div>
                            </div>

                            <p className="text-2xl font-bold text-dark-900 mb-4">
                                LINE: 089-437-6117
                            </p>

                            <a
                                href="https://line.me/ti/p/~0894376117"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({ variant: 'primary', size: 'lg', fullWidth: true, className: 'gap-2 bg-green-500 hover:bg-green-600' })}
                            >
                                <MessageCircle className="w-5 h-5" />
                                {t('contact.addLineNow')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

