import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import premiumDashboard from '@/assets/premium-dashboard.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleGetStarted = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 bg-background pt-8"
    >
      {/* Animated Vouchers and Cash Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Voucher Icons */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`voucher-${i}`}
            className={`absolute opacity-10 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <svg width="60" height="40" viewBox="0 0 60 40" className="text-primary fill-current">
              <rect x="0" y="0" width="60" height="40" rx="8" className="stroke-current stroke-2 fill-none"/>
              <circle cx="15" cy="20" r="3" className="fill-current"/>
              <circle cx="45" cy="20" r="3" className="fill-current"/>
              <text x="30" y="15" className="text-xs fill-current text-center" textAnchor="middle">₹</text>
              <text x="30" y="28" className="text-xs fill-current text-center" textAnchor="middle">CASH</text>
            </svg>
          </div>
        ))}
        
        {/* Cash Note Icons */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`cash-${i}`}
            className={`absolute opacity-15 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + Math.random() * 1.5}s`,
            }}
          >
            <svg width="50" height="30" viewBox="0 0 50 30" className="text-secondary fill-current">
              <rect x="0" y="0" width="50" height="30" rx="4" className="fill-current opacity-20"/>
              <circle cx="25" cy="15" r="8" className="stroke-current stroke-2 fill-none"/>
              <text x="25" y="18" className="text-sm fill-current" textAnchor="middle">₹</text>
            </svg>
          </div>
        ))}

        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="scroll-reveal mb-6 mt-8">
          <div className="inline-flex items-center bg-card border border-border rounded-full px-4 py-2 text-sm text-muted-foreground shadow-sm">
            <Star className="w-4 h-4 mr-2 text-primary fill-current" />
            Exclusive for CARS24 Employees
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="scroll-reveal text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">
            Unlock Premium
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cashback Benefits
          </span>
        </h1>

        {/* Subtitle */}
        <p className="scroll-reveal text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Exclusive loans, credit cards, and cashback rewards designed specifically for CARS24 employees. 
          Experience premium financial services with unmatched benefits.
        </p>

        {/* CTA Buttons */}
        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="px-8 py-4 text-lg group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 text-lg"
            onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="scroll-reveal">
          <p className="text-sm text-muted-foreground mb-4">Trusted by 1000+ CARS24 employees</p>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.9/5 rating</span>
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;