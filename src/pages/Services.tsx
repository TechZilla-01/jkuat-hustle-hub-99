
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Clock, MapPin, User, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    name: "Mathematics & Physics Tutoring",
    description: "Expert tutoring in advanced mathematics and physics for engineering students",
    price: "KES 500/hr",
    originalPrice: "KES 800/hr",
    seller: "Dr. Michael Ochieng",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Tutoring",
    badge: "Most Booked",
    duration: "1-2 hours",
    location: "Library/Online",
    sellerId: "tutor123"
  },
  {
    id: 2,
    name: "Logo & Brand Design",
    description: "Professional logo design and brand identity creation for businesses and startups",
    price: "KES 2500",
    originalPrice: "KES 3500",
    seller: "Sarah Wanjiku",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Design",
    badge: "Top Rated",
    duration: "2-3 days",
    location: "Remote",
    sellerId: "designer456"
  },
  {
    id: 3,
    name: "Website Development",
    description: "Full-stack web development using modern technologies like React, Node.js",
    price: "KES 15000",
    originalPrice: "KES 25000",
    seller: "Kevin Mwangi",
    rating: 4.9,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Programming",
    badge: "Professional",
    duration: "1-2 weeks",
    location: "Campus/Remote",
    sellerId: "dev789"
  },
  {
    id: 4,
    name: "Assignment Writing Help",
    description: "Academic writing assistance for essays, reports, and research papers",
    price: "KES 800/page",
    originalPrice: "KES 1200/page",
    seller: "Grace Akinyi",
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Writing",
    badge: "Fast Delivery",
    duration: "1-3 days",
    location: "Online",
    sellerId: "writer123"
  },
  {
    id: 5,
    name: "Photography Services",
    description: "Professional photography for events, portraits, and product shots",
    price: "KES 3000",
    originalPrice: "KES 5000",
    seller: "John Kimani",
    rating: 4.6,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Photography",
    badge: "Creative",
    duration: "2-4 hours",
    location: "On-site",
    sellerId: "photo456"
  },
  {
    id: 6,
    name: "Language Translation",
    description: "Professional translation services for documents and content",
    price: "KES 200/page",
    originalPrice: "KES 300/page",
    seller: "Maria Santos",
    rating: 4.8,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Translation",
    badge: "Multilingual",
    duration: "1-2 days",
    location: "Remote",
    sellerId: "translator789"
  }
];

const categories = ["All", "Tutoring", "Design", "Programming", "Writing", "Photography", "Translation"];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-black mb-2">Services</h1>
          <p className="text-brand-grey">Hire talented JKUAT students for various services</p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-brand-green hover:bg-brand-green-dark" 
                    : "border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>

              <div className="flex items-center border border-gray-300 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-brand-green text-white' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-brand-green text-white' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {filteredServices.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-green text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {service.badge}
                    </span>
                  </div>
                  
                  {/* Service Badge */}
                  <div className="absolute top-3 right-12">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Service
                    </span>
                  </div>
                  
                  {/* Wishlist */}
                  <div className="absolute top-3 right-3">
                    <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white text-red-500 hover:text-red-600">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-brand-grey bg-gray-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <Link to={`/service/${service.id}`}>
                    <h3 className="font-semibold text-lg text-brand-black mb-2 group-hover:text-brand-green transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                  </Link>
                  
                  <p className="text-sm text-brand-grey mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-brand-grey">{service.rating}</span>
                      <span className="ml-1 text-sm text-brand-grey">({service.reviews})</span>
                    </div>
                  </div>
                  
                  {/* Service specific info */}
                  <div className="mb-3 space-y-1">
                    <div className="flex items-center text-xs text-brand-grey">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center text-xs text-brand-grey">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{service.location}</span>
                    </div>
                    <div className="flex items-center text-xs text-brand-grey">
                      <User className="h-3 w-3 mr-1" />
                      <span>by {service.seller}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-brand-green">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-sm text-brand-grey line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-brand-green hover:bg-brand-green-dark text-white transition-all duration-300"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-8">
            Load More Services
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
