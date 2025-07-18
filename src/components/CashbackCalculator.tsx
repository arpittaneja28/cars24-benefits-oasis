import React, { useState, useEffect, useRef } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const CashbackCalculator = () => {
  const [amount, setAmount] = useState([100000]);
  const [cashback, setCashback] = useState(0);
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

  useEffect(() => {
    // Calculate cashback based on amount (2% for demonstration)
    const calculatedCashback = Math.floor(amount[0] * 0.02);
    setCashback(calculatedCashback);
  }, [amount]);

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(0)}K`;
    }
    return `₹${value.toLocaleString()}`;
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="scroll-reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter">
            Cashback Calculator
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            See how much you can earn with our cashback programs
          </p>
        </div>

        <div className="scroll-reveal">
          <div className="cars24-card p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
            </div>

            <div className="relative z-10">
              {/* Calculator Icon */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Amount Input Section */}
              <div className="text-center mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-4">
                  Loan/Premium Amount
                </label>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {formatCurrency(amount[0])}
                </div>
                
                {/* Slider */}
                <div className="max-w-md mx-auto">
                  <Slider
                    value={amount}
                    onValueChange={setAmount}
                    max={10000000}
                    min={10000}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>₹10K</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              </div>

              {/* Cashback Result */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
                      <span className="text-sm font-medium text-green-500">Your Cashback</span>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-green-500">
                      {formatCurrency(cashback)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Based on 2% cashback rate
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  *Cashback rates may vary based on product type and eligibility criteria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashbackCalculator;