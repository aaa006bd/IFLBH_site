"use client";
import { Phone, Mail, Factory, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import Heading from "./Ui/Heading";

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
      const response = await fetch("/JSON/contact.json");
      const data = await response.json();
      setContactInfo(data);
    };
    fetchContactInfo();
  }, []);

  return (
    <section id="contact" className="py-32 lg:py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading
            heading="Contact Us"
            shortDescription="Ready to source premium leather materials for your next project?
            Reach out to us !"
          />
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {contactInfo.map((contact, index) => {
            const Icon = iconMap[contact.symbol];
            return (
              <div
                key={index}
                className="group relative"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50 to-orange-50 rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 to-orange-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card Content */}
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Background */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 p-0.5 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                          <Icon
                            className="text-amber-700 group-hover:text-amber-800 transition-colors duration-300"
                            size={28}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Type */}
                    <h3 className="text-xl font-bold text-amber-900 mb-4 group-hover:text-amber-800 transition-colors duration-300">
                      {contact.type}
                    </h3>

                    {/* Contact Values */}
                    <div className="text-amber-700 leading-relaxed space-y-2">
                      {contact.values.map((item, idx) => (
                        <p key={idx} className="text-sm font-medium">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
