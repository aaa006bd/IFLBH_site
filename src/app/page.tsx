import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <hr className="border-t-1 border-gray-300 my-8 w-[60%] mx-auto" />

      <ProductsSection />
      <Footer />
    </div>
  );
}
