'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Sparkles, Receipt } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TrustBadges() {
    const { language } = useLanguage();

    const dict = {
        th: [
            { id: 1, title: 'จดทะเบียนถูกต้อง', desc: 'มีใบอนุญาต 100%', icon: ShieldCheck },
            { id: 2, title: 'ประกันภัยชั้น 1', desc: 'คุ้มครองทุกคัน', icon: CheckCircle2 },
            { id: 3, title: 'โปร่งใส ชัดเจน', desc: 'ไม่มีค่าใช้จ่ายแฝง', icon: Receipt },
            { id: 4, title: 'ผ่านการฆ่าเชื้อ', desc: 'สะอาด ปลอดภัย', icon: Sparkles },
        ],
        en: [
            { id: 1, title: 'Registered Business', desc: '100% Licensed', icon: ShieldCheck },
            { id: 2, title: 'First-Class Insurance', desc: 'Fully Covered', icon: CheckCircle2 },
            { id: 3, title: 'Transparent Pricing', desc: 'No Hidden Fees', icon: Receipt },
            { id: 4, title: 'Sanitized Vehicles', desc: 'Clean & Safe', icon: Sparkles },
        ],
        cn: [
            { id: 1, title: '正规注册企业', desc: '100% 授权', icon: ShieldCheck },
            { id: 2, title: '一流保险', desc: '全面保障', icon: CheckCircle2 },
            { id: 3, title: '价格透明', desc: '绝无隐形消费', icon: Receipt },
            { id: 4, title: '消毒车辆', desc: '清洁安全', icon: Sparkles },
        ]
    };

    const badges = dict[language] || dict.th;

    return (
        <section className="py-6 md:py-8 border-b border-neutral-100">
            <div className="container-custom">
                <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-4 md:gap-8 max-w-6xl mx-auto">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <motion.div
                                key={badge.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex items-center gap-3 w-[45%] md:w-auto"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 border border-primary-100">
                                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-dark-900 font-bold text-xs md:text-sm whitespace-nowrap tracking-wide">{badge.title}</h4>
                                    <p className="text-neutral-500 font-medium text-[10px] md:text-xs whitespace-nowrap">{badge.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
