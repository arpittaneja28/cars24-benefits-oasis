import React, { useEffect, useRef } from 'react';
import { CreditCard, TrendingUp, Shield, Zap, Gift, DollarSign, Lock, Users } from 'lucide-react';

const FeaturesSection = () => {
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

  const features = [
    {
      icon: CreditCard,
      title: "Premium Credit Cards",
      description: "Exclusive credit cards with up to 5% cashback, zero annual fees, and premium benefits designed for CARS24 employees.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Low-Interest Loans",
      description: "Personal and home loans at market-beating interest rates, with quick approval and minimal documentation required.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Gift,
      title: "Instant Cashback",
      description: "Earn up to 10% cashback on e-commerce purchases, dining, travel, and entertainment through our partner network.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-grade security with end-to-end encryption, ensuring your financial data and transactions are always protected.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Instant Approvals",
      description: "Get approved for loans and credit cards in minutes, not days. Our AI-powered system ensures quick decisions.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: DollarSign,
      title: "Investment Advisory",
      description: "Access to premium investment options with expert advisory services to help grow your wealth systematically.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Your personal and financial information is never shared with third parties. Complete privacy guaranteed.",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Dedicated customer support team available round the clock to assist with all your queries and concerns.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            Exclusive Features
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Comprehensive financial solutions tailored specifically for CARS24 employees
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="scroll-reveal feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="scroll-reveal mt-20">
          <div className="glass-card p-8 rounded-3xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">₹50L+</div>
                <div className="text-muted-foreground text-sm">Loans Disbursed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">₹2L+</div>
                <div className="text-muted-foreground text-sm">Cashback Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-muted-foreground text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;