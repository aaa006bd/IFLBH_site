"use client";
import React, { useState } from "react";

const images = Array.from(
  { length: 27 },
  (_, i) => `/gallery/img${i + 1}.jpeg`
);

const GalleryBentoGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const imagesToShow = showAll ? images : images.slice(0, 5);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-amber-900 text-center mb-10">
          Project Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 auto-rows-[200px] gap-4 transition-all duration-300">
          {imagesToShow.map((img, idx) => {
            const colSpan =
              idx % 7 === 0
                ? "md:col-span-2"
                : idx % 6 === 0
                ? "md:col-span-2"
                : "md:col-span-2";

            const rowSpan = idx % 5 === 0 ? "md:row-span-2" : "md:row-span-1";

            return (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white ${colSpan} ${rowSpan} flex items-center justify-center`}
              >
                <img
                  onClick={() =>
                    window.open(`/gallery/img${idx + 1}.jpeg`, "_blank")
                  }
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {images.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {/* Decorative dots */}
        <div className="flex justify-center mt-12 space-x-4">
          <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
          <div className="w-8 h-2 bg-orange-500 rounded-full"></div>
          <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default GalleryBentoGrid;
