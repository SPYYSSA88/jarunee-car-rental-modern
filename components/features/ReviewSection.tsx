'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';
import { allReviews } from '@/lib/constants/reviews';
import { useLanguage } from '@/contexts/LanguageContext';

const row1 = allReviews.slice(0, 50);
const row2 = allReviews.slice(50, 105);
const row1Content = [...row1, ...row1];
const row2Content = [...row2, ...row2];

function ReviewCard({ review }: { review: typeof allReviews[0] }) {
    return (
        <div className="flex-shrink-0 w-[300px] md:w-[350px] bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow mx-3">
            <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
            </div>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                &ldquo;{review.content}&rdquo;
            </p>
            <div className="flex items-center justify-between mt-auto">
                <div>
                    <h4 className="font-display font-bold text-dark-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-500">{review.type}</p>
                </div>
                <div className="text-xs text-slate-400">
                    {review.date}
                </div>
            </div>
        </div>
    );
}

export default function ReviewSection() {
    const { language } = useLanguage();
    
    // Translations for the section header
    const dict = {
        th: {
            from: 'จาก 100+ รีวิวทั้งหมด',
            title: 'เสียงสะท้อนจากลูกค้า',
            desc: 'ความประทับใจจากลูกค้าตัวจริง ทั้งชาวไทย ชาวจีน และต่างชาติที่เลือกใช้บริการรถเช่าพร้อมคนขับจากเรา'
        },
        en: {
            from: 'from 100+ total reviews',
            title: 'Customer Reviews',
            desc: 'Real impressions from Thai, Chinese, and international customers who chose our chauffeur-driven car rental services.'
        },
        cn: {
            from: '来自 100+ 条评价',
            title: '客户心声',
            desc: '来自泰国、中国和国际客户选择我们租车加司机服务的真实体验。'
        }
    };
    
    const t = dict[language] || dict.th;

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden relative" id="reviews">
            <style>{`
                @keyframes review-marquee {
                    0% { transform: translate3d(0%, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
                .review-marquee-track {
                    display: flex;
                    width: max-content;
                    will-change: transform;
                }
                .animate-review-marquee {
                    animation: review-marquee 115s linear infinite;
                }
                .animate-review-marquee-reverse {
                    animation: review-marquee 135s linear infinite reverse;
                }
                .review-marquee-track:hover,
                .review-marquee-track:active {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .animate-review-marquee,
                    .animate-review-marquee-reverse {
                        animation: none;
                    }
                }
            `}</style>

            <div className="container-custom mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 14 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 font-bold mb-6"
                    >
                        <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                        <span className="text-lg">4.9/5</span>
                        <span className="text-sm font-medium text-amber-700/80 hidden sm:inline">{t.from}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display text-display-md md:text-display-lg font-bold text-dark-900 mb-4 flex items-center justify-center gap-3"
                    >
                        <MessageSquareQuote className="w-8 h-8 md:w-10 md:h-10 text-primary-500" />
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.95, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="text-neutral-600 text-lg"
                    >
                        {t.desc}
                    </motion.p>
                </div>
            </div>

            {/* Marquee Ticker */}
            <div className="relative flex flex-col gap-6">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Row 1 (Left Scrolling) */}
                <div className="overflow-hidden">
                    <div className="review-marquee-track animate-review-marquee">
                        {row1Content.map((review, idx) => (
                            <ReviewCard key={`r1-${idx}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* Row 2 (Right Scrolling - Reverse) */}
                <div className="overflow-hidden hidden md:block">
                    <div className="review-marquee-track animate-review-marquee-reverse">
                        {row2Content.map((review, idx) => (
                            <ReviewCard key={`r2-${idx}`} review={review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
