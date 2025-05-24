import { Phone, Mail, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-amber-100 via-stone-50 to-green-100 min-h-screen flex items-center justify-center "
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
          </p>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="flex items-start gap-4">
            <div className="bg-leather-tan p-3 rounded-full">
              <Phone className="text-leather-brown" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-leather-ivory">
                Phone
              </h3>
              <p className="text-leather-ivory/80">+880 1713 246897</p>
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
              <p className="text-leather-ivory/80 mt-1">info@leatherbd.com</p>
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
                97 Gulshan Avenue, Suite 403
                <br />
                Dhaka 1212, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
