'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
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

interface FilterSidebarProps {
    onFilterChange?: (filters: FilterState) => void;
}

// FilterContent component extracted outside to prevent re-creation during render
interface FilterContentProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
    onFilterChange?: (filters: FilterState) => void;
    activeFiltersCount: number;
    clearFilters: () => void;
    toggleArrayFilter: (key: keyof FilterState, value: string) => void;
}

const brands = ['Toyota', 'Ford', 'Isuzu', 'Hyundai', 'แท็กซี่', 'รถตู้'];
const types = [
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'van', label: 'Van' },
    { value: 'luxury', label: 'Luxury' },
];
const fuelTypes = [
    { value: 'lpg', label: 'LPG' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'diesel', label: 'Diesel' },
];

function FilterContent({
    filters,
    setFilters,
    onFilterChange,
    activeFiltersCount,
    clearFilters,
    toggleArrayFilter,
}: FilterContentProps) {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-heading-md">Filters</h3>
                {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                        Clear All
                    </Button>
                )}
            </div>

            {/* Active Filters Count */}
            {activeFiltersCount > 0 && (
                <Badge variant="primary">
                    {activeFiltersCount} {activeFiltersCount === 1 ? 'filter' : 'filters'} active
                </Badge>
            )}

            {/* Price Range */}
            <div className="space-y-3">
                <label className="font-medium text-dark-900">Price Range (per day)</label>
                <div className="space-y-3">
                    <input
                        type="range"
                        min="0"
                        max="8000"
                        step="500"
                        value={filters.priceRange[1]}
                        onChange={(e) => {
                            const newFilters = { ...filters, priceRange: [0, Number(e.target.value)] };
                            setFilters(newFilters);
                            onFilterChange?.(newFilters);
                        }}
                        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                    />
                    <div className="flex items-center justify-between text-sm text-neutral-600">
                        <span>฿0</span>
                        <span className="font-semibold text-primary-600">
                            ฿{filters.priceRange[1].toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>

            {/* Vehicle Type */}
            <div className="space-y-3">
                <label className="font-medium text-dark-900">Vehicle Type</label>
                <div className="space-y-2">
                    {types.map((type) => (
                        <label key={type.value} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={filters.types.includes(type.value)}
                                onChange={() => toggleArrayFilter('types', type.value)}
                                className="w-5 h-5 rounded border-neutral-300 text-primary-500 focus:ring-primary-500 cursor-pointer"
                            />
                            <span className="text-body-md text-dark-900 group-hover:text-primary-500 transition-colors">
                                {type.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Brand */}
            <div className="space-y-3">
                <label className="font-medium text-dark-900">Brand</label>
                <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={filters.brands.includes(brand)}
                                onChange={() => toggleArrayFilter('brands', brand)}
                                className="w-5 h-5 rounded border-neutral-300 text-primary-500 focus:ring-primary-500 cursor-pointer"
                            />
                            <span className="text-body-md text-dark-900 group-hover:text-primary-500 transition-colors">
                                {brand}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Transmission */}
            <div className="space-y-3">
                <label className="font-medium text-dark-900">Transmission</label>
                <div className="grid grid-cols-2 gap-2">
                    {['all', 'auto', 'manual'].map((trans) => (
                        <button
                            key={trans}
                            onClick={() => {
                                const newFilters = { ...filters, transmission: trans };
                                setFilters(newFilters);
                                onFilterChange?.(newFilters);
                            }}
                            className={cn(
                                'px-4 py-2 rounded-lg border-2 font-medium capitalize transition-all duration-300',
                                filters.transmission === trans
                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                            )}
                        >
                            {trans}
                        </button>
                    ))}
                </div>
            </div>

            {/* Seats */}
            <div className="space-y-3">
                <label className="font-medium text-dark-900">Seats</label>
                <div className="grid grid-cols-3 gap-2">
                    {['all', '4', '5', '7', '10', '11'].map((seat) => (
                        <button
                            key={seat}
                            onClick={() => {
                                const newFilters = { ...filters, seats: seat };
                                setFilters(newFilters);
                                onFilterChange?.(newFilters);
                            }}
                            className={cn(
                                'px-4 py-2 rounded-lg border-2 font-medium capitalize transition-all duration-300',
                                filters.seats === seat
                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                            )}
                        >
                            {seat === 'all' ? 'All' : seat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Fuel Type */}
            <div className="space-y-3">
                <label className="font-medium text-dark-900">Fuel Type</label>
                <div className="space-y-2">
                    {fuelTypes.map((fuel) => (
                        <label key={fuel.value} className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={filters.fuel.includes(fuel.value)}
                                onChange={() => toggleArrayFilter('fuel', fuel.value)}
                                className="w-5 h-5 rounded border-neutral-300 text-primary-500 focus:ring-primary-500 cursor-pointer"
                            />
                            <span className="text-body-md text-dark-900 group-hover:text-primary-500 transition-colors">
                                {fuel.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [filters, setFilters] = useState<FilterState>({
        priceRange: [0, 8000],
        brands: [],
        types: [],
        transmission: 'all',
        seats: 'all',
        fuel: [],
    });

    const toggleArrayFilter = useCallback((key: keyof FilterState, value: string) => {
        const currentArray = filters[key] as string[];
        const newArray = currentArray.includes(value)
            ? currentArray.filter(v => v !== value)
            : [...currentArray, value];

        const newFilters = { ...filters, [key]: newArray };
        setFilters(newFilters);
        onFilterChange?.(newFilters);
    }, [filters, onFilterChange]);

    const clearFilters = useCallback(() => {
        const resetFilters: FilterState = {
            priceRange: [0, 8000],
            brands: [],
            types: [],
            transmission: 'all',
            seats: 'all',
            fuel: [],
        };
        setFilters(resetFilters);
        onFilterChange?.(resetFilters);
    }, [onFilterChange]);

    const activeFiltersCount =
        (filters.priceRange[1] < 8000 ? 1 : 0) +
        filters.brands.length +
        filters.types.length +
        filters.fuel.length +
        (filters.transmission !== 'all' ? 1 : 0) +
        (filters.seats !== 'all' ? 1 : 0);

    return (
        <>
            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-6 left-6 z-40">
                <Button
                    variant="premium"
                    size="lg"
                    onClick={() => setIsMobileOpen(true)}
                    className="shadow-xl gap-2"
                >
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters
                    {activeFiltersCount > 0 && (
                        <Badge variant="dark" size="sm">
                            {activeFiltersCount}
                        </Badge>
                    )}
                </Button>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block glass rounded-2xl p-6 sticky top-24">
                <FilterContent
                    filters={filters}
                    setFilters={setFilters}
                    onFilterChange={onFilterChange}
                    activeFiltersCount={activeFiltersCount}
                    clearFilters={clearFilters}
                    toggleArrayFilter={toggleArrayFilter}
                />
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => setIsMobileOpen(false)}
                            className="fixed inset-0 bg-dark-900/50 backdrop-blur-sm z-40 lg:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 overflow-y-auto lg:hidden"
                        >
                            <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between z-10">
                                <h3 className="font-display font-semibold text-heading-md">Filters</h3>
                                <button
                                    onClick={() => setIsMobileOpen(false)}
                                    className="w-10 h-10 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="p-6">
                                <FilterContent
                                    filters={filters}
                                    setFilters={setFilters}
                                    onFilterChange={onFilterChange}
                                    activeFiltersCount={activeFiltersCount}
                                    clearFilters={clearFilters}
                                    toggleArrayFilter={toggleArrayFilter}
                                />
                            </div>
                            <div className="sticky bottom-0 bg-white border-t border-neutral-200 p-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    Show Results
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
