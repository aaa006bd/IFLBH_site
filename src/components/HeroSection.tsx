"use client";
import { useEffect } from "react";
import "animate.css";

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center overflow-hidden z-0"
    >
      <div>
        {/* Background image with zoom animation */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-in"
          style={{
            backgroundImage: `url('/section-images/Banner.jpg')`,
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative mx-auto px-2 md:px-4 z-10 text-center py-9 rounded-xl backdrop-blur-xs lg:backdrop-blur-xs lg:bg-black/20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[var(--accent-color)] animate__animated animate__fadeIn animate__slower">
            Premium Leather <br className="hidden sm:block" /> Crafted to
            Perfection
          </h1>
          <p className="text-md md:text-lg mb-8 max-w-2xl mx-auto opacity-90 text-[var(--accent-secondary-color)] animate__animated animate__fadeIn animate__delay-1s">
            Bangladeshs premier leather distributor
          </p>
        </div>
      </div>
      <div className="scrolldown absolute bottom-5">
        {/* <div className="section"></div> */}
      </div>
    </section>
  );
};

export default HeroSection;
