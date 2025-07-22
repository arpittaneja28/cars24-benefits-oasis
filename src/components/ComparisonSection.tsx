import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, CreditCard, Banknote, ShoppingCart, Clock, ArrowRight, Sparkles } from 'lucide-react';
import LoginModal from './LoginModal';

const ComparisonSection = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const benefits = [
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Personal Loans",
      employee: {
        text: "From 8.5% p.a., ₹0 processing + 1% cashback voucher",
        savings: "Save ₹25,000+",
        available: true
      },
      public: {
        text: "From 10.5% p.a., ₹2,000-5,000 processing fees",
        savings: "No cashback",
        available: false
      }
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Credit Cards",
      employee: {
        text: "₹2,000 Amazon voucher on activation",
        savings: "Save ₹1,500",
        available: true
      },
      public: {
        text: "₹500 voucher",
        savings: "No Amazon voucher",
        available: false
      }
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Shopping Cashback",
      employee: {
        text: "Up to 12% cashback on 1,500+ partner stores",
        savings: "Save ₹5,000+",
        available: true
      },
      public: {
        text: "Up to 8% cashback",
        savings: "Limited partner stores",
        available: false
      }
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Processing Time",
      employee: {
        text: "Priority Processing",
        savings: "Dedicated support",
        available: true
      },
      public: {
        text: "Standard queue with general support",
        savings: "No priority",
        available: false
      }
    }
  ];

  return (
    <>
      <section className="py-16 px-6 relative overflow-hidden bg-gradient-bg">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Luxury Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Exclusive Employee Benefits</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Premium Benefits </span>
              <br />
              <span className="bg-gradient-luxury bg-clip-text text-transparent">
                Just for You
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Experience the luxury of exclusive financial benefits designed specifically for CARS24 employees. 
              Compare what makes your access truly premium.
            </p>
          </div>

          {/* Luxury Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* CARS24 Employees Column - Premium */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="glass-card p-6">
                  <h3 className="font-playfair text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text mb-3">
                    CARS24 Employees
                  </h3>
                  <p className="text-muted-foreground text-lg">Exclusive Premium Benefits</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                    <Sparkles className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">VIP Access</span>
                  </div>
                </div>
              </div>
              
              {benefits.map((benefit, index) => (
                <div key={`employee-${index}`} className="glass-card p-8 group">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-green-400/20 to-emerald-500/20 border border-green-400/30 rounded-2xl">
                      {React.cloneElement(benefit.icon, { className: "w-8 h-8 text-green-400" })}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="font-playfair text-xl font-semibold text-foreground">{benefit.title}</h4>
                        <div className="p-1 bg-green-400/20 rounded-full">
                          <Check className="w-5 h-5 text-green-400" />
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.employee.text}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-4 py-2 rounded-full">
                        <Check className="w-4 h-4" />
                        {benefit.employee.savings}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Public Column - Standard */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="glass-card p-6 opacity-60">
                  <h3 className="font-playfair text-3xl font-bold text-transparent bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text mb-3">
                    General Public
                  </h3>
                  <p className="text-muted-foreground text-lg">Standard Offerings</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2">
                    <X className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-red-400 font-medium">Limited Access</span>
                  </div>
                </div>
              </div>
              
              {benefits.map((benefit, index) => (
                <div key={`public-${index}`} className="glass-card p-8 opacity-60">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-red-400/20 to-rose-500/20 border border-red-400/30 rounded-2xl">
                      {React.cloneElement(benefit.icon, { className: "w-8 h-8 text-red-400" })}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="font-playfair text-xl font-semibold text-foreground">{benefit.title}</h4>
                        <div className="p-1 bg-red-400/20 rounded-full">
                          <X className="w-5 h-5 text-red-400" />
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.public.text}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-2 rounded-full">
                        <X className="w-4 h-4" />
                        {benefit.public.savings}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Luxury CTA Section */}
          <div className="text-center relative">
            <div className="glass-card p-12 border-2 border-primary/30">
              <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 bg-gradient-luxury rounded-full px-6 py-3 mb-6">
                    <Sparkles className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Exclusive Access Awaits</span>
                  </div>
                </div>
                
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Ready to Unlock Your 
                  <span className="block text-transparent bg-gradient-luxury bg-clip-text">
                    Premium Benefits?
                  </span>
                </h3>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Join 1000+ CARS24 employees who are already saving ₹30,000+ annually with our exclusive financial benefits program.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    onClick={() => setIsLoginModalOpen(true)}
                    className="neuro-button-secondary group text-lg px-10 py-5"
                  >
                    Start Saving Today
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="px-8 py-5 text-lg border-primary/30 hover:bg-primary/10"
                  >
                    Learn More
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Instant Verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>CARS24 Employees Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default ComparisonSection;