import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Wallet, Clock, Calendar, CreditCard, ShoppingBag, Plane, TrendingUp, CheckCircle, Clock3, LogOut, ToggleLeft, ToggleRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Line, Doughnut } from 'react-chartjs-2';
import ComparisonSection from '@/components/ComparisonSection';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { isLoggedIn, userEmail, logout, toggleAuth } = useAuth();
  const navigate = useNavigate();
  const [animatedValues, setAnimatedValues] = useState({
    total: 0,
    pending: 0,
    thisMonth: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Animate counter values only for logged-in users
            if (entry.target.classList.contains('metrics-section') && isLoggedIn) {
              const targets = { total: 2847, pending: 456, thisMonth: 312 };
              const duration = 1500;
              const steps = 60;
              const increment = duration / steps;
              
              let step = 0;
              const timer = setInterval(() => {
                step++;
                const progress = step / steps;
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                
                setAnimatedValues({
                  total: Math.round(targets.total * easeOutCubic),
                  pending: Math.round(targets.pending * easeOutCubic),
                  thisMonth: Math.round(targets.thisMonth * easeOutCubic),
                });
                
                if (step >= steps) clearInterval(timer);
              }, increment);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoggedIn]);

  const handleGetStarted = () => {
    if (isLoggedIn) {
      // For logged-in users, scroll to features (Get Cashback action)
      const featuresSection = document.querySelector('#features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For non-logged-in users, scroll to comparison section
      const comparisonSection = document.querySelector('#comparison');
      if (comparisonSection) {
        comparisonSection.scrollIntoView({ behavior: 'smooth' });
      }
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
            {isLoggedIn ? `Welcome back, ${userEmail?.split('@')[0]}!` : 'Exclusive for CARS24 Employees'}
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
            {isLoggedIn ? 'Get Cashback' : 'See Your Benefits'}
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
          {isLoggedIn && (
            <Button 
              variant="ghost" 
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={logout}
            >
              <LogOut className="mr-2 w-5 h-5" />
              Logout
            </Button>
          )}
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

      {/* Conditional Section: Dashboard for logged-in users, Comparison for non-logged-in users */}
      {isLoggedIn ? (
        // Cashback Dashboard for logged-in users
        <div className="scroll-reveal metrics-section mt-16 relative max-w-7xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-xl p-6 md:p-8">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">Your Cashback Dashboard</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track your earnings • Monitor rewards • View transaction history
              </p>
            </div>

            {/* Main Dashboard Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column: Key Metrics Cards */}
              <div className="space-y-4">
                {/* Total Cashback Earned */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Wallet className="w-6 h-6 text-yellow-400" />
                        <span className="text-sm opacity-90">Total Cashback Earned</span>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold">₹{animatedValues.total.toLocaleString()}</div>
                      <div className="text-sm opacity-75 mt-1">All-time earnings</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-yellow-400 opacity-60" />
                  </div>
                </div>

                {/* Pending Cashback */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-6 h-6 text-white animate-pulse" />
                        <span className="text-sm opacity-90">Pending Cashback</span>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold">₹{animatedValues.pending.toLocaleString()}</div>
                      <div className="text-sm opacity-75 mt-1">Processing rewards</div>
                    </div>
                    <Clock3 className="w-8 h-8 text-white opacity-60" />
                  </div>
                </div>

                {/* This Month's Cashback */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-6 h-6 text-white" />
                        <span className="text-sm opacity-90">This Month's Cashback</span>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold">₹{animatedValues.thisMonth.toLocaleString()}</div>
                      <div className="text-sm opacity-75 mt-1">January 2025</div>
                    </div>
                    <Calendar className="w-8 h-8 text-white opacity-60" />
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Infographics */}
              <div className="space-y-6">
                {/* Cashback Trend Chart */}
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Cashback Trend (6 Months)</h4>
                  <div className="h-48">
                    <Line
                      data={{
                        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
                        datasets: [
                          {
                            label: 'Cashback (₹)',
                            data: [245, 198, 289, 412, 378, 312],
                            borderColor: '#1E3A8A',
                            backgroundColor: 'rgba(30, 58, 138, 0.1)',
                            fill: true,
                            tension: 0.4,
                            pointBackgroundColor: '#1E3A8A',
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 2,
                            pointRadius: 5,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { display: false },
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            grid: { color: 'rgba(0,0,0,0.1)' },
                          },
                          x: {
                            grid: { display: false },
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Category Breakdown */}
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Category Breakdown</h4>
                  <div className="h-48">
                    <Doughnut
                      data={{
                        labels: ['Personal Loans', 'Shopping', 'Travel', 'Credit Cards'],
                        datasets: [
                          {
                            data: [40, 35, 15, 10],
                            backgroundColor: ['#1E3A8A', '#059669', '#7C3AED', '#F59E0B'],
                            borderWidth: 0,
                            hoverOffset: 4,
                          },
                        ],
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              padding: 20,
                              usePointStyle: true,
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-foreground">Recent Cashback Transactions</h4>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              
              <div className="space-y-3">
                {/* Transaction Items */}
                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">IDFC Personal Loan</div>
                      <div className="text-sm text-muted-foreground">₹1,50,000 → ₹3,000 cashback</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Credited</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Jan 15</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <ShoppingBag className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Amazon</div>
                      <div className="text-sm text-muted-foreground">₹1,200 → ₹60 cashback</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-orange-600">
                      <Clock3 className="w-4 h-4" />
                      <span className="text-sm font-medium">Pending</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Jan 14</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Plane className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">MakeMyTrip</div>
                      <div className="text-sm text-muted-foreground">₹8,500 → ₹425 cashback</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Credited</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Jan 12</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-6">
                <Button variant="outline" className="px-6">
                  View Full Transaction History
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Comparison Section for non-logged-in users
        <div id="comparison" className="mt-16 w-full">
          <ComparisonSection />
        </div>
      )}

      {/* Prototype Demo Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <h4 className="text-sm font-medium mb-2">Prototype Demo</h4>
          <Button
            onClick={toggleAuth}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            {isLoggedIn ? (
              <>
                <ToggleRight className="w-4 h-4 text-green-600" />
                Logged In
              </>
            ) : (
              <>
                <ToggleLeft className="w-4 h-4 text-muted-foreground" />
                Logged Out
              </>
            )}
          </Button>
          {isLoggedIn && (
            <p className="text-xs text-muted-foreground mt-1">
              {userEmail}
            </p>
          )}
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
