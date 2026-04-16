'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Calculator } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

// Contact info
const CONTACT = {
    phone: 'tel:+66894376117',
    lineUrl: 'https://line.me/ti/p/~0894376117',
};

const getPopularRoutes = (t: (key: string) => string) => [
    { name: t('hero.route.airport'), distance: 5 },
    { name: t('hero.route.doisuthep'), distance: 15 },
    { name: t('hero.route.chiangrai'), distance: 180 },
    { name: t('hero.route.maehongson'), distance: 350 },
];

export default function HeroSection() {
    const { t } = useLanguage();
    const [distance, setDistance] = useState<number>(0);
    const [selectedCar, setSelectedCar] = useState<'small' | 'large'>('small');
    const [showResult, setShowResult] = useState(false);

    const pricePerKm = selectedCar === 'small' ? 10 : 15;
    const totalPrice = distance * pricePerKm;
    const popularRoutes = getPopularRoutes(t);

    const handleCalculate = () => {
        if (distance > 0) {
            setShowResult(true);
        }
    };

    const handleRouteSelect = (dist: number) => {
        setDistance(dist);
        setShowResult(false);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg-v3.png"
                    alt="Luxury Car Rental Chiang Mai"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-cover object-[70%_center] md:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900/90" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-16 md:pt-20 pb-8 px-4 w-full max-w-full overflow-hidden font-sarabun">
                <div className="max-w-6xl mx-auto">
                    {/* Top Section - Title & CTA */}
                    <div className="text-center mb-8 md:mb-12">
                        {/* Badge - Premium Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            className="inline-flex items-center gap-2.5 px-5 md:px-6 py-2.5 md:py-3 rounded-full 
                                       bg-black/40 lg:bg-gradient-to-r lg:from-amber-500/20 lg:via-yellow-400/30 lg:to-amber-500/20 
                                       backdrop-blur-xl border border-green-400/60 lg:border-amber-400/50 
                                       shadow-[0_4px_20px_rgba(0,0,0,0.5)] lg:shadow-[0_0_20px_rgba(251,191,36,0.3),0_0_40px_rgba(251,191,36,0.1)]
                                       relative overflow-hidden group mb-6"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                            {/* Animated Dot */}
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 lg:bg-amber-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-green-400 to-emerald-300 lg:from-amber-400 lg:to-yellow-300" />
                            </span>

                            {/* Badge Text */}
                            <span className="text-sm md:text-base lg:text-lg font-bold tracking-wide
                                           text-[#00cc00] [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]
                                           lg:text-transparent lg:bg-gradient-to-r lg:from-amber-300 lg:via-yellow-200 lg:to-amber-300 lg:bg-clip-text
                                           lg:[text-shadow:none] lg:drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                                {t('hero.badge')}
                            </span>

                            {/* Sparkle Icons */}
                            <span className="text-green-300 lg:text-amber-300 text-sm animate-pulse">✨</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-sarabun lg:font-display text-4xl md:text-5xl lg:text-7xl text-[#00cc00] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8),0_0_40px_rgba(0,0,0,0.6)] lg:text-white lg:[text-shadow:none] text-balance leading-[1.15] tracking-tight mb-4"
                        >
                            {t('hero.title1')}
                            <br />
                            {t('hero.title2')}
                            <br />
                            <span className="text-[#00cc00] lg:text-primary-500 lg:[text-shadow:none]">
                                {t('hero.title3')}
                            </span>
                        </motion.h1>

                        {/* Description - Hidden on mobile */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hidden md:block text-body-lg text-neutral-200 max-w-2xl mx-auto"
                        >
                            {t('hero.description')}
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 max-w-3xl mx-auto"
                        >
                            <StatItem value="5,000+" label={t('hero.stats.satisfied')} />
                            <StatItem value="24/7" label={t('hero.stats.service24')} />
                            <StatItem value="10+" label={t('hero.stats.experience')} />
                            <StatItem value="97%" label={t('hero.stats.reviews')} />
                        </motion.div>
                    </div>

                    {/* Price Calculator - Glassmorphism Bento Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            {/* Car Type Selection */}
                            <div className="md:col-span-3">
                                <label className="text-white/70 text-sm mb-2 flex items-center gap-2">
                                    <Car className="w-4 h-4" />
                                    {t('hero.carType')}
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                                    <button
                                        onClick={() => { setSelectedCar('small'); setShowResult(false); }}
                                        className={`p-2 md:p-3 rounded-xl text-left transition-all ${selectedCar === 'small'
                                            ? 'bg-primary-500 text-white'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">🚗</span>
                                            <div>
                                                <div className="font-semibold text-sm">{t('hero.carSmall')}</div>
                                                <div className="text-xs opacity-70">10฿/{t('price.km')}</div>
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => { setSelectedCar('large'); setShowResult(false); }}
                                        className={`p-2 md:p-3 rounded-xl text-left transition-all ${selectedCar === 'large'
                                            ? 'bg-primary-500 text-white'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">🚐</span>
                                            <div>
                                                <div className="font-semibold text-sm">{t('hero.carLarge')}</div>
                                                <div className="text-xs opacity-70">15฿/{t('price.km')}</div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Distance & Route */}
                            <div className="md:col-span-5">
                                <label className="text-white/70 text-sm mb-2 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {t('hero.distanceLabel')}
                                </label>
                                <input
                                    type="number"
                                    value={distance || ''}
                                    onChange={(e) => { setDistance(Number(e.target.value)); setShowResult(false); }}
                                    placeholder={t('hero.distancePlaceholder')}
                                    min="0"
                                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 text-center text-lg md:text-2xl font-bold mb-2 md:mb-3"
                                />
                                <div className="flex flex-wrap gap-2">
                                    {popularRoutes.map((route) => (
                                        <button
                                            key={route.name}
                                            onClick={() => handleRouteSelect(route.distance)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${distance === route.distance
                                                ? 'bg-primary-500 text-white'
                                                : 'bg-white/10 text-white/80 hover:bg-white/20'
                                                }`}
                                        >
                                            {route.name} ({route.distance}กม.)
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Result & CTA */}
                            <div className="md:col-span-4">
                                <label className="text-white/70 text-sm mb-2 flex items-center gap-2">
                                    <Calculator className="w-4 h-4" />
                                    {t('hero.estimatedPrice')}
                                </label>

                                <div className="bg-white/20 rounded-xl p-3 md:p-4 text-center mb-3">
                                    {showResult && distance > 0 ? (
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                        >
                                            <div className="text-2xl md:text-4xl font-bold text-white">
                                                ฿{totalPrice.toLocaleString()}
                                            </div>
                                            <div className="text-xs text-white/60 mt-1">
                                                {distance} {t('price.km')} × {pricePerKm}{t('price.baht')}
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="text-white/50 py-2">
                                            {t('hero.enterDistance')}
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={handleCalculate}
                                        disabled={distance <= 0}
                                        className="w-full py-2.5 md:py-4 bg-white hover:bg-gray-100 text-gray-800 font-bold text-sm md:text-base rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {t('hero.calculate')}
                                    </button>
                                    <a
                                        href={CONTACT.lineUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-1 bg-[#00B900] hover:bg-[#009900] text-white font-semibold py-2 px-3 rounded-lg transition-all text-sm"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                        </svg>
                                        {t('hero.book')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-center text-white/40 text-xs mt-4">
                            {t('hero.disclaimer')}
                        </p>
                    </motion.div>

                    {/* View Fleet Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center mt-6"
                    >
                        <Link href="/cars" className={buttonVariants({ variant: 'premium', size: 'lg', className: 'gap-2 shine' })}>
                            <MapPin className="w-5 h-5" />
                            {t('hero.viewAllCars')}
                        </Link>
                    </motion.div>

                    {/* Service Bento Boxes */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-20"
                    >
                        {/* Pattaya Taxi Box */}
                        <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-2xl p-3 md:p-6 shadow-xl hover:bg-white/20 transition-all">
                            <div className="flex items-center gap-3 md:gap-5">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-3">
                                        <span className="text-2xl md:text-3xl">🚕</span>
                                        <h3 className="text-white font-bold text-base md:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{t('hero.callTaxi')}</h3>
                                    </div>
                                    <p className="text-yellow-300 font-bold text-lg md:text-3xl mb-1 md:mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(255,200,0,0.5)' }}>
                                        &quot;{t('hero.pattaya24')}&quot;
                                    </p>
                                    <a
                                        href="tel:+66894376117"
                                        className="inline-flex items-center gap-1 md:gap-2 text-white hover:text-yellow-300 transition-colors"
                                    >
                                        <span className="text-base md:text-xl">📞</span>
                                        <span className="font-bold text-base md:text-2xl tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">089-437-6117</span>
                                    </a>
                                </div>
                                {/* QR Code */}
                                <a
                                    href="https://line.me/ti/p/~0894376117"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0"
                                    title="แอดไลน์"
                                >
                                    <div className="w-16 h-16 md:w-28 md:h-28 bg-white rounded-xl p-1 md:p-2 hover:scale-105 transition-transform shadow-lg">
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <rect fill="#00B900" x="5" y="5" width="90" height="90" rx="10" />
                                            <text x="50" y="50" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">LINE</text>
                                            <text x="50" y="70" textAnchor="middle" fill="white" fontSize="10">{t('hero.addLine')}</text>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Uttaradit Taxi Box */}
                        <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-2xl p-3 md:p-6 shadow-xl hover:bg-white/20 transition-all">
                            <div className="flex items-center gap-3 md:gap-5">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-3">
                                        <span className="text-2xl md:text-3xl">🚐</span>
                                        <h3 className="text-white font-bold text-base md:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{t('hero.callTaxiHire')}</h3>
                                    </div>
                                    <p className="text-yellow-300 font-bold text-lg md:text-3xl mb-1 md:mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(255,200,0,0.5)' }}>
                                        &quot;{t('hero.uttaradit24')}&quot;
                                    </p>
                                    <a
                                        href="tel:+66894376117"
                                        className="inline-flex items-center gap-1 md:gap-2 text-white hover:text-yellow-300 transition-colors"
                                    >
                                        <span className="text-base md:text-xl">📞</span>
                                        <span className="font-bold text-base md:text-2xl tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">089-437-6117</span>
                                    </a>
                                </div>
                                {/* QR Code */}
                                <a
                                    href="https://line.me/ti/p/~0894376117"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0"
                                    title="แอดไลน์"
                                >
                                    <div className="w-16 h-16 md:w-28 md:h-28 bg-white rounded-xl p-1 md:p-2 hover:scale-105 transition-transform shadow-lg">
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <rect fill="#00B900" x="5" y="5" width="90" height="90" rx="10" />
                                            <text x="50" y="50" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">LINE</text>
                                            <text x="50" y="70" textAnchor="middle" fill="white" fontSize="10">{t('hero.addLine')}</text>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-white"
                    />
                </div>
            </motion.div>

            {/* Marquee Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 py-4 overflow-hidden">
                <div className="marquee-container">
                    <div className="marquee-content">
                        <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
                            {t('hero.marquee')}
                        </span>
                        <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap ml-20">
                            {t('hero.marquee')}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatItem({ value, label }: { value: string; label: string }) {
    return (
        <div className="text-center">
            <div className="text-xl md:text-display-sm lg:text-5xl font-sarabun lg:font-display font-bold text-[#00cc00] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9),0_0_15px_rgba(0,0,0,0.8)] lg:text-white lg:[text-shadow:none]">
                {value}
            </div>
            <div className="text-xs md:text-body-sm lg:text-lg text-[#00cc00] [text-shadow:1px_1px_3px_rgba(0,0,0,0.9),0_0_10px_rgba(0,0,0,0.7)] lg:text-neutral-300 lg:[text-shadow:none] mt-1">
                {label}
            </div>
        </div>
    );
}
