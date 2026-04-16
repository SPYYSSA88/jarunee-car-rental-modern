'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const { t } = useLanguage();

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-thai-subtle flex items-center justify-center px-4">
            <div className="text-center max-w-lg">
                {/* Error Icon */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="w-24 h-24 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                        <AlertTriangle className="w-12 h-12 text-red-500" />
                    </div>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">
                        {t('error.title')}
                    </h2>
                    <p className="text-neutral-600 mb-8">
                        {t('error.description')}
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl transition-all"
                    >
                        <RefreshCw className="w-5 h-5" />
                        {t('error.retry')}
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 border border-neutral-300 hover:bg-neutral-50 text-dark-900 font-semibold px-6 py-3 rounded-xl transition-all"
                    >
                        <Home className="w-5 h-5" />
                        {t('error.home')}
                    </Link>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-12 pt-8 border-t border-neutral-200"
                >
                    <p className="text-neutral-500 mb-4">{t('error.help')}</p>
                    <a
                        href="tel:+66894376117"
                        className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
                    >
                        <Phone className="w-5 h-5" />
                        089-437-6117
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

