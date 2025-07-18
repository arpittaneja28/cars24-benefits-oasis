
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
      className="h-[50vh] md:h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center relative px-6 bg-background pt-20"
    >
      {/* Enhanced Animated Background with Financial Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Currency Notes - Realistic ₹ notes */}
        {[
          { value: '500', color: 'text-purple-600', bg: 'bg-purple-100' },
          { value: '200', color: 'text-orange-600', bg: 'bg-orange-100' },
          { value: '100', color: 'text-green-600', bg: 'bg-green-100' },
          { value: '500', color: 'text-purple-600', bg: 'bg-purple-100' },
          { value: '200', color: 'text-orange-600', bg: 'bg-orange-100' }
        ].map((note, i) => (
          <div
            key={`currency-${i}`}
            className="absolute opacity-10 animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div className={`w-16 h-10 ${note.bg} rounded-sm border ${note.color} border-current flex flex-col items-center justify-center text-xs font-bold shadow-sm`}>
              <span className="text-[8px]">₹{note.value}</span>
              <div className="w-3 h-3 border border-current rounded-full flex items-center justify-center mt-0.5">
                <span className="text-[6px]">₹</span>
              </div>
            </div>
          </div>
        ))}

        {/* Voucher/Coupon Cards */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`voucher-${i}`}
            className="absolute opacity-12 animate-bounce"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="w-14 h-9 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border-2 border-dashed border-primary/30 flex flex-col items-center justify-center text-[8px] font-bold text-primary">
              <span>SAVE</span>
              <span>{(i + 1) * 5}%</span>
            </div>
          </div>
        ))}

        {/* Cashback Percentage Badges - More prominent */}
        {[
          { text: '5% BACK', color: 'bg-green-500' },
          { text: '10% OFF', color: 'bg-blue-500' },
          { text: '15% CASHBACK', color: 'bg-purple-500' },
          { text: '20% SAVE', color: 'bg-orange-500' }
        ].map((badge, i) => (
          <div
            key={`badge-${i}`}
            className="absolute opacity-35 animate-pulse"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${2.5 + Math.random() * 1}s`,
            }}
          >
            <div className={`w-12 h-12 ${badge.color} rounded-full flex items-center justify-center text-white text-[7px] font-bold shadow-lg`}>
              <span className="text-center leading-tight">{badge.text}</span>
            </div>
          </div>
        ))}

        {/* Credit Card Mockups */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`card-${i}`}
            className="absolute opacity-8 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${5 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          >
            <div className="w-12 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded border border-primary/20 shadow-sm">
              <div className="h-2 bg-primary/30 rounded-t"></div>
              <div className="p-1">
                <div className="w-6 h-1 bg-primary/40 rounded mb-1"></div>
                <div className="w-4 h-1 bg-primary/30 rounded"></div>
              </div>
            </div>
          </div>
        ))}

        {/* Shopping Bag Icons with Discount Tags */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`shopping-${i}`}
            className="absolute opacity-10 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${3.5 + Math.random() * 1.5}s`,
            }}
          >
            <div className="relative">
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-primary/40 fill-current">
                <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
              </svg>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[6px] font-bold">
                %
              </div>
            </div>
          </div>
        ))}

        {/* Subtle Background Gradient for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge with reduced top margin */}
        <div className="scroll-reveal mb-4">
          <div className="inline-flex items-center bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm text-muted-foreground shadow-sm">
            <Star className="w-4 h-4 mr-2 text-primary fill-current" />
            Exclusive for CARS24 Employees
          </div>
        </div>

        {/* Main Heading - Reduced size */}
        <h1 className="scroll-reveal text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">
            Unlock Premium
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Cashback Benefits
          </span>
        </h1>

        {/* Improved Subtitle with better copy and contrast */}
        <div className="scroll-reveal mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-card/60 backdrop-blur-sm rounded-lg"></div>
            <p className="relative text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed px-4 py-2 font-medium">
              Get cashback and exclusive discounts on services you use daily. Our employees earn money back on everything from food delivery to shopping, travel, and more.
            </p>
          </div>
        </div>

        {/* CTA Buttons with reduced spacing */}
        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="px-8 py-4 text-lg group shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 text-lg bg-card/80 backdrop-blur-sm"
            onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="scroll-reveal">
          <p className="text-sm text-muted-foreground/80 mb-4">Trusted by 1000+ CARS24 employees</p>
          <div className="flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground/80">4.9/5 rating</span>
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
