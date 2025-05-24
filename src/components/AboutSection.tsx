"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

/* eslint-disable @next/next/no-img-element */
const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[var(--accent-secondary-color)] to-transparent min-h-[calc(100vh-80px)] flex items-center py-32"
    >
      <div
        className="container mx-auto px-4 md:px-6"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
      >
        <div className="relative text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 relative inline-block">
            About Us
            {/* Green underline */}
            <span className="absolute left-1/2 -translate-x-20 bottom-1 bg-green-400 w-48 h-4 -z-10 rounded-xs" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-xl shadow-xl">
            {/* Image */}
            <img
              src="https://img.freepik.com/free-photo/man-studio-creates-leather-ware_1157-33221.jpg?ga=GA1.1.808174805.1747627982&semt=ais_hybrid&w=740"
              alt="Leather craftsman at work"
              className="w-full h-full object-cover rounded-xl drop-shadow-2xl"
            />

            {/* Green Outline Overlay */}
            <div className="absolute inset-0 rounded-xl border-2 border-green-500 z-10 translate-x-2 translate-y-2 pointer-events-none" />
          </div>

          <div className="space-y-6 stagger-fade-in">
            <h3 className="text-2xl font-semibold text-leather-brown">
              Our Story
            </h3>
            <p className="text-leather-charcoal leading-relaxed">
              Founded in 2001, LeatherBD has been at the forefront of the
              leather industry in Bangladesh. What started as a small family
              business has grown into one of the most trusted names in leather
              distribution across South Asia.
            </p>
            <h3 className="text-2xl font-semibold text-leather-brown pt-4">
              Our Mission
            </h3>
            <p className="text-leather-charcoal leading-relaxed">
              We strive to provide exceptional quality leather products that
              meet international standards while supporting local artisans and
              sustainable practices. Our commitment to excellence drives
              everything we do.
            </p>
            <h3 className="text-2xl font-semibold text-leather-brown pt-4">
              Our Values
            </h3>
            <ul className="text-leather-charcoal leading-relaxed list-disc pl-5 space-y-2">
              <li>Unwavering commitment to quality</li>
              <li>Ethical sourcing and sustainable practices</li>
              <li>Supporting local craftsmanship</li>
              <li>Building lasting relationships with our partners</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
