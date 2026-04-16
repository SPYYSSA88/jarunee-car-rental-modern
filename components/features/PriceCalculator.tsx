'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Calculator, Navigation, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PriceCalculator() {
    const { t } = useLanguage();
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [distance, setDistance] = useState<number>(0);
    const [selectedCar, setSelectedCar] = useState<string>('small');
    const [showResult, setShowResult] = useState(false);

    const popularDestinations = [
        { key: 'dest.airport', distance: 5 },
        { key: 'dest.doi_suthep', distance: 15 },
        { key: 'dest.chiang_rai', distance: 180 },
        { key: 'dest.mae_hong_son', distance: 350 },
        { key: 'dest.lampang', distance: 100 },
        { key: 'dest.fang', distance: 150 },
    ];

    const carTypes = [
        {
            id: 'small',
            name: t('price.car.small'),
            description: 'Sedan, Toyota Vios, Honda City',
            pricePerKm: 10,
            icon: '🚗',
            seats: `4 ${t('featured.seats')}`
        },
        {
            id: 'large',
            name: t('price.car.large'),
            description: 'SUV, Van, Fortuner, Alphard',
            pricePerKm: 15,
            icon: '🚐',
            seats: `7-10 ${t('featured.seats')}`
        },
    ];

    const calculatePrice = () => {
        if (distance > 0) {
            setShowResult(true);
        }
    };

    const getPrice = () => {
        const car = carTypes.find(c => c.id === selectedCar);
        return distance * (car?.pricePerKm || 10);
    };

    const handleDestinationSelect = (dest: typeof popularDestinations[0]) => {
        setDestination(t(dest.key));
        setDistance(dest.distance);
        setShowResult(false);
    };

    return (
        <section className="py-20 relative overflow-hidden" id="price-calculator">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-gold-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.1),transparent_50%)]" />

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-gold-100 rounded-full text-primary-600 font-semibold text-sm mb-4">
                        <Calculator className="w-4 h-4" />
                        {t('price.badge')}
                    </span>
                    <h2 className="font-display text-display-md md:text-display-lg text-dark-900 mb-4">
                        {t('price.title')} <span className="gradient-text">{t('price.titleHighlight')}</span>
                    </h2>
                    <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
                        {t('price.description')}
                    </p>
                </motion.div>

                {/* Bento Grid Calculator */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {/* Left Column - Origin & Destination */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Glass Card - Route */}
                        <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl p-6 shadow-xl">
                            <h3 className="font-semibold text-dark-900 mb-4 flex items-center gap-2">
                                <Navigation className="w-5 h-5 text-primary-500" />
                                {t('price.route')}
                            </h3>

                            <div className="space-y-4">
                                {/* Origin */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                                    </div>
                                    <input
                                        type="text"
                                        value={origin}
                                        onChange={(e) => setOrigin(e.target.value)}
                                        placeholder={t('price.origin')}
                                        className="w-full pl-10 pr-4 py-4 bg-white/80 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Connector Line */}
                                <div className="flex items-center gap-4 px-4">
                                    <div className="w-0.5 h-8 bg-gradient-to-b from-green-500 to-red-500 ml-[5px]" />
                                    <span className="text-sm text-neutral-400">{t('price.to')}</span>
                                </div>

                                {/* Destination */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <MapPin className="w-4 h-4 text-red-500" />
                                    </div>
                                    <input
                                        type="text"
                                        value={destination}
                                        onChange={(e) => {
                                            setDestination(e.target.value);
                                            setShowResult(false);
                                        }}
                                        placeholder={t('price.dest')}
                                        className="w-full pl-10 pr-4 py-4 bg-white/80 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Distance Input */}
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="flex-1">
                                        <label className="text-sm text-neutral-500 mb-1 block">{t('price.distance')}</label>
                                        <input
                                            type="number"
                                            value={distance || ''}
                                            onChange={(e) => {
                                                setDistance(Number(e.target.value));
                                                setShowResult(false);
                                            }}
                                            placeholder="0"
                                            min="0"
                                            className="w-full px-4 py-3 bg-white/80 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-center text-2xl font-bold text-dark-900"
                                        />
                                    </div>
                                    <span className="text-neutral-500 mt-6">{t('price.km')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Popular Destinations */}
                        <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-6 shadow-lg">
                            <h3 className="font-semibold text-dark-900 mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-gold-500" />
                                {t('price.popular')}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {popularDestinations.map((dest) => (
                                    <button
                                        key={dest.key}
                                        onClick={() => handleDestinationSelect(dest)}
                                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${destination === t(dest.key)
                                            ? 'bg-primary-500 text-white shadow-lg'
                                            : 'bg-white/80 text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                                            }`}
                                    >
                                        <div>{t(dest.key)}</div>
                                        <div className="text-xs opacity-70">{dest.distance} {t('price.km')}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Car Selection & Result */}
                    <div className="space-y-6">
                        {/* Car Type Selection */}
                        <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl p-6 shadow-xl">
                            <h3 className="font-semibold text-dark-900 mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-primary-500" />
                                {t('price.selectCar')}
                            </h3>
                            <div className="space-y-3">
                                {carTypes.map((car) => (
                                    <button
                                        key={car.id}
                                        onClick={() => {
                                            setSelectedCar(car.id);
                                            setShowResult(false);
                                        }}
                                        className={`w-full p-4 rounded-2xl text-left transition-all ${selectedCar === car.id
                                            ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                                            : 'bg-white/80 hover:bg-primary-50'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{car.icon}</span>
                                            <div className="flex-1">
                                                <div className="font-semibold">{car.name}</div>
                                                <div className={`text-xs ${selectedCar === car.id ? 'text-white/80' : 'text-neutral-500'}`}>
                                                    {car.description}
                                                </div>
                                            </div>
                                            <div className={`text-right ${selectedCar === car.id ? 'text-white' : 'text-primary-600'}`}>
                                                <div className="font-bold">{car.pricePerKm} {t('price.baht')}</div>
                                                <div className="text-xs opacity-70">{t('price.perKm')}</div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Calculate Button & Result */}
                        <div className="backdrop-blur-xl bg-white/95 border border-neutral-200 rounded-3xl p-6 shadow-xl">
                            <Button
                                onClick={calculatePrice}
                                disabled={distance <= 0}
                                variant="dark"
                                size="lg"
                                fullWidth
                                className="mb-4"
                            >
                                <Calculator className="w-5 h-5 mr-2" />
                                {t('price.calculate')}
                            </Button>

                            {showResult && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center"
                                >
                                    <div className="text-sm text-neutral-500 mb-1">{t('price.result')}</div>
                                    <div className="text-4xl font-bold mb-2 text-primary-600">
                                        {t('price.baht')}{getPrice().toLocaleString()}
                                    </div>
                                    <div className="text-sm text-neutral-500">
                                        {distance} {t('price.km')} × {carTypes.find(c => c.id === selectedCar)?.pricePerKm} {t('price.baht')}{t('price.perKm')}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-neutral-200 text-xs text-neutral-400">
                                        {t('price.note')}
                                    </div>
                                </motion.div>
                            )}

                            {!showResult && (
                                <div className="text-center text-neutral-500 text-sm">
                                    {t('price.cta')}
                                </div>
                            )}
                        </div>

                        {/* CTA */}
                        <a
                            href="https://line.me/ti/p/~0894376117"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block backdrop-blur-xl bg-[#00B900]/90 border border-white/30 rounded-3xl p-4 shadow-lg text-center text-white font-semibold hover:bg-[#00A000] transition-all"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                                {t('price.bookLine')}
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
