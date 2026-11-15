'use client';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import {
    Car,
    Shield,
    Clock,
    Star,
    Users,
    MapPin,
    Phone,
    Mail,
    Award,
    Heart,
    Target,
    Sparkles,
    CheckCircle2,
    Calendar
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
    const { t } = useLanguage();

    const stats = [
        { number: '15+', label: t('about.stat.experience'), icon: Calendar },
        { number: '500+', label: t('about.stat.customers'), icon: Users },
        { number: '9', label: t('about.stat.cars'), icon: Car },
        { number: '4.9', label: t('about.stat.rating'), icon: Star },
    ];

    const values = [
        {
            icon: Heart,
            title: t('about.value1.title'),
            description: t('about.value1.desc')
        },
        {
            icon: Shield,
            title: t('about.value2.title'),
            description: t('about.value2.desc')
        },
        {
            icon: Target,
            title: t('about.value3.title'),
            description: t('about.value3.desc')
        },
        {
            icon: Sparkles,
            title: t('about.value4.title'),
            description: t('about.value4.desc')
        }
    ];

    const services = [
        t('about.service1'),
        t('about.service2'),
        t('about.service3'),
        t('about.service4'),
        t('about.service5'),
        t('about.service6'),
        t('about.service7'),
        t('about.service8')
    ];

    const milestones = [
        { year: '2009', event: t('about.timeline2009') },
        { year: '2012', event: t('about.timeline2012') },
        { year: '2016', event: t('about.timeline2016') },
        { year: '2020', event: t('about.timeline2020') },
        { year: '2024', event: t('about.timeline2024') },
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-thai-subtle">
                {/* Hero Section */}
                <section className="relative bg-gradient-premium py-20 md:py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/thai-pattern-green.svg')] opacity-5" />
                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                                {t('about.heroBadge')}
                            </span>
                            <h1 className="font-display text-display-md md:text-display-lg mb-6">
                                {t('about.heroTitle')} <span className="text-primary-300">Jarunee</span> Car Rental
                            </h1>
                            <p className="text-body-lg text-neutral-200 max-w-3xl mx-auto leading-relaxed">
                                {t('about.heroDescription')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 -mt-10 relative z-20">
                    <div className="container-custom">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-2xl p-6 text-center shadow-premium hover:shadow-premium-hover transition-all duration-300"
                                >
                                    <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                                    <div className="font-display text-heading-lg md:text-display-sm text-dark-900">
                                        {stat.number}
                                    </div>
                                    <div className="text-body-sm text-neutral-600">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-16 md:py-24">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Image Side */}
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-linear-to-br from-primary-100 to-primary-50 flex items-center justify-center overflow-hidden">
                                    <div className="text-center p-8">
                                        <div className="w-32 h-32 rounded-full bg-primary-500 mx-auto mb-6 flex items-center justify-center">
                                            <span className="text-6xl">👩‍✈️</span>
                                        </div>
                                        <h3 className="font-display text-heading-lg text-dark-900 mb-2">
                                            {t('about.ownerName')}
                                        </h3>
                                        <p className="text-body-md text-neutral-600">
                                            {t('about.ownerRole')}
                                        </p>
                                    </div>
                                </div>
                                {/* Decorative */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-2xl -z-10" />
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-yellow/20 rounded-full -z-10" />
                            </div>

                            {/* Content Side */}
                            <div>
                                <span className="text-primary-500 font-medium text-body-sm uppercase tracking-wider">
                                    {t('about.storyBadge')}
                                </span>
                                <h2 className="font-display text-heading-xl md:text-display-sm text-dark-900 mt-2 mb-6">
                                    {t('about.storyTitle')}
                                </h2>
                                <div className="space-y-4 text-body-md text-neutral-700 leading-relaxed">
                                    <p>
                                        <strong>Jarunee Car Rental</strong> {t('about.storyText1')}
                                    </p>
                                    <p>
                                        {t('about.storyText2')}
                                    </p>
                                    <p>
                                        {t('about.storyText3')}
                                        <strong className="text-primary-600"> &quot;{t('about.storyMotto')}&quot;</strong>
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Link
                                        href="/cars"
                                        className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-600 transition-colors"
                                    >
                                        <Car className="w-5 h-5" />
                                        {t('about.viewCars')}
                                    </Link>
                                    <Link
                                        href="/#contact"
                                        className="inline-flex items-center gap-2 border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-primary-50 transition-colors"
                                    >
                                        <Phone className="w-5 h-5" />
                                        {t('about.contactUs')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="text-primary-500 font-medium text-body-sm uppercase tracking-wider">
                                {t('about.valuesBadge')}
                            </span>
                            <h2 className="font-display text-heading-xl md:text-display-sm text-dark-900 mt-2 mb-4">
                                {t('about.valuesTitle')}
                            </h2>
                            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
                                {t('about.valuesDescription')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-2xl p-6 hover:shadow-premium transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                                        <value.icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-display text-heading-md text-dark-900 mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-body-sm text-neutral-600">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 md:py-24">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-primary-500 font-medium text-body-sm uppercase tracking-wider">
                                    {t('about.servicesBadge')}
                                </span>
                                <h2 className="font-display text-heading-xl md:text-display-sm text-dark-900 mt-2 mb-6">
                                    {t('about.servicesTitle')}
                                </h2>
                                <p className="text-body-lg text-neutral-600 mb-8">
                                    {t('about.servicesDescription')}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                                            <span className="text-body-md text-dark-900">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-8">
                                <h3 className="font-display text-heading-lg text-dark-900 mb-6 flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-primary-500" />
                                    {t('about.available24')}
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-xl">
                                        <Phone className="w-6 h-6 text-primary-500 mt-1" />
                                        <div>
                                            <div className="font-semibold text-dark-900">{t('about.phone')}</div>
                                            <a href="tel:089-437-6117" className="text-primary-600 hover:underline text-lg font-medium">
                                                089-437-6117
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                                        <div className="w-6 h-6 mt-1 flex items-center justify-center">
                                            <span className="text-xl">💬</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-dark-900">LINE Official</div>
                                            <span className="text-green-600 font-medium">@jaruneecar</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl">
                                        <Mail className="w-6 h-6 text-neutral-500 mt-1" />
                                        <div>
                                            <div className="font-semibold text-dark-900">{t('about.email')}</div>
                                            <span className="text-neutral-600">jaruneecarrental@gmail.com</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl">
                                        <MapPin className="w-6 h-6 text-neutral-500 mt-1" />
                                        <div>
                                            <div className="font-semibold text-dark-900">{t('about.serviceArea')}</div>
                                            <span className="text-neutral-600">{t('about.serviceAreaText')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-16 md:py-24 bg-dark-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="text-primary-400 font-medium text-body-sm uppercase tracking-wider">
                                {t('about.timelineBadge')}
                            </span>
                            <h2 className="font-display text-heading-xl md:text-display-sm text-white mt-2 mb-4">
                                {t('about.timelineTitle')}
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center font-display font-bold text-lg">
                                            {milestone.year}
                                        </div>
                                        {index < milestones.length - 1 && (
                                            <div className="w-0.5 h-full bg-primary-500/30 mt-2" />
                                        )}
                                    </div>
                                    <div className="pt-4 pb-8">
                                        <p className="text-body-lg text-neutral-200">
                                            {milestone.event}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24">
                    <div className="container-custom">
                        <div className="glass rounded-3xl p-8 md:p-12 text-center bg-linear-to-r from-primary-50 to-accent-yellow/10">
                            <Award className="w-16 h-16 text-primary-500 mx-auto mb-6" />
                            <h2 className="font-display text-heading-xl md:text-display-sm text-dark-900 mb-4">
                                {t('about.ctaTitle')}
                            </h2>
                            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-8">
                                {t('about.ctaDescription')}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/cars"
                                    className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors shadow-premium"
                                >
                                    <Car className="w-5 h-5" />
                                    {t('about.ctaButton')}
                                </Link>
                                <a
                                    href="tel:089-437-6117"
                                    className="inline-flex items-center gap-2 bg-white border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    {t('about.ctaCall')} 089-437-6117
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
