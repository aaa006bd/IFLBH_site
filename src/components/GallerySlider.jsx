"use client";
import React, { useState } from "react";
import Heading from "./Ui/Heading";

const images = Array.from(
  { length: 27 },
  (_, i) => `/gallery/img${i + 1}.jpeg`
);

const GalleryBentoGrid = () => {
  const [modalImage, setModalImage] = useState(null);
  const [showMoreModal, setShowMoreModal] = useState(false);

  const imagesToShowInitially = images.slice(0, 5);
  const remainingImages = images.slice(5);

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <Heading heading="Project Highlights"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 auto-rows-[200px] gap-4 transition-all duration-300">
          {imagesToShowInitially.map((img, idx) => {
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
                  onClick={() => setModalImage(img)}
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
              onClick={() => setShowMoreModal(true)}
              className="px-6 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition"
            >
              Show More
            </button>
          </div>
        )}

        {/* Decorative dots */}
        <div className="flex justify-center mt-12 space-x-4">
          <div className="w-8 h-2 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Modal for Single Image */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="fixed top-2 right-2 text-lg text-red-500 font-semibold px-3 py-1.5 z-10 cursor-pointer hover:font-bold hover:text-white bg-white hover:bg-red-700 rounded-full transition-all duration-200 shadow-md"
            >
              ✕
            </button>
            <img
              src={modalImage}
              alt="Full View"
              className="w-full h-auto max-h-[90vh] rounded-lg object-contain"
            />
          </div>
        </div>
      )}

      {/* Modal for "Show More" Images */}
      {showMoreModal && (
        <div
          onClick={() => setShowMoreModal(false)}
          className="fixed inset-0 z-40 bg-black bg-opacity-80 flex items-center justify-center px-4"
        >
          <div
            className="bg-white rounded-lg h-[90vh] w-full p-6 relative overflow-auto hide-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center relative">
              <button
                onClick={() => setShowMoreModal(false)}
                className="fixed top-2 right-5 text-white z-10 hover:text-red-600 cursor-pointer text-lg hover:font-bold px-2 transition-all duration-200">
                ✕
              </button>

              <h3 className="text-2xl font-semibold text-center text-orange-700 flex items-center justify-center p-3 mb-5">
                More Project Photos
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {remainingImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setModalImage(img)}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 6}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryBentoGrid;
