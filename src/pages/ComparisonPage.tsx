import React from 'react';
import Navigation from '@/components/Navigation';
import ComparisonSection from '@/components/ComparisonSection';
import Footer from '@/components/Footer';

const ComparisonPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ComparisonSection />
      <Footer />
    </div>
  );
};

export default ComparisonPage;