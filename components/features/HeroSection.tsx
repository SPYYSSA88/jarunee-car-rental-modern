'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Car, Calculator } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
            {/* Background Image with Slow Cinematic Ken Burns Motion */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.04 }}
                    animate={{ scale: [1.04, 1, 1.04] }}
                    transition={{ duration: 26, ease: 'easeInOut', repeat: Infinity }}
                    className="relative w-full h-full will-change-transform"
                >
                    <Image
                        src="/images/hero-bg-v3.png"
                        alt="Luxury Car Rental Chiang Mai"
                        fill
                        priority
                        quality={100}
                        sizes="100vw"
                        className="object-cover object-[70%_center] md:object-center"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-dark-900/85" />
                {/* Subtle slow-breathing warm sunlight aura */}
                <motion.div
                    animate={{ opacity: [0.18, 0.34, 0.18] }}
                    transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
                    className="absolute -top-24 right-[-10%] w-[60vw] h-[60vw] max-w-[680px] max-h-[680px] rounded-full bg-amber-300/20 blur-3xl pointer-events-none"
                />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-16 md:pt-20 pb-10 px-4 w-full max-w-full overflow-hidden font-kanit">
                <div className="max-w-6xl mx-auto">
                    {/* Top Section - Title & CTA */}
                    <div className="text-center mb-7 md:mb-10">
                        {/* Badge - Premium Style (Mobile & PC unified) */}
                        <motion.div
                            initial={{ opacity: 0, y: 18, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1.05, ease: SMOOTH_EASE }}
                            className="inline-flex items-center gap-2.5 px-5 md:px-6 py-2 md:py-2.5 rounded-full 
                                       bg-gradient-to-r from-amber-600/35 via-yellow-500/30 to-amber-600/35 
                                       backdrop-blur-xl border border-amber-300/45 
                                       shadow-[0_6px_24px_rgba(0,0,0,0.35),0_0_24px_rgba(251,191,36,0.2)]
                                       relative overflow-hidden group mb-5 md:mb-6"
                        >
                            {/* Slow Continuous Shimmer Sweep (works on Mobile & PC) */}
                            <motion.div
                                animate={{ x: ['-140%', '240%'] }}
                                transition={{ duration: 4.5, ease: SMOOTH_EASE, repeat: Infinity, repeatDelay: 3.5 }}
                                className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
                            />

                            {/* Slow Breathing Dot */}
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping [animation-duration:2.8s] absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-amber-300 to-yellow-200" />
                            </span>

                            {/* Badge Text */}
                            <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wide text-amber-100 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
                                {t('hero.badge')}
                            </span>

                            {/* Sparkle Icons */}
                            <motion.span
                                animate={{ opacity: [0.65, 1, 0.65], scale: [0.95, 1.08, 0.95] }}
                                transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity }}
                                className="text-amber-200 text-xs sm:text-sm"
                            >
                                ✨
                            </motion.span>
                        </motion.div>

                        {/* Heading - Crisp White & Vibrant Green on BOTH Mobile & PC */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.15, delay: 0.12, ease: SMOOTH_EASE }}
                            className="font-kanit font-bold text-[1.9rem] sm:text-4xl md:text-5xl lg:text-[4.25rem] text-white [text-shadow:0_3px_18px_rgba(0,0,0,0.55)] text-balance leading-[1.22] tracking-tight mb-4"
                        >
                            <span className="block text-white">
                                {t('hero.title1')}
                            </span>
                            <span className="block text-white mt-0.5 md:mt-1">
                                {t('hero.title2')}
                            </span>
                            <motion.span
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.28, ease: SMOOTH_EASE }}
                                className="block mt-1 md:mt-1.5 text-[#00cc00] hero-green-glow"
                            >
                                {t('hero.title3')}
                            </motion.span>
                        </motion.h1>

                        {/* Description - Clean White on BOTH Mobile & PC */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.1, delay: 0.28, ease: SMOOTH_EASE }}
                            className="text-xs sm:text-sm md:text-lg text-white/95 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] max-w-2xl mx-auto leading-relaxed px-2"
                        >
                            {t('hero.description')}
                        </motion.p>

                        {/* Stats - Crisp White on BOTH Mobile & PC */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.15, delay: 0.4, ease: SMOOTH_EASE }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-5 md:pt-7 max-w-3xl mx-auto"
                        >
                            <StatItem value="5,000+" label={t('hero.stats.satisfied')} delay={0.45} />
                            <StatItem value="24/7" label={t('hero.stats.service24')} delay={0.55} />
                            <StatItem value="10+" label={t('hero.stats.experience')} delay={0.65} />
                            <StatItem value="97%" label={t('hero.stats.reviews')} delay={0.75} />
                        </motion.div>
                    </div>

                    {/* Price Calculator - Glassmorphism Bento Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: SMOOTH_EASE }}
                        className="backdrop-blur-xl bg-dark-900/45 border border-white/25 rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            {/* Car Type Selection */}
                            <div className="md:col-span-3">
                                <label className="text-white/80 text-xs sm:text-sm mb-2 flex items-center gap-2">
                                    <Car className="w-4 h-4" />
                                    {t('hero.carType')}
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                                    <button
                                        onClick={() => { setSelectedCar('small'); setShowResult(false); }}
                                        className={`p-2.5 md:p-3 rounded-xl text-left transition-all duration-500 ease-out active:scale-[0.98] ${selectedCar === 'small'
                                            ? 'bg-white/25 border border-white/45 text-white shadow-lg'
                                            : 'bg-white/10 border border-transparent text-white/85 hover:bg-white/18'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xl">🚗</span>
                                            <div>
                                                <div className="font-semibold text-sm text-white">{t('hero.carSmall')}</div>
                                                <div className="text-xs text-white/75">10฿/{t('price.km')}</div>
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => { setSelectedCar('large'); setShowResult(false); }}
                                        className={`p-2.5 md:p-3 rounded-xl text-left transition-all duration-500 ease-out active:scale-[0.98] ${selectedCar === 'large'
                                            ? 'bg-white/25 border border-white/45 text-white shadow-lg'
                                            : 'bg-white/10 border border-transparent text-white/85 hover:bg-white/18'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xl">🚐</span>
                                            <div>
                                                <div className="font-semibold text-sm text-white">{t('hero.carLarge')}</div>
                                                <div className="text-xs text-white/75">15฿/{t('price.km')}</div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Distance & Route */}
                            <div className="md:col-span-5">
                                <label className="text-white/80 text-xs sm:text-sm mb-2 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {t('hero.distanceLabel')}
                                </label>
                                <input
                                    type="number"
                                    value={distance || ''}
                                    onChange={(e) => { setDistance(Number(e.target.value)); setShowResult(false); }}
                                    placeholder={t('hero.distancePlaceholder')}
                                    min="0"
                                    className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/15 border border-white/35 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00cc00]/70 focus:border-[#00cc00]/70 transition-all duration-500 text-center text-lg md:text-2xl font-bold mb-2.5 md:mb-3"
                                />
                                <div className="flex flex-wrap gap-2">
                                    {popularRoutes.map((route) => (
                                        <button
                                            key={route.name}
                                            onClick={() => handleRouteSelect(route.distance)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-500 ease-out active:scale-[0.97] ${distance === route.distance
                                                ? 'bg-[#00cc00] text-white shadow-md shadow-[#00cc00]/30'
                                                : 'bg-white/12 text-white/85 hover:bg-white/22'
                                                }`}
                                        >
                                            {route.name} ({route.distance}กม.)
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Result & CTA */}
                            <div className="md:col-span-4">
                                <label className="text-white/80 text-xs sm:text-sm mb-2 flex items-center gap-2">
                                    <Calculator className="w-4 h-4" />
                                    {t('hero.estimatedPrice')}
                                </label>

                                <div className="bg-white/15 border border-white/15 rounded-xl p-3 md:p-4 text-center mb-3 min-h-[68px] md:min-h-[82px] flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        {showResult && distance > 0 ? (
                                            <motion.div
                                                key={`price-${totalPrice}`}
                                                initial={{ scale: 0.94, opacity: 0, y: 6 }}
                                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                                exit={{ scale: 0.96, opacity: 0, y: -4 }}
                                                transition={{ duration: 0.55, ease: SMOOTH_EASE }}
                                            >
                                                <div className="text-2xl md:text-4xl font-bold text-white">
                                                    ฿{totalPrice.toLocaleString()}
                                                </div>
                                                <div className="text-xs text-white/70 mt-0.5">
                                                    {distance} {t('price.km')} × {pricePerKm}{t('price.baht')}
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="placeholder"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.4, ease: SMOOTH_EASE }}
                                                className="text-white/65 text-sm py-2"
                                            >
                                                {t('hero.enterDistance')}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={handleCalculate}
                                        disabled={distance <= 0}
                                        className="w-full py-2.5 md:py-3.5 bg-white hover:bg-neutral-100 text-dark-900 font-bold text-sm md:text-base rounded-xl transition-all duration-500 ease-out active:scale-[0.98] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {t('hero.calculate')}
                                    </button>
                                    <a
                                        href={CONTACT.lineUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-1.5 bg-[#00C300] hover:bg-[#00a900] text-white font-bold py-2.5 md:py-3.5 px-3 rounded-xl transition-all duration-500 ease-out active:scale-[0.98] shadow-lg shadow-[#00C300]/25 text-sm md:text-base"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                        </svg>
                                        {t('hero.book')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-center text-white/55 text-xs mt-4">
                            {t('hero.disclaimer')}
                        </p>
                    </motion.div>

                    {/* View Fleet Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.0, delay: 0.15, ease: SMOOTH_EASE }}
                        className="text-center mt-6"
                    >
                        <Link href="/cars" className={buttonVariants({ variant: 'premium', size: 'lg', className: 'gap-2 shine hover:-translate-y-0.5 transition-transform duration-500' })}>
                            <MapPin className="w-5 h-5" />
                            {t('hero.viewAllCars')}
                        </Link>
                    </motion.div>

                    {/* Service Bento Boxes */}
                    <motion.div
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 1.1, delay: 0.2, ease: SMOOTH_EASE }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-20"
                    >
                        {/* Pattaya Taxi Box */}
                        <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-2xl p-3.5 md:p-6 shadow-xl hover:bg-white/22 hover:-translate-y-1 transition-all duration-700 ease-out">
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
                                        className="inline-flex items-center gap-1 md:gap-2 text-white hover:text-yellow-300 transition-colors duration-500"
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
                                    <div className="w-16 h-16 md:w-28 md:h-28 bg-white rounded-xl p-1 md:p-2 hover:scale-105 transition-transform duration-500 ease-out shadow-lg">
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
                        <div className="backdrop-blur-xl bg-white/15 border border-white/30 rounded-2xl p-3.5 md:p-6 shadow-xl hover:bg-white/22 hover:-translate-y-1 transition-all duration-700 ease-out">
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
                                        className="inline-flex items-center gap-1 md:gap-2 text-white hover:text-yellow-300 transition-colors duration-500"
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
                                    <div className="w-16 h-16 md:w-28 md:h-28 bg-white rounded-xl p-1 md:p-2 hover:scale-105 transition-transform duration-500 ease-out shadow-lg">
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

            {/* Scroll Indicator - Slow & Gentle */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.1, ease: SMOOTH_EASE }}
                className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/35 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-white"
                    />
                </div>
            </motion.div>

            {/* Marquee Text - Seamless Slow Glide */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 py-3.5 md:py-4 overflow-hidden">
                <div className="marquee-container">
                    <div className="marquee-content">
                        {[0, 1, 2, 3].map((idx) => (
                            <span
                                key={idx}
                                className="text-white text-lg md:text-2xl lg:text-3xl font-kanit font-bold whitespace-nowrap"
                            >
                                {t('hero.marquee')}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatItem({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay, ease: SMOOTH_EASE }}
            className="text-center transition-transform duration-500 ease-out hover:-translate-y-0.5"
        >
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-kanit font-bold text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]">
                {value}
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] mt-1">
                {label}
            </div>
        </motion.div>
    );
}
