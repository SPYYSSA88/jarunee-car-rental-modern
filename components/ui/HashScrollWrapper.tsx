'use client';

import { useHashScroll } from '@/hooks/useHashScroll';
import { Suspense } from 'react';

function HashScrollHandler() {
    useHashScroll();
    return null;
}

/**
 * Component wrapper for useHashScroll hook
 * Must be wrapped in Suspense because it uses useSearchParams
 */
export default function HashScrollWrapper() {
    return (
        <Suspense fallback={null}>
            <HashScrollHandler />
        </Suspense>
    );
}
