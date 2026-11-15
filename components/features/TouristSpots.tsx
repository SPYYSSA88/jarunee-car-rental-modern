'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const touristSpots = [
    {
        id: 1,
        name: 'วัดพระธาตุดอยสุเทพ',
        nameEn: 'Wat Phra That Doi Suthep',
        image: '/images/destinations/doi-suthep.png',
        description: 'วัดที่สำคัญที่สุดของเชียงใหม่',
        mapUrl: 'https://maps.app.goo.gl/ZDsabMN6JGnJvgs4A',
    },
    {
        id: 2,
        name: 'ดอยอินทนนท์',
        nameEn: 'Doi Inthanon',
        image: '/images/destinations/doi-inthanon.png',
        description: 'ยอดดอยที่สูงที่สุดในประเทศไทย',
        mapUrl: 'https://maps.app.goo.gl/zpkuwy7z9Sza2s2M9',
    },
    {
        id: 3,
        name: 'ถนนคนเดินท่าแพ',
        nameEn: 'Tha Phae Walking Street',
        image: '/images/destinations/tha-phae.png',
        description: 'ตลาดกลางคืนใจกลางเมือง',
        mapUrl: 'https://maps.app.goo.gl/hYm1jJJFuyD4uu1R7',
    },
    {
        id: 4,
        name: 'น้ำตกแม่ยะ',
        nameEn: 'Mae Ya Waterfall',
        image: '/images/destinations/mae-ya.png',
        description: 'น้ำตกที่สวยที่สุดในเชียงใหม่',
        mapUrl: 'https://maps.app.goo.gl/RZMwtpV9sZ6Zomz88',
    },
    {
        id: 5,
        name: 'สวนดอกไม้ Royal Park Rajapruek',
        nameEn: 'Royal Park Rajapruek',
        image: '/images/destinations/rajapruek.png',
        description: 'สวนดอกไม้และพรรณไม้หลากหลาย',
        mapUrl: 'https://maps.app.goo.gl/xqLrMifTKo4Hivuq5',
    },
    {
        id: 6,
        name: 'ม่อนแจ่ม',
        nameEn: 'Mon Jam',
        image: '/images/destinations/mon-jam.png',
        description: 'จุดชมวิวทะเลหมอกยอดนิยม',
        mapUrl: 'https://maps.app.goo.gl/HkaWVr6nHajJkCtE6',
    },
];

export default function TouristSpots() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-thai-subtle" id="attractions">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-semibold text-sm mb-4"
                    >
                        {t('tourist.badge')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display text-display-md md:text-display-lg text-dark-900 mb-4"
                    >
                        {t('tourist.title')} <span className="gradient-text">{t('tourist.titleHighlight')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.95, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="text-body-lg text-neutral-600 max-w-2xl mx-auto"
                    >
                        {t('tourist.description')}
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {touristSpots.map((spot, index) => (
                        <motion.a
                            key={spot.id}
                            href={spot.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 26 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: 0.95, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-soft hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-700 ease-out cursor-pointer block"
                        >
                            {/* Image */}
                            <div className="aspect-[4/5] object-cover md:aspect-[4/3] overflow-hidden relative">
                                <Image
                                    src={spot.image}
                                    alt={spot.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                                />
                            </div>

                            {/* Overlay - much darker for clear text visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                                <div className="flex items-start gap-1 md:gap-2 mb-1 md:mb-2">
                                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                                    <div className="mr-2">
                                        <h3 className="font-display text-sm md:text-xl font-bold text-white mb-0 md:mb-1 line-clamp-1" style={{ textShadow: '2px 2px 6px rgba(0,0,0,1)' }}>
                                            {spot.name}
                                        </h3>
                                        <p className="text-[10px] md:text-sm text-white font-medium line-clamp-1" style={{ textShadow: '1px 1px 4px rgba(0,0,0,1)' }}>
                                            {spot.nameEn}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[10px] md:text-body-sm text-white/90 font-medium pl-5 md:pl-7 line-clamp-1" style={{ textShadow: '1px 1px 4px rgba(0,0,0,1)' }}>
                                    {spot.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
