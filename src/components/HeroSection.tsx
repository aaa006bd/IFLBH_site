"use client";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center overflow-hidden z-0"
    >
      {/* Background image with zoom animation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-in"
        style={{
          backgroundImage: `url('/woman-tailor-working-leather-fabric.jpg')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-leather-charcoal/40"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10 text-leather-ivory text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Premium Leather <br className="hidden sm:block" /> Crafted to
          Perfection
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Bangladeshs premier leather distributor, providing exceptional quality
          for over two decades.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-leather-tan text-leather-brown hover:bg-leather-brown hover:text-leather-ivory transition-colors text-lg py-6 px-8">
            View Our Collection
          </button>
          <button className="border-leather-ivory text-leather-ivory hover:bg-leather-ivory hover:text-leather-brown transition-colors text-lg py-6 px-8">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
