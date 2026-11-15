'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Fuel, Gauge, Star, Heart } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Vehicle } from '@/lib/constants/vehicles';

interface VehicleCardProps {
    vehicle: Vehicle;
    index?: number;
}

export default function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
    const [isFavorite, setIsFavorite] = React.useState(false);
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.95, delay: (index % 4) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
        >
            <Card hover padding="none" className="group overflow-hidden h-full flex flex-col active:scale-[0.99]">
                {/* Image Section */}
                <div className="relative aspect-car overflow-hidden bg-neutral-100">
                    <Image
                        src={vehicle.image}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        fill
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay Badge */}
                    {vehicle.premium && (
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                            <Badge variant="premium" size="sm">
                                Premium
                            </Badge>
                        </div>
                    )}

                    {/* Favorite Button - Larger touch target on mobile */}
                    <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-10 h-10 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 active:scale-95"
                    >
                        <Heart
                            className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-dark-900'
                                }`}
                        />
                    </button>

                    {/* Quick View Overlay - Hidden on mobile (no hover) */}
                    <div className="hidden md:flex absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                        <Link
                            href={`/cars/${vehicle.id}`}
                            className={buttonVariants({ variant: 'premium', size: 'md', className: 'shine' })}
                        >
                            {t('featured.quickView')}
                        </Link>
                    </div>

                    {/* Availability Badge */}
                    {!vehicle.available && (
                        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-10">
                            <Badge variant="danger">{t('vehicle.notAvailable')}</Badge>
                        </div>
                    )}
                </div>

                {/* Content Section - Reduced padding on mobile */}
                <div className="p-4 md:p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="font-display font-semibold text-base md:text-heading-md text-dark-900 group-hover:text-primary-500 transition-colors line-clamp-1">
                                    {vehicle.brand} {vehicle.model}
                                </h3>
                                <p className="text-xs md:text-body-sm text-neutral-600">{vehicle.year}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-primary-50 px-1.5 md:px-2 py-0.5 md:py-1 rounded-lg">
                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-primary-500 text-primary-500" />
                                <span className="text-xs md:text-sm font-semibold text-primary-700">
                                    {vehicle.rating}
                                </span>
                                <span className="text-[10px] md:text-xs text-neutral-600 hidden sm:inline">
                                    ({vehicle.reviews})
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-3 gap-1 md:gap-3 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-neutral-200">
                        <div className="flex flex-col md:flex-row items-center md:gap-2 text-center md:text-left">
                            <Users className="w-4 h-4 text-neutral-500 mb-1 md:mb-0" />
                            <span className="text-[10px] md:text-caption text-neutral-700 leading-none">{vehicle.seats} <span className="hidden md:inline">{t('featured.seats')}</span></span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:gap-2 text-center md:text-left">
                            <Fuel className="w-4 h-4 text-neutral-500 mb-1 md:mb-0" />
                            <span className="text-[10px] md:text-caption text-neutral-700 capitalize leading-none">{vehicle.fuel}</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:gap-2 text-center md:text-left">
                            <Gauge className="w-4 h-4 text-neutral-500 mb-1 md:mb-0" />
                            <span className="text-[10px] md:text-caption text-neutral-700 capitalize leading-none">{vehicle.transmission}</span>
                        </div>
                    </div>

                    <div className="mb-3 md:mb-4 hidden sm:block">
                        <div className="flex flex-wrap gap-1.5">
                            {vehicle.features.slice(0, 2).map((feature) => (
                                <Badge key={feature} variant="default" className="text-[10px] md:text-xs px-1.5 py-0.5">
                                    {feature}
                                </Badge>
                            ))}
                            {vehicle.features.length > 2 && (
                                <Badge variant="default" className="text-[10px] md:text-xs px-1.5 py-0.5">
                                    +{vehicle.features.length - 2} {t('vehicle.more')}
                                </Badge>
                            )}
                        </div>
                    </div>

                    {/* Price & CTA - เปลี่ยนเป็นราคาต่อกิโลเมตร */}
                    <div className="mt-auto pt-3 md:pt-4 border-t border-neutral-200">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 gap-2">
                            <div>
                                <p className="text-[10px] md:text-caption text-neutral-600 hidden md:block">{t('vehicle.priceStart')}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="font-display font-bold text-lg md:text-heading-lg text-dark-900">
                                        ฿{vehicle.seats > 5 ? '15' : '10'}
                                    </span>
                                    <span className="text-xs md:text-body-sm text-neutral-600"> /{t('vehicle.perKm')}</span>
                                </div>
                            </div>
                            <Badge variant={vehicle.seats > 5 ? 'warning' : 'success'} className="w-fit text-[10px] md:text-xs px-1.5 py-0.5 md:hidden">
                                {vehicle.seats > 5 ? `🚐 Van` : `🚗 Sedan`}
                            </Badge>
                            <Badge variant={vehicle.seats > 5 ? 'warning' : 'success'} size="sm" className="hidden md:inline-flex mt-1">
                                {vehicle.seats > 5 ? `🚐 ${t('vehicle.type.van')}` : `🚗 ${t('vehicle.type.small')}`}
                            </Badge>
                        </div>

                        <Link href={`/cars/${vehicle.id}`} className={buttonVariants({ variant: 'outline', size: 'md', fullWidth: true })}>
                            {t('featured.details')}
                        </Link>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
