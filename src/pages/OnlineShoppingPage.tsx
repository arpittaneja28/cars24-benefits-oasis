import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Star, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useNavigate } from 'react-router-dom';

const OnlineShoppingPage = () => {
  const navigate = useNavigate();
  const [shoppingAmount, setShoppingAmount] = useState([5000]); // Default ₹5,000

  const retailers = [
    {
      name: "Amazon",
      logo: "🛒",
      cashback: "5%",
      maxCashback: "₹2,000",
      specialOffer: "Extra 2% on Electronics",
      category: "Everything",
      rating: 4.8
    },
    {
      name: "Flipkart",
      logo: "🛍️",
      cashback: "4%",
      maxCashback: "₹1,500",
      specialOffer: "10% on Fashion",
      category: "Electronics & Fashion",
      rating: 4.7
    },
    {
      name: "Myntra",
      logo: "👗",
      cashback: "8%",
      maxCashback: "₹1,000",
      specialOffer: "Up to 15% on Brands",
      category: "Fashion & Lifestyle",
      rating: 4.6
    },
    {
      name: "Nykaa",
      logo: "💄",
      cashback: "10%",
      maxCashback: "₹800",
      specialOffer: "20% on Beauty",
      category: "Beauty & Personal Care",
      rating: 4.5
    },
    {
      name: "BigBasket",
      logo: "🥕",
      cashback: "3%",
      maxCashback: "₹500",
      specialOffer: "5% on Groceries",
      category: "Groceries",
      rating: 4.4
    },
    {
      name: "Zomato",
      logo: "🍕",
      cashback: "15%",
      maxCashback: "₹300",
      specialOffer: "25% on First Order",
      category: "Food Delivery",
      rating: 4.3
    },
    {
      name: "BookMyShow",
      logo: "🎬",
      cashback: "12%",
      maxCashback: "₹200",
      specialOffer: "₹100 off on Movies",
      category: "Entertainment",
      rating: 4.6
    },
    {
      name: "MakeMyTrip",
      logo: "✈️",
      cashback: "6%",
      maxCashback: "₹3,000",
      specialOffer: "Extra 3% on Hotels",
      category: "Travel",
      rating: 4.5
    }
  ];

  const calculateCashback = (amount: number, rate: string) => {
    const percentage = parseFloat(rate.replace('%', ''));
    return Math.round(amount * percentage / 100);
  };

  const formatAmount = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${(amount / 1000).toFixed(1)}K`;
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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Online Shopping</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Shop from 3,000+ retailers and earn up to 80% cashback on every purchase.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Shopping Calculator */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-border">
          <h2 className="text-2xl font-bold mb-6 text-center">Cashback Calculator</h2>
          
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Shopping Amount:</span>
                <span className="font-semibold">{formatAmount(shoppingAmount[0])}</span>
              </div>
              <Slider
                value={shoppingAmount}
                onValueChange={setShoppingAmount}
                max={50000}
                min={500}
                step={500}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">
                  ₹{calculateCashback(shoppingAmount[0], "5%")}
                </div>
                <div className="text-sm text-muted-foreground">Amazon (5%)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">
                  ₹{calculateCashback(shoppingAmount[0], "8%")}
                </div>
                <div className="text-sm text-muted-foreground">Myntra (8%)</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-600">
                  ₹{calculateCashback(shoppingAmount[0], "15%")}
                </div>
                <div className="text-sm text-muted-foreground">Zomato (15%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">3,000+</div>
            <div className="text-muted-foreground">Retailers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
            <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
            <div className="text-muted-foreground">Max Cashback</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
            <div className="text-3xl font-bold text-orange-600 mb-2">₹50K+</div>
            <div className="text-muted-foreground">Avg Monthly Savings</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-border">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>

        {/* Retailers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {retailers.map((retailer, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{retailer.logo}</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{retailer.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">{retailer.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xl font-bold text-green-800">{retailer.cashback}</div>
                  <div className="text-sm text-green-600">Cashback</div>
                  <div className="text-xs text-green-600">Max: {retailer.maxCashback}</div>
                </div>

                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary text-sm">Special Offer</span>
                  </div>
                  <p className="text-xs text-foreground">{retailer.specialOffer}</p>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Category:</div>
                  <div className="text-sm font-medium">{retailer.category}</div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Shop Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="px-3 rounded-lg border-primary/20 hover:bg-primary/5"
                  >
                    Deals
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5 text-primary"
          >
            View All 3,000+ Retailers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnlineShoppingPage;