'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    Phone,
    MapPin,
    Car,
    Shield,
    Clock,
    Star,
    ArrowLeft,
    MessageCircle,
    Award,
    Users,
} from 'lucide-react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

// Owner Data (static info that doesn't need translation)
const ownerData = {
    name: 'คุณ จารุณี สุขประเสริฐ',
    nameEn: 'Khun Jarunee Sukprasert',
    nameCn: '贾鲁尼·素帕塞特女士',
    phone: '089-437-6117',
    location: 'จังหวัดเชียงใหม่',
    locationEn: 'Chiang Mai Province',
    locationCn: '清迈府',
    car: 'Toyota All New Fortuner',
    carColor: 'สีบอลเทา (Dark Grey)',
    carColorEn: 'Dark Grey',
    carColorCn: '深灰色',
    bankName: 'ธนาคารกสิกรไทย',
    bankNameEn: 'Kasikorn Bank',
    bankNameCn: '开泰银行',
    bankAccount: '019-3-30805-8',
    experience: '10+',
    customers: '500+',
    rating: '4.9',
    lineId: '@jarunee',
};

export default function OwnerPage() {
    const { t, language } = useLanguage();

    // Helper to get localized value
    const getName = () => {
        if (language === 'en') return ownerData.nameEn;
        if (language === 'cn') return ownerData.nameCn;
        return ownerData.name;
    };

    const getLocation = () => {
        if (language === 'en') return ownerData.locationEn;
        if (language === 'cn') return ownerData.locationCn;
        return ownerData.location;
    };

    const getCarColor = () => {
        if (language === 'en') return ownerData.carColorEn;
        if (language === 'cn') return ownerData.carColorCn;
        return ownerData.carColor;
    };

    const getBankName = () => {
        if (language === 'en') return ownerData.bankNameEn;
        if (language === 'cn') return ownerData.bankNameCn;
        return ownerData.bankName;
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen relative overflow-hidden">
                {/* Background Image */}
                <div className="fixed inset-0 z-0">
                    <Image
                        src="/images/owner-cover.png"
                        alt="Background"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-dark-900/70 backdrop-blur-sm" />
                </div>

                {/* Content */}
                <section className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
                    <div className="container-custom px-3 sm:px-4">
                        {/* Back Button */}
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-6 sm:mb-8"
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 px-3 sm:px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-500"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="text-xs sm:text-sm">{t('owner.backHome')}</span>
                            </Link>
                        </motion.div>

                        {/* Main Profile Card - Glassmorphism */}
                        <motion.div
                            initial={{ opacity: 0, y: 26 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.05, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 mb-4 sm:mb-6 shadow-2xl"
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                                {/* Large Profile Image */}
                                <div className="relative shrink-0">
                                    <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-primary-500 shadow-2xl shadow-primary-500/30">
                                        <Image
                                            src="/images/owner-profile.jpg"
                                            alt={getName()}
                                            fill
                                            sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                    {/* Verified Badge */}

                                </div>

                                {/* Profile Info */}
                                <div className="flex-1 text-center lg:text-left mt-4 lg:mt-0">
                                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 sm:mb-3">
                                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                                        <span className="text-amber-400 font-semibold text-sm sm:text-base">{t('owner.verified')}</span>
                                    </div>
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 break-words">
                                        {getName()}
                                    </h1>
                                    <p className="text-base sm:text-lg mb-4 sm:mb-6 font-semibold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                                        {t('owner.title')}
                                    </p>

                                    {/* Quick Stats - Glassmorphism Pills */}
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                                        <div className="backdrop-blur-md bg-amber-500/20 border border-amber-500/30 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2">
                                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                                            <span className="text-white font-bold text-sm sm:text-base">{ownerData.rating}</span>
                                            <span className="text-white/70 text-xs sm:text-sm">{t('owner.rating')}</span>
                                        </div>
                                        <div className="backdrop-blur-md bg-primary-500/20 border border-primary-500/30 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2">
                                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                                            <span className="text-white font-bold text-sm sm:text-base">{ownerData.customers}</span>
                                            <span className="text-white/70 text-xs sm:text-sm">{t('owner.customers')}</span>
                                        </div>
                                        <div className="backdrop-blur-md bg-green-500/20 border border-green-500/30 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2">
                                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                            <span className="text-white font-bold text-sm sm:text-base">{ownerData.experience}</span>
                                            <span className="text-white/70 text-xs sm:text-sm">{t('owner.experience')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bento Grid - Premium Glassmorphism */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8">
                            {/* Phone Card - Large */}
                            <motion.a
                                href={`tel:${ownerData.phone.replace(/-/g, '')}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="sm:col-span-2 backdrop-blur-xl bg-gradient-to-br from-green-600/30 to-green-800/20 border-2 border-green-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:from-green-600/40 hover:to-green-800/30 transition-all cursor-pointer group shadow-xl shadow-green-500/10"
                            >
                                <div className="flex items-center gap-4 sm:gap-5">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                                        <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-green-300 text-sm sm:text-base font-semibold mb-1">{t('owner.callNow')}</p>
                                        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
                                            {ownerData.phone}
                                        </p>
                                        <p className="text-green-400 text-sm sm:text-base mt-2 font-bold">{t('owner.available24h')}</p>
                                    </div>
                                </div>
                            </motion.a>

                            {/* Location Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border-2 border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:from-white/20 hover:to-white/10 transition-all shadow-xl"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary-500/30">
                                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <p className="text-white/70 text-sm sm:text-base font-medium mb-1">{t('owner.location')}</p>
                                <p className="text-white font-bold text-lg sm:text-xl">{getLocation()}</p>
                            </motion.div>

                            {/* Car Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border-2 border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:from-white/20 hover:to-white/10 transition-all shadow-xl"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30">
                                    <Car className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <p className="text-white/70 text-sm sm:text-base font-medium mb-1">{t('owner.car')}</p>
                                <p className="text-white font-bold text-base sm:text-lg">{ownerData.car}</p>
                                <p className="text-amber-400 text-sm sm:text-base font-semibold mt-1">{getCarColor()}</p>
                            </motion.div>

                            {/* Bank Card - Large */}
                            <motion.button
                                onClick={() => {
                                    navigator.clipboard.writeText('0193308058');
                                    alert('คัดลอกเลขบัญชีแล้ว: 019-3-30805-8');
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="sm:col-span-2 backdrop-blur-xl bg-gradient-to-br from-[#138f2d]/40 to-[#0d6b21]/30 border-2 border-[#138f2d]/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:from-[#138f2d]/50 hover:to-[#0d6b21]/40 transition-all cursor-pointer group text-left shadow-xl shadow-green-500/10"
                            >
                                <div className="flex items-center gap-4 sm:gap-5">
                                    {/* KBank Logo */}
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1fb141] to-[#138f2d] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                                        <span className="text-white text-3xl sm:text-4xl font-bold">K</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-green-300 text-sm sm:text-base font-semibold mb-1">{getBankName()}</p>
                                        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wider drop-shadow-lg">
                                            {ownerData.bankAccount}
                                        </p>
                                        <p className="text-green-400 text-sm sm:text-base mt-2 font-semibold">{t('owner.accountName')}: {getName()}</p>
                                    </div>
                                    {/* Copy Icon */}
                                    <div className="text-white/50 group-hover:text-green-400 transition-colors shrink-0 bg-white/10 p-3 rounded-xl group-hover:bg-white/20">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.button>

                            {/* Trust Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border-2 border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:from-white/20 hover:to-white/10 transition-all shadow-xl"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <p className="text-white/70 text-sm sm:text-base font-medium mb-1">{t('owner.trust')}</p>
                                <p className="text-white font-bold text-base sm:text-lg">{t('owner.insurance')}</p>
                                <p className="text-emerald-400 text-sm sm:text-base font-semibold mt-1">{t('owner.allCarsInsured')}</p>
                            </motion.div>

                            {/* LINE Card */}
                            <motion.a
                                href="https://line.me/ti/p/~0894376117"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="backdrop-blur-xl bg-gradient-to-br from-[#00B900]/30 to-[#008600]/20 border-2 border-[#00B900]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:from-[#00B900]/40 hover:to-[#008600]/30 transition-all cursor-pointer group shadow-xl shadow-green-500/10"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#00D900] to-[#00B900] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <p className="text-green-300 text-sm sm:text-base font-medium mb-1">{t('owner.addLine')}</p>
                                <p className="text-white font-bold text-lg sm:text-xl">{ownerData.lineId}</p>
                                <p className="text-[#00D900] text-sm sm:text-base font-semibold mt-1">{t('owner.fastResponse')}</p>
                            </motion.a>
                        </div>

                        {/* About Section - Premium Professional */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border-2 border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8 shadow-2xl"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6 sm:mb-8 pb-6 border-b border-white/20">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                                    <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t('owner.aboutUs')}</h2>
                                    <p className="text-white/60 text-sm sm:text-base mt-1">Jarunee Car Rental - Since 2009</p>
                                </div>
                            </div>

                            {/* Mission Statement */}
                            <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-500/30 rounded-xl flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-amber-400 font-bold text-lg sm:text-xl mb-2">พันธกิจของเรา</h3>
                                        <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                                            &ldquo;บริการด้วยใจ ปลอดภัย ราคายุติธรรม&rdquo;
                                        </p>
                                        <p className="text-white/70 text-sm sm:text-base mt-2">
                                            เราให้บริการเช่ารถและแท็กซี่เหมาในจังหวัดเชียงใหม่มากว่า 15 ปี ด้วยความซื่อสัตย์และเป็นมืออาชีพ
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Company Profile Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                {/* Services Offered */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
                                    <h4 className="text-white font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
                                        <Car className="w-5 h-5 text-primary-400" />
                                        บริการของเรา
                                    </h4>
                                    <ul className="space-y-3 text-white/80 text-sm sm:text-base">
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                            เช่ารถพร้อมคนขับ 24 ชม.
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                            รับ-ส่งสนามบินเชียงใหม่
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                            ทัวร์เที่ยวเชียงใหม่รายวัน
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                            เดินทางไปต่างจังหวัดทั่วไทย
                                        </li>
                                    </ul>
                                </div>

                                {/* Why Choose Us */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
                                    <h4 className="text-white font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-emerald-400" />
                                        ทำไมต้องเลือกเรา
                                    </h4>
                                    <ul className="space-y-3 text-white/80 text-sm sm:text-base">
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                                            ประสบการณ์กว่า 15 ปี
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                                            รถใหม่ สะอาด มีประกันชั้น 1
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                                            ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                                            พนักงานขับรถมืออาชีพ สุภาพ
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Owner Introduction */}
                            <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/10 border border-primary-500/30 rounded-2xl p-5 sm:p-6">
                                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-primary-400 shrink-0 shadow-lg">
                                        <Image
                                            src="/images/owner-profile.jpg"
                                            alt={getName()}
                                            width={96}
                                            height={96}
                                            className="object-cover object-top w-full h-full"
                                        />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <p className="text-primary-400 font-semibold text-sm sm:text-base mb-1">เจ้าของเว็บไซต์</p>
                                        <p className="text-white font-bold text-xl sm:text-2xl mb-2">{getName()}</p>
                                        <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                                            ด้วยประสบการณ์การให้บริการมากว่า 15 ปี ดิฉันและทีมงานพร้อมให้บริการคุณด้วยความจริงใจ ขับรถ <span className="text-amber-400 font-semibold">{ownerData.car}</span> ที่สะดวกสบายและปลอดภัยสำหรับทุกการเดินทางค่ะ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-center"
                        >
                            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">{t('owner.readyToServe')}</p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <a
                                    href={`tel:${ownerData.phone.replace(/-/g, '')}`}
                                    className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all text-base sm:text-lg"
                                >
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                    {t('owner.call')} {ownerData.phone}
                                </a>
                                <Link
                                    href="/cars"
                                    className="inline-flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/20 transition-all text-base sm:text-lg"
                                >
                                    <Car className="w-5 h-5 sm:w-6 sm:h-6" />
                                    {t('owner.viewAllCars')}
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
