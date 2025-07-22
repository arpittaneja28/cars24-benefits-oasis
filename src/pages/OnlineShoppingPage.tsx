import React, { useState } from 'react';
import { ArrowLeft, ShoppingBag, Star, Award, ExternalLink, ArrowRight, TrendingUp, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { useNavigate } from 'react-router-dom';

const OnlineShoppingPage = () => {
  const navigate = useNavigate();
  const [shoppingAmount, setShoppingAmount] = useState([5000]); // Default ₹5,000

  const popularBrands = [
    {
      name: "Flipkart",
      logo: "🛒",
      offer: "50-90% Off",
      cashback: "Upto 7% Cashback",
      bgColor: "from-blue-500 to-blue-600",
      discount: "Sale Live Now"
    },
    {
      name: "AJIO",
      logo: "👗",
      offer: "50-90% Off",
      cashback: "Upto 8% Cashback",
      bgColor: "from-pink-500 to-pink-600",
      discount: "Sale Live Now"
    },
    {
      name: "Cleevo",
      logo: "💄",
      offer: "Combo @ 299",
      cashback: "Flat 30% Cashback",
      bgColor: "from-green-500 to-green-600",
      discount: "Buy 2 Get 3 Free"
    },
    {
      name: "HSBC",
      logo: "💳",
      offer: "25% Off Code",
      cashback: "Flat ₹2000 Rewards",
      bgColor: "from-red-500 to-red-600",
      discount: "Upto 20% Off"
    },
    {
      name: "Truemeds",
      logo: "💊",
      offer: "25% Off Code",
      cashback: "Upto ₹370 Cashback",
      bgColor: "from-teal-500 to-teal-600",
      discount: "50-90% Off"
    },
    {
      name: "DOT & KEY",
      logo: "✨",
      offer: "Upto 20% Off",
      cashback: "Upto 15% Cashback",
      bgColor: "from-purple-500 to-purple-600",
      discount: "Upto 15% Off"
    }
  ];

  const topDeals = [
    {
      brand: "Flipkart",
      category: "Shirts",
      discount: "Up to 85% Off",
      cashback: "Flat 2.1% Cashback",
      image: "👔",
      bgColor: "from-blue-700 to-blue-800"
    },
    {
      brand: "Flipkart", 
      category: "Footwear",
      discount: "Up to 80% Off",
      cashback: "Flat 2.1% Cashback",
      image: "👟",
      bgColor: "from-blue-700 to-blue-800"
    },
    {
      brand: "Flipkart",
      category: "Perfumes & Deodorants", 
      discount: "Up to 80% Off",
      cashback: "Flat 2.1% Cashback",
      image: "🧴",
      bgColor: "from-blue-700 to-blue-800"
    },
    {
      brand: "Flipkart",
      category: "Bags & Backpacks",
      discount: "Up to 85% Off", 
      cashback: "Flat 2.1% Cashback",
      image: "🎒",
      bgColor: "from-blue-700 to-blue-800"
    }
  ];

  const beautyDeals = [
    {
      brand: "Nykaa",
      category: "Nykaa Cosmetics",
      discount: "Up to 50% Off",
      cashback: "Up to 5% Cashback",
      image: "💄",
      bgColor: "from-pink-400 to-pink-500",
      sale: "HOT PINK SALE"
    },
    {
      brand: "Nykaa",
      category: "Lakme India",
      discount: "Flat 50% Off",
      cashback: "Up to 5% Cashback", 
      image: "🏷️",
      bgColor: "from-pink-400 to-pink-500",
      sale: "HOT PINK SALE"
    },
    {
      brand: "Nykaa",
      category: "L'Oreal Paris",
      discount: "Up to 40% Off",
      cashback: "Up to 5% Cashback",
      image: "💋",
      bgColor: "from-pink-400 to-pink-500",
      sale: "HOT PINK SALE"
    },
    {
      brand: "Nykaa", 
      category: "Maybelline New York",
      discount: "Up to 40% Off",
      cashback: "Up to 5% Cashback",
      image: "👁️",
      bgColor: "from-pink-400 to-pink-500",
      sale: "HOT PINK SALE"
    }
  ];

  const travelDeals = [
    {
      brand: "Expedia",
      category: "Hotel & Rental Bookings",
      discount: "Up to 60% off",
      cashback: "Up to 8% Cashback",
      image: "🏨",
      bgColor: "from-cyan-400 to-cyan-500"
    },
    {
      brand: "Booking.com",
      category: "All Bookings", 
      discount: "Up to 15% off",
      cashback: "Flat 4% Cashback",
      image: "🧳",
      bgColor: "from-blue-400 to-blue-500"
    },
    {
      brand: "IndiGo",
      category: "Hotel Bookings",
      discount: "Up to 25% Off",
      cashback: "Flat ₹1,500 Cashback",
      image: "🏢",
      bgColor: "from-indigo-400 to-indigo-500"
    },
    {
      brand: "Qatar Airways",
      category: "Trending Destinations",
      discount: "Explore Flights",
      cashback: "Flat 1% Cashback",
      image: "✈️",
      bgColor: "from-purple-400 to-purple-500"
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

      <div className="container mx-auto max-w-7xl px-6 py-8">
        {/* Most Popular Brands */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Most Popular Brands</h2>
            <Button variant="link" className="text-primary p-0">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {popularBrands.map((brand, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                      {brand.offer}
                    </Badge>
                  </div>
                  
                  {/* Brand Logo & Name */}
                  <div className="p-6 text-center">
                    <div className="text-4xl mb-3">{brand.logo}</div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{brand.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{brand.discount}</p>
                  </div>
                </div>
                
                {/* Cashback Button */}
                <div className="p-4 bg-primary text-white text-center">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    {brand.cashback}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flipkart - Top Deals */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Flipkart - Top Deals</h2>
            <Button variant="link" className="text-primary p-0">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topDeals.map((deal, index) => (
              <div key={index} className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${deal.bgColor} text-white group hover:scale-105 transition-all duration-300`}>
                <div className="absolute top-3 left-3">
                  <div className="bg-white text-primary px-2 py-1 rounded text-xs font-bold">
                    {deal.brand} 📱
                  </div>
                </div>
                
                <div className="p-6 h-64 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-4">{deal.image}</div>
                    <h3 className="text-xl font-bold mb-2">{deal.discount}</h3>
                    <p className="text-sm opacity-90">On {deal.category}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-primary px-3 py-2 rounded-lg text-center">
                      <span className="text-sm font-bold">{deal.cashback}</span>
                    </div>
                    <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold">
                      Grab Deal
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nykaa - Top Deals */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Nykaa - Top Deals</h2>
            <Button variant="link" className="text-primary p-0">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {beautyDeals.map((deal, index) => (
              <div key={index} className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${deal.bgColor} text-white group hover:scale-105 transition-all duration-300`}>
                <div className="absolute top-3 left-3">
                  <div className="bg-white text-pink-600 px-2 py-1 rounded text-xs font-bold">
                    NYKAA
                  </div>
                </div>
                
                {/* Sale Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold transform -rotate-12">
                    {deal.sale}
                  </div>
                </div>
                
                <div className="p-6 h-64 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-4">{deal.image}</div>
                    <h3 className="text-lg font-bold mb-2">{deal.category}</h3>
                    <p className="text-lg font-semibold">{deal.discount}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-primary px-3 py-2 rounded-lg text-center">
                      <span className="text-sm font-bold">{deal.cashback}</span>
                    </div>
                    <Button className="w-full bg-white text-pink-600 hover:bg-white/90 font-semibold">
                      Grab Deal
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel - Up to 6% Cashback */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Travel - Up to 6% Cashback</h2>
            <Button variant="link" className="text-primary p-0">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {travelDeals.map((deal, index) => (
              <div key={index} className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${deal.bgColor} text-white group hover:scale-105 transition-all duration-300`}>
                <div className="absolute top-3 left-3">
                  <div className="bg-white text-blue-600 px-2 py-1 rounded text-xs font-bold flex items-center">
                    {deal.brand === "Expedia" && "⭐ Expedia"}
                    {deal.brand === "Booking.com" && "booking.com"}
                    {deal.brand === "IndiGo" && "IndiGo ✈️"}
                    {deal.brand === "Qatar Airways" && "QATAR ✈️"}
                  </div>
                </div>
                
                <div className="p-6 h-64 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-4">{deal.image}</div>
                    <h3 className="text-lg font-bold mb-2">{deal.discount}</h3>
                    <p className="text-sm opacity-90">{deal.category}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-primary px-3 py-2 rounded-lg text-center">
                      <span className="text-sm font-bold">{deal.cashback}</span>
                    </div>
                    <Button className="w-full bg-white text-blue-600 hover:bg-white/90 font-semibold">
                      Grab Deal
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Electronics Section Start */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Electronics - Up to 15% Cashback</h2>
            <Button variant="link" className="text-primary p-0">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Electronics deals would go here - showing placeholder structure */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 text-white group hover:scale-105 transition-all duration-300">
              <div className="absolute top-3 left-3">
                <div className="bg-white text-blue-600 px-2 py-1 rounded text-xs font-bold">
                  BEELINE
                </div>
              </div>
              
              <div className="p-6 h-64 flex flex-col justify-between">
                <div className="text-center">
                  <div className="text-5xl mb-4">💻</div>
                  <h3 className="text-lg font-bold mb-2">Electronics</h3>
                  <p className="text-sm opacity-90">Latest Gadgets</p>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-primary px-3 py-2 rounded-lg text-center">
                    <span className="text-sm font-bold">Up to 15% Cashback</span>
                  </div>
                  <Button className="w-full bg-white text-blue-600 hover:bg-white/90 font-semibold">
                    Grab Deal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-4"
          >
            <Gift className="w-5 h-5 mr-2" />
            Explore All Deals & Offers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnlineShoppingPage;