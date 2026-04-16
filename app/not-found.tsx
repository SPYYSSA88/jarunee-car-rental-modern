'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Phone, Car, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center px-4 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 text-center max-w-2xl">
                {/* Fun Car Animation */}
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="relative inline-block">
                        {/* Road */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-2 bg-neutral-700 rounded-full" />
                        <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[250px] h-1 flex justify-around">
                            <span className="w-8 h-1 bg-amber-400" />
                            <span className="w-8 h-1 bg-amber-400" />
                            <span className="w-8 h-1 bg-amber-400" />
                            <span className="w-8 h-1 bg-amber-400" />
                        </div>
                        {/* Car Icon with Animation */}
                        <motion.div
                            animate={{
                                y: [-2, 2, -2],
                            }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="text-primary-400"
                        >
                            <Car className="w-24 h-24 mx-auto mb-4" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* 404 Number */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-6"
                >
                    <h1 className="text-[120px] md:text-[180px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-amber-400 to-primary-400">
                        404
                    </h1>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {t('notFound.title')}
                    </h2>
                    <p className="text-neutral-400 mb-2 text-lg">
                        {t('notFound.description')}
                    </p>
                    <p className="text-neutral-500 mb-8 flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {t('notFound.message')}
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-amber-500 hover:from-primary-600 hover:to-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        {t('notFound.homeButton')}
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {t('notFound.backButton')}
                    </button>
                </motion.div>

                {/* Fun Suggestions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="mt-12 pt-8 border-t border-white/10"
                >
                    <p className="text-neutral-500 mb-6">{t('notFound.suggestions')}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            href="/cars"
                            className="text-primary-400 hover:text-primary-300 font-medium px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                        >
                            {t('notFound.viewCars')}
                        </Link>
                        <Link
                            href="/faq"
                            className="text-primary-400 hover:text-primary-300 font-medium px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                        >
                            {t('notFound.faq')}
                        </Link>
                        <Link
                            href="/#contact"
                            className="text-primary-400 hover:text-primary-300 font-medium px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                        >
                            {t('notFound.contact')}
                        </Link>
                    </div>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="mt-8"
                >
                    <a
                        href="tel:+66894376117"
                        className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        {t('notFound.help')} 089-437-6117
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

