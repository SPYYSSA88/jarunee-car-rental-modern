'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const languages: { code: Language; label: string; flagUrl: string; fullName: string }[] = [
    { code: 'th', label: 'TH', flagUrl: 'https://flagcdn.com/w40/th.png', fullName: 'ไทย' },
    { code: 'en', label: 'EN', flagUrl: 'https://flagcdn.com/w40/gb.png', fullName: 'English' },
    { code: 'cn', label: 'CN', flagUrl: 'https://flagcdn.com/w40/cn.png', fullName: '中文' },
];

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 text-dark-900 hover:bg-neutral-100 rounded-lg transition-all duration-300 font-medium"
            >
                <Image src={currentLang.flagUrl} alt={currentLang.label} width={20} height={15} className="w-5 h-auto rounded-sm shadow-sm" />
                <span className="text-sm hidden sm:inline">{currentLang.label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu */}
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 min-w-[140px] animate-fade-in">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`
                                    w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-200
                                    ${language === lang.code
                                        ? 'bg-emerald-50 text-emerald-700'
                                        : 'text-slate-700 hover:bg-slate-50'
                                    }
                                `}
                            >
                                <Image src={lang.flagUrl} alt={lang.label} width={24} height={18} className="w-6 h-auto rounded-sm shadow-sm" />
                                <div className="flex flex-col">
                                    <span className="font-medium text-sm">{lang.fullName}</span>
                                    <span className="text-xs text-slate-400">{lang.label}</span>
                                </div>
                                {language === lang.code && (
                                    <span className="ml-auto text-emerald-500">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
