'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
    {
        id: 1,
        name: 'คุณสมชาย',
        nameEn: 'Somchai',
        role: 'นักธุรกิจ',
        avatar: '👨‍💼',
        rating: 5,
        text: 'บริการดีมากครับ คนขับสุภาพ รถสะอาด ตรงเวลา ใช้บริการมาหลายครั้งแล้ว ประทับใจทุกครั้ง',
        textEn: 'Excellent service! The driver was polite, car was clean and on time. Used the service many times.',
    },
    {
        id: 2,
        name: 'คุณมาลี',
        nameEn: 'Malee',
        role: 'นักท่องเที่ยว',
        avatar: '👩',
        rating: 5,
        text: 'ราคาถูกมาก ไปเที่ยวเชียงใหม่ได้สะดวกสบาย คนขับรู้เส้นทางดี พาไปที่เที่ยวหลายที่',
        textEn: 'Great value! Easy travel in Chiang Mai with a driver who knows all the best spots.',
    },
    {
        id: 3,
        name: 'Mr. John',
        nameEn: 'John',
        role: 'Tourist from USA',
        avatar: '👨',
        rating: 5,
        text: 'Best car rental service in Chiang Mai! Very professional and affordable. Highly recommended!',
        textEn: 'Best car rental service in Chiang Mai! Very professional and affordable.',
    },
    {
        id: 4,
        name: 'คุณวิภา',
        nameEn: 'Wipa',
        role: 'แม่บ้าน',
        avatar: '👩‍👦',
        rating: 5,
        text: 'พาครอบครัวไปเที่ยว สะดวกมาก ไม่ต้องขับเอง ราคาคุ้มค่า บริการ 24 ชั่วโมงจริงๆ',
        textEn: 'Perfect for family trips! Convenient, no need to drive ourselves.',
    },
];

export default function TestimonialsSection() {
    const { language, t } = useLanguage();

    return (
        <section className="py-24 bg-thai-pattern-gradient" id="testimonials">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-semibold text-sm mb-4"
                    >
                        {t('testimonials.badge')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-display-md md:text-display-lg text-dark-900 mb-4"
                    >
                        {t('testimonials.title')} <span className="gradient-text">Jarunee</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-neutral-600 max-w-2xl mx-auto"
                    >
                        {t('testimonials.description')}
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-8 h-8 text-primary-200 mb-4" />

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                &ldquo;{language === 'en' ? testimonial.textEn : testimonial.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-dark-900">
                                        {language === 'en' ? testimonial.nameEn : testimonial.name}
                                    </p>
                                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-4 shadow-soft">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary-600">4.9</p>
                            <p className="text-sm text-neutral-500">{t('testimonials.avgRating')}</p>
                        </div>
                        <div className="w-px h-12 bg-neutral-200" />
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary-600">500+</p>
                            <p className="text-sm text-neutral-500">{t('testimonials.reviews')}</p>
                        </div>
                        <div className="w-px h-12 bg-neutral-200" />
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary-600">98%</p>
                            <p className="text-sm text-neutral-500">{t('testimonials.recommend')}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
