"use client";
import { Phone, Mail, Factory, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

type Contact = {
  symbol: keyof typeof iconMap;
  type: string;
  values: string[];
};

const iconMap = {
  Phone,
  Mail,
  Factory,
  MapPin,
};

const ContactSection = () => {
  const [contactInfo, setContactInfo] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContactInfo = async () => {
      const response = await fetch("/contact.json");
      const data = await response.json();
      setContactInfo(data);
    };
    fetchContactInfo();
  }, []);

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-white-100 via-stone-50 to-emerald-100-100 min-h-screen flex items-center justify-center mb-24"
    >
      <div
        className="container mx-auto px-4 md:px-6 py-12 lg:py-32"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 relative inline-block">
            Contact Us
          </h2>
          <p className="text-center text-md md:text-xl text-stone-600 mb-12 mt-8">
            Ready to source premium leather materials for your next project?
            Reach out to us:
          </p>
        </div>

        <section className="w-full md:py-12 px-4 md:px-10 lg:px-20">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {contactInfo.map((contact, index) => {
              const Icon = iconMap[contact.symbol];
              return (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-stone-200/50"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-100 to-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-leather-brown" size={28} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-stone-800 mb-4 group-hover:text-green-800 transition-colors duration-300">
                      {contact.type}
                    </h3>

                    <div className="text-stone-600 leading-relaxed text-base sm:text-lg space-y-1">
                      {contact.values.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
