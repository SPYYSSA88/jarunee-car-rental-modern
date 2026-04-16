'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Star,
    Users,
    Fuel,
    Gauge,
    Zap,
    Check,
    ArrowLeft,
    Share2,
    Heart,
    MapPin,
} from 'lucide-react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import ImageGallery from '@/components/features/ImageGallery';
import BookingCard from '@/components/features/BookingCard';
import VehicleCard from '@/components/features/VehicleCard';
import { Button, buttonVariants } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { vehicles } from '@/lib/constants/vehicles';

export default function CarDetailPage() {
    const params = useParams();
    const vehicleId = params.id as string;

    const vehicle = vehicles.find(v => v.id === vehicleId);
    const similarVehicles = vehicles
        .filter(v => v.id !== vehicleId && v.type === vehicle?.type)
        .slice(0, 3);

    if (!vehicle) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen bg-thai-subtle flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="font-display text-display-md text-dark-900 mb-4">Vehicle Not Found</h1>
                        <p className="text-body-lg text-neutral-600 mb-8">The vehicle you&apos;re looking for doesn&apos;t exist.</p>
                        <Link href="/cars" className={buttonVariants({ variant: 'primary' })}>
                            Browse All Vehicles
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const specs = [
        { icon: Users, label: 'Seats', value: `${vehicle.seats} Passengers` },
        { icon: Gauge, label: 'Transmission', value: vehicle.transmission === 'auto' ? 'Automatic' : 'Manual' },
        { icon: Fuel, label: 'Fuel Type', value: vehicle.fuel.charAt(0).toUpperCase() + vehicle.fuel.slice(1) },
        { icon: Zap, label: 'Horsepower', value: `${vehicle.horsepower} HP` },
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-thai-subtle pb-20">
                {/* Breadcrumb */}
                <div className="bg-white border-b border-neutral-200">
                    <div className="container-custom py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Link href="/cars" className={buttonVariants({ variant: 'ghost', size: 'sm', className: 'gap-2' })}>
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Fleet
                                </Link>
                                <div className="hidden sm:flex items-center gap-2 text-body-sm text-neutral-500">
                                    <Link href="/" className="hover:text-primary-500">Home</Link>
                                    <span>/</span>
                                    <Link href="/cars" className="hover:text-primary-500">Cars</Link>
                                    <span>/</span>
                                    <span className="text-dark-900">{vehicle.brand} {vehicle.model}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Share2 className="w-4 h-4" />
                                    <span className="hidden sm:inline">Share</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-2">
                                    <Heart className="w-4 h-4" />
                                    <span className="hidden sm:inline">Save</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container-custom py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Image Gallery */}
                            <ImageGallery images={vehicle.images} alt={`${vehicle.brand} ${vehicle.model}`} />

                            {/* Header Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            {vehicle.premium && <Badge variant="premium">Premium</Badge>}
                                            <Badge variant="default">{vehicle.year}</Badge>
                                        </div>
                                        <h1 className="font-display text-display-sm md:text-display-md text-dark-900">
                                            {vehicle.brand} {vehicle.model}
                                        </h1>
                                    </div>
                                    <div className="flex items-center gap-1 bg-primary-50 px-3 py-2 rounded-xl">
                                        <Star className="w-5 h-5 fill-primary-500 text-primary-500" />
                                        <span className="font-semibold text-primary-700">{vehicle.rating}</span>
                                        <span className="text-neutral-600">({vehicle.reviews} reviews)</span>
                                    </div>
                                </div>
                                <p className="text-body-lg text-neutral-600">{vehicle.description}</p>
                            </motion.div>

                            {/* Specifications */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Card>
                                    <h2 className="font-display font-semibold text-heading-lg mb-6">Specifications</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {specs.map((spec) => (
                                            <div key={spec.label} className="text-center p-4 rounded-xl bg-neutral-50">
                                                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-100 flex items-center justify-center">
                                                    <spec.icon className="w-6 h-6 text-primary-600" />
                                                </div>
                                                <p className="text-caption text-neutral-500 mb-1">{spec.label}</p>
                                                <p className="font-semibold text-dark-900">{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-neutral-200">
                                        <div className="flex items-center justify-between">
                                            <span className="text-neutral-600">Fuel Consumption</span>
                                            <span className="font-semibold text-dark-900">{vehicle.fuelConsumption}</span>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Card>
                                    <h2 className="font-display font-semibold text-heading-lg mb-6">Features & Amenities</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {vehicle.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-body-sm text-dark-900">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Pickup Locations */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Card>
                                    <h2 className="font-display font-semibold text-heading-lg mb-6">Pickup Locations</h2>
                                    <div className="space-y-3">
                                        {[
                                            'Bangkok - Suvarnabhumi International Airport',
                                            'Bangkok - Don Mueang International Airport',
                                            'Bangkok - City Center (Sukhumvit)',
                                            'Phuket - International Airport',
                                        ].map((location) => (
                                            <div
                                                key={location}
                                                className="flex items-center gap-3 p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all cursor-pointer"
                                            >
                                                <MapPin className="w-5 h-5 text-primary-500" />
                                                <span className="text-body-md text-dark-900">{location}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Booking Card */}
                        <div className="lg:col-span-1">
                            <BookingCard />
                        </div>
                    </div>

                    {/* Similar Vehicles */}
                    {similarVehicles.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-16"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="font-display font-semibold text-heading-xl text-dark-900">
                                    Similar Vehicles
                                </h2>
                                <Link href="/cars" className={buttonVariants({ variant: 'outline' })}>
                                    View All
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {similarVehicles.map((v, i) => (
                                    <VehicleCard key={v.id} vehicle={v} index={i} />
                                ))}
                            </div>
                        </motion.section>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
