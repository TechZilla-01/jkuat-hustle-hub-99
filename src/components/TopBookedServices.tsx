
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const topServices = [
  {
    id: 1,
    name: "Mathematics & Physics Tutoring",
    description: "Expert tutoring in advanced mathematics and physics for engineering students",
    price: "KES 500/hr",
    seller: "Dr. Michael Ochieng",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    duration: "1-2 hours",
    location: "Library/Online",
    badge: "Most Booked",
    bookings: 45
  },
  {
    id: 2,
    name: "Logo & Brand Design",
    description: "Professional logo design and brand identity creation for businesses and startups",
    price: "KES 2500",
    seller: "Sarah Wanjiku",
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    duration: "2-3 days",
    location: "Remote",
    badge: "Top Rated",
    bookings: 38
  },
  {
    id: 3,
    name: "Website Development",
    description: "Full-stack web development using modern technologies like React, Node.js",
    price: "KES 15000",
    seller: "Kevin Mwangi",
    rating: 4.9,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    duration: "1-2 weeks",
    location: "Campus/Remote",
    badge: "Professional",
    bookings: 32
  },
  {
    id: 4,
    name: "Assignment Writing Help",
    description: "Academic writing assistance for essays, reports, and research papers",
    price: "KES 800/page",
    seller: "Grace Akinyi",
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    duration: "1-3 days",
    location: "Online",
    badge: "Fast Delivery",
    bookings: 67
  }
];

const TopBookedServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-black mb-2">
              Top Booked Services
            </h2>
            <p className="text-brand-grey">
              Most popular services among JKUAT students this month
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
              View All Services
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topServices.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-green text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Service
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-brand-black mb-2 line-clamp-1">
                    {service.name}
                  </h3>
                  
                  <p className="text-sm text-brand-grey mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{service.rating}</span>
                    <span className="text-sm text-brand-grey">({service.reviews})</span>
                  </div>

                  <div className="space-y-1 mb-3">
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
                    <span className="text-lg font-bold text-brand-green">
                      {service.price}
                    </span>
                    <Link to={`/service/${service.id}`}>
                      <Button size="sm" className="bg-brand-green hover:bg-brand-green-dark text-white">
                        Book Now
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

export default TopBookedServices;
