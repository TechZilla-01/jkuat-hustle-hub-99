
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';

const Checkout = () => {
  const [orderData, setOrderData] = useState({
    deliveryAddress: '',
    paymentMethod: 'mobile',
    phoneNumber: '',
    notes: ''
  });

  const cartItems = [
    { id: 1, name: 'Laptop Stand', price: 2500, quantity: 1 },
    { id: 2, name: 'USB Cable', price: 500, quantity: 2 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 100;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order placement:', orderData);
  };

  return (
    <div className="min-h-screen bg-brand-grey-light">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-brand-black mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Delivery Address
                    </label>
                    <select
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green"
                      value={orderData.deliveryAddress}
                      onChange={(e) => setOrderData({ ...orderData, deliveryAddress: e.target.value })}
                      required
                    >
                      <option value="">Select delivery location</option>
                      <option value="hostel-a">Hostel A</option>
                      <option value="hostel-b">Hostel B</option>
                      <option value="main-gate">Main Gate</option>
                      <option value="library">Library</option>
                      <option value="cafeteria">Cafeteria</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-green"
                      placeholder="Any special delivery instructions..."
                      value={orderData.notes}
                      onChange={(e) => setOrderData({ ...orderData, notes: e.target.value })}
                    />
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      value="mobile"
                      checked={orderData.paymentMethod === 'mobile'}
                      onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}
                      className="text-brand-green focus:ring-brand-green"
                    />
                    <span>M-Pesa / Mobile Money</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      value="cash"
                      checked={orderData.paymentMethod === 'cash'}
                      onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}
                      className="text-brand-green focus:ring-brand-green"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>

                {orderData.paymentMethod === 'mobile' && (
                  <div>
                    <label className="block text-sm font-medium text-brand-black mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+254 XXX XXX XXX"
                      value={orderData.phoneNumber}
                      onChange={(e) => setOrderData({ ...orderData, phoneNumber: e.target.value })}
                      required
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-brand-grey">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">KSh {item.price * item.quantity}</p>
                  </div>
                ))}

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>KSh {subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>KSh {deliveryFee}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>KSh {total}</span>
                  </div>
                </div>

                <div className="bg-brand-grey-light p-3 rounded-lg">
                  <div className="flex items-center text-sm text-brand-grey">
                    <Clock className="h-4 w-4 mr-2" />
                    Estimated delivery: 30-45 minutes
                  </div>
                </div>

                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white"
                >
                  Place Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
