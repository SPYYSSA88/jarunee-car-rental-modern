'use client';

import React from 'react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import FilterSidebar from '@/components/features/FilterSidebar';
import VehicleCard from '@/components/features/VehicleCard';
import { vehicles } from '@/lib/constants/vehicles';
import { Button } from '@/components/ui/Button';
import { Grid, List, ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

// Define filter type
interface FilterState {
    priceRange: number[];
    brands: string[];
    types: string[];
    transmission: string;
    seats: string;
    fuel: string[];
}

function sortVehicles(list: typeof vehicles, sortType: string) {
    const sorted = [...list];
    switch (sortType) {
        case 'price-low':
            sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'popular':
            sorted.sort((a, b) => b.reviews - a.reviews);
            break;
        default:
            break;
    }
    return sorted;
}

export default function CarsPage() {
    const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = React.useState('popular');
    const [filteredVehicles, setFilteredVehicles] = React.useState(() => sortVehicles(vehicles, 'popular'));

    const handleFilterChange = (filters: FilterState) => {
        let filtered = [...vehicles];

        // Price filter
        filtered = filtered.filter(v => v.pricePerDay <= filters.priceRange[1]);

        // Brand filter
        if (filters.brands.length > 0) {
            filtered = filtered.filter(v => filters.brands.includes(v.brand));
        }

        // Type filter
        if (filters.types.length > 0) {
            filtered = filtered.filter(v => filters.types.includes(v.type));
        }

        // Transmission filter
        if (filters.transmission !== 'all') {
            filtered = filtered.filter(v => v.transmission === filters.transmission);
        }

        // Seats filter
        if (filters.seats !== 'all') {
            filtered = filtered.filter(v => v.seats === Number(filters.seats));
        }

        // Fuel filter
        if (filters.fuel.length > 0) {
            filtered = filtered.filter(v => filters.fuel.includes(v.fuel));
        }

        setFilteredVehicles(sortVehicles(filtered, sortBy));
    };

    const handleSort = (sortType: string) => {
        setSortBy(sortType);
        setFilteredVehicles(prev => sortVehicles(prev, sortType));
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-thai-subtle">
                {/* Page Header */}
                <div className="bg-gradient-premium py-16">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center text-white"
                        >
                            <h1 className="font-display text-display-md md:text-display-lg mb-4">
                                Our Premium Fleet
                            </h1>
                            <p className="text-body-lg text-neutral-200 max-w-2xl mx-auto">
                                Choose from our extensive collection of luxury vehicles. Every car is meticulously maintained and ready for your journey.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container-custom py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <FilterSidebar onFilterChange={handleFilterChange} />
                        </div>

                        {/* Results */}
                        <div className="lg:col-span-3">
                            {/* Toolbar */}
                            <div className="glass rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <p className="text-body-md text-dark-900">
                                        <span className="font-semibold">{filteredVehicles.length}</span> vehicles available
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    {/* Sort Dropdown */}
                                    <div className="relative flex-1 sm:flex-initial">
                                        <select
                                            value={sortBy}
                                            onChange={(e) => handleSort(e.target.value)}
                                            className="w-full sm:w-auto appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-2 pr-10 text-body-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer"
                                        >
                                            <option value="popular">Most Popular</option>
                                            <option value="price-low">Price: Low to High</option>
                                            <option value="price-high">Price: High to Low</option>
                                            <option value="rating">Highest Rated</option>
                                        </select>
                                        <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                                    </div>

                                    {/* View Toggle */}
                                    <div className="hidden sm:flex items-center gap-1 bg-neutral-100 rounded-lg p-1">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={cn(
                                                'p-2 rounded-md transition-all duration-300',
                                                viewMode === 'grid'
                                                    ? 'bg-white shadow-soft text-primary-500'
                                                    : 'text-neutral-500 hover:text-dark-900'
                                            )}
                                        >
                                            <Grid className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={cn(
                                                'p-2 rounded-md transition-all duration-300',
                                                viewMode === 'list'
                                                    ? 'bg-white shadow-soft text-primary-500'
                                                    : 'text-neutral-500 hover:text-dark-900'
                                            )}
                                        >
                                            <List className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle Grid */}
                            {filteredVehicles.length > 0 ? (
                                <div
                                    className={cn(
                                        'grid gap-6',
                                        viewMode === 'grid'
                                            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                                            : 'grid-cols-1'
                                    )}
                                >
                                    {filteredVehicles.map((vehicle, index) => (
                                        <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-100 flex items-center justify-center">
                                        <Grid className="w-10 h-10 text-neutral-400" />
                                    </div>
                                    <h3 className="font-display text-heading-lg text-dark-900 mb-2">
                                        No vehicles found
                                    </h3>
                                    <p className="text-body-md text-neutral-600 mb-6">
                                        Try adjusting your filters to see more results
                                    </p>
                                    <Button variant="primary" onClick={() => window.location.reload()}>
                                        Reset Filters
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
