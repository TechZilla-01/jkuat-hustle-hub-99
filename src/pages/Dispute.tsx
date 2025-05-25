
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Upload, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dispute = () => {
  const [formData, setFormData] = useState({
    orderNumber: '',
    disputeType: '',
    description: '',
    email: '',
    phoneNumber: '',
    evidence: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dispute submission:', formData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, evidence: file });
    }
  };

  return (
    <div className="min-h-screen bg-brand-grey-light">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold text-brand-black mb-4">
            File a Dispute
          </h1>
          <p className="text-lg text-brand-grey max-w-2xl mx-auto">
            Having issues with an order? We're here to help resolve any problems you've encountered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dispute Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Dispute Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Order Number
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., CP-2024-001234"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    required
                  />
                  <p className="text-xs text-brand-grey mt-1">
                    Check your email confirmation for the order number
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Type of Dispute
                  </label>
                  <select
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green"
                    value={formData.disputeType}
                    onChange={(e) => setFormData({ ...formData, disputeType: e.target.value })}
                    required
                  >
                    <option value="">Select dispute type</option>
                    <option value="item-not-received">Item Not Received</option>
                    <option value="item-damaged">Item Damaged/Defective</option>
                    <option value="wrong-item">Wrong Item Delivered</option>
                    <option value="seller-unresponsive">Seller Not Responding</option>
                    <option value="payment-issue">Payment Issue</option>
                    <option value="delivery-problem">Delivery Problem</option>
                    <option value="refund-request">Refund Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Your Email
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
                    Detailed Description
                  </label>
                  <textarea
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green"
                    placeholder="Please provide a detailed description of the issue, including dates, seller name, and any communication attempts..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Evidence (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload photos, screenshots, or documents
                    </p>
                    <input
                      type="file"
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="evidence-upload"
                    />
                    <label htmlFor="evidence-upload">
                      <Button variant="outline" asChild>
                        <span>Choose File</span>
                      </Button>
                    </label>
                    {formData.evidence && (
                      <p className="text-sm text-green-600 mt-2">
                        File uploaded: {(formData.evidence as File).name}
                      </p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white"
                >
                  Submit Dispute
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Dispute Process Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How Disputes Are Resolved</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-brand-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-black">Review</h4>
                    <p className="text-sm text-brand-grey">We review your dispute within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-brand-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-black">Investigation</h4>
                    <p className="text-sm text-brand-grey">We contact both parties and gather evidence</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-brand-green text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-brand-black">Resolution</h4>
                    <p className="text-sm text-brand-grey">We provide a fair resolution within 72 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Resolutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-brand-grey">
                  <li>• Full refund if item was not delivered</li>
                  <li>• Partial refund for damaged/defective items</li>
                  <li>• Replacement item arrangement with seller</li>
                  <li>• Mediated agreement between parties</li>
                  <li>• Account warnings or suspension for violations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Before Filing a Dispute</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Try These Steps First:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Contact the seller directly through messaging</li>
                    <li>• Allow reasonable time for delivery (24-48 hours)</li>
                    <li>• Check your delivery location and contact details</li>
                    <li>• Review the item description and seller policies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-brand-grey">
                    For urgent issues or safety concerns, contact us directly:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Email:</strong> disputes@campusplaza.ac.ke</p>
                    <p><strong>Phone:</strong> +254 XXX XXX XXX</p>
                    <p><strong>Hours:</strong> Mon-Fri, 8AM-6PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dispute;
