
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ProductDetail from "./pages/ProductDetail";
import Seller from "./pages/Seller";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import DeliveryPartner from "./pages/DeliveryPartner";
import SellerVerification from "./pages/SellerVerification";
import Terms from "./pages/Terms";
import Dispute from "./pages/Dispute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/delivery-partner" element={<DeliveryPartner />} />
          <Route path="/seller-verification" element={<SellerVerification />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dispute" element={<Dispute />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
