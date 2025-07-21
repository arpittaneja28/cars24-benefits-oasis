import React, { useState } from 'react';
import { ArrowLeft, Calculator, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useNavigate } from 'react-router-dom';

const PersonalLoansPage = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState([300000]); // Default ₹3L

  const lenders = [
    {
      name: "Fibe",
      maxAmount: "₹5L",
      interestRate: "12% - 14%",
      processingFee: "2.5%",
      cashbackRate: 2,
      features: ["Instant approval", "Zero foreclosure charges", "Flexible tenure"]
    },
    {
      name: "IndusInd Bank",
      maxAmount: "₹15L",
      interestRate: "10.5% - 18%",
      processingFee: "2%",
      cashbackRate: 2,
      features: ["Quick processing", "Minimal documentation", "Competitive rates"]
    },
    {
      name: "Zype",
      maxAmount: "₹10L",
      interestRate: "11% - 16%",
      processingFee: "3%",
      cashbackRate: 2,
      features: ["Digital process", "Fast disbursal", "No hidden charges"]
    },
    {
      name: "MoneyTap",
      maxAmount: "₹5L",
      interestRate: "13% - 36%",
      processingFee: "2.5%",
      cashbackRate: 2,
      features: ["Credit line facility", "Pay interest only on usage", "Instant approval"]
    }
  ];

  const calculateEMI = (principal: number, rate: number, tenure: number) => {
    const monthlyRate = rate / (12 * 100);
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                (Math.pow(1 + monthlyRate, tenure) - 1);
    return Math.round(emi);
  };

  const calculateCashback = (amount: number) => {
    return Math.round(amount * 0.02); // 2% cashback
  };

  const formatAmount = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Personal Loans</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Get instant personal loans with up to 2% cashback. Compare offers from top lenders.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Loan Calculator */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-6 text-center">Loan Calculator</h2>
          
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Loan Amount:</span>
                <span className="font-semibold">{formatAmount(loanAmount[0])}</span>
              </div>
              <Slider
                value={loanAmount}
                onValueChange={setLoanAmount}
                max={1500000}
                min={50000}
                step={50000}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 bg-primary/5 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">
                  ₹{calculateCashback(loanAmount[0]).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Cashback (2%)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">
                  ₹{calculateEMI(loanAmount[0], 12, 36).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">EMI (3 years)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lenders Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {lenders.map((lender, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{lender.name}</h3>
                  <p className="text-muted-foreground">Loan up to {lender.maxAmount}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Interest Rate</div>
                    <div className="font-semibold">{lender.interestRate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Processing Fee</div>
                    <div className="font-semibold">{lender.processingFee}</div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-800">Cashback Offer</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Earn {lender.cashbackRate}% cashback on loan disbursement
                  </p>
                </div>

                <ul className="space-y-2">
                  {lender.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalLoansPage;