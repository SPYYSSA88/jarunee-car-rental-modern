'use client';

import Script from 'next/script';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-SFMXW6Z66G';

export default function GoogleAnalytics() {
    return (
        <>
            {/* Google Analytics Script */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_title: document.title,
                        page_location: window.location.href,
                    });
                `}
            </Script>
        </>
    );
}

// Helper functions for tracking events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag) {
        (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Predefined events for car rental
export const trackPhoneCall = () => trackEvent('click', 'Contact', 'Phone Call');
export const trackLineClick = () => trackEvent('click', 'Contact', 'LINE');
export const trackWhatsAppClick = () => trackEvent('click', 'Contact', 'WhatsApp');
export const trackCarView = (carName: string) => trackEvent('view', 'Car', carName);
export const trackBookingStart = () => trackEvent('start', 'Booking', 'Initiated');
