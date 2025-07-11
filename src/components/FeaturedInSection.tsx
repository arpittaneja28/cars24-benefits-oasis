import React, { useEffect, useRef } from 'react';

const FeaturedInSection = () => {
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

  const publications = [
    { name: 'TechCrunch', logo: 'TC' },
    { name: 'Forbes', logo: 'F' },
    { name: 'Economic Times', logo: 'ET' },
    { name: 'YourStory', logo: 'YS' },
    { name: 'Mint', logo: 'M' },
    { name: 'Business Standard', logo: 'BS' }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-12">
          <p className="text-muted-foreground font-light tracking-wide text-sm uppercase">
            Featured In
          </p>
        </div>

        <div className="scroll-reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {publications.map((pub, index) => (
            <div 
              key={pub.name}
              className="flex flex-col items-center group hover:scale-110 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-all duration-300">
                <span className="text-xl font-bold text-primary">{pub.logo}</span>
              </div>
              <p className="text-xs text-muted-foreground font-light text-center">
                {pub.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;