import React, { useEffect, useRef, useState } from 'react';
import { CreditCard, ShoppingBag, User, GraduationCap, Home, Car, Shield as ShieldIcon, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useNavigate } from 'react-router-dom';

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

  const exclusiveFeatures = [
    {
      icon: User,
      title: "Personal Loans",
      features: [
        "Up to 2% Cashback",
        "Exclusive rewards",
        "Compare offers",
        "Zero impact on credit score"
      ],
      route: "/personal-loans"
    },
    {
      icon: CreditCard,
      title: "Credit Cards",
      features: [
        "Flat cashback up to ₹3,000",
        "Cards tailored to your spend",
        "Compare cards",
        "Instant approval process"
      ],
      route: "/credit-cards"
    },
    {
      icon: ShoppingBag,
      title: "Online Shopping",
      features: [
        "3,000+ retailers",
        "Up to 80% cashback",
        "Exclusive flash deals",
        "Premium partner offers"
      ],
      route: "/online-shopping"
    }
  ];

  // Coming Soon Section State
  const [educationLoan, setEducationLoan] = useState([10]);
  const [homeLoan, setHomeLoan] = useState([20]);
  const [autoLoan, setAutoLoan] = useState([2]);
  const [insurance, setInsurance] = useState([20]);

  const calculateCashback = (amount: number, rate: number) => {
    // Amount is in Lakhs, so multiply by 100000 to get actual amount, then apply rate percentage
    const actualAmount = amount * 100000;
    const cashback = (actualAmount * rate / 100);
    // Return in thousands (K) format
    return (cashback / 1000).toFixed(1);
  };

  const comingSoonFeatures = [
    {
      icon: GraduationCap,
      title: "Education Loan",
      description: "Up to ₹50L loan",
      voucher: "₹40K Amazon voucher for your new laptop",
      defaultAmount: educationLoan[0],
      rate: 0.75,
      unit: "L",
      setState: setEducationLoan,
      value: educationLoan
    },
    {
      icon: Home,
      title: "Home Loan",
      description: "₹1Cr loan",
      voucher: "₹50K voucher for your home's new interiors",
      defaultAmount: homeLoan[0],
      rate: 0.50,
      unit: "L",
      setState: setHomeLoan,
      value: homeLoan
    },
    {
      icon: Car,
      title: "Auto Loan",
      description: "₹10L loan",
      voucher: "₹5K Amazon voucher for car essentials",
      defaultAmount: autoLoan[0],
      rate: 0.60,
      unit: "L",
      setState: setAutoLoan,
      value: autoLoan
    },
    {
      icon: ShieldIcon,
      title: "Insurance",
      description: "Lifetime insurance",
      voucher: "₹4K voucher to boost your health essentials",
      defaultAmount: insurance[0],
      rate: 0.20,
      unit: "L",
      setState: setInsurance,
      value: insurance
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Exclusive Features Section */}
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            Exclusive Features
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Premium financial solutions for CARS24 employees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {exclusiveFeatures.map((feature, index) => (
            <div 
              key={index}
              className="scroll-reveal group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glassmorphic Card - No borders as per requirements */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    {feature.title}
                  </h3>
                  
                  {/* Features List with proper bullets and structure */}
                  <div className="space-y-4 mb-8 text-left">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 group/item">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-primary group-hover/item:text-accent transition-colors duration-200" />
                        </div>
                        <span className="text-muted-foreground font-medium leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Neumorphism CTA Button */}
                  <Button 
                    onClick={() => navigate(feature.route)}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="scroll-reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter text-sky-950">
              Upcoming Features to Maximize Your Benefits
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Interactive calculators to preview your cashback potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {comingSoonFeatures.map((feature, index) => (
              <div 
                key={index}
                className="scroll-reveal group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glassmorphic Card - No borders as per requirements */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/5 to-muted/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      {feature.description}
                    </p>
                    
                    <p className="text-xs text-muted-foreground/80 mb-4">
                      {feature.voucher}
                    </p>

                    {/* Interactive Cashback Calculator */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Amount:</span>
                        <span className="font-semibold">₹{feature.value[0]}{feature.unit}</span>
                      </div>
                      
                      <Slider
                        value={feature.value}
                        onValueChange={feature.setState}
                        max={feature.title === "Education Loan" ? 50 : feature.title === "Home Loan" ? 100 : feature.title === "Auto Loan" ? 10 : 50}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      
                      <div className="text-center p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                        <div className="text-lg font-bold text-primary">
                          ₹{calculateCashback(feature.value[0], feature.rate)}K
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Cashback ({feature.rate}%)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="scroll-reveal">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-muted-foreground/70 mb-2">1000+</div>
              <div className="text-muted-foreground/60 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-muted-foreground/70 mb-2">₹50L+</div>
              <div className="text-muted-foreground/60 text-sm">Loans Disbursed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-muted-foreground/70 mb-2">₹2L+</div>
              <div className="text-muted-foreground/60 text-sm">Cashback Earned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-muted-foreground/70 mb-2">4.9★</div>
              <div className="text-muted-foreground/60 text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;