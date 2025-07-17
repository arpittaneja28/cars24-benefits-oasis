import React, { useState } from 'react';
import { Calculator, TrendingUp, Wallet } from 'lucide-react';

const CashbackCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [selectedProduct, setSelectedProduct] = useState('personal');
  
  const products = {
    personal: { name: 'Personal Loan', rate: 0.02, maxCashback: 10000 },
    credit: { name: 'Credit Card', rate: 0.05, maxCashback: 3000 },
    shopping: { name: 'Online Shopping', rate: 0.15, maxCashback: 5000 }
  };
  
  const calculateCashback = () => {
    const product = products[selectedProduct as keyof typeof products];
    const cashback = Math.min(loanAmount * product.rate, product.maxCashback);
    return Math.round(cashback);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="luxury-heading mb-6">
            Cashback Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calculate your potential cashback rewards in real-time
          </p>
        </div>
        
        <div className="glassmorphic-card">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Input */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select Product Type
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(products).map(([key, product]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedProduct(key)}
                        className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                          selectedProduct === key
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border bg-background/50 hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm opacity-70">
                          Up to {(product.rate * 100).toFixed(0)}% cashback
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Amount: ₹{loanAmount.toLocaleString('en-IN')}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="2000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-background/50 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>₹10K</span>
                    <span>₹20L</span>
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div className="space-y-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                  <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Your Cashback
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    ₹{calculateCashback().toLocaleString('en-IN')}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    On {products[selectedProduct as keyof typeof products].name}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-background/50 text-center">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-foreground">
                      {(products[selectedProduct as keyof typeof products].rate * 100).toFixed(1)}%
                    </div>
                    <div className="text-xs text-muted-foreground">Cashback Rate</div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-background/50 text-center">
                    <Wallet className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-foreground">
                      ₹{products[selectedProduct as keyof typeof products].maxCashback.toLocaleString('en-IN')}
                    </div>
                    <div className="text-xs text-muted-foreground">Max Cashback</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashbackCalculator;