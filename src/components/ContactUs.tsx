import { Phone, Mail, MessageSquare, Factory } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-100 via-stone-50 to-green-100 min-h-screen flex items-center justify-center "
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 relative inline-block">
            Contact Us
            {/* Green underline */}
            <span className="absolute left-1/2 -translate-x-32 bottom-1 bg-green-400 w-72 h-4 -z-10 rounded-xs" />
          </h2>
          <div className="w-20 h-1 bg-leather-tan mx-auto"></div>
          <p className="text-center text-lg sm:text-xl text-stone-600 mb-16 mt-10">
            Ready to source premium leather materials for your next project?
            Reach out to us:
          </p>6
        </div>

        <div className="grid md:grid-cols-4 border *:border">
          <div className="flex items-start gap-4">
            <div className="bg-leather-tan p-3 rounded-full">
              <Phone className="text-leather-brown" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-leather-ivory">
                Phone
              </h3>
              <p className="text-leather-ivory/80 mt-1">+88 01917-601389</p>
              <p className="text-leather-ivory/80">+88 01675-028292</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-leather-tan p-3 rounded-full">
              <Mail className="text-leather-brown" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-leather-ivory">
                Email
              </h3>
              <p className="text-leather-ivory/80 mt-1">
                inovativeleather@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-leather-tan p-3 rounded-full">
              <MessageSquare className="text-leather-brown" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-leather-ivory">
                Office
              </h3>
              <p className="text-leather-ivory/80 mt-1">
                44/4, Zigatola Glass Factory, Hazaribagh
                <br />
                Dhaka 1209, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-leather-tan p-3 rounded-full">
              <Factory className="text-leather-brown" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-leather-ivory">
                Work Area
              </h3>
              <p className="text-leather-ivory/80 mt-1">
                Tannery Industrial Estate <br />
                Hemayetpur, Savar, Dhaka
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
