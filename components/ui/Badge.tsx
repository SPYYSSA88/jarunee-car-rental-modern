import React from 'react';
import { cn } from '@/lib/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
    'inline-flex items-center rounded-full px-3 py-1 text-caption font-medium transition-all duration-300',
    {
        variants: {
            variant: {
                default: 'bg-neutral-100 text-neutral-800 border border-neutral-200',
                primary: 'bg-primary-50 text-primary-700 border border-primary-200',
                success: 'bg-green-50 text-green-700 border border-green-200',
                warning: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
                danger: 'bg-red-50 text-red-700 border border-red-200',
                info: 'bg-blue-50 text-blue-700 border border-blue-200',
                premium: 'bg-gradient-gold text-white shadow-glow-gold',
                dark: 'bg-dark-900 text-white',
            },
            size: {
                sm: 'text-xs px-2 py-0.5',
                md: 'text-caption px-3 py-1',
                lg: 'text-sm px-4 py-1.5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    icon?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant, size, icon, children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props}>
                {icon && <span className="mr-1">{icon}</span>}
                {children}
            </div>
        );
    }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
