
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowLeft } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'buyer',
    agreedToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', formData);
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green to-brand-green-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link to="/" className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Campus Plaza
        </Link>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-brand-black">
              Join Campus Plaza
            </CardTitle>
            <p className="text-brand-grey mt-2">
              Create your account to start buying and selling
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* User Type Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-black">I want to</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: 'buyer' })}
                    className={`p-3 text-sm font-medium rounded-lg border-2 transition-all ${
                      formData.userType === 'buyer'
                        ? 'border-brand-green bg-brand-green text-white'
                        : 'border-gray-300 text-brand-grey hover:border-brand-green'
                    }`}
                  >
                    Buy Products
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: 'seller' })}
                    className={`p-3 text-sm font-medium rounded-lg border-2 transition-all ${
                      formData.userType === 'seller'
                        ? 'border-brand-green bg-brand-green text-white'
                        : 'border-gray-300 text-brand-grey hover:border-brand-green'
                    }`}
                  >
                    Sell Products
                  </button>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-black">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-grey h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="pl-9 h-10 border-gray-300 focus:border-brand-green focus:ring-brand-green"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-black">Last Name</label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="h-10 border-gray-300 focus:border-brand-green focus:ring-brand-green"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-black">Student Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-grey h-4 w-4" />
                  <Input
                    type="email"
                    placeholder="your.email@students.jkuat.ac.ke"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-9 h-10 border-gray-300 focus:border-brand-green focus:ring-brand-green"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-black">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-grey h-4 w-4" />
                  <Input
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-9 h-10 border-gray-300 focus:border-brand-green focus:ring-brand-green"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-black">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-grey h-4 w-4" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-9 pr-9 h-10 border-gray-300 focus:border-brand-green focus:ring-brand-green"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-grey hover:text-brand-black"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-black">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-grey h-4 w-4" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pl-9 pr-9 h-10 border-gray-300 focus:border-brand-green focus:ring-brand-green"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-grey hover:text-brand-black"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                  className="mt-1 rounded border-gray-300 text-brand-green focus:ring-brand-green"
                  required
                />
                <label className="text-sm text-brand-grey">
                  I agree to the{' '}
                  <Link to="/terms" className="text-brand-green hover:text-brand-green-dark">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-brand-green hover:text-brand-green-dark">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-10 bg-brand-green hover:bg-brand-green-dark text-white font-semibold"
                disabled={!formData.agreedToTerms}
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-brand-grey">
                Already have an account?{' '}
                <Link to="/login" className="text-brand-green hover:text-brand-green-dark font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
