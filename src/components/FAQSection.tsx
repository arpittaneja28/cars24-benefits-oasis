import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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

  const faqs = [
    {
      question: "How do I qualify for the employee benefits program?",
      answer: "All CARS24 employees with a valid employee ID are automatically eligible for our benefits program. Simply verify your employment status during registration to access exclusive offers."
    },
    {
      question: "What kind of cashback can I expect?",
      answer: "Cashback varies by plan and purchase type. Free plan offers 1-2% on select purchases, Pro plan provides 5% on all purchases, and Enterprise plan offers up to 10% cashback across all categories."
    },
    {
      question: "How quickly are loan applications processed?",
      answer: "Loan processing times depend on your plan. Free plan applications are processed within 7 days, Pro plan within 48 hours, and Enterprise plan offers instant approvals for pre-qualified members."
    },
    {
      question: "Are there any hidden fees or charges?",
      answer: "No hidden fees! Our Free plan is completely free. Pro and Enterprise plans have transparent monthly fees with no additional charges. All terms and conditions are clearly stated upfront."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan anytime. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. You'll receive prorated refunds for unused premium days."
    },
    {
      question: "How secure is my financial information?",
      answer: "We use bank-grade encryption and security measures. Your data is protected with 256-bit SSL encryption, and we never share your information with third parties without your explicit consent."
    },
    {
      question: "What payment methods are accepted for premiums plans?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. You can also set up automatic payments for convenience."
    },
    {
      question: "Is customer support available 24/7?",
      answer: "Yes! Enterprise plan members get 24/7 priority support. Pro plan members have access to support from 6 AM to 10 PM daily. Free plan users can reach us during business hours (9 AM to 6 PM)."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Everything you need to know about our employee benefits program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="scroll-reveal bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/10 transition-colors duration-200"
              >
                <h3 className="font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="scroll-reveal text-center mt-12">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our support team is here to help you get the most out of your benefits
            </p>
            <button className="neuro-button px-6 py-2">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;