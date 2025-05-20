import React from "react";
import { MapPin, Phone, Mail, Link } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-leather-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-leather-accent">
              LeatherBD
            </h3>
            <p className="mb-4 text-sm">
              Premium leather distribution across Bangladesh. Sourcing the
              finest cow and goat leather for craftsmen, manufacturers, and
              businesses.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-leather-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-leather-accent transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-leather-accent transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-leather-accent transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-leather-accent transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-leather-accent">
              Contact Information
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-leather-accent" />
                <span>123 Leather District, Hazaribagh, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-leather-accent" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-leather-accent" />
                <span>info@leatherbd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-leather-accent/30 mt-8 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} LeatherBD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
