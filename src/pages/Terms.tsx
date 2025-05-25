
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-brand-grey-light">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-brand-black mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-brand-grey">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-brand-grey">
                By accessing and using Campus Plaza, you accept and agree to be bound by the terms and provision of this agreement. 
                Campus Plaza is a student-to-student marketplace exclusively for the JKUAT community.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Eligibility</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-brand-grey">
                <li>• Must be a current JKUAT student, staff, or faculty member</li>
                <li>• Must provide valid JKUAT email address for verification</li>
                <li>• Must be at least 18 years old or have parental consent</li>
                <li>• Must provide accurate and truthful information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Seller Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-brand-grey">
                <li>• Provide accurate product descriptions and pricing</li>
                <li>• Honor all confirmed orders and delivery commitments</li>
                <li>• Maintain professional communication with buyers</li>
                <li>• Comply with all applicable laws and university policies</li>
                <li>• Not sell prohibited items (weapons, drugs, stolen goods, etc.)</li>
                <li>• Complete seller verification process before listing items</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Buyer Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-brand-grey">
                <li>• Make payments promptly upon order confirmation</li>
                <li>• Provide accurate delivery information</li>
                <li>• Treat sellers and delivery partners with respect</li>
                <li>• Report any issues or disputes promptly</li>
                <li>• Leave honest reviews and ratings</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Delivery Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-brand-grey">
                <div>
                  <h4 className="font-medium text-brand-black">Delivery Zones:</h4>
                  <ul className="mt-2 space-y-1">
                    <li>• On-campus locations: Hostels, Library, Cafeteria, Main Gate</li>
                    <li>• Delivery time: 30-60 minutes during business hours</li>
                    <li>• Delivery fee: KSh 50-200 depending on location and item size</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-brand-black">Delivery Partners:</h4>
                  <ul className="mt-2 space-y-1">
                    <li>• Must be verified JKUAT students</li>
                    <li>• Liable for safe and timely delivery</li>
                    <li>• Required to follow campus safety protocols</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Payment and Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-brand-grey">
                <li>• Platform commission: 5% of total order value</li>
                <li>• Payment methods: M-Pesa, Cash on Delivery</li>
                <li>• Refunds processed within 3-5 business days</li>
                <li>• Delivery partners earn 60-80% of delivery fees</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-brand-grey">
                <p>In case of disputes between buyers and sellers:</p>
                <ul className="space-y-1">
                  <li>• Contact our support team within 24 hours</li>
                  <li>• Provide evidence (photos, messages, receipts)</li>
                  <li>• Allow 48-72 hours for investigation</li>
                  <li>• Accept mediated resolution or formal complaint process</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-brand-grey">
                <li>• Selling illegal or harmful substances</li>
                <li>• Fraudulent or misleading listings</li>
                <li>• Harassment or inappropriate behavior</li>
                <li>• Circumventing platform fees</li>
                <li>• Creating multiple accounts</li>
                <li>• Violating university policies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Privacy and Data</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-brand-grey">
                <li>• We collect minimal personal information required for service</li>
                <li>• Student information is verified but kept confidential</li>
                <li>• Transaction data is used for dispute resolution only</li>
                <li>• No personal data is sold to third parties</li>
                <li>• Users may request data deletion upon account closure</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-grey">
                Campus Plaza serves as a platform connecting students. We are not responsible for the quality, 
                safety, or legality of items sold, the truth or accuracy of listings, or the ability of sellers 
                to sell items or buyers to pay for items. Users engage in transactions at their own risk.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-grey">
                Campus Plaza reserves the right to modify these terms at any time. Users will be notified 
                of significant changes via email. Continued use of the platform constitutes acceptance of updated terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-brand-grey">
                <p>For questions about these terms, contact us at:</p>
                <ul className="mt-2 space-y-1">
                  <li>Email: support@campusplaza.ac.ke</li>
                  <li>Phone: +254 XXX XXX XXX</li>
                  <li>Location: JKUAT Main Campus, Juja</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
