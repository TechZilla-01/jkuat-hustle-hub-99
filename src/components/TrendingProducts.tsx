
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Engineering Mathematics Textbook',
    price: 2500,
    originalPrice: 3500,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
    seller: 'John K.',
    rating: 4.8,
    reviews: 24,
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'MacBook Air M1 (Used)',
    price: 85000,
    originalPrice: 120000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
    seller: 'Sarah M.',
    rating: 4.9,
    reviews: 18,
    tag: 'Hot Deal',
  },
  {
    id: 3,
    name: 'JKUAT Hoodie',
    price: 1800,
    originalPrice: 2500,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop',
    seller: 'Campus Store',
    rating: 4.7,
    reviews: 45,
    tag: 'Trending',
  },
  {
    id: 4,
    name: 'Scientific Calculator',
    price: 3200,
    originalPrice: 4000,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=300&fit=crop',
    seller: 'Tech Hub',
    rating: 4.6,
    reviews: 32,
    tag: 'New',
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-16 bg-brand-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-black mb-2">
              Trending Products
            </h2>
            <p className="text-brand-grey">
              Popular items among JKUAT students this week
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-green text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-brand-black mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-brand-grey">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-brand-black">
                      KSh {product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-brand-grey line-through">
                      KSh {product.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-grey">by {product.seller}</span>
                    <Link to={`/product/${product.id}`}>
                      <Button size="sm" className="bg-brand-green hover:bg-brand-green-dark text-white">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Buy
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
