import React, { useEffect, useRef } from 'react';
import { CreditCard, ShoppingBag, Banknote } from 'lucide-react';

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
      icon: Banknote,
      title: "Personal Loans",
      description: "Up to 2% Cashback • Exclusive rewards • Compare offers • Zero impact on credit score",
      benefits: ["Up to 2% Cashback", "Exclusive rewards", "Compare offers", "Zero impact on credit score"]
    },
    {
      icon: CreditCard,
      title: "Credit Cards", 
      description: "Flat cashback up to ₹3,000 • Cards tailored to your spend • Compare cards",
      benefits: ["Flat cashback up to ₹3,000", "Cards tailored to your spend", "Compare cards"]
    },
    {
      icon: ShoppingBag,
      title: "Online Shopping",
      description: "3,000+ retailers • Up to 80% cashback • Exclusive flash deals",
      benefits: ["3,000+ retailers", "Up to 80% cashback", "Exclusive flash deals"]
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            Exclusive Cashback Features
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Premium financial solutions with maximum cashback benefits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="scroll-reveal cars24-card p-8 group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="service-icon group-hover:scale-110 transition-transform duration-300 mb-6">
                <feature.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              {/* Benefits List */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
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