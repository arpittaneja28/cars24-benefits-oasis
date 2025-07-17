import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ComingSoonSection from '@/components/ComingSoonSection';
import CashbackCalculator from '@/components/CashbackCalculator';
import ComparisonSection from '@/components/ComparisonSection';
import MissionSection from '@/components/MissionSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComingSoonSection />
      <CashbackCalculator />
      <ComparisonSection />
      <MissionSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
