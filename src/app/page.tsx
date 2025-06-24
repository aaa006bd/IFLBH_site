import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OwnersQuote from "@/components/OwnersQuote";
import ProductsSection from "@/components/ProductsSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import GallerySlider from "@/components/GallerySlider";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <div>
      <PageLoader/>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SustainabilitySection />
      <GallerySlider />
      <OwnersQuote />
      <ContactUs />
      <Footer />
    </div>
  );
}
