'use client';

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = 'text', label, error, icon, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);
        const [hasValue, setHasValue] = useState(false);
        const inputRef = useRef<HTMLInputElement>(null);

        // Combine refs
        const combinedRef = (node: HTMLInputElement) => {
            (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        };

        // Check for initial value
        useEffect(() => {
            if (inputRef.current) {
                setHasValue(!!inputRef.current.value);
            }
        }, [props.defaultValue, props.value]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setHasValue(!!e.target.value);
            props.onChange?.(e);
        };

        const isFloating = isFocused || hasValue;

        return (
            <div className="relative w-full">
                {/* Input field */}
                <div className="relative">
                    {icon && (
                        <div className={cn(
                            "absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10 transition-colors duration-300",
                            isFocused ? "text-primary-600" : "text-neutral-400"
                        )}>
                            {icon}
                        </div>
                    )}
                    <input
                        type={type}
                        className={cn(
                            'w-full rounded-xl border-2 bg-white px-4 py-3.5 text-base font-medium text-dark-900 transition-all duration-300 focus:outline-none focus:ring-0 focus:border-primary-500 disabled:bg-neutral-100 disabled:cursor-not-allowed shadow-soft hover:shadow-medium focus:shadow-medium',
                            icon && 'pl-12',
                            error && 'border-red-500 focus:border-red-500',
                            !error && 'border-neutral-200 hover:border-neutral-400',
                            label && 'pt-6 pb-2',
                            className
                        )}
                        ref={combinedRef}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={handleChange}
                        {...props}
                    />

                    {/* Floating label - always visible but moves up when focused or has value */}
                    {label && (
                        <label
                            className={cn(
                                'absolute pointer-events-none transition-all duration-300 ease-out',
                                icon ? 'left-12' : 'left-4',
                                // For date inputs, always show label at top to avoid overlap
                                type === 'date'
                                    ? 'top-1.5 text-xs font-semibold'
                                    : isFloating
                                        ? 'top-1.5 text-xs font-semibold'
                                        : 'top-1/2 -translate-y-1/2 text-base font-medium',
                                (isFloating || type === 'date') && !error && 'text-primary-600',
                                !isFloating && type !== 'date' && 'text-neutral-500',
                                error && 'text-red-500'
                            )}
                        >
                            {label}
                        </label>
                    )}
                </div>

                {/* Error message */}
                {error && <p className="mt-2 text-sm font-medium text-red-500">{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
