import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Home, Car, Shield } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const ComingSoonSection = () => {
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

  const comingFeatures = [
    {
      icon: GraduationCap,
      title: "Education Loan",
      amount: "Up to ₹50L loan",
      voucher: "₹75K Amazon voucher for your new laptop",
      maxAmount: 5000000,
      cashbackRate: 0.0075
    },
    {
      icon: Home,
      title: "Home Loan", 
      amount: "₹1Cr loan",
      voucher: "₹1L voucher for your home's new interiors",
      maxAmount: 10000000,
      cashbackRate: 0.005
    },
    {
      icon: Car,
      title: "Auto Loan",
      amount: "₹10L loan",
      voucher: "₹15K Amazon voucher for car essentials",
      maxAmount: 1000000,
      cashbackRate: 0.006
    },
    {
      icon: Shield,
      title: "Insurance",
      amount: "Lifetime insurance",
      voucher: "₹20K voucher to boost your health essentials",
      maxAmount: 100000,
      cashbackRate: 0.002
    }
  ];

  const [calculatorStates, setCalculatorStates] = useState(
    comingFeatures.map(feature => ({
      amount: [feature.maxAmount * 0.2],
      cashback: Math.floor(feature.maxAmount * 0.2 * feature.cashbackRate)
    }))
  );

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(0)}K`;
    }
    return `₹${value.toLocaleString()}`;
  };

  const updateCalculator = (index: number, newAmount: number[]) => {
    const newStates = [...calculatorStates];
    newStates[index] = {
      amount: newAmount,
      cashback: Math.floor(newAmount[0] * comingFeatures[index].cashbackRate)
    };
    setCalculatorStates(newStates);
  };

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Coming Soon Badge */}
        <div className="scroll-reveal text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Coming Soon
          </div>
        </div>

        <div className="scroll-reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">
            Upcoming Features to Maximize Your Benefits
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Revolutionary financial products launching soon with built-in cashback calculators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {comingFeatures.map((feature, index) => (
            <div 
              key={index}
              className="scroll-reveal group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glassmorphic Card */}
              <div className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  {/* Amount */}
                  <p className="text-lg font-medium text-primary mb-2">
                    {feature.amount}
                  </p>
                  
                  {/* Voucher Details */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {feature.voucher}
                  </p>

                  {/* Cashback Calculator */}
                  <div className="mt-4 p-4 rounded-xl bg-background/50 border border-border/50">
                    <div className="text-center mb-3">
                      <div className="text-lg font-semibold text-foreground">
                        {formatCurrency(calculatorStates[index].amount[0])}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">Loan Amount</div>
                      
                      <Slider
                        value={calculatorStates[index].amount}
                        onValueChange={(value) => updateCalculator(index, value)}
                        max={feature.maxAmount}
                        min={feature.maxAmount * 0.1}
                        step={feature.maxAmount * 0.01}
                        className="w-full mb-3"
                      />
                      
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-500">
                          {formatCurrency(calculatorStates[index].cashback)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Cashback ({(feature.cashbackRate * 100).toFixed(2)}%)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComingSoonSection;