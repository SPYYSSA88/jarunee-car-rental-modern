import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import HeroSection from '@/components/features/HeroSection';
import HowItWorks from '@/components/features/HowItWorks';
import FeaturedVehicles from '@/components/features/FeaturedVehicles';
import YouTubeSection from '@/components/features/YouTubeSection';
import TouristSpots from '@/components/features/TouristSpots';
import MapSection from '@/components/features/MapSection';
import ContactSection from '@/components/features/ContactSection';

import TrustBadges from '@/components/features/TrustBadges';
import ReviewSection from '@/components/features/ReviewSection';
import FAQSection from '@/components/features/FAQSection';
import ScrollToTop from '@/components/utils/ScrollToTop';

export default async function HomePage() {
  // เพิ่มการหน่วงเวลา 0.75 วินาที เพื่อให้แสดงหน้า Loading Screen ได้เต็มที่
  await new Promise(resolve => setTimeout(resolve, 750));

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        {/* Hero Section with Price Calculator */}
        <HeroSection />

        {/* Trust Badges - แถบรับรองความน่าเชื่อถือ */}
        <TrustBadges />

        {/* Featured Vehicles - รถยอดนิยม */}
        <FeaturedVehicles />

        {/* How It Works - วิธีการเช่า */}
        <HowItWorks />

        {/* YouTube Video Section - วิดีโอ */}
        <YouTubeSection />

        {/* Tourist Spots Gallery - สถานที่ท่องเที่ยว */}
        <TouristSpots />

        {/* Customer Reviews - เสียงสะท้อนจากลูกค้า */}
        <ReviewSection />

        {/* Map Section - แผนที่ */}
        <MapSection />

        {/* FAQ Section - คำถามที่พบบ่อย */}
        <FAQSection />

        {/* Contact Section - ติดต่อเรา */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
