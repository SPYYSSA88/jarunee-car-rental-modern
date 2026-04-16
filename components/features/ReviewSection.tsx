'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';
import { allReviews } from '@/lib/constants/reviews';
import { useLanguage } from '@/contexts/LanguageContext';

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

    // Split the 100+ reviews into 2 rows for the marquee
    const row1 = allReviews.slice(0, 50);
    const row2 = allReviews.slice(50, 105);

    // Function to render a single review card
    const ReviewCard = ({ review }: { review: typeof allReviews[0] }) => (
        <div className="flex-shrink-0 w-[300px] md:w-[350px] bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow mx-3">
            <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
            </div>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                "{review.content}"
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

    // Memoize the repeated arrays to avoid re-renders
    const Row1Content = React.useMemo(() => [...row1, ...row1], [row1]);
    const Row2Content = React.useMemo(() => [...row2, ...row2], [row2]);

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden relative" id="reviews">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-container {
                    display: flex;
                    width: max-content;
                }
                .animate-marquee {
                    animation: marquee 80s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee 95s linear infinite reverse;
                }
                .marquee-container:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="container-custom mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 font-bold mb-6"
                    >
                        <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                        <span className="text-lg">4.9/5</span>
                        <span className="text-sm font-medium text-amber-700/80 hidden sm:inline">{t.from}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-display-md md:text-display-lg font-bold text-dark-900 mb-4 flex items-center justify-center gap-3"
                    >
                        <MessageSquareQuote className="w-8 h-8 md:w-10 md:h-10 text-primary-500" />
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
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
                    <div className="marquee-container animate-marquee">
                        {Row1Content.map((review, idx) => (
                            <ReviewCard key={`r1-${idx}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* Row 2 (Right Scrolling - Reverse) */}
                <div className="overflow-hidden hidden md:block">
                    <div className="marquee-container animate-marquee-reverse">
                        {Row2Content.map((review, idx) => (
                            <ReviewCard key={`r2-${idx}`} review={review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
