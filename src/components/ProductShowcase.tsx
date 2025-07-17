import React, { useEffect, useRef } from 'react';
import premiumDashboard from '@/assets/premium-dashboard.jpg';

const ProductShowcase = () => {
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
    <section ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Product UI Showcase */}
        <div className="scroll-reveal relative max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-xl p-8">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden">
              <img 
                src={premiumDashboard} 
                alt="Premium Financial Dashboard Interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Premium Financial Hub</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Track benefits • Monitor rewards • Access exclusive deals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;