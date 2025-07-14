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
          <div className="w-20 h-20 mx-auto mb-8 bg-primary rounded-2xl flex items-center justify-center">
            <Target className="w-10 h-10 text-white" />
          </div>

          {/* Main Content */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
            Our Mission
          </h2>
          
          <div className="bg-card border border-border rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground mb-8">
              Rewarding CARS24 employees with exclusive financial benefits
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Employee First</h3>
                  <p className="text-sm text-muted-foreground">Prioritizing our team's financial wellbeing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Premium Benefits</h3>
                  <p className="text-sm text-muted-foreground">Exclusive access to top-tier financial products</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Financial Growth</h3>
                  <p className="text-sm text-muted-foreground">Building wealth through smart rewards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;