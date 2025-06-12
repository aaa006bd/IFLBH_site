import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OwnersQuote from "@/components/OwnersQuote";
import ProductsSection from "@/components/ProductsSection";
import SustainabilitySection from "@/components/SustainabilitySection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SustainabilitySection />
      <OwnersQuote />
      <ContactUs />
      <Footer />
    </div>
  );
}
