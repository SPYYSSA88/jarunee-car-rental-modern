'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HandoverGallery() {
    const { language } = useLanguage();

    const dict = {
        th: {
            title: 'ความประทับใจจากลูกค้าจริง',
            subtitle: 'ขอบคุณที่ไว้ใจให้ Jarunee บริการคุณในทุกทริปสำคัญ',
        },
        en: {
            title: 'Real Customer Stories',
            subtitle: 'Thank you for trusting Jarunee on your important journeys.',
        },
        cn: {
            title: '真实客户反馈',
            subtitle: '感谢您在重要旅程中信任 Jarunee 服务。',
        }
    };

    const t = dict[language] || dict.th;

    const images = [
        { src: '/images/handover_1.png', alt: 'Handover Fortuner', cls: 'col-span-2 row-span-2' },
        { src: '/images/handover_2.png', alt: 'Family Airport Transfer Alphard', cls: 'col-span-1 row-span-1' },
        { src: '/images/handover_3.png', alt: 'Airport Chauffeur Greeting', cls: 'col-span-1 row-span-1' }
    ];

    return (
        <section className="py-20 bg-neutral-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #1E3A5F 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-primary-600 font-bold mb-4"
                    >
                        <Heart className="w-5 h-5 fill-primary-500" />
                        <span className="uppercase tracking-wider text-sm">Experience</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-3xl md:text-5xl font-bold text-dark-900 mb-4 flex items-center justify-center gap-3"
                    >
                        <Camera className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-600 md:text-lg"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                {/* Masonry / Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group aspect-[4/3] md:aspect-auto ${i === 0 ? 'col-span-2 row-span-2 md:aspect-square' : ''}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Dark vignette gradient for premium feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
