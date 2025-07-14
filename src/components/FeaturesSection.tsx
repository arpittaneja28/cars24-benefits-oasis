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
      description: "5% cashback, zero fees, instant approval",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Low-Interest Loans",
      description: "Market-beating rates, quick approval",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Gift,
      title: "Instant Cashback",
      description: "Up to 10% cashback on all purchases",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-grade security, full encryption",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Instant Approvals",
      description: "AI-powered, decisions in minutes",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: DollarSign,
      title: "Investment Advisory",
      description: "Expert guidance, premium options",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Complete privacy, no third-party sharing",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Dedicated team, round-the-clock assistance",
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
            Premium financial solutions for CARS24 employees
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="scroll-reveal cars24-card p-6 group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="service-icon group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="scroll-reveal mt-20">
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