'use client';

import { useState } from 'react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Calendar,
    Clock,
    ArrowRight,
    Search,
    Newspaper,
    Lightbulb,
    MapPin,
    TrendingUp,
    BookOpen,
    Star,
    Sparkles,
    Phone,
    MessageCircle,
    ChevronRight
} from 'lucide-react';
import { blogArticles, blogCategories, getFeaturedArticles } from '@/lib/constants/blog';
import { cn } from '@/lib/utils/cn';

const categoryIcons: Record<string, React.ElementType> = {
    news: Newspaper,
    tips: Lightbulb,
    travel: MapPin,
};

const categoryColors: Record<string, { bg: string; text: string; gradient: string }> = {
    news: { bg: 'bg-blue-500', text: 'text-blue-600', gradient: 'from-blue-500 to-indigo-600' },
    tips: { bg: 'bg-amber-500', text: 'text-amber-600', gradient: 'from-amber-500 to-orange-600' },
    travel: { bg: 'bg-emerald-500', text: 'text-emerald-600', gradient: 'from-emerald-500 to-teal-600' },
};

const articleImages: Record<string, string> = {
    'chiang-mai-travel-guide-2026': '/images/destinations/doi-suthep.png',
    'car-rental-tips-2026': '/images/vehicles/camry.png',
    'toyota-alphard-luxury-van': '/images/vehicles/alphard.png',
    'doi-inthanon-trip-2026': '/images/destinations/doi-inthanon.png',
    'airport-transfer-guide-2026': '/images/vehicles/taxi.png',
    'van-rental-for-groups-2026': '/images/vehicles/vip-van.png',
};

const promotions = [
    {
        id: 1,
        title: 'รับส่งสนามบิน',
        description: 'บริการรับส่งสนามบินเชียงใหม่',
        discount: 'เริ่ม 300฿',
        icon: '✈️',
        gradient: 'from-emerald-400 via-emerald-500 to-teal-600',
    },
    {
        id: 2,
        title: 'เหมารายวัน',
        description: 'ทัวร์เชียงใหม่พร้อมคนขับ',
        discount: '1,500฿/วัน',
        icon: '🚗',
        gradient: 'from-blue-400 via-blue-500 to-indigo-600',
    },
    {
        id: 3,
        title: 'รถตู้ VIP',
        description: 'หมู่คณะ 10 ที่นั่ง',
        discount: '2,800฿/วัน',
        icon: '🚐',
        gradient: 'from-purple-400 via-purple-500 to-pink-600',
    },
];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = blogArticles.filter(article => {
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredArticles = getFeaturedArticles();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                {/* Hero Section - Premium Design */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/hero-bg.png"
                            alt="Chiang Mai Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-full blur-[80px]" />
                    </div>

                    {/* Content */}
                    <div className="container-custom relative z-10 py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center">
                                    <BookOpen className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-white font-medium">บทความ & เคล็ดลับการเดินทาง</span>
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            >
                                <span className="text-white drop-shadow-2xl">บล็อก</span>
                                <br />
                                <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.5)]">
                                    Jarunee Car Rental
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
                            >
                                รวมบทความแนะนำสถานที่ท่องเที่ยว เคล็ดลับการเช่ารถ
                                <br className="hidden md:block" />
                                และข้อมูลที่เป็นประโยชน์สำหรับการเดินทางในเชียงใหม่
                            </motion.p>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap justify-center gap-6 md:gap-10"
                            >
                                {[
                                    { label: 'บทความ', value: blogArticles.length },
                                    { label: 'หมวดหมู่', value: 3 },
                                    { label: 'ผู้อ่าน', value: '5,000+' },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                                        <p className="text-white/60 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
                </section>

                {/* Promotions Section - Luxury Cards */}
                <section className="py-12 -mt-16 relative z-20">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-3 gap-5">
                            {promotions.map((promo, index) => (
                                <motion.a
                                    key={promo.id}
                                    href="tel:089-437-6117"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index, type: "spring" }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={cn(
                                        "relative overflow-hidden rounded-2xl p-6 text-white shadow-2xl cursor-pointer group",
                                        `bg-gradient-to-br ${promo.gradient}`
                                    )}
                                >
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                    {/* Pattern */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />

                                    <div className="relative z-10 flex items-center justify-between">
                                        <div>
                                            <span className="text-4xl mb-2 block">{promo.icon}</span>
                                            <h3 className="font-bold text-xl mb-1">{promo.title}</h3>
                                            <p className="text-white/70 text-sm">{promo.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold">{promo.discount}</p>
                                            <span className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-white transition-colors">
                                                โทรจอง <ChevronRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Articles - Premium */}
                {featuredArticles.length > 0 && (
                    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
                        <div className="container-custom">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-between mb-10"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 rotate-3">
                                        <Star className="w-7 h-7 text-white" fill="white" />
                                    </div>
                                    <div>
                                        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-800">บทความแนะนำ</h2>
                                        <p className="text-slate-500">คัดสรรมาให้คุณโดยเฉพาะ</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {featuredArticles.map((article, index) => (
                                    <motion.article
                                        key={article.id}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
                                        whileHover={{ y: -10 }}
                                        className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
                                    >
                                        <Link href={`/blog/${article.slug}`}>
                                            {/* Image */}
                                            <div className="aspect-[16/9] relative overflow-hidden">
                                                <Image
                                                    src={articleImages[article.slug] || '/images/hero-bg.png'}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                                {/* Featured Badge */}
                                                <div className="absolute top-5 left-5">
                                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-sm font-bold shadow-lg">
                                                        <Star className="w-4 h-4" fill="currentColor" />
                                                        แนะนำ
                                                    </span>
                                                </div>

                                                {/* Category */}
                                                <div className="absolute top-5 right-5">
                                                    <span className={cn("px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r", categoryColors[article.category].gradient)}>
                                                        {blogCategories.find(c => c.value === article.category)?.label}
                                                    </span>
                                                </div>

                                                {/* Title on Image */}
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white line-clamp-2 drop-shadow-lg group-hover:text-primary-300 transition-colors">
                                                        {article.title}
                                                    </h2>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <p className="text-slate-600 mb-5 line-clamp-2 leading-relaxed">
                                                    {article.excerpt}
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                                        <span className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                                                            <Calendar className="w-4 h-4" />
                                                            {formatDate(article.publishedAt)}
                                                        </span>
                                                        <span className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                                                            <Clock className="w-4 h-4" />
                                                            {article.readTime} นาที
                                                        </span>
                                                    </div>

                                                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-primary-500/30 group-hover:shadow-xl group-hover:shadow-primary-500/40 transition-all">
                                                        อ่านเพิ่มเติม
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Filter Bar */}
                <section className="py-6 sticky top-16 z-30 bg-white/95 backdrop-blur-xl border-y border-slate-200 shadow-sm">
                    <div className="container-custom">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                {blogCategories.map((category) => {
                                    const isSelected = selectedCategory === category.value;
                                    const IconComponent = categoryIcons[category.value];

                                    return (
                                        <motion.button
                                            key={category.value}
                                            onClick={() => setSelectedCategory(category.value)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={cn(
                                                'inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300',
                                                isSelected
                                                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                                            )}
                                        >
                                            {IconComponent && <IconComponent className="w-4 h-4" />}
                                            {category.label}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="ค้นหาบทความ..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:border-primary-500 focus:bg-white focus:outline-none transition-all font-medium"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="py-16 bg-slate-50">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-10"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30 -rotate-3">
                                <TrendingUp className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-800">บทความทั้งหมด</h2>
                                <p className="text-slate-500">พบ {filteredArticles.length} บทความ</p>
                            </div>
                        </motion.div>

                        {filteredArticles.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredArticles.map((article, index) => (
                                    <motion.article
                                        key={article.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
                                        whileHover={{ y: -10 }}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
                                    >
                                        <Link href={`/blog/${article.slug}`}>
                                            <div className="aspect-[16/10] relative overflow-hidden">
                                                <Image
                                                    src={articleImages[article.slug] || '/images/hero-bg.png'}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                                <div className="absolute top-4 left-4">
                                                    <span className={cn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r", categoryColors[article.category].gradient)}>
                                                        {(() => {
                                                            const IconComponent = categoryIcons[article.category] || Newspaper;
                                                            return <IconComponent className="w-3.5 h-3.5" />;
                                                        })()}
                                                        {blogCategories.find(c => c.value === article.category)?.label}
                                                    </span>
                                                </div>

                                                <div className="absolute top-4 right-4">
                                                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {article.readTime} นาที
                                                    </span>
                                                </div>

                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="font-display font-bold text-lg text-white line-clamp-2 drop-shadow-lg group-hover:text-primary-300 transition-colors">
                                                        {article.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="p-5">
                                                <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                                                    {article.excerpt}
                                                </p>

                                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                                    <span className="text-sm text-slate-500 flex items-center gap-2">
                                                        <Calendar className="w-4 h-4" />
                                                        {formatDate(article.publishedAt)}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1 text-primary-600 font-bold text-sm group-hover:gap-2 transition-all">
                                                        อ่านต่อ
                                                        <ArrowRight className="w-4 h-4" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.article>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20 bg-white rounded-3xl shadow-lg"
                            >
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
                                    <Search className="w-12 h-12 text-slate-400" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">
                                    ไม่พบบทความ
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่น
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory('all');
                                        setSearchQuery('');
                                    }}
                                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    ดูบทความทั้งหมด
                                </button>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Contact CTA - Luxury Design */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/destinations/mon-jam.png"
                            alt="Contact Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-900/95" />
                    </div>

                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
                        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-[80px]" />
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                                    <Sparkles className="w-4 h-4 text-amber-400" />
                                    <span className="text-white font-medium">บริการ 24 ชั่วโมง</span>
                                </div>

                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                    พร้อมวางแผน
                                    <br />
                                    <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                                        การเดินทางของคุณ?
                                    </span>
                                </h2>

                                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                                    ติดต่อเราวันนี้เพื่อรับคำแนะนำเส้นทางและจองรถเช่า
                                    ราคายุติธรรม บริการประทับใจ
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="tel:089-437-6117"
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-white/90 transition-all shadow-2xl hover:shadow-white/20"
                                    >
                                        <Phone className="w-6 h-6" />
                                        089-437-6117
                                    </a>
                                    <a
                                        href="https://line.me/ti/p/~0894376117"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00B900] text-white font-bold text-lg rounded-2xl hover:bg-[#00A000] transition-all shadow-2xl hover:shadow-green-500/30"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        LINE: 0894376117
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
