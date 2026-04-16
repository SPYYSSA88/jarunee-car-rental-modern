'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ReviewsPage() {
    const { language, t } = useLanguage();

    const testimonials = [
        {
            id: 1,
            name: 'คุณสมชาย',
            nameEn: 'Somchai',
            role: 'reviews.role.businessman',
            avatar: '👨‍💼',
            rating: 5,
            text: 'บริการดีมากครับ คนขับสุภาพ รถสะอาด ตรงเวลา ใช้บริการมาหลายครั้งแล้ว ประทับใจทุกครั้ง',
            textEn: 'Excellent service! The driver was polite, car was clean and on time. Used the service many times.',
        },
        {
            id: 2,
            name: 'คุณมาลี',
            nameEn: 'Malee',
            role: 'reviews.role.tourist',
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
            role: 'reviews.role.housewife',
            avatar: '👩‍👦',
            rating: 5,
            text: 'พาครอบครัวไปเที่ยว สะดวกมาก ไม่ต้องขับเอง ราคาคุ้มค่า บริการ 24 ชั่วโมงจริงๆ',
            textEn: 'Perfect for family trips! Convenient, no need to drive ourselves.',
        },
        {
            id: 5,
            name: 'คุณพิชัย',
            nameEn: 'Pichai',
            role: 'reviews.role.government',
            avatar: '👨‍💼',
            rating: 5,
            text: 'รถใหม่ สะอาด คนขับมืออาชีพมาก รับส่งสนามบินตรงเวลาทุกครั้ง แนะนำเลยครับ',
            textEn: 'New car, clean, professional driver. Airport transfers always on time. Highly recommend!',
        },
        {
            id: 6,
            name: 'Ms. Lisa',
            nameEn: 'Lisa',
            role: 'Tourist from UK',
            avatar: '👩',
            rating: 5,
            text: 'Amazing experience! The driver was very friendly and took us to beautiful places around Chiang Mai.',
            textEn: 'Amazing experience! The driver was very friendly and took us to beautiful places.',
        },
        {
            id: 7,
            name: 'คุณนภา',
            nameEn: 'Napa',
            role: 'reviews.role.employee',
            avatar: '👩‍💻',
            rating: 5,
            text: 'ใช้บริการเดินทางไปทำงานต่างจังหวัด สะดวก ปลอดภัย ราคาไม่แพง จองง่ายผ่าน LINE',
            textEn: 'Used for business trips. Convenient, safe, affordable. Easy booking via LINE.',
        },
        {
            id: 8,
            name: '王さん',
            nameEn: 'Mr. Wang',
            role: 'Tourist from China',
            avatar: '👨',
            rating: 5,
            text: 'เชียงใหม่เยี่ยมมาก! บริการรถเช่าดีเยี่ยม คนขับพูดภาษาอังกฤษได้ ขอบคุณมากครับ',
            textEn: 'Chiang Mai is wonderful! Excellent car service, driver speaks English. Thank you!',
        },
    ];

    const getRoleText = (role: string) => {
        // If it's a translation key, translate it. Otherwise return as is.
        if (role.startsWith('reviews.role.')) {
            return t(role);
        }
        return role;
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-thai-subtle">
                {/* Header */}
                <section className="py-16 bg-thai-pattern-gradient">
                    <div className="container-custom">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            {t('reviews.backHome')}
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-600 font-semibold text-sm mb-4">
                                {t('reviews.badge')}
                            </span>
                            <h1 className="font-display text-display-md md:text-display-lg text-dark-900 mb-4">
                                {t('reviews.title')} <span className="gradient-text">Jarunee</span>
                            </h1>
                            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
                                {t('reviews.description')}
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 flex justify-center"
                        >
                            <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-4 shadow-soft">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary-600">4.9</p>
                                    <p className="text-sm text-neutral-500">{t('reviews.avgRating')}</p>
                                </div>
                                <div className="w-px h-12 bg-neutral-200" />
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary-600">500+</p>
                                    <p className="text-sm text-neutral-500">{t('reviews.totalReviews')}</p>
                                </div>
                                <div className="w-px h-12 bg-neutral-200" />
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-primary-600">97%</p>
                                    <p className="text-sm text-neutral-500">{t('reviews.recommend')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Reviews Grid */}
                <section className="py-16">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
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
                                            <p className="text-sm text-neutral-500">{getRoleText(testimonial.role)}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-white">
                    <div className="container-custom text-center">
                        <h2 className="font-display text-display-sm text-dark-900 mb-4">
                            {t('reviews.ctaTitle')}
                        </h2>
                        <p className="text-neutral-600 mb-8">
                            {t('reviews.ctaDescription')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://line.me/ti/p/~0894376117"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 bg-[#00B900] hover:bg-[#00A000] text-white font-semibold px-8 py-4 rounded-xl transition-all"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                {t('reviews.bookLine')}
                            </Link>
                            <Link
                                href="tel:+66894376117"
                                className="inline-flex items-center justify-center gap-2 border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-xl transition-all"
                            >
                                📞 {t('reviews.callNow')} 089-437-6117
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
