
import { Card, CardContent } from '@/components/ui/card';
import { 
  UtensilsCrossed, 
  Smartphone, 
  ShirtIcon, 
  BookOpen, 
  Briefcase, 
  Gamepad2,
  Coffee,
  Headphones
} from 'lucide-react';

const categories = [
  {
    name: "Food & Snacks",
    icon: UtensilsCrossed,
    count: "150+ products",
    color: "bg-orange-500",
    gradient: "from-orange-400 to-red-500"
  },
  {
    name: "Electronics",
    icon: Smartphone,
    count: "80+ products",
    color: "bg-blue-500",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    name: "Fashion",
    icon: ShirtIcon,
    count: "200+ products",
    color: "bg-pink-500",
    gradient: "from-pink-400 to-rose-500"
  },
  {
    name: "Study Materials",
    icon: BookOpen,
    count: "100+ products",
    color: "bg-green-500",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    name: "Services",
    icon: Briefcase,
    count: "60+ services",
    color: "bg-purple-500",
    gradient: "from-purple-400 to-violet-500"
  },
  {
    name: "Entertainment",
    icon: Gamepad2,
    count: "40+ products",
    color: "bg-yellow-500",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    name: "Beverages",
    icon: Coffee,
    count: "70+ products",
    color: "bg-amber-500",
    gradient: "from-amber-400 to-yellow-500"
  },
  {
    name: "Accessories",
    icon: Headphones,
    count: "90+ products",
    color: "bg-teal-500",
    gradient: "from-teal-400 to-cyan-500"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for in our diverse marketplace
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name} 
                className="card-hover cursor-pointer group animate-fade-in-up border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-jkuat-green transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{category.count}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
