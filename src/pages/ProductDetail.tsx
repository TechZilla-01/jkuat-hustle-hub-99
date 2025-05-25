
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, ShoppingCart, Truck, Shield, MessageCircle, Share2, MapPin } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: 1,
    name: "Fresh Homemade Mandazi",
    price: "KES 50",
    originalPrice: "KES 70",
    seller: "Sarah's Kitchen",
    rating: 4.8,
    reviews: 45,
    images: [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ],
    category: "Food & Snacks",
    description: "Freshly made mandazi using traditional recipe. Perfect for breakfast or snack time. Made with premium ingredients and delivered fresh to your doorstep.",
    features: ["Fresh daily", "Traditional recipe", "Premium ingredients", "Fast delivery"],
    deliveryInfo: "Available for campus delivery within 30 minutes",
    sellerInfo: {
      name: "Sarah Kamau",
      rating: 4.9,
      totalSales: 150,
      responseTime: "Usually responds within 1 hour",
      location: "JKUAT Main Campus"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-md">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-brand-green' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-brand-grey bg-gray-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-brand-black mt-4 mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-brand-grey">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-brand-green">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-brand-grey line-through">{product.originalPrice}</span>
                )}
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
                  29% OFF
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-brand-black mb-2">Description</h3>
              <p className="text-brand-grey leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-brand-black mb-2">Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-brand-grey">
                    <span className="w-2 h-2 bg-brand-green rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <Truck className="h-5 w-5 text-brand-green" />
              <span className="text-brand-black font-medium">{product.deliveryInfo}</span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium text-brand-black">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-brand-green hover:bg-brand-green-dark text-white py-3">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Seller Info */}
            <Card className="border-2 border-gray-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-brand-black mb-4">Seller Information</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-brand-black">{product.sellerInfo.name}</h4>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-brand-grey ml-1">{product.sellerInfo.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-brand-grey mb-2">{product.sellerInfo.totalSales} sales completed</p>
                    <div className="flex items-center gap-4 text-sm text-brand-grey mb-3">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {product.sellerInfo.location}
                      </div>
                    </div>
                    <p className="text-sm text-brand-grey mb-3">{product.sellerInfo.responseTime}</p>
                    <Button variant="outline" size="sm" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Seller
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
