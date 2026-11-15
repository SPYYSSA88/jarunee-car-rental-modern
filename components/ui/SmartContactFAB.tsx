'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SmartContactFAB() {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();

    // Toggle main FAB
    const toggleFAB = () => setIsOpen(!isOpen);

    // Translations for tooltips
    const dict = {
        th: {
            help: 'ต้องการความช่วยเหลือ?',
            line: 'ทักแชท LINE',
            whatsapp: 'Contact on WhatsApp',
            wechat: 'WeChat (微信)',
            phone: 'โทรด่วน 24 ชม.'
        },
        en: {
            help: 'Need help?',
            line: 'Chat on LINE',
            whatsapp: 'Contact on WhatsApp',
            wechat: 'WeChat (微信)',
            phone: 'Call Us 24/7'
        },
        cn: {
            help: '需要帮助？',
            line: '通过 LINE 聊天',
            whatsapp: 'WhatsApp 联系我们',
            wechat: '微信聊天',
            phone: '24小时热线'
        }
    };

    const t = dict[language] || dict.th;

    // Contact Options
    const options = [
        {
            id: 'line',
            label: t.line,
            href: 'https://line.me/ti/p/~0894376117',
            icon: <MessageCircle className="w-5 h-5 text-white" />,
            bgColor: 'bg-[#00B900]',
            hoverColor: 'hover:bg-[#00A000]'
        },
        {
            id: 'whatsapp',
            label: t.whatsapp,
            href: 'https://wa.me/66894376117',
            // Simple generic SVG icon for WhatsApp
            icon: (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            bgColor: 'bg-[#25D366]',
            hoverColor: 'hover:bg-[#1DA851]'
        },
        {
            id: 'wechat',
            label: t.wechat,
            href: '#', // The user hasn't provided WeChat yet, but placeholder is fine
            icon: (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.2 4C3.6 4 0 7.2 0 11.2c0 2.2 1.1 4.2 3 5.5l-.8 2.6 3-1.6c1 .3 2 .4 3 .4.2 0 .3 0 .5-.1-.4-.6-.6-1.3-.6-2 0-3.9 3.5-7.1 7.8-7.1h.7C15.6 5.6 12.1 4 8.2 4zm1 3.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm11 2.5c-3.6 0-6.5 2.5-6.5 5.5s2.9 5.5 6.5 5.5c1 0 1.9-.2 2.7-.6l2.3 1.2-.6-2.1c1.5-1 2.4-2.5 2.4-4 0-3-2.9-5.5-6.5-5.5zm-2 2.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                </svg>
            ),
            bgColor: 'bg-[#07C160]',
            hoverColor: 'hover:bg-[#06AD56]'
        },
        {
            id: 'phone',
            label: t.phone,
            href: 'tel:+66894376117',
            icon: <Phone className="w-5 h-5 text-white" />,
            bgColor: 'bg-red-500',
            hoverColor: 'hover:bg-red-600'
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 14 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-end gap-3 mb-4"
                    >
                        {options.map((opt, index) => {
                            const isPlaceholder = opt.href === '#';
                            return (
                                <motion.a
                                    key={opt.id}
                                    href={opt.href}
                                    target={!isPlaceholder && opt.id !== 'phone' ? '_blank' : undefined}
                                    rel={!isPlaceholder && opt.id !== 'phone' ? 'noopener noreferrer' : undefined}
                                    onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
                                    initial={{ opacity: 0, y: 12, scale: 0.94 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                    transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center gap-3 group"
                                >
                                    <span className="bg-white/95 backdrop-blur shadow-md px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-700 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-400 whitespace-nowrap">
                                        {opt.label}
                                    </span>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 ease-out hover:scale-105 active:scale-95 ${opt.bgColor} ${opt.hoverColor}`}>
                                        {opt.icon}
                                    </div>
                                </motion.a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <div className="relative">
                {/* Tooltip hint when closed - gentle continuous float */}
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: [0, -5, 0] }}
                        transition={{
                            opacity: { duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] },
                            x: { duration: 4.5, delay: 1.2, ease: 'easeInOut', repeat: Infinity },
                        }}
                        className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur shadow-md px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-700 whitespace-nowrap hidden sm:block pointer-events-none"
                    >
                        {t.help}
                        {/* Triangle tip */}
                        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white/95 rotate-45" />
                    </motion.div>
                )}

                <motion.button
                    onClick={toggleFAB}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-14 h-14 bg-gradient-to-tr from-primary-600 to-primary-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(30,58,95,0.4)] text-white hover:shadow-[0_8px_25px_rgba(30,58,95,0.5)] transition-shadow duration-500 relative z-10"
                >
                    <AnimatePresence mode="popLayout">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="open"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="relative"
                            >
                                <HeadphonesIcon className="w-7 h-7" />
                                {/* Pulsing rings */}
                                <span className="absolute -inset-1 rounded-full border border-white/50 animate-ping" style={{ animationDuration: '3.8s' }}></span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </div>
    );
}
