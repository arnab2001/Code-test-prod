import Footer from '@/layout/footer/Footer';
import Navbar from '@/layout/navbar/Navbar';

import ExploreProjectsSection from './section/ExploreProjectsSection';
import FeaturesSection from './section/FeaturesSection';
import HeroSection from './section/HeroSection';

const Homepage = () => {
  return (
    <div className="bg-primary-950">
      <Navbar />
      <HeroSection />
      <ExploreProjectsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Homepage;
