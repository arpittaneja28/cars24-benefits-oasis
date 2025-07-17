import React from 'react';
import { Check, X, Crown, Star } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Personal Loan Cashback",
      cars24: "Up to 2% cashback",
      others: "No cashback",
      cars24HasBenefit: true
    },
    {
      feature: "Credit Card Rewards",
      cars24: "Flat ₹3,000 cashback",
      others: "Standard 1% rewards",
      cars24HasBenefit: true
    },
    {
      feature: "Shopping Cashback",
      cars24: "Up to 80% on 3,000+ retailers",
      others: "Up to 5% on select stores",
      cars24HasBenefit: true
    },
    {
      feature: "Zero Credit Score Impact",
      cars24: "All comparisons",
      others: "Limited offers",
      cars24HasBenefit: true
    },
    {
      feature: "Exclusive Flash Deals",
      cars24: "Daily exclusive offers",
      others: "Generic promotions",
      cars24HasBenefit: true
    },
    {
      feature: "24/7 Premium Support",
      cars24: "Dedicated support team",
      others: "Standard customer service",
      cars24HasBenefit: true
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="luxury-heading mb-6">
            Why CARS24 Employees Get More Than Anyone Else
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the exclusive advantages that make our financial portal the best choice for CARS24 employees
          </p>
        </div>
        
        <div className="glassmorphic-card scroll-reveal">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Header */}
              <div className="flex items-center justify-center">
                <h3 className="text-xl font-semibold text-foreground">Features</h3>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                <Crown className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-xl font-bold text-primary mb-2">CARS24 Employees</h3>
                <p className="text-sm text-muted-foreground">Premium Benefits</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-muted/30 border border-muted">
                <Star className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">Other Employees</h3>
                <p className="text-sm text-muted-foreground">Standard Offers</p>
              </div>
            </div>
            
            {/* Comparison Rows */}
            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-200"
                >
                  <div className="flex items-center">
                    <span className="font-medium text-foreground">{item.feature}</span>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-green-700 font-medium">{item.cars24}</span>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.others}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
              <h4 className="text-lg font-semibold text-primary mb-2">
                The CARS24 Advantage
              </h4>
              <p className="text-muted-foreground mb-4">
                Join thousands of CARS24 employees who are already maximizing their financial benefits
              </p>
              <button className="neumorphic-btn-primary">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;