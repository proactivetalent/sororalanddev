import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
    </div>
  );
}
