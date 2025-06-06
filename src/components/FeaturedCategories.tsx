import { Card, CardContent } from '@/components/ui/card';
import { Book, Smartphone, Coffee, Shirt, Wrench, GamepadIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Services',
    icon: Wrench,
    count: '150+ services',
    color: 'from-green-500 to-green-600',
    description: 'Tutoring, Design, Programming',
  },
  {
    name: 'Books & Stationery',
    icon: Book,
    count: '450+ items',
    color: 'from-blue-500 to-blue-600',
    description: 'Textbooks, Notes, Supplies',
  },
  {
    name: 'Electronics',
    icon: Smartphone,
    count: '280+ items',
    color: 'from-purple-500 to-purple-600',
    description: 'Phones, Laptops, Accessories',
  },
  {
    name: 'Food & Beverages',
    icon: Coffee,
    count: '320+ items',
    color: 'from-orange-500 to-orange-600',
    description: 'Snacks, Meals, Drinks',
  },
  {
    name: 'Fashion',
    icon: Shirt,
    count: '190+ items',
    color: 'from-pink-500 to-pink-600',
    description: 'Clothing, Shoes, Accessories',
  },
  {
    name: 'Entertainment',
    icon: GamepadIcon,
    count: '85+ items',
    color: 'from-red-500 to-red-600',
    description: 'Games, Events, Activities',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-black mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-brand-grey max-w-2xl mx-auto">
            Find products and hire talented students for various services across JKUAT
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.name} to="/products">
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-brand-black mb-1 text-sm">
                      {category.name}
                    </h3>
                    <p className="text-xs text-brand-grey mb-1">
                      {category.count}
                    </p>
                    <p className="text-xs text-brand-grey opacity-75">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
