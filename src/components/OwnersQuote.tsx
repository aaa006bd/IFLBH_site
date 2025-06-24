/* eslint-disable @next/next/no-img-element */
import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Md. Salah Uddin Bahar",
      designation: "Managing Director",
      image: "/owner section/Bahar.png",
    },
    {
      id: 2,
      name: "Md. Forhad Hossain Shohag",
      designation: "Managing Partner",
      image: "/owner section/Forhad.png",
    },
    {
      id: 3,
      name: "Shahadat Hossain Anando",
      designation: "Managing partner(Technician)",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Rokibul Islam Komol",
      designation: "Finance and Admin Manager",
      image: "/owner section/Komol.png",
    },
    {
      id: 5,
      name: "Abdur Rahaman Riyad",
      designation: "QC",
      image: "/owner section/Riyad.jpg",
    },
    {
      id: 6,
      name: "Abu Jaher",
      designation: "Junior QC",
      image: "/owner section/Abu.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-light text-amber-900 mb-4">
            Meet the visionaries behind our legacy of premium leather
            craftsmanship
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="group w-full md:w-full mx-auto">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 py-5 px-1 md:px-0 md:py-0">
                <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-2">
                  <div className="relative flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full md:rounded-2xl w-32 h-32 md:w-[195px] md:h-[195px] object-cover transition-transform duration-300 group-hover:scale-105 border-2 border-orange-500 shadow-lg md:shadow-none md:border-none bg-black"
                    />
                    <div className="absolute bottom-2 md:-bottom-1 right-3 md:-right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-white hidden md:block"></div>
                  </div>
                  <div className="p-2">
                    <h3 className="text-lg font-semibold text-amber-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 text-xs md:text-sm font-medium">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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

export default TeamSection;
