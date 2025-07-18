import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleGetStarted = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 bg-background"
    >
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="scroll-reveal mb-6 mt-20">
          <div className="inline-flex items-center bg-card border border-border rounded-full px-4 py-2 text-sm text-muted-foreground shadow-sm">
            <Star className="w-4 h-4 mr-2 text-primary fill-current" />
            Exclusive for CARS24 Employees
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="scroll-reveal text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">
            Unlock Premium
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Financial Benefits
          </span>
        </h1>

        {/* Subtitle */}
        <p className="scroll-reveal text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Exclusive loans, credit cards, and cashback rewards designed specifically for CARS24 employees. 
          Experience premium financial services with unmatched benefits.
        </p>

        {/* CTA Buttons */}
        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="px-8 py-4 text-lg group"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 text-lg"
            onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="scroll-reveal">
          <p className="text-sm text-muted-foreground mb-4">Trusted by 1000+ CARS24 employees</p>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.9/5 rating</span>
          </div>
        </div>
      </div>

      {/* Cashback Dashboard */}
      <div className="scroll-reveal mt-16 relative max-w-7xl mx-auto">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-4 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">Your Cashback Dashboard</h3>
            <p className="text-muted-foreground leading-relaxed">
              Track your earnings • Monitor rewards • View transaction history
            </p>
          </div>
          
          {/* Dashboard Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column: Key Metrics Cards */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {/* Total Cashback Earned */}
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-green-600">₹2,847</div>
                      <div className="text-sm text-muted-foreground">All-time earnings</div>
                    </div>
                  </div>
                </div>

                {/* Pending Cashback */}
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-orange-600">₹456</div>
                      <div className="text-sm text-muted-foreground">Processing rewards</div>
                    </div>
                  </div>
                </div>

                {/* This Month's Cashback */}
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📅</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600">₹312</div>
                      <div className="text-sm text-muted-foreground">January 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Infographics */}
            <div className="space-y-6">
              {/* Cashback Trend Chart */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Cashback Trend (Last 6 Months)</h4>
                <div className="h-48 flex items-end justify-between space-x-2">
                  {[
                    { month: 'Aug', amount: 245, height: '45%' },
                    { month: 'Sep', amount: 198, height: '35%' },
                    { month: 'Oct', amount: 289, height: '55%' },
                    { month: 'Nov', amount: 412, height: '80%' },
                    { month: 'Dec', amount: 378, height: '70%' },
                    { month: 'Jan', amount: 312, height: '60%' }
                  ].map((data, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg transition-all duration-1000 ease-out hover:from-primary/80 hover:to-primary/40"
                        style={{ height: data.height }}
                      ></div>
                      <div className="text-xs text-muted-foreground mt-2">{data.month}</div>
                      <div className="text-xs font-medium">₹{data.amount}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 border border-border rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Cashback by Category</h4>
                <div className="space-y-3">
                  {[
                    { category: 'Personal Loans', percentage: 40, amount: 1139, color: 'bg-blue-500' },
                    { category: 'Shopping', percentage: 35, amount: 996, color: 'bg-green-500' },
                    { category: 'Travel', percentage: 15, amount: 427, color: 'bg-purple-500' },
                    { category: 'Credit Cards', percentage: 10, amount: 285, color: 'bg-orange-500' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                        <span className="text-sm font-medium">{item.category}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{item.percentage}%</div>
                        <div className="text-xs text-muted-foreground">₹{item.amount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Transactions Section */}
          <div className="border-t border-border pt-6">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Recent Cashback Transactions</h4>
            <div className="space-y-3">
              {[
                { icon: '💳', merchant: 'Personal Loan', amount: '₹1,50,000', cashback: '₹3,000', status: 'Credited', date: 'Jan 15', statusColor: 'text-green-600' },
                { icon: '🛒', merchant: 'Amazon', amount: '₹1,200', cashback: '₹60', status: 'Pending', date: 'Jan 14', statusColor: 'text-orange-600' },
                { icon: '✈️', merchant: 'MakeMyTrip', amount: '₹8,500', cashback: '₹425', status: 'Credited', date: 'Jan 12', statusColor: 'text-green-600' }
              ].map((transaction, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                    <span className="text-2xl">{transaction.icon}</span>
                    <div>
                      <div className="font-medium">{transaction.merchant}</div>
                      <div className="text-sm text-muted-foreground">{transaction.amount} → {transaction.cashback} cashback</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end space-x-4">
                    <span className={`text-sm font-medium ${transaction.statusColor}`}>
                      {transaction.status === 'Credited' ? '✅' : '⏳'} {transaction.status}
                    </span>
                    <span className="text-sm text-muted-foreground">{transaction.date}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-6">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                View Full Transaction History
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;