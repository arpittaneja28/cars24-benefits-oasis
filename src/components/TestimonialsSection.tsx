import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Senior Sales Executive",
      image: "RS",
      rating: 5,
      content: "Got a personal loan at 8.5% interest rate - 3% lower than market rates! Saved ₹50,000 in interest over 3 years.",
      result: "Saved ₹50,000"
    },
    {
      name: "Priya Patel",
      role: "Marketing Manager", 
      image: "PP",
      rating: 5,
      content: "The credit card offers 5% cashback on all purchases. Already earned ₹15,000 cashback in 6 months!",
      result: "Earned ₹15,000"
    },
    {
      name: "Amit Kumar",
      role: "Technical Lead",
      image: "AK", 
      rating: 5,
      content: "Home loan approval in just 48 hours with minimal documentation. The process was incredibly smooth.",
      result: "Approved in 48hrs"
    },
    {
      name: "Sneha Reddy",
      role: "HR Specialist",
      image: "SR",
      rating: 5,
      content: "E-commerce purchases give me 10% cashback. Shopping for family needs has become so rewarding!",
      result: "10% Cashback"
    },
    {
      name: "Vikram Singh",
      role: "Operations Head",
      image: "VS",
      rating: 5,
      content: "Investment platform helped me grow my savings by 18% annually with expert guidance and low fees.",
      result: "18% Returns"
    }
  ];

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            What Our Employees Say
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Real stories from CARS24 employees who transformed their financial journey
          </p>
        </div>

        <div className="scroll-reveal relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-gradient-luxury rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
                          {testimonial.image}
                        </div>
                        <div className="text-center">
                          <div className="flex justify-center mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-primary fill-current" />
                            ))}
                          </div>
                          <div className="glass-card px-3 py-1 rounded-full">
                            <span className="text-sm font-medium text-primary">
                              {testimonial.result}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <blockquote className="text-lg md:text-xl text-foreground mb-6 font-light leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="glass-card border-glass-border w-12 h-12 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="glass-card border-glass-border w-12 h-12 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;