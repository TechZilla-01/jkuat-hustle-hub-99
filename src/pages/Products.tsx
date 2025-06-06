
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Fresh Homemade Mandazi",
    price: "KES 50",
    originalPrice: "KES 70",
    seller: "Sarah's Kitchen",
    rating: 4.8,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Food & Beverages",
    badge: "Fast Delivery",
    sellerId: "seller123"
  },
  {
    id: 2,
    name: "Custom Phone Cases",
    price: "KES 800",
    originalPrice: "KES 1200",
    seller: "Tech Hub Kenya",
    rating: 4.9,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Electronics",
    badge: "Top Rated",
    sellerId: "seller456"
  },
  {
    id: 3,
    name: "University Textbooks",
    price: "KES 1500",
    originalPrice: "KES 2500",
    seller: "BookMart Kenya",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Books & Stationery",
    badge: "Academic",
    sellerId: "books123"
  },
  {
    id: 4,
    name: "Campus T-Shirts",
    price: "KES 1200",
    originalPrice: "KES 1800",
    seller: "Fashion Hub",
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Fashion",
    badge: "Trendy",
    sellerId: "fashion456"
  },
  {
    id: 5,
    name: "Laptop Accessories",
    price: "KES 2500",
    originalPrice: "KES 3500",
    seller: "Tech Store",
    rating: 4.7,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Electronics",
    badge: "Quality",
    sellerId: "tech789"
  },
  {
    id: 6,
    name: "Study Snacks Bundle",
    price: "KES 300",
    originalPrice: "KES 450",
    seller: "Snack Corner",
    rating: 4.4,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Food & Beverages",
    badge: "Popular",
    sellerId: "snacks123"
  }
];

const categories = ["All", "Food & Beverages", "Electronics", "Fashion", "Books & Stationery"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-black mb-2">Products</h1>
          <p className="text-brand-grey">Discover amazing products from JKUAT students</p>
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

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-green text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
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
                      {product.category}
                    </span>
                  </div>
                  
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg text-brand-black mb-2 group-hover:text-brand-green transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-brand-grey">{product.rating}</span>
                      <span className="ml-1 text-sm text-brand-grey">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-sm text-brand-grey">by {product.seller}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-brand-green">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-brand-grey line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-brand-green hover:bg-brand-green-dark text-white transition-all duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
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
            Load More Products
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
