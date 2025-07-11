import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="scroll-reveal mb-6">
          <div className="inline-flex items-center glass-card px-4 py-2 text-sm text-muted-foreground">
            <Star className="w-4 h-4 mr-2 text-primary" />
            Exclusive for CARS24 Employees
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="scroll-reveal text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
          <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Unlock Premium
          </span>
          <br />
          <span className="bg-gradient-luxury bg-clip-text text-transparent">
            Financial Benefits
          </span>
        </h1>

        {/* Subtitle */}
        <p className="scroll-reveal text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Exclusive loans, credit cards, and cashback rewards designed specifically for CARS24 employees. 
          Experience luxury financial services with unmatched benefits.
        </p>

        {/* CTA Buttons */}
        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={handleGetStarted}
            className="neuro-button px-8 py-4 text-lg group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            className="glass-card border-glass-border text-foreground hover:bg-accent/20 px-8 py-4 text-lg"
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

      {/* Product UI Showcase */}
      <div className="scroll-reveal mt-16 relative max-w-5xl mx-auto">
        <div className="glass-card p-8 rounded-3xl">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-luxury rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">💳</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Premium Dashboard</h3>
              <p className="text-muted-foreground">
                Manage all your benefits, track rewards, and access exclusive deals
              </p>
            </div>
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