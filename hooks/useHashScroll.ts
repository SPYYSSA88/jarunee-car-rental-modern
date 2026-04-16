'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Custom hook to handle hash navigation in Next.js
 * Scrolls to the element with the matching ID when the URL contains a hash
 */
export function useHashScroll() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Get the hash from the URL
        const hash = window.location.hash;

        if (hash) {
            // Remove the # symbol
            const id = hash.replace('#', '');

            // Wait a bit for the page to fully render
            const scrollToElement = () => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };

            // Try immediately
            scrollToElement();

            // Also try after a short delay (for dynamically loaded content)
            const timeoutId = setTimeout(scrollToElement, 100);

            // And again after a longer delay for safety
            const timeoutId2 = setTimeout(scrollToElement, 500);

            return () => {
                clearTimeout(timeoutId);
                clearTimeout(timeoutId2);
            };
        }
    }, [pathname, searchParams]);
}
