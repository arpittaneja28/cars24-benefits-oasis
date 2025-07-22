import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Award, Star, Shield, Gift, Plus } from 'lucide-react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import CardComparisonModal from '@/components/CardComparisonModal';

interface CreditCard {
  name: string;
  bankName: string;
  portalCashback: number;
  joiningFee: string;
  annualFee: string;
  features: string[];
  highlight?: string;
}

const CreditCardsPage = () => {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState<CreditCard[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const creditCards: CreditCard[] = [
    {
      name: "Jupiter Edge Credit Card",
      bankName: "Federal Bank",
      portalCashback: 1100,
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
      name: "RBL Bank Play Credit Card",
      bankName: "RBL Bank",
      portalCashback: 1250,
      joiningFee: "₹299",
      annualFee: "₹599",
      features: [
        "Welcome bonus worth ₹1,000",
        "Fuel surcharge waiver",
        "Movie ticket discounts",
        "Dining privileges"
      ],
      highlight: "Highest Cashback"
    },
    {
      name: "Supermoney Rupay Card",
      bankName: "Axis",
      portalCashback: 1100,
      joiningFee: "₹999",
      annualFee: "₹1,999",
      features: [
        "Welcome bonus worth ₹5,000",
        "Unlimited airport lounge access",
        "Travel insurance coverage",
        "Hotel booking discounts"
      ]
    },
    {
      name: "Axis Privilege Amex Credit Card",
      bankName: "Axis",
      portalCashback: 1100,
      joiningFee: "₹199",
      annualFee: "₹399",
      features: [
        "No category restrictions",
        "Monthly cashback credit",
        "Instant card approval",
        "Digital wallet integration"
      ]
    },
    {
      name: "Kotak Essentia Platinum Credit Card",
      bankName: "Kotak",
      portalCashback: 1100,
      joiningFee: "₹599",
      annualFee: "₹899",
      features: [
        "Lifestyle benefits",
        "Reward points on every purchase",
        "Contactless payments",
        "24/7 customer support"
      ]
    },
    {
      name: "Kotak Delight Platinum Credit Card",
      bankName: "Kotak",
      portalCashback: 1100,
      joiningFee: "₹399",
      annualFee: "₹699",
      features: [
        "Dining discounts",
        "Entertainment benefits",
        "Shopping rewards",
        "Easy EMI options"
      ]
    },
    {
      name: "PIXEL Play Credit Card",
      bankName: "HDFC",
      portalCashback: 1100,
      joiningFee: "₹799",
      annualFee: "₹1,299",
      features: [
        "Online shopping rewards",
        "Gaming benefits",
        "Tech lifestyle perks",
        "Digital wallet integration"
      ]
    },
    {
      name: "Paytm HDFC Bank Select Credit Card",
      bankName: "HDFC",
      portalCashback: 1100,
      joiningFee: "₹999",
      annualFee: "₹1,499",
      features: [
        "Paytm wallet benefits",
        "Cashback on UPI transactions",
        "Travel benefits",
        "Insurance coverage"
      ]
    },
    {
      name: "Rio Rupay Credit Card",
      bankName: "Yes Bank",
      portalCashback: 1000,
      joiningFee: "₹299",
      annualFee: "₹499",
      features: [
        "RuPay network benefits",
        "Domestic transactions",
        "Fuel surcharge waiver",
        "ATM cash withdrawal"
      ]
    },
    {
      name: "PVR Kotak Platinum Credit Card",
      bankName: "Kotak",
      portalCashback: 1100,
      joiningFee: "₹599",
      annualFee: "₹999",
      features: [
        "Movie ticket discounts",
        "PVR cinema benefits",
        "F&B discounts",
        "Entertainment rewards"
      ]
    },
    {
      name: "MakeMyTrip ICICI Bank Signature Credit Card",
      bankName: "ICICI Bank",
      portalCashback: 1250,
      joiningFee: "₹1,499",
      annualFee: "₹2,999",
      features: [
        "Travel booking benefits",
        "Airport lounge access",
        "Hotel discounts",
        "Travel insurance"
      ],
      highlight: "Travel Benefits"
    },
    {
      name: "SBI Card Miles Credit Card",
      bankName: "SBI",
      portalCashback: 12500,
      joiningFee: "₹4,999",
      annualFee: "₹9,999",
      features: [
        "Air miles accumulation",
        "Premium travel benefits",
        "Concierge services",
        "Priority customer service"
      ],
      highlight: "Premium"
    },
    {
      name: "HSBC Travel One Credit Card",
      bankName: "HSBC Bank",
      portalCashback: 1250,
      joiningFee: "₹1,999",
      annualFee: "₹3,999",
      features: [
        "International travel benefits",
        "Zero forex markup",
        "Global customer support",
        "Premium assistance"
      ]
    },
    {
      name: "IDFC First SWYP Credit Card",
      bankName: "IDFC",
      portalCashback: 1000,
      joiningFee: "₹0",
      annualFee: "₹499",
      features: [
        "No joining fee",
        "Flexible payment options",
        "Digital-first experience",
        "Instant approval"
      ]
    },
    {
      name: "IRCTC RBL Credit Card",
      bankName: "RBL Bank",
      portalCashback: 800,
      joiningFee: "₹199",
      annualFee: "₹399",
      features: [
        "Railway booking benefits",
        "IRCTC transaction benefits",
        "Travel insurance",
        "Lounge access"
      ]
    }
  ];

  const handleAddToComparison = (card: CreditCard) => {
    console.log('handleAddToComparison called', { card: card.name, currentSelection: selectedCards.length });
    
    // Check if card is already selected
    const isAlreadySelected = selectedCards.find(c => c.name === card.name);
    
    if (isAlreadySelected) {
      // Remove card if already selected
      console.log('Removing card:', card.name);
      handleRemoveFromComparison(card.name);
      return;
    }
    
    // Add card if not selected and under limit
    if (selectedCards.length < 3) {
      const newSelectedCards = [...selectedCards, card];
      console.log('Adding card, new selection:', newSelectedCards.map(c => c.name));
      setSelectedCards(newSelectedCards);
      
      // Open sidebar when 2 or more cards are selected
      if (newSelectedCards.length >= 2) {
        console.log('Opening sidebar - 2+ cards selected');
        setIsSidebarOpen(true);
      }
    }
  };

  const handleRemoveFromComparison = (cardName: string) => {
    console.log('handleRemoveFromComparison called', { cardName, currentSelection: selectedCards.length });
    const newSelectedCards = selectedCards.filter(card => card.name !== cardName);
    console.log('After removal:', newSelectedCards.map(c => c.name));
    setSelectedCards(newSelectedCards);
    
    // Close sidebar if less than 2 cards remain
    if (newSelectedCards.length < 2) {
      console.log('Closing sidebar - less than 2 cards');
      setIsSidebarOpen(false);
    }
  };

  const openComparison = () => {
    console.log('openComparison called', { selectedCards: selectedCards.length });
    if (selectedCards.length > 0) {
      setIsComparisonOpen(true);
      setIsSidebarOpen(false);
    }
  };

  const handleAddMoreCards = () => {
    console.log('handleAddMoreCards called');
    setIsSidebarOpen(false);
  };

  const handleViewSelection = () => {
    console.log('handleViewSelection called', { selectedCards: selectedCards.length, isSidebarOpen });
    setIsSidebarOpen(true);
  };

  // Close sidebar when clicking outside (scrim effect)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Don't close if clicking on card buttons or sidebar content
      const target = event.target as HTMLElement;
      if (target.closest('.sidebar-content') || target.closest('[data-card-button]')) {
        return;
      }
      
      if (isSidebarOpen) {
        console.log('Closing sidebar due to outside click');
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      // Delay adding the listener to avoid immediate trigger
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-background relative">
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
            <p className="text-muted-foreground">Up to ₹12,500 Amazon voucher on select cards</p>
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
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="text-2xl font-bold text-amber-800">₹{card.portalCashback}</div>
                    <div className="text-sm text-amber-600">Cars24 Cashback</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-lg font-bold text-blue-800">{card.joiningFee}</div>
                    <div className="text-sm text-blue-600">Joining Fee</div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary">Amazon Voucher</span>
                  </div>
                  <p className="text-sm text-foreground">Get ₹{card.portalCashback} Amazon voucher on card activation through Cars24</p>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-muted-foreground">Bank Details</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{card.bankName} • Annual Fee: {card.annualFee}</p>
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
                    className={`px-4 rounded-xl border-primary/20 hover:bg-primary/5 ${selectedCards.find(c => c.name === card.name) ? 'bg-primary text-primary-foreground' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Card button clicked:', card.name);
                      handleAddToComparison(card);
                    }}
                    disabled={selectedCards.length >= 3 && !selectedCards.find(c => c.name === card.name)}
                    data-card-button="true"
                  >
                    {selectedCards.find(c => c.name === card.name) ? 
                      <Star className="w-4 h-4 fill-current" /> : 
                      <Plus className="w-4 h-4" />
                    }
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selection Status */}
        {selectedCards.length > 0 && !isSidebarOpen && (
          <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Selected for Comparison ({selectedCards.length}/3)</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedCards.length < 2 ? 'Select one more card to start comparing' : 'Ready to compare selected cards'}
                </p>
              </div>
              {selectedCards.length >= 2 && (
                <Button onClick={handleViewSelection}>
                  View Selection
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCards.map((card, index) => (
                <div key={index} className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg border">
                  <span className="text-sm font-medium">{card.name}</span>
                  <button
                    onClick={() => handleRemoveFromComparison(card.name)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compare Cards CTA */}
        <div className="text-center mt-12">
          <h3 className="text-lg font-semibold mb-4">Want to compare cards?</h3>
          <p className="text-muted-foreground mb-6">Select cards using the + button to compare their Cars24 employee benefits</p>
        </div>
      </div>

      {/* Overlay Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 sidebar-content"
               onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Compare Cards</h3>
                <button onClick={() => setIsSidebarOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {selectedCards.length}/3 cards selected
              </p>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
              <div className="space-y-4">
                {selectedCards.map((card, index) => (
                  <div key={index} className="glass-card p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cars24-blue to-primary rounded-lg flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{card.name}</h4>
                          <p className="text-xs text-muted-foreground">{card.bankName}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromComparison(card.name)}
                        className="p-1 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-red-500" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="p-2 bg-amber-50 rounded-lg border border-amber-200">
                        <div className="text-lg font-bold text-amber-800">₹{card.portalCashback}</div>
                        <div className="text-xs text-amber-600">Cars24 Cashback</div>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="text-sm font-bold text-blue-800">{card.joiningFee}</div>
                        <div className="text-xs text-blue-600">Joining Fee</div>
                      </div>
                    </div>

                    {card.highlight && (
                      <div className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        {card.highlight}
                      </div>
                    )}
                  </div>
                ))}

                {/* Add More Cards Button */}
                {selectedCards.length < 3 && (
                  <Button
                    variant="outline"
                    className="w-full border-dashed border-2 border-muted-foreground/30 hover:border-primary/50 py-8"
                    onClick={handleAddMoreCards}
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add More Card
                  </Button>
                )}
              </div>

              {/* Compare Button */}
              <div className="mt-6 pt-6 border-t">
                <Button 
                  onClick={openComparison}
                  className="w-full bg-gradient-to-r from-cars24-blue to-cars24-green text-white font-semibold py-3 scale-on-hover"
                  disabled={selectedCards.length < 2}
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Compare Cards
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  {selectedCards.length < 2 ? 'Select at least 2 cards to compare' : 'Ready to compare selected cards'}
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Comparison Modal */}
      <CardComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        selectedCards={selectedCards}
        onRemoveCard={handleRemoveFromComparison}
      />
    </div>
  );
};

export default CreditCardsPage;