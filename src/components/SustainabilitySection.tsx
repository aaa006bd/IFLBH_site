import { Leaf, Handshake, Award } from "lucide-react";

const SustainabilitySection = () => {
  const commitments = [
    {
      icon: Handshake,
      title: "Ethical Sourcing",
      description:
        "Partnering with tanneries that adhere to responsible practices.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Implementing processes that minimize environmental impact.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Ensuring all products meet international standards for durability and aesthetic appeal.",
    },
  ];

  return (
    <section
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-stone-50 to-green-50"
      id="sustainability"
    >
      <div
        className="max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-6 tracking-tight">
            Our Commitment to
            <span className="block text-green-700 mt-2 md:text-5xl">Sustainability</span>
          </h2>
          <p className="lg:text-lg text-stone-600 mx-auto leading-relaxed">
            We are dedicated to providing eco-friendly and ethically produced
            leather goods. Our commitment includes:
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon;
            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-200/50"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-100 to-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent
                      size={32}
                      className="text-green-700 group-hover:text-green-800 transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4 group-hover:text-green-800 transition-colors duration-300">
                    {commitment.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
                    {commitment.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 rounded-full">
            <Leaf size={20} className="text-green-700" />
            <span className="text-green-800 font-medium text-sm md:text-base">
              Crafted with care for our planet
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
