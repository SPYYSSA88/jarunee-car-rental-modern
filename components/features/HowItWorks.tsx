'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Car, CreditCard, FileText, CheckCircle, KeyRound } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HowItWorks() {
    const { t } = useLanguage();

    const steps = [
        {
            icon: MessageCircle,
            number: '01',
            title: t('howSteps.step1.title'),
            description: t('howSteps.step1.desc'),
            color: 'bg-green-500',
        },
        {
            icon: Car,
            number: '02',
            title: t('howSteps.step2.title'),
            description: t('howSteps.step2.desc'),
            color: 'bg-blue-500',
        },
        {
            icon: CreditCard,
            number: '03',
            title: t('howSteps.step3.title'),
            description: t('howSteps.step3.desc'),
            color: 'bg-amber-500',
        },
        {
            icon: FileText,
            number: '04',
            title: t('howSteps.step4.title'),
            description: t('howSteps.step4.desc'),
            color: 'bg-purple-500',
        },
        {
            icon: CheckCircle,
            number: '05',
            title: t('howSteps.step5.title'),
            description: t('howSteps.step5.desc'),
            color: 'bg-emerald-500',
        },
        {
            icon: KeyRound,
            number: '06',
            title: t('howSteps.step6.title'),
            description: t('howSteps.step6.desc'),
            color: 'bg-red-500',
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-thai-subtle" id="how-it-works">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                        <span>📋</span>
                        <span>{t('howSteps.badge')}</span>
                    </div>
                    <h2 className="font-display text-display-md md:text-display-lg font-bold text-dark-900 mb-4">
                        {t('howSteps.title')} <span className="gradient-text">{t('howSteps.titleHighlight')}</span>
                    </h2>
                    <p className="text-neutral-600 text-lg">
                        {t('howSteps.description')}
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-md md:shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Header with number and icon */}
                            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                                <div className={`w-8 h-8 md:w-12 md:h-12 ${step.color} rounded-lg md:rounded-xl flex items-center justify-center shadow-sm md:shadow-lg shrink-0`}>
                                    <step.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                                </div>
                                <span className="text-2xl md:text-4xl font-bold text-slate-200">
                                    {step.number}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="font-display font-bold text-sm md:text-xl text-slate-800 mb-1 md:mb-2 line-clamp-1 md:line-clamp-none">
                                {step.title}
                            </h3>
                            <p className="text-xs md:text-base text-slate-600 leading-snug md:leading-relaxed line-clamp-3 md:line-clamp-none">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://line.me/ti/p/~0894376117"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                            </svg>
                            {t('howSteps.bookLine')}
                        </a>
                        <a
                            href="tel:089-437-6117"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            {t('howSteps.callNow')}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

