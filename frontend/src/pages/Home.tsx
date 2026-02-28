import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/layout/HeroSection';
import FeaturesSection from '../components/layout/FeaturesSection';
import RanksSection from '../components/layout/RanksSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.10 0.04 295)' }}>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RanksSection />
      </main>
      <Footer />
    </div>
  );
}
