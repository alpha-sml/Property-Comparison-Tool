import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedListings from '../components/FeaturedListings/FeaturedListings';
import InfoSection from '../components/InfoSection/InfoSection';
import CTASection from '../components/CTASection/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedListings />
      <InfoSection />
      <CTASection />
    </div>
  );
}
