import React from 'react';
import { GraduationCap, Home, Car, Shield } from 'lucide-react';

const ComingSoonSection = () => {
  const comingFeatures = [
    {
      icon: GraduationCap,
      title: "Education Loan",
      description: "Up to ₹50L loan, ₹75K Amazon voucher for your new laptop",
      amount: "₹50L",
      voucher: "₹75K"
    },
    {
      icon: Home,
      title: "Home Loan",
      description: "₹1Cr loan, ₹1L voucher for your home's new interiors",
      amount: "₹1Cr",
      voucher: "₹1L"
    },
    {
      icon: Car,
      title: "Auto Loan",
      description: "₹10L loan, ₹15K Amazon voucher for car essentials",
      amount: "₹10L",
      voucher: "₹15K"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Lifetime insurance & ₹20K voucher to boost your health essentials",
      amount: "Lifetime",
      voucher: "₹20K"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="luxury-heading mb-6">
            Upcoming Features to Maximize Your Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exciting new financial products coming soon, exclusively for CARS24 employees
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {comingFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="glassmorphic-card group hover-scale scroll-reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:shadow-luxury transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground">Loan Amount:</span>
                      <span className="font-semibold text-primary">{feature.amount}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                      <span className="text-sm text-muted-foreground">Voucher:</span>
                      <span className="font-semibold text-green-600">{feature.voucher}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;