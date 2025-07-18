import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductShowcase from '@/components/ProductShowcase';
import ComingSoonSection from '@/components/ComingSoonSection';

import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import MissionSection from '@/components/MissionSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <ComingSoonSection />
      
      <TestimonialsSection />
      <HowItWorksSection />
      <MissionSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
