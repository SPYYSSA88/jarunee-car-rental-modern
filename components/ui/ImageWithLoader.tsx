'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface ImageWithLoaderProps extends Omit<ImageProps, 'onLoad'> {
    containerClassName?: string;
}

export default function ImageWithLoader({
    src,
    alt,
    className,
    containerClassName,
    ...props
}: ImageWithLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={cn('relative overflow-hidden', containerClassName)}>
            {/* Skeleton loader */}
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-shimmer"
                    style={{
                        backgroundSize: '200% 100%',
                    }}
                >
                    {/* Car silhouette placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            className="w-16 h-16 text-neutral-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                        </svg>
                    </div>
                </motion.div>
            )}

            {/* Actual image */}
            <Image
                src={src}
                alt={alt}
                className={cn(
                    'transition-opacity duration-500',
                    isLoading ? 'opacity-0' : 'opacity-100',
                    className
                )}
                onLoad={() => setIsLoading(false)}
                {...props}
            />
        </div>
    );
}
