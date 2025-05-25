
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, DollarSign, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DeliveryPartner = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    phoneNumber: '',
    vehicle: '',
    availability: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Delivery partner application:', formData);
  };

  return (
    <div className="min-h-screen bg-brand-grey-light">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-black mb-4">
            Become a Delivery Partner
          </h1>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Earn money while helping fellow students get their orders delivered quickly and safely
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <DollarSign className="h-10 w-10 text-brand-green mx-auto" />
              <CardTitle className="text-lg">Earn KSh 50-200</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-grey">Per delivery</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-10 w-10 text-brand-green mx-auto" />
              <CardTitle className="text-lg">Flexible Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-grey">Work when you want</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-10 w-10 text-brand-green mx-auto" />
              <CardTitle className="text-lg">Help Students</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-grey">Serve your community</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Truck className="h-10 w-10 text-brand-green mx-auto" />
              <CardTitle className="text-lg">Any Vehicle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-grey">Bike, car, or on foot</p>
            </CardContent>
          </Card>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Delivery Partner Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Student ID
                    </label>
                    <Input
                      type="text"
                      placeholder="Your JKUAT student ID"
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@students.jkuat.ac.ke"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Vehicle Type
                  </label>
                  <select
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    required
                  >
                    <option value="">Select your vehicle</option>
                    <option value="bicycle">Bicycle</option>
                    <option value="motorcycle">Motorcycle</option>
                    <option value="car">Car</option>
                    <option value="walking">On Foot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Availability
                  </label>
                  <select
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    required
                  >
                    <option value="">Select your availability</option>
                    <option value="mornings">Mornings (6AM-12PM)</option>
                    <option value="afternoons">Afternoons (12PM-6PM)</option>
                    <option value="evenings">Evenings (6PM-10PM)</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="flexible">Flexible Hours</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Delivery Experience
                  </label>
                  <textarea
                    className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green"
                    placeholder="Tell us about any delivery or customer service experience you have..."
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-brand-black mb-2">Requirements:</h4>
                  <ul className="text-sm text-brand-grey space-y-1">
                    <li>• Must be a current JKUAT student</li>
                    <li>• Valid student ID required</li>
                    <li>• Reliable phone and internet connection</li>
                    <li>• Good knowledge of campus layout</li>
                    <li>• Trustworthy and punctual</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DeliveryPartner;
