import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Sparkles, Play, Shield, Award, TrendingUp, ChevronDown } from 'lucide-react';
import premiumDashboard from '@/assets/premium-dashboard.jpg';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollElements = entry.target.querySelectorAll('.scroll-reveal');
            scrollElements.forEach((el) => el.classList.add('revealed'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleGetStarted = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-screen flex items-center">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-bg"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="scroll-reveal inline-flex items-center px-6 py-3 glass-card text-primary text-sm font-medium">
                <Sparkles className="mr-2 h-4 w-4" />
                Exclusive for CARS24 employees
              </div>

              {/* Main Heading */}
              <div className="scroll-reveal space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl luxury-heading leading-tight">
                  Unlock Premium
                  <span className="block">Financial Benefits</span>
                </h1>
                <p className="text-xl md:text-2xl luxury-subheading max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Exclusive loans, credit cards, and <span className="cashback-highlight">cashback rewards</span> designed specifically for CARS24 employees. Experience financial services with unmatched benefits.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="scroll-reveal flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button 
                  onClick={handleGetStarted}
                  className="neumorph-button flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glass-card border-primary/30 text-foreground hover:bg-primary/10 px-8 py-4 text-base"
                >
                  Learn More
                  <Play className="ml-3 h-4 w-4" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="scroll-reveal glass-card p-6 text-center lg:text-left">
                <p className="text-sm text-muted-foreground mb-4 font-light">Trusted by 15,000+ CARS24 employees</p>
                <div className="flex items-center justify-center lg:justify-start space-x-8">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground font-light">Bank-level Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-secondary" />
                    <span className="text-sm text-foreground font-light">RBI Approved</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Showcase */}
            <div className="scroll-reveal relative">
              <div className="relative floating-card">
                <div className="glass-card p-2">
                  <img 
                    src={premiumDashboard} 
                    alt="Premium Dashboard Interface showing cashback details" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                
                {/* Floating Cashback Cards */}
                <div className="absolute -top-6 -left-6 glass-card p-4 glow-primary">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm font-light text-muted-foreground">Monthly Cashback</p>
                      <p className="text-2xl font-bold cashback-highlight">₹12,500</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-card p-4 glow-secondary">
                  <div className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-secondary" />
                    <div>
                      <p className="text-sm font-light text-muted-foreground">Up to Cashback</p>
                      <p className="text-2xl font-bold text-secondary">80%</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-4 glass-card p-3">
                  <div className="text-center">
                    <p className="text-xs font-light text-muted-foreground">Instant</p>
                    <p className="text-lg font-bold text-accent">₹3,000</p>
                    <p className="text-xs font-light text-muted-foreground">Cashback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass-card p-2 rounded-full">
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;