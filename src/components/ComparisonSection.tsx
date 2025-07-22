import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, CreditCard, Banknote, ShoppingCart, Clock, ArrowRight } from 'lucide-react';
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
        text: "Priority Processing and guidance on Loan and Credit Cards selection",
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
    <section className="py-16 px-6 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Outer Border Container */}
        <div className="border border-border rounded-3xl p-8 bg-card/50 backdrop-blur-sm shadow-lg">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Why Choose CARS24 Benefits?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how CARS24 employees get exclusive benefits compared to the general public
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* CARS24 Employees Column */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-600 mb-2">CARS24 Employees</h3>
                <p className="text-muted-foreground">Exclusive benefits & premium support</p>
              </div>
              
              {benefits.map((benefit, index) => (
                <Card 
                  key={`employee-${index}`}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-green-200 bg-green-50/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-lg">{benefit.title}</h4>
                          <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
                            <Check className="w-3 h-3 mr-1" />
                            Available
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {benefit.employee.text}
                        </p>
                        <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
                          <Check className="w-3 h-3 mr-1" />
                          {benefit.employee.savings}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* General Public Column */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-2">General Public</h3>
                <p className="text-muted-foreground">Standard offerings & support</p>
              </div>
              
              {benefits.map((benefit, index) => (
                <Card 
                  key={`public-${index}`}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-red-200 bg-red-50/50 opacity-90"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-lg">{benefit.title}</h4>
                          <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100">
                            <X className="w-3 h-3 mr-1" />
                            Limited
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {benefit.public.text}
                        </p>
                        <Badge variant="outline" className="text-red-700 border-red-200 bg-red-50">
                          <X className="w-3 h-3 mr-1" />
                          {benefit.public.savings}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Ready to Access Your Exclusive Benefits?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join 1000+ CARS24 employees who are already saving thousands with our exclusive financial benefits program.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Start Saving Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    
    <LoginModal 
      isOpen={isLoginModalOpen} 
      onClose={() => setIsLoginModalOpen(false)} 
    />
    </>
  );
};

export default ComparisonSection;