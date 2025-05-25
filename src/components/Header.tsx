
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, User, Search, MapPin, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-black">
              Campus <span className="text-brand-green">Plaza</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-brand-grey hover:text-brand-green transition-all duration-300 font-medium">Home</Link>
            <Link to="/products" className="text-brand-grey hover:text-brand-green transition-all duration-300 font-medium">Products</Link>
            <Link to="/seller" className="text-brand-grey hover:text-brand-green transition-all duration-300 font-medium">Sell</Link>
            <Link to="/contact" className="text-brand-grey hover:text-brand-green transition-all duration-300 font-medium">Contact</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-grey h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-brand-grey" />
              <span className="text-sm text-brand-grey">JKUAT Campus</span>
            </div>

            <Button variant="ghost" size="icon" className="relative hover:bg-brand-green hover:text-white transition-all duration-300">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            <Button variant="ghost" size="icon" className="relative hover:bg-brand-green hover:text-white transition-all duration-300">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-brand-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            <Link to="/login">
              <Button variant="ghost" size="icon" className="hover:bg-brand-green hover:text-white transition-all duration-300">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Link to="/seller">
              <Button className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg">
                Start Selling
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-grey hover:text-brand-green transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-brand-grey hover:text-brand-green transition-colors font-medium">Home</Link>
              <Link to="/products" className="block px-3 py-2 text-brand-grey hover:text-brand-green transition-colors font-medium">Products</Link>
              <Link to="/seller" className="block px-3 py-2 text-brand-grey hover:text-brand-green transition-colors font-medium">Sell</Link>
              <Link to="/contact" className="block px-3 py-2 text-brand-grey hover:text-brand-green transition-colors font-medium">Contact</Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link to="/seller">
                  <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white mb-2">Start Selling</Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white">Sign In</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
