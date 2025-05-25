
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
  };

  return (
    <div className="min-h-screen bg-brand-grey-light">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-black mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Have questions about Campus Plaza? We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-brand-green" />
                  <div>
                    <p className="font-medium text-brand-black">Email</p>
                    <p className="text-brand-grey">support@campusplaza.ac.ke</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-brand-green" />
                  <div>
                    <p className="font-medium text-brand-black">Phone</p>
                    <p className="text-brand-grey">+254 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-brand-green" />
                  <div>
                    <p className="font-medium text-brand-black">Location</p>
                    <p className="text-brand-grey">JKUAT Main Campus, Juja</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-brand-green" />
                  <div>
                    <p className="font-medium text-brand-black">Support Hours</p>
                    <p className="text-brand-grey">Mon-Fri: 8AM-6PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-brand-black">How do I become a seller?</h4>
                  <p className="text-sm text-brand-grey mt-1">Visit our seller registration page and complete the verification process.</p>
                </div>
                <div>
                  <h4 className="font-medium text-brand-black">What are the delivery options?</h4>
                  <p className="text-sm text-brand-grey mt-1">We offer campus-wide delivery and pickup points across JKUAT.</p>
                </div>
                <div>
                  <h4 className="font-medium text-brand-black">How do I track my order?</h4>
                  <p className="text-sm text-brand-grey mt-1">You'll receive tracking information via SMS and email once your order is confirmed.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
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
                    Subject
                  </label>
                  <Input
                    type="text"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white"
                >
                  Send Message
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

export default Contact;
