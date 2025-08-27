import FaqSection from "@/components/modules/home/FaqSection";
import FeaturesSection from "@/components/modules/home/FeaturesSection";
import { HeroSection } from "@/components/modules/home/HeroSection";
import PricingSection from "@/components/modules/home/PricingSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection/>
      <PricingSection/>
      <FaqSection />
    </div>
  );
};

export default Home;
