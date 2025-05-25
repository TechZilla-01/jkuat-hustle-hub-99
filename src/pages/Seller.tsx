
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Store, Upload, DollarSign, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Seller = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    description: '',
    contactEmail: '',
    phoneNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Seller registration:', formData);
  };

  return (
    <div className="min-h-screen bg-brand-grey-light">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-black mb-4">
            Start Selling on Campus Plaza
          </h1>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Join thousands of student sellers and grow your business within the JKUAT community
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Store className="h-12 w-12 text-brand-green mx-auto mb-4" />
              <CardTitle>Easy Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-grey">Get your store online in minutes with our simple registration process</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-brand-green mx-auto mb-4" />
              <CardTitle>Low Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-grey">Keep more of your earnings with our competitive seller fees</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-brand-green mx-auto mb-4" />
              <CardTitle>Grow Your Business</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-grey">Reach all students and staff across JKUAT campus</p>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Seller Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Business Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Category
                  </label>
                  <select
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="food">Food & Beverages</option>
                    <option value="electronics">Electronics</option>
                    <option value="books">Books & Stationery</option>
                    <option value="clothing">Clothing & Fashion</option>
                    <option value="services">Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Business Description
                  </label>
                  <textarea
                    className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    placeholder="Describe your business and products"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Contact Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@students.jkuat.ac.ke"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+254 XXX XXX XXX"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white"
                >
                  Register as Seller
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-brand-grey">
                  Already a seller?{' '}
                  <Link to="/login" className="text-brand-green hover:text-brand-green-dark">
                    Sign in to your dashboard
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Seller;
