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
        const timeoutIds: Array<ReturnType<typeof setTimeout>> = [];

        const runHashScroll = () => {
            // Clear any pending retries before starting a new scroll sequence
            while (timeoutIds.length > 0) {
                const id = timeoutIds.pop();
                if (id) clearTimeout(id);
            }

            const hash = window.location.hash;
            if (!hash) return;

            const targetId = hash.replace('#', '');
            if (!targetId) return;

            const tryScroll = (): boolean => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return true;
                }
                return false;
            };

            if (tryScroll()) return;

            // Retry across loading boundaries (including HomePage 750ms suspense delay)
            for (const delay of [100, 350, 850, 1200]) {
                const timer = setTimeout(() => {
                    if (tryScroll()) {
                        while (timeoutIds.length > 0) {
                            const id = timeoutIds.pop();
                            if (id) clearTimeout(id);
                        }
                    }
                }, delay);
                timeoutIds.push(timer);
            }
        };

        runHashScroll();
        window.addEventListener('hashchange', runHashScroll);

        return () => {
            window.removeEventListener('hashchange', runHashScroll);
            while (timeoutIds.length > 0) {
                const id = timeoutIds.pop();
                if (id) clearTimeout(id);
            }
        };
    }, [pathname, searchParams]);
}
