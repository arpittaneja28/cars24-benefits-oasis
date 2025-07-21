import React from 'react';
import { ArrowLeft, CreditCard, Award, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CreditCardsPage = () => {
  const navigate = useNavigate();

  const creditCards = [
    {
      name: "CARS24 Platinum Card",
      annualSavings: "₹12,000",
      cashback: "5% cashback on Flipkart, 2% on other purchases",
      joiningFee: "₹499",
      annualFee: "₹999",
      features: [
        "Welcome bonus worth ₹2,000",
        "Complimentary airport lounge access",
        "Zero foreign transaction fee",
        "EMI conversion facility"
      ],
      highlight: "Most Popular"
    },
    {
      name: "CARS24 Gold Card",
      annualSavings: "₹8,000",
      cashback: "3% cashback on Amazon, 1.5% on other purchases",
      joiningFee: "₹299",
      annualFee: "₹599",
      features: [
        "Welcome bonus worth ₹1,000",
        "Fuel surcharge waiver",
        "Movie ticket discounts",
        "Dining privileges"
      ]
    },
    {
      name: "CARS24 Travel Card",
      annualSavings: "₹15,000",
      cashback: "10% on travel bookings, 3% on dining",
      joiningFee: "₹999",
      annualFee: "₹1,999",
      features: [
        "Welcome bonus worth ₹5,000",
        "Unlimited airport lounge access",
        "Travel insurance coverage",
        "Hotel booking discounts"
      ],
      highlight: "Premium"
    },
    {
      name: "CARS24 Cashback Card",
      annualSavings: "₹10,000",
      cashback: "Flat 2% cashback on all purchases",
      joiningFee: "₹199",
      annualFee: "₹399",
      features: [
        "No category restrictions",
        "Monthly cashback credit",
        "Instant card approval",
        "Digital wallet integration"
      ]
    }
  ];

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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Credit Cards</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover credit cards tailored for CARS24 employees with exclusive cashback offers.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Benefits Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Exclusive Cashback</h3>
            <p className="text-muted-foreground">Up to 10% cashback on select categories</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Zero Hidden Fees</h3>
            <p className="text-muted-foreground">Transparent pricing with no surprises</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Instant Approval</h3>
            <p className="text-muted-foreground">Quick processing for CARS24 employees</p>
          </div>
        </div>

        {/* Credit Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {creditCards.map((card, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {card.highlight && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {card.highlight}
                </div>
              )}

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{card.name}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-800">{card.annualSavings}</div>
                    <div className="text-sm text-green-600">Annual Savings</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-lg font-bold text-blue-800">{card.joiningFee}</div>
                    <div className="text-sm text-blue-600">Joining Fee</div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary">Cashback Offer</span>
                  </div>
                  <p className="text-sm text-foreground">{card.cashback}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                  >
                    Apply Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="px-4 rounded-xl border-primary/20 hover:bg-primary/5"
                  >
                    Compare
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compare Cards CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5 text-primary"
          >
            Compare All Cards
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreditCardsPage;