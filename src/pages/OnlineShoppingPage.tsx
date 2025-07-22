import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingBag, Star, Award, ExternalLink, ArrowRight, TrendingUp, Gift, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { useNavigate } from 'react-router-dom';

const OnlineShoppingPage = () => {
  const navigate = useNavigate();
  const [shoppingAmount, setShoppingAmount] = useState([5000]); // Default ₹5,000
  const [timeLeft, setTimeLeft] = useState({ hours: 18, minutes: 23, seconds: 34 });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const topCategories = [
    { name: "Credit Cards", icon: "💳", color: "from-blue-600 to-blue-700", bgColor: "bg-blue-50" },
    { name: "Biggest Sales", icon: "🔥", color: "from-red-500 to-red-600", badge: "HOT", bgColor: "bg-red-50" },
    { name: "Loans", icon: "🏦", color: "from-green-600 to-green-700", bgColor: "bg-green-50" },
    { name: "Food & Grocery", icon: "🛒", color: "from-orange-500 to-orange-600", bgColor: "bg-orange-50" },
    { name: "Home & Kitchen", icon: "🏠", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50" },
    { name: "Pharmacy", icon: "💊", color: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-50" },
    { name: "Mobiles", icon: "📱", color: "from-pink-500 to-pink-600", bgColor: "bg-pink-50" },
    { name: "Beauty & Grooming", icon: "💄", color: "from-violet-500 to-violet-600", bgColor: "bg-violet-50" },
    { name: "Fashion", icon: "👕", color: "from-indigo-500 to-indigo-600", bgColor: "bg-indigo-50" },
    { name: "Electronics", icon: "📺", color: "from-gray-600 to-gray-700", bgColor: "bg-gray-50" }
  ];

  const flashDeals = [
    {
      title: "8X Johnnie Walker Blue Blended Water 750ml",
      originalPrice: "₹3,000",
      salePrice: "₹281",
      discount: "91% off",
      cashback: "Flat 70% Cashback",
      image: "🥃",
      gradient: "from-amber-400 to-yellow-500",
      textColor: "text-amber-900"
    },
    {
      title: "Up to 70% Off On All Sportswear",
      originalPrice: "",
      salePrice: "Up to 70% Off",
      discount: "70% off",
      cashback: "Flat 70% Cashback",
      image: "👕",
      gradient: "from-blue-400 to-blue-600",
      textColor: "text-blue-900"
    },
    {
      title: "All in one Times Prime Subscription Plan for Free!",
      originalPrice: "₹1,299",
      salePrice: "Free",
      discount: "100% off",
      cashback: "Times Prime",
      image: "📺",
      gradient: "from-purple-400 to-purple-600",
      textColor: "text-purple-900"
    },
    {
      title: "Book Free Hotels Anywhere in India",
      originalPrice: "₹1,000",
      salePrice: "",
      discount: "",
      cashback: "₹1,500 Cashback",
      image: "🏨",
      gradient: "from-cyan-400 to-blue-500",
      textColor: "text-cyan-900"
    },
    {
      title: "Flat ₹1,500 Cashback On Kickstart",
      originalPrice: "",
      salePrice: "",
      discount: "",
      cashback: "Flat ₹1,500 Cashback",
      image: "🏍️",
      gradient: "from-green-400 to-emerald-500",
      textColor: "text-green-900"
    }
  ];

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#003F61] text-white py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full floating"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full floating" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10 mb-6 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Online Shopping</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Shop from 3,000+ retailers and earn up to 80% cashback on every purchase.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-8">
        {/* Top Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Categories</h2>
          <div className="grid grid-cols-5 lg:grid-cols-10 gap-6">
            {topCategories.map((category, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`relative w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 premium-card ${category.bgColor}`}>
                  <span className="text-3xl lg:text-4xl filter drop-shadow-lg">{category.icon}</span>
                  {category.badge && (
                    <div className="absolute -top-2 -right-2 bg-[#F94F59] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                      {category.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-[#003F61] transition-colors duration-300">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flash Deals */}
        <div className="mb-16">
          <div className="glass-card-premium p-8 lg:p-12 relative overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-8 right-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#003F61] to-[#F94F59] bg-clip-text text-transparent mb-4">
                  FLASH DEAL
                </h2>
                <div className="flex items-center justify-center gap-3 text-gray-700 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 inline-flex">
                  <Clock className="w-5 h-5 text-[#F94F59]" />
                  <span className="text-lg font-semibold">
                    Ends in {timeLeft.hours.toString().padStart(2, '0')}:
                    {timeLeft.minutes.toString().padStart(2, '0')}:
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {flashDeals.map((deal, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 premium-card group relative overflow-hidden"
                  >
                    {/* Card Gradient Overlay */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${deal.gradient}`}></div>
                    
                    <div className="text-center mb-4">
                      <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{deal.image}</div>
                      <h3 className="text-sm font-bold text-gray-800 leading-tight mb-3 min-h-[3rem] flex items-center justify-center">
                        {deal.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {(deal.originalPrice || deal.salePrice) && (
                        <div className="text-center">
                          {deal.salePrice && (
                            <div className="text-xl font-bold text-gray-900 mb-1">{deal.salePrice}</div>
                          )}
                          {deal.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">{deal.originalPrice}</div>
                          )}
                        </div>
                      )}
                      
                      {deal.discount && (
                        <div className="bg-gradient-to-r from-[#F94F59] to-red-500 text-white text-xs font-bold px-3 py-2 rounded-full text-center shadow-lg">
                          {deal.discount}
                        </div>
                      )}
                      
                      {deal.cashback && (
                        <div className="bg-gradient-to-r from-[#003F61] to-blue-600 text-white text-xs font-bold px-3 py-2 rounded-full text-center shadow-lg">
                          {deal.cashback}
                        </div>
                      )}
                      
                      <Button className="w-full neuro-button-premium text-[#003F61] hover:text-white hover:bg-[#003F61] font-bold text-sm py-3 transition-all duration-300">
                        Grab Deal
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Most Popular Brands */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Most Popular Brands</h2>
            <Button variant="link" className="text-[#003F61] hover:text-[#F94F59] font-semibold text-lg p-0 transition-colors duration-300">
              View All <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {popularBrands.map((brand, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 premium-card group">
                <div className="relative">
                  {/* Enhanced Discount Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-[#F94F59] to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {brand.offer}
                    </Badge>
                  </div>
                  
                  {/* Brand Logo & Name */}
                  <div className="p-8 text-center bg-gradient-to-br from-gray-50 to-white">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{brand.logo}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                    <p className="text-sm font-medium text-gray-600">{brand.discount}</p>
                  </div>
                </div>
                
                {/* Enhanced Cashback Button */}
                <div className="p-4 bg-gradient-to-r from-[#003F61] to-blue-600 text-white text-center">
                  <Button className="w-full bg-transparent hover:bg-white/20 text-white font-bold border-2 border-white/30 transition-all duration-300">
                    {brand.cashback}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flipkart - Top Deals */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Flipkart - Top Deals</h2>
            <Button variant="link" className="text-[#003F61] hover:text-[#F94F59] font-semibold text-lg p-0 transition-colors duration-300">
              View All <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDeals.map((deal, index) => (
              <div key={index} className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${deal.bgColor} text-white group premium-card shadow-2xl`}>
                <div className="absolute top-4 left-4">
                  <div className="bg-white text-blue-600 px-3 py-2 rounded-lg text-sm font-bold flex items-center shadow-lg">
                    <img src="/lovable-uploads/ce617e6e-6290-46ab-b608-1a193f5ad74f.png" alt="CARS24" className="h-4 w-auto mr-1" />
                    Flipkart
                  </div>
                </div>
                
                <div className="p-8 h-80 flex flex-col justify-between relative">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">{deal.image}</div>
                    <h3 className="text-xl font-bold mb-3 leading-tight">{deal.discount}</h3>
                    <p className="text-sm opacity-90 font-medium">On {deal.category}</p>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-xl text-center border border-white/30 flex items-center justify-center">
                      <img src="/lovable-uploads/ce617e6e-6290-46ab-b608-1a193f5ad74f.png" alt="CARS24" className="h-3 w-auto mr-2" />
                      <span className="text-sm font-bold">{deal.cashback}</span>
                    </div>
                    <Button className="w-full neuro-button-premium text-blue-600 hover:text-white hover:bg-blue-600 font-bold py-3 transition-all duration-300">
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
                  <div className="bg-white text-pink-600 px-2 py-1 rounded text-xs font-bold flex items-center">
                    <img src="/lovable-uploads/ce617e6e-6290-46ab-b608-1a193f5ad74f.png" alt="CARS24" className="h-3 w-auto mr-1" />
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
                      <div className="bg-primary px-3 py-2 rounded-lg text-center flex items-center justify-center">
                        <img src="/lovable-uploads/ce617e6e-6290-46ab-b608-1a193f5ad74f.png" alt="CARS24" className="h-3 w-auto mr-2" />
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
                    <img src="/lovable-uploads/ce617e6e-6290-46ab-b608-1a193f5ad74f.png" alt="CARS24" className="h-3 w-auto mr-1" />
                    {deal.brand === "Expedia" && "Expedia"}
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
                    <div className="bg-primary px-3 py-2 rounded-lg text-center flex items-center justify-center">
                      <img src="/lovable-uploads/ce617e6e-6290-46ab-b608-1a193f5ad74f.png" alt="CARS24" className="h-3 w-auto mr-2" />
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

        {/* Enhanced Final CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#003F61] to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Saving?</h3>
              <p className="text-lg mb-6 opacity-90">Join thousands of CARS24 employees earning cashback daily</p>
              <Button 
                size="lg"
                className="neuro-button-premium text-[#003F61] hover:text-white hover:bg-[#003F61] px-10 py-4 text-lg font-bold transition-all duration-300"
              >
                <Gift className="w-6 h-6 mr-3" />
                Explore All Deals & Offers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineShoppingPage;