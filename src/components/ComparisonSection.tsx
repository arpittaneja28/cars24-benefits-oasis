import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, CreditCard, Banknote, ShoppingCart, Clock, ArrowRight } from 'lucide-react';

const ComparisonSection = () => {
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
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Why Choose </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CARS24 Benefits?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how CARS24 employees get exclusive benefits compared to the general public
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* CARS24 Employees Column */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-green-600 mb-2">CARS24 Employees</h3>
              <p className="text-muted-foreground">Exclusive benefits & premium support</p>
            </div>
            
            {benefits.map((benefit, index) => (
              <div key={`employee-${index}`} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-green-600" })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{benefit.employee.text}</p>
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      <Check className="w-3 h-3" />
                      {benefit.employee.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Public Column */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-red-600 mb-2">General Public</h3>
              <p className="text-muted-foreground">Standard offerings & support</p>
            </div>
            
            {benefits.map((benefit, index) => (
              <div key={`public-${index}`} className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 opacity-75">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-red-600" })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{benefit.public.text}</p>
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                      <X className="w-3 h-3" />
                      {benefit.public.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-4">Ready to Access Your Exclusive Benefits?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join 1000+ CARS24 employees who are already saving thousands with our exclusive financial benefits program.
          </p>
          <Button size="lg" className="px-8 py-4 text-lg group">
            Start Saving Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;