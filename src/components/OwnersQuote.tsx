/* eslint-disable @next/next/no-img-element */
import React from "react";

const OwnersQuote = () => {
  const owners = [
    {
      name: "Michael Harrison",
      title: "Founder & CEO",
      quote:
        "Our commitment to excellence in leather craftsmanship has been the cornerstone of our success. We believe in delivering not just products, but experiences that last a lifetime.",
      image:
        "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?ga=GA1.1.521517537.1749452727&semt=ais_hybrid&w=740",
    },
    {
      name: "Sarah Chen",
      title: "Creative Director",
      quote:
        "Innovation meets tradition in everything we do. Each piece of leather tells a story, and we ensure that story is one of quality, sustainability, and timeless elegance.",
      image:
        "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?ga=GA1.1.521517537.1749452727&semt=ais_hybrid&w=740",
    },
    {
      name: "David Rodriguez",
      title: "Operations Director",
      quote:
        "Behind every great leather product is a meticulous process. We've refined our operations to ensure consistency, quality, and reliability in every order we fulfill.",
      image:
        "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?ga=GA1.1.521517537.1749452727&semt=ais_hybrid&w=740",
    },
    {
      name: "Emma Thompson",
      title: "Head of Sustainability",
      quote:
        "The future of leather lies in responsible sourcing and sustainable practices. We're pioneering eco-friendly processes while maintaining the premium quality our clients expect.",
      image:
        "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?ga=GA1.1.521517537.1749452727&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <section className="py-20 bg-amber-50 relative ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -top-12 md:-top-28 lg:-top-36 xl:-top-42"
      >
        <path
          fill="#fffbeb"
          fill-opacity="1"
          d="M0,128L120,122.7C240,117,480,107,720,106.7C960,107,1200,117,1320,122.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-amber-700 mt-6 max-w-2xl mx-auto leading-relaxed">
            Meet the visionaries behind our legacy of premium leather
            craftsmanship
          </p>
        </div>

        {/* Owners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {owners.map((owner, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Leather Texture Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50 to-orange-50 rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 to-orange-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card Content */}
              <div className="relative p-8">
                {/* Quote */}
                <div className="mb-8">
                  <div className="text-6xl text-amber-600/20 font-serif leading-none mb-4"></div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic font-light">
                    {owner.quote}
                  </blockquote>
                </div>

                {/* Owner Info */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 p-0.5">
                      <img
                        src={owner.image}
                        alt={owner.name}
                        className="w-full h-full rounded-full object-cover bg-amber-100"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-600 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-amber-900">
                      {owner.name}
                    </h4>
                    <p className="text-amber-700 font-medium">{owner.title}</p>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="w-8 h-8 border-2 border-amber-600 rounded-full"></div>
                  <div className="w-4 h-4 bg-amber-600 rounded-full mt-2 ml-2"></div>
                </div>
              </div>

              {/* Side Accent */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-amber-600 to-orange-600 rounded-r-full opacity-60 group-hover:opacity-100 group-hover:h-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-orange-600"></div>
            <div className="w-3 h-3 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-amber-600 to-orange-600"></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnersQuote;
