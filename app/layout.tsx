import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Playfair_Display, DM_Sans, Noto_Sans_Thai, Kanit, Sarabun } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CookieConsent from "@/components/ui/CookieConsent";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import ScrollToTop from "@/components/ui/ScrollToTop";
import HashScrollWrapper from "@/components/ui/HashScrollWrapper";
import SmartContactFAB from "@/components/ui/SmartContactFAB";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const kanit = Kanit({
  subsets: ["thai", "latin"],
  variable: "--font-kanit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  variable: "--font-sarabun",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Viewport configuration for mobile
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5,
  themeColor: "#1E3A5F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jaruneecarrental.com"),
  // Basic Meta
  title: {
    default: "Jarunee Car Rental - บริการเช่ารถ แท็กซี่เหมา เชียงใหม่ 24 ชั่วโมง",
    template: "%s | Jarunee Car Rental",
  },
  description: "บริการเช่ารถและแท็กซี่เหมาจังหวัดเชียงใหม่ พร้อมให้บริการ 24 ชั่วโมง รถยนต์คุณภาพสูง ราคาเริ่มต้น 10 บาท/กม. บริการรับส่งสนามบิน ทัวร์เชียงใหม่ โทร 089-437-6117",
  keywords: [
    // Thai Keywords
    "เช่ารถเชียงใหม่",
    "แท็กซี่เหมาเชียงใหม่",
    "รถเช่าเชียงใหม่",
    "รับส่งสนามบินเชียงใหม่",
    "เหมารถเชียงใหม่",
    "รถตู้เชียงใหม่",
    "รถเช่าราคาถูกเชียงใหม่",
    "บริการรถเช่า 24 ชั่วโมง",
    "ทัวร์เชียงใหม่",
    "รถรับส่งสนามบิน CNX",
    // English Keywords
    "car rental chiang mai",
    "taxi chiang mai",
    "airport transfer chiang mai",
    "van rental chiang mai",
    "Jarunee car rental",
    "chiang mai tour service",
    "private driver chiang mai",
  ],
  authors: [{ name: "Jarunee Car Rental", url: "https://jaruneecarrental.com" }],
  creator: "Jarunee Car Rental",
  publisher: "Jarunee Car Rental",

  // Geo targeting for Chiang Mai
  other: {
    "geo.region": "TH-50",
    "geo.placename": "Chiang Mai",
    "geo.position": "18.7883;98.9853",
    "ICBM": "18.7883, 98.9853",
    "google-site-verification": "jEjSguacxXV4XTHEMj2jSmBicfyHd_EtDuL3nb4Wyzw",
  },

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US", "zh_CN"],
    url: "https://jaruneecarrental.com",
    siteName: "Jarunee Car Rental",
    title: "Jarunee Car Rental - บริการเช่ารถ แท็กซี่เหมา เชียงใหม่ 24 ชั่วโมง",
    description: "บริการเช่ารถและแท็กซี่เหมาจังหวัดเชียงใหม่ ราคาเริ่มต้น 10 บาท/กม. พร้อมให้บริการ 24 ชั่วโมง โทร 089-437-6117",
    images: [
      {
        url: "/images/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Jarunee Car Rental - บริการเช่ารถเชียงใหม่",
        type: "image/jpeg",
      },
    ],
    phoneNumbers: ["+66894376117"],
    countryName: "Thailand",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jarunee Car Rental - บริการเช่ารถเชียงใหม่ 24 ชม.",
    description: "บริการเช่ารถและแท็กซี่เหมา ราคาเริ่มต้น 10 บาท/กม. โทร 089-437-6117",
    images: ["/images/og-image.jpg?v=2"],
    creator: "@jaruneecarrental",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons & Favicon
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Alternates for multilingual
  alternates: {
    canonical: "https://jaruneecarrental.com",
    languages: {
      "th": "https://jaruneecarrental.com",
      "en": "https://jaruneecarrental.com/en",
      "zh": "https://jaruneecarrental.com/zh",
    },
  },

  // Category
  category: "transportation",
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://jaruneecarrental.com",
  name: "Jarunee Car Rental",
  alternateName: "จรุณี คาร์ เรนทอล",
  description: "บริการเช่ารถและแท็กซี่เหมาจังหวัดเชียงใหม่ พร้อมให้บริการ 24 ชั่วโมง",
  url: "https://jaruneecarrental.com",
  telephone: "+66894376117",
  email: "info@jaruneecarrental.com",
  image: "https://jaruneecarrental.com/images/og-image.jpg",
  logo: "https://jaruneecarrental.com/favicon.svg",
  priceRange: "฿10 - ฿17 per km",
  currenciesAccepted: "THB",
  paymentAccepted: "Cash, Credit Card, PromptPay, LINE Pay",
  address: {
    "@type": "PostalAddress",
    streetAddress: "สนามบินนานาชาติเชียงใหม่",
    addressLocality: "เชียงใหม่",
    addressRegion: "เชียงใหม่",
    postalCode: "50200",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.7883,
    longitude: 98.9853,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://line.me/ti/p/~0894376117",
    "https://www.facebook.com/jaruneecarrental",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  areaServed: {
    "@type": "City",
    name: "Chiang Mai",
  },
  serviceType: ["Car Rental", "Taxi Service", "Airport Transfer", "Tour Service"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${inter.variable} ${outfit.variable} ${playfair.variable} ${dmSans.variable} ${notoSansThai.variable} ${kanit.variable} ${sarabun.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSansThai.className} antialiased bg-thai-subtle text-dark-900`}>
        <GoogleAnalytics />
        <HashScrollWrapper />
        <LanguageProvider>
          {children}
          <CookieConsent />
          <ScrollToTop />
          <SmartContactFAB />
        </LanguageProvider>
      </body>
    </html>
  );
}


