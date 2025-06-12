import React from "react";

interface HeadingProps {
  heading: string;
  shortDescription?: string;
}

const Heading = ({ heading, shortDescription }: HeadingProps) => {
  return (
    <div className="relative text-center mb-16">
      <h2 className="text-3xl md:text-[40px] font-bold text-stone-800 mb-5 relative inline-block underline">
        {heading}
      </h2>
      <p className="text-center text-lg text-stone-600">
        {shortDescription}
      </p>
    </div>
  );
};

export default Heading;
