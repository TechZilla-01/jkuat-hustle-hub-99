
import Header from '@/components/Header';
import ModernHero from '@/components/ModernHero';
import FeaturedCategories from '@/components/FeaturedCategories';
import TrendingProducts from '@/components/TrendingProducts';
import TopBookedServices from '@/components/TopBookedServices';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ModernHero />
      
      {/* Shop by Category */}
      <FeaturedCategories />
      
      {/* Top Selling Items */}
      <TrendingProducts />
      
      {/* Top Booked Services */}
      <TopBookedServices />
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
