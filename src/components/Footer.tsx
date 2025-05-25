
import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              JKUAT <span className="text-jkuat-green">Hustle Hub</span>
            </div>
            <p className="text-gray-300">
              Empowering JKUAT students to build successful businesses and connect with their campus community.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-jkuat-green hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-jkuat-green hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-jkuat-green hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-jkuat-green hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">Become a Seller</a></li>
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">How it Works</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">Safety</a></li>
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-jkuat-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-jkuat-green mr-3" />
                <span className="text-gray-300">JKUAT Main Campus, Kiambu</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-jkuat-green mr-3" />
                <span className="text-gray-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-jkuat-green mr-3" />
                <span className="text-gray-300">support@jkuathustlehub.co.ke</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest updates on new products and campus deals</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-jkuat-green focus:border-transparent"
              />
              <Button className="bg-jkuat-green hover:bg-green-700">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-300 text-sm">
              © 2024 JKUAT Hustle Hub. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-300 text-sm">
                Made with ❤️ for JKUAT students
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
