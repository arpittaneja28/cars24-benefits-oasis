import React, { useEffect, useRef } from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
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

  const plans = [
    {
      name: "Free",
      icon: Star,
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started with basic benefits",
      features: [
        "Basic cashback on select purchases",
        "Access to employee discounts",
        "Standard customer support",
        "Monthly reward vouchers",
        "Basic financial tools"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      icon: Crown,
      price: "₹499",
      period: "per month",
      description: "Most popular choice with premium benefits",
      features: [
        "5% cashback on all purchases",
        "Priority loan approvals",
        "Dedicated relationship manager",
        "Weekly premium vouchers",
        "Advanced investment tools",
        "No annual fee credit cards",
        "Insurance coverage included"
      ],
      buttonText: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Zap,
      price: "₹999",
      period: "per month",
      description: "Ultimate package with exclusive perks",
      features: [
        "10% cashback on all purchases",
        "Instant loan approvals",
        "Personal financial advisor",
        "Daily exclusive deals",
        "Premium investment portfolio",
        "Unlimited credit cards",
        "Comprehensive insurance",
        "Family benefits included"
      ],
      buttonText: "Go Enterprise",
      popular: false
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Flexible plans designed to match your financial goals and lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`scroll-reveal relative ${
                plan.popular ? 'scale-105 z-10' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-primary px-4 py-2 rounded-full text-sm font-medium text-white">
                    Recommended
                  </div>
                </div>
              )}

              <div className={`cars24-card p-8 h-full relative ${
                plan.popular ? 'border-primary shadow-xl' : ''
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-primary' 
                      : 'bg-secondary'
                  }`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground font-light">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? '' 
                      : 'variant-outline'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="scroll-reveal text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All plans include basic benefits. Upgrade or downgrade anytime.
            <br />
            <span className="text-primary">30-day money-back guarantee on paid plans</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;