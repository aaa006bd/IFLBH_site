"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Heading from "./Ui/Heading";

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
        className="lg:container mx-auto px-4 md:px-6"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
      >
        {/* heading */}
        <Heading heading="About Us" />

        <div className="grid md:grid-cols-2 gap-12 items-center lg:w-[90%] mx-auto">
          <div className="relative h-[500px] rounded-xl shadow-xl">
            {/* Image */}
            <img
              src="/section-images/About Us.jpg"
              className="w-full h-full object-cover rounded-xl drop-shadow-2xl"
            />

            {/* Green Outline Overlay */}
            <div className="absolute inset-0 rounded-xl border-2 border-[#016533] z-10 translate-x-2 translate-y-2 pointer-events-none" />
          </div>

          <div className="space-y-6 stagger-fade-in">
            <h3 className="text-2xl font-semibold text-leather-brown">
              Crafting Excellence in Leather
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Innovative Footwear & leather (BD) house, we specialize in
              supplying a comprehensive range of premium finished and crust
              leather, sourced from cow, goat, and buffalo hides. With a
              deep-rooted passion for the art of leatherwork, we are dedicated
              to delivering materials that meet the highest standards of quality
              and craftsmanship.
            </p>
            <h3 className="text-2xl font-semibold text-leather-brown pt-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide top-tier leather materials that empower
              our clients to create exceptional products. We are committed to
              sustainability, ethical sourcing, and continuous innovation to
              meet the evolving needs of the leather industry.
            </p>
            {/* <h3 className="text-2xl font-semibold text-leather-brown pt-4">
              Our Values
            </h3> */}
            {/* <ul className="text-leather-charcoal leading-relaxed list-disc pl-5 space-y-2">
              <li>Unwavering commitment to quality</li>
              <li>Ethical sourcing and sustainable practices</li>
              <li>Supporting local craftsmanship</li>
              <li>Building lasting relationships with our partners</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
