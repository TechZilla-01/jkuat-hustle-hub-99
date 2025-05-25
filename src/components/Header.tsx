
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-jkuat-green">
              JKUAT <span className="text-jkuat-blue">Hustle Hub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-jkuat-green transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-jkuat-green transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-jkuat-green transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-jkuat-green transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-jkuat-green transition-colors">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jkuat-green focus:border-transparent"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-jkuat-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button className="btn-primary">Start Selling</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-jkuat-green transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-jkuat-green transition-colors">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-jkuat-green transition-colors">Products</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-jkuat-green transition-colors">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-jkuat-green transition-colors">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-jkuat-green transition-colors">Contact</a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Button className="w-full btn-primary mb-2">Start Selling</Button>
                <Button variant="outline" className="w-full">Sign In</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
