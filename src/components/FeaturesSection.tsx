import React, { useEffect, useRef } from 'react';
import { CreditCard, ShoppingBag, TrendingUp, Percent, Gift, Zap } from 'lucide-react';

const FeaturesSection = () => {
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

  const features = [
    {
      icon: TrendingUp,
      title: 'Personal Loans',
      benefits: [
        'Up to 2% Cashback',
        'Exclusive rewards',
        'Compare offers',
        'Zero impact on credit score'
      ],
      gradient: 'from-primary/20 to-primary/5',
      glowColor: 'glow-primary'
    },
    {
      icon: CreditCard,
      title: 'Credit Cards',
      benefits: [
        'Flat cashback up to ₹3,000',
        'Cards tailored to your spend',
        'Compare cards',
        'Instant approval for CARS24 employees'
      ],
      gradient: 'from-secondary/20 to-secondary/5',
      glowColor: 'glow-secondary'
    },
    {
      icon: ShoppingBag,
      title: 'Online Shopping',
      benefits: [
        '3,000+ retailers',
        'Up to 80% cashback',
        'Exclusive flash deals',
        'CARS24 employee discounts'
      ],
      gradient: 'from-accent/20 to-accent/5',
      glowColor: 'glow-primary'
    }
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="scroll-reveal mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl luxury-heading mb-6">
                Premium Financial Solutions
                <span className="block">for CARS24 Employees</span>
              </h2>
              <p className="text-xl md:text-2xl luxury-subheading max-w-3xl mx-auto">
                Glassmorphic design meets <span className="cashback-highlight">cashback rewards</span> - 
                Experience the future of employee financial benefits
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`scroll-reveal glass-card p-8 ${feature.glowColor} floating-card hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="feature-icon mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-6 luxury-heading">
                  {feature.title}
                </h3>

                {/* Benefits List */}
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-foreground font-light leading-relaxed">
                        {benefit.includes('₹') || benefit.includes('%') ? (
                          <span className="cashback-highlight">{benefit}</span>
                        ) : (
                          benefit
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <button className="w-full glass-card px-6 py-3 text-primary border border-primary/30 rounded-xl hover:bg-primary/10 transition-all duration-300 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="scroll-reveal glass-card p-8 rounded-3xl">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold cashback-highlight">15,000+</div>
                  <div className="text-muted-foreground font-light">CARS24 Employees</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">₹50Cr+</div>
                  <div className="text-muted-foreground font-light">Cashback Distributed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-secondary">80%</div>
                  <div className="text-muted-foreground font-light">Max Cashback Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">3,000+</div>
                  <div className="text-muted-foreground font-light">Partner Retailers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;