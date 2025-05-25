
import { Button } from '@/components/ui/button';
import { ShoppingBag, Users, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernHero = () => {
  return (
    <section className="bg-gradient-to-br from-brand-black to-brand-black-light text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Campus Plaza
              </h1>
              <h2 className="text-2xl lg:text-3xl text-brand-green font-semibold">
                Student Marketplace
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                JKUAT's premier student marketplace - Hustle Smart, Buy Local! 
                Connect with fellow students, discover amazing products, and grow your campus business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  Shop Now
                </Button>
              </Link>
              <Link to="/seller">
                <Button variant="outline" className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300">
                  Start Selling
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-green">500+</div>
                <div className="text-sm text-gray-400">Active Sellers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-green">10K+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-green">2K+</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <ShoppingBag className="h-12 w-12 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Buy Local Products</h3>
              <p className="text-gray-300">Discover products from your fellow students - from snacks to electronics, all within campus.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Users className="h-12 w-12 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
              <p className="text-gray-300">Connect with verified student sellers and buyers in JKUAT's trusted marketplace.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Truck className="h-12 w-12 text-brand-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Campus Delivery</h3>
              <p className="text-gray-300">Fast delivery across hostels and lecture halls with our student delivery network.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
