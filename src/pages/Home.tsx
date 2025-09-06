import BlogSection from "@/components/modules/home/BlogSection";
import CtaSection from "@/components/modules/home/CtaSection";
import FaqSection from "@/components/modules/home/FaqSection";
import FeaturesSection from "@/components/modules/home/FeaturesSection";
import { HeroSection } from "@/components/modules/home/HeroSection";
import PartnersSection from "@/components/modules/home/PartnersSection";
import PricingSection from "@/components/modules/home/PricingSection";
import TestimonialSection from "@/components/modules/home/TestimonialSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection/>
      <PricingSection/>
      <TestimonialSection/>
      <BlogSection/>
      <PartnersSection/>
      <CtaSection/>
      <FaqSection />
    </div>
  );
};

export default Home;
