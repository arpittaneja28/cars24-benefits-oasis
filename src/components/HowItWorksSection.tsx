import React, { useEffect, useRef } from 'react';
import { ShoppingCart, Clock, Gift } from 'lucide-react';

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: ShoppingCart,
      title: "Choose & Transact",
      description: "Browse exclusive deals and complete transactions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Auto-Tracking",
      description: "System tracks and verifies your transactions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Gift,
      title: "Earn Rewards",
      description: "Receive instant gift vouchers and cashback",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Three simple steps to start earning rewards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="scroll-reveal relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0 transform translate-x-4"></div>
              )}
              
              <div className="cars24-card relative z-10 text-center p-6">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="service-icon w-20 h-20 mx-auto mb-6">
                  <step.icon className="w-10 h-10" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="scroll-reveal text-center mt-16">
          <div className="bg-card border border-border rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of CARS24 employees already enjoying exclusive benefits
            </p>
            <button 
              className="cars24-button px-8 py-3"
              onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;