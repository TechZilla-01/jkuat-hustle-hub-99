
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, CheckCircle, AlertCircle, User } from 'lucide-react';
import Header from '@/components/Header';

const SellerVerification = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    idNumber: '',
    studentEmail: '',
    businessLicense: null,
    idPhoto: null,
    studentIdPhoto: null
  });

  const [uploadStatus, setUploadStatus] = useState({
    businessLicense: false,
    idPhoto: false,
    studentIdPhoto: false
  });

  const handleFileUpload = (field: string, file: File) => {
    setFormData({ ...formData, [field]: file });
    setUploadStatus({ ...uploadStatus, [field]: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verification submission:', formData);
  };

  return (
    <div className="min-h-screen bg-brand-grey-light">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-black mb-4">
            Seller Verification
          </h1>
          <p className="text-lg text-brand-grey">
            Complete your verification to start selling on Campus Plaza
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Verification Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    JKUAT Student ID
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., SCT211-0XXX/2021"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    National ID Number
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your national ID number"
                    value={formData.idNumber}
                    onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Student Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your.name@students.jkuat.ac.ke"
                    value={formData.studentEmail}
                    onChange={(e) => setFormData({ ...formData, studentEmail: e.target.value })}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-green-dark text-white"
                >
                  Submit for Verification
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Student ID Photo */}
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Student ID Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {uploadStatus.studentIdPhoto ? (
                    <div className="flex items-center justify-center text-green-600">
                      <CheckCircle className="h-8 w-8 mr-2" />
                      <span>Student ID uploaded successfully</span>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload clear photo of your student ID</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files && handleFileUpload('studentIdPhoto', e.target.files[0])}
                        className="hidden"
                        id="student-id-upload"
                      />
                      <label htmlFor="student-id-upload">
                        <Button variant="outline" className="mt-2" asChild>
                          <span>Choose File</span>
                        </Button>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* National ID Photo */}
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  National ID Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {uploadStatus.idPhoto ? (
                    <div className="flex items-center justify-center text-green-600">
                      <CheckCircle className="h-8 w-8 mr-2" />
                      <span>National ID uploaded successfully</span>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload clear photo of your national ID</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files && handleFileUpload('idPhoto', e.target.files[0])}
                        className="hidden"
                        id="id-upload"
                      />
                      <label htmlFor="id-upload">
                        <Button variant="outline" className="mt-2" asChild>
                          <span>Choose File</span>
                        </Button>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Business License (Optional) */}
              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Business License (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {uploadStatus.businessLicense ? (
                    <div className="flex items-center justify-center text-green-600">
                      <CheckCircle className="h-8 w-8 mr-2" />
                      <span>Business license uploaded successfully</span>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload business license if applicable</p>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => e.target.files && handleFileUpload('businessLicense', e.target.files[0])}
                        className="hidden"
                        id="license-upload"
                      />
                      <label htmlFor="license-upload">
                        <Button variant="outline" className="mt-2" asChild>
                          <span>Choose File</span>
                        </Button>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2" />
                  <div className="text-sm">
                    <p className="font-medium text-yellow-800">Verification Process</p>
                    <p className="text-yellow-700 mt-1">
                      Your application will be reviewed within 24-48 hours. You'll receive an email confirmation once approved.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SellerVerification;
