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
    <section id="how-it-works" ref={sectionRef} className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Three simple steps to start earning rewards
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="scroll-reveal group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="cars24-card text-center p-8 h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  {/* Animated Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                      {index + 1}
                    </div>
                    {/* Decorative rings */}
                    <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/20 animate-pulse"></div>
                    <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border border-primary/10 -m-2 group-hover:scale-110 transition-transform duration-300"></div>
                  </div>

                  {/* Animated Icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex space-x-2">
                      {steps.map((_, stepIndex) => (
                        <div 
                          key={stepIndex}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            stepIndex <= index ? 'bg-primary' : 'bg-primary/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating connection elements */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3">
            <div className="flex justify-between items-center">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-primary/60 animate-pulse"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="scroll-reveal text-center mt-12">
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