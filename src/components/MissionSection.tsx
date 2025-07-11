import React, { useEffect, useRef } from 'react';
import { Target, Heart, Star } from 'lucide-react';

const MissionSection = () => {
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

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="scroll-reveal text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-luxury rounded-2xl flex items-center justify-center">
            <Target className="w-10 h-10 text-white" />
          </div>

          {/* Main Content */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
            Our Mission
          </h2>
          
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-foreground mb-8">
              "At CARS24, we believe our employees deserve more than just a paycheck. 
              Our mission is to reward every transaction, every service, and every engagement 
              our team members make through our platform with exclusive benefits and cashback rewards."
            </blockquote>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
              <div className="flex items-center">
                <Heart className="w-6 h-6 text-primary mr-2" />
                <span className="text-muted-foreground">Employee First</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 text-primary mr-2" />
                <span className="text-muted-foreground">Premium Benefits</span>
              </div>
              <div className="flex items-center">
                <Target className="w-6 h-6 text-primary mr-2" />
                <span className="text-muted-foreground">Financial Growth</span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="scroll-reveal mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Transparency</h3>
              <p className="text-muted-foreground font-light">
                No hidden fees, clear terms, and honest communication in every interaction.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Excellence</h3>
              <p className="text-muted-foreground font-light">
                Premium services that exceed expectations and deliver real value.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Innovation</h3>
              <p className="text-muted-foreground font-light">
                Cutting-edge solutions that simplify financial services for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;