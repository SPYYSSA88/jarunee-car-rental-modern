'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X, Phone, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import FAQModal from '@/components/ui/FAQModal';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isFAQOpen, setIsFAQOpen] = React.useState(false);
    const { t } = useLanguage();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/cars', label: t('nav.fleet') },
        { href: '/owner', label: t('nav.owner') },
        { href: '/#how-it-works', label: t('nav.howItWorks') },
        { href: '/#contact', label: t('nav.contact') },
        { href: '/blog', label: t('nav.blog') },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                    isScrolled
                        ? 'glass shadow-medium'
                        : 'bg-transparent'
                )}
            >
                <div className="container-custom">
                    <div className={cn(
                        "flex items-center justify-between transition-all duration-300",
                        isScrolled ? 'h-16' : 'h-20'
                    )}>
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <Image
                                    src="/images/logo.svg"
                                    alt="Jarunee Car Rental"
                                    width={150}
                                    height={48}
                                    className={cn(
                                        "transition-all duration-300 w-auto",
                                        isScrolled ? 'h-10' : 'h-12'
                                    )}
                                    priority
                                />
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-dark-900 hover:text-primary-500 font-medium transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            <LanguageSwitcher />
                            <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2"
                                onClick={() => setIsFAQOpen(true)}
                            >
                                <HelpCircle className="w-4 h-4" />
                                FAQ
                            </Button>
                            <a href="tel:+66894376117" className="inline-flex items-center justify-center gap-2 h-9 px-4 text-sm text-dark-900 hover:bg-neutral-100 rounded-lg font-medium transition-all duration-300">
                                <Phone className="w-4 h-4" />
                                {t('nav.phone')}
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-2">
                            <LanguageSwitcher />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6 text-dark-900" />
                                ) : (
                                    <Menu className="w-6 h-6 text-dark-900" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    y: isMobileMenuOpen ? 0 : -20,
                }}
                className={cn(
                    'fixed inset-0 z-40 bg-white md:hidden transition-all duration-300',
                    isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
                )}
                style={{ top: '80px' }}
            >
                <div className="container-custom py-8 flex flex-col space-y-6">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isMobileMenuOpen ? 1 : 0,
                                x: isMobileMenuOpen ? 0 : -20,
                            }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-display font-semibold text-dark-900 hover:text-primary-500 transition-colors block"
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}

                    <div className="pt-8 space-y-4 border-t border-neutral-200">
                        <Button
                            variant="ghost"
                            size="lg"
                            fullWidth
                            className="gap-2 justify-start"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsFAQOpen(true);
                            }}
                        >
                            <HelpCircle className="w-5 h-5" />
                            {t('nav.faq')}
                        </Button>
                        <Button variant="ghost" size="lg" fullWidth className="gap-2 justify-start">
                            <Phone className="w-5 h-5" />
                            {t('nav.phone')}
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Spacer for fixed navbar */}
            <div className="h-20" />

            {/* FAQ Modal */}
            <FAQModal isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} />
        </>
    );
}
