
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="gradient-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Hustle Smart, 
              <br />
              <span className="text-yellow-300">Buy Local</span>
            </h1>
            <p className="text-xl mb-8 text-green-100">
              JKUAT's premier student marketplace where campus entrepreneurs connect with fellow students. 
              Discover amazing products from your peers!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-jkuat-green hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Start Selling <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-jkuat-green font-semibold px-8 py-4 text-lg">
                Shop Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-green-100">Active Sellers</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <ShoppingBag className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">2,000+</div>
                <div className="text-green-100">Products Sold</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-yellow-300" />
                </div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-green-100">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="JKUAT students showcasing their products"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Join the Campus Economy</h3>
                <p className="text-gray-600">Be part of the thriving JKUAT student business community</p>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-black p-4 rounded-lg shadow-lg transform rotate-3 animate-bounce">
              <div className="font-bold">💰 Easy MPESA</div>
              <div className="text-sm">Payments</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-jkuat-red text-white p-4 rounded-lg shadow-lg transform -rotate-3 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="font-bold">🚀 Zero Setup</div>
              <div className="text-sm">Fees</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
