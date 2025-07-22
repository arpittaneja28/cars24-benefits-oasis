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
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-cars24-blue">Why Choose </span>
            <span className="gradient-text">CARS24 Benefits?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how CARS24 employees get exclusive benefits compared to the general public
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* CARS24 Employees Column */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-cars24-green mb-3">CARS24 Employees</h3>
              <p className="text-gray-600 text-lg">Exclusive benefits & premium support</p>
            </div>
            
            {benefits.map((benefit, index) => (
              <div 
                key={`employee-${index}`} 
                className="glass-card p-8 parallax-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-cars24-green to-green-500 rounded-xl icon-hover shadow-lg">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-bold text-xl text-gray-900">{benefit.title}</h4>
                      <div className="p-1 bg-cars24-green rounded-full icon-hover">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 text-base leading-relaxed">{benefit.employee.text}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-cars24-green bg-green-50 px-4 py-2 rounded-full border border-green-200">
                      <Check className="w-4 h-4" />
                      {benefit.employee.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Public Column */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-red-600 mb-3">General Public</h3>
              <p className="text-gray-600 text-lg">Standard offerings & support</p>
            </div>
            
            {benefits.map((benefit, index) => (
              <div 
                key={`public-${index}`} 
                className="glass-card p-8 opacity-80 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.05}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-bold text-xl text-gray-900">{benefit.title}</h4>
                      <div className="p-1 bg-red-500 rounded-full">
                        <X className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 text-base leading-relaxed">{benefit.public.text}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-full border border-red-200">
                      <X className="w-4 h-4" />
                      {benefit.public.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Ready to Access Your Exclusive Benefits?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Join 1000+ CARS24 employees who are already saving thousands with our exclusive financial benefits program.
            </p>
            <Button 
              size="lg" 
              className="neumorphic-btn bg-gradient-to-r from-cars24-blue to-cars24-green hover:shadow-xl px-12 py-6 text-lg font-semibold text-white group scale-on-hover"
            >
              Start Saving Today
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;