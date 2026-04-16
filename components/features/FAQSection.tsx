'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FAQSection() {
    const { language } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const dict = {
        th: {
            title: 'คำถามที่พบบ่อย (FAQ)',
            subtitle: 'เตรียมความพร้อมก่อนจองรถเช่ากับเรา',
            faqs: [
                {
                    q: 'การเช่ารถต้องใช้เอกสารอะไรบ้าง?',
                    a: 'ใช้เพียง 2 อย่างครับ: 1. บัตรประชาชน (หรือพาสปอร์ตสำหรับชาวต่างชาติ) ตัวจริง 2. ใบอนุญาตขับขี่รถยนต์ที่ยังไม่หมดอายุ'
                },
                {
                    q: 'มีค่ามัดจำไหม และได้คืนตอนไหน?',
                    a: 'มีค่ามัดจำรถ 3,000 - 5,000 บาท (ขึ้นอยู่กับรุ่นรถ) โดยทางเราจะโอนคืนให้เต็มจำนวน **ทันที** ที่ตรวจรับรถคืนเสร็จสิ้นผ่านการสแกน QR Code ไม่ต้องรอข้ามวันครับ'
                },
                {
                    q: 'มีบริการรับ-ส่งรถฟรีถึงที่ไหม?',
                    a: 'บริการส่งฟรี! ภายในสนามบินเชียงใหม่ อาเขต และตัวเมืองเชียงใหม่ (รัศมี 5 กม.) นอกพื้นที่ดอนเมือง หรือต่างอำเภอจะมีค่าบริการจัดส่งตามระยะทางจริงครับ'
                },
                {
                    q: 'รถเช่ามีประกันภัยครอบคลุมไหม หากเกิดอุบัติเหตุต้องทำอย่างไร?',
                    a: 'รถของเรา **มีประกันภัยชั้น 1 ทุกคัน** แบบมีค่าเสียหายส่วนแรก (Deductible) หากเกิดอุบัติเหตุให้โทรแจ้งเราทันทีตลอด 24 ชม. ห้ามเคลื่อนย้ายรถจนกว่าประกันจะมาถึงครับ'
                }
            ]
        },
        en: {
            title: 'Frequently Asked Questions',
            subtitle: 'Everything you need to know before booking your ride.',
            faqs: [
                {
                    q: 'What documents are required to rent a car?',
                    a: 'You only need 2 documents: 1. Original Passport 2. Valid Driving License (International or Thai).'
                },
                {
                    q: 'How much is the deposit and when will I get it back?',
                    a: 'A security deposit of 3,000 - 5,000 THB (depending on the car model) is required. The deposit is refunded **immediately** via cash or bank transfer upon the return and inspection of the vehicle.'
                },
                {
                    q: 'Do you offer free delivery and pickup?',
                    a: 'Yes, we offer **free delivery** within Chiang Mai Airport, Bus Terminals, and the central city area. For remote locations, a small reasonable distance-based fee applies.'
                },
                {
                    q: 'Are the cars insured? What if there is an accident?',
                    a: 'All our vehicles come with **First-class comprehensive insurance**. In case of an accident, please call our 24/7 hotline immediately. Do not move the vehicle until the insurance agent arrives.'
                }
            ]
        },
        cn: {
            title: '常见问题解答 (FAQ)',
            subtitle: '在预订租车前您需要了解的信息。',
            faqs: [
                {
                    q: '租车需要什么文件？',
                    a: '您只需要提供两样文件：1. 护照原件 2. 有效的驾驶执照（国际驾照或泰国驾照）。'
                },
                {
                    q: '押金是多少？什么时候退还？',
                    a: '根据车型的不同，押金为 3,000 - 5,000 泰铢。在您还车并完成车辆检查后，押金将**立即**退还给您，无需等待。'
                },
                {
                    q: '你们提供免费送车和取车服务吗？',
                    a: '是的！我们在清迈机场、汽车站和市中心区域提供**免费送车上门**服务。对于较远的地区，将根据距离收取少量合理费用。'
                },
                {
                    q: '车辆有保险吗？发生事故怎么办？',
                    a: '我们所有的车辆都配备了**一流的全险**。如果发生事故，请立即拨打我们的 24 小时热线。在保险理赔员到达之前，请不要移动车辆。'
                }
            ]
        }
    };

    const content = dict[language] || dict.th;

    return (
        <section className="py-20 bg-thai-subtle" id="faq">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4"
                    >
                        <HelpCircle className="w-6 h-6" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4"
                    >
                        {content.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-600 md:text-lg"
                    >
                        {content.subtitle}
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {content.faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex items-center justify-between w-full p-5 md:p-6 text-left focus:outline-none"
                            >
                                <h3 className="font-bold text-dark-900 text-base md:text-lg pr-8">{faq.q}</h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-primary-500 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-5 md:px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-neutral-100 mt-2 pt-4">
                                            {faq.a.split('**').map((part, i) => (
                                                i % 2 === 1 ? <strong key={i} className="text-primary-700">{part}</strong> : part
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* JSON-LD Structured Data included for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": content.faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a.replace(/\*\*/g, '')
                            }
                        }))
                    })
                }}
            />
        </section>
    );
}
