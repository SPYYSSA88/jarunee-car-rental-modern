'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, HelpCircle, Phone } from 'lucide-react';

// FAQ data
const faqs = [
    {
        id: 1,
        question: 'บริการเช่ารถมีราคาเท่าไหร่?',
        answer: 'ราคาเริ่มต้นที่ 10 บาท/กิโลเมตร สำหรับรถเล็ก (Sedan) และ 15 บาท/กิโลเมตร สำหรับรถตู้/รถใหญ่ (Van/SUV) โดยรวมค่าน้ำมันและคนขับแล้ว ไม่มีค่าใช้จ่ายแอบแฝง',
    },
    {
        id: 2,
        question: 'สามารถจองรถล่วงหน้าได้กี่วัน?',
        answer: 'สามารถจองล่วงหน้าได้ตั้งแต่ 1 วัน ถึง 1 เดือน หรือติดต่อสอบถามสำหรับการจองระยะยาว เราพร้อมให้บริการ 24 ชั่วโมง',
    },
    {
        id: 3,
        question: 'มีบริการรับ-ส่งสนามบินไหม?',
        answer: 'ใช่ครับ! เรามีบริการรับ-ส่งสนามบินเชียงใหม่ (CNX) ตลอด 24 ชั่วโมง ทั้งขาเข้าและขาออก',
    },
    {
        id: 4,
        question: 'รถมีประกันไหม?',
        answer: 'รถทุกคันมีประกันภัยชั้น 1 ครอบคลุมทั้งผู้โดยสารและบุคคลภายนอก',
    },
    {
        id: 5,
        question: 'สามารถเช่ารถไปต่างจังหวัดได้ไหม?',
        answer: 'ได้ครับ! สามารถเช่ารถไปต่างจังหวัดได้ทั่วประเทศ กรุณาแจ้งปลายทางเพื่อคำนวณราคา',
    },
    {
        id: 6,
        question: 'ชำระเงินได้ช่องทางไหนบ้าง?',
        answer: 'รับชำระเงินหลากหลายช่องทาง: เงินสด, โอนผ่านธนาคาร, พร้อมเพย์, บัตรเครดิต/เดบิต และ LINE Pay',
    },
    {
        id: 7,
        question: 'รถมีรุ่นอะไรให้เลือกบ้าง?',
        answer: 'มีรถหลากหลายรุ่น: Toyota Camry, Honda City, Toyota Fortuner, Toyota Alphard, Toyota Commuter และอื่นๆ',
    },
    {
        id: 8,
        question: 'ต้องวางเงินมัดจำไหม?',
        answer: 'ไม่จำเป็นต้องวางมัดจำล่วงหน้า! ชำระเงินหลังจบการเดินทางได้เลย',
    },
];

interface FAQModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FAQModal({ isOpen, onClose }: FAQModalProps) {
    const [openId, setOpenId] = useState<number | null>(1);

    const handleClick = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:max-h-[85vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-gradient-to-r from-primary-50 to-green-50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center">
                                    <HelpCircle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="font-display text-2xl font-bold text-dark-900">คำถามที่พบบ่อย</h2>
                                    <p className="text-sm text-neutral-500">FAQs</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                title="ปิด"
                                aria-label="ปิด"
                                className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5 text-neutral-600" />
                            </button>
                        </div>

                        {/* FAQ Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="space-y-3">
                                {faqs.map((faq) => (
                                    <div
                                        key={faq.id}
                                        className="bg-neutral-50 rounded-xl overflow-hidden"
                                    >
                                        <button
                                            onClick={() => handleClick(faq.id)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-100 transition-colors"
                                        >
                                            <span className="font-semibold text-dark-900 pr-4">{faq.question}</span>
                                            <motion.div
                                                animate={{ rotate: openId === faq.id ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="shrink-0"
                                            >
                                                <ChevronDown className="w-5 h-5 text-primary-500" />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {openId === faq.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-4 pb-4 text-neutral-600 leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-neutral-100 bg-neutral-50">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-neutral-600 text-sm">ยังมีคำถาม? ติดต่อเราได้ตลอด 24 ชม.</p>
                                <a
                                    href="tel:+66894376117"
                                    className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all"
                                >
                                    <Phone className="w-4 h-4" />
                                    โทร 089-437-6117
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
