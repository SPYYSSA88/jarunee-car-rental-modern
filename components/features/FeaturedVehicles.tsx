'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { featuredVehicles } from '@/lib/constants/vehicles';
import VehicleCard from './VehicleCard';
import { buttonVariants } from '@/components/ui/Button';

// ==================================================
// FeaturedVehicles Component
// คำอธิบาย: แสดงรถยอดนิยม พร้อมรองรับหลายภาษา
// ==================================================

export default function FeaturedVehicles() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-thai-subtle relative" id="fleet">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-semibold text-sm mb-4"
                        >
                            {t('featured.badge')}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-display text-display-md md:text-display-lg text-dark-900 mb-4"
                        >
                            {t('featured.title')} <span className="gradient-text">{t('featured.titleHighlight')}</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-body-lg text-neutral-600 max-w-2xl"
                        >
                            {t('featured.description')}
                        </motion.p>
                    </div>
                    <Link href="/cars" className={buttonVariants({ variant: 'outline', size: 'lg', className: 'hidden md:inline-flex gap-2' })}>
                        {t('featured.viewAll')}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Vehicle Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {featuredVehicles.map((vehicle, index) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-12 text-center md:hidden">
                    <Link href="/cars" className={buttonVariants({ variant: 'outline', size: 'lg', fullWidth: true, className: 'gap-2' })}>
                        {t('featured.viewAll')}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
