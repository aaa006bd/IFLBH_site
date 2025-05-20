/* eslint-disable @next/next/no-img-element */
const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-leather-ivory">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-leather-brown mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-leather-tan mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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

          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1531918586765-b7fbd3dc278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Leather craftsman at work"
              className="w-full h-full object-cover hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
