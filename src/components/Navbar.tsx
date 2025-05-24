"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "products", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (
            window.scrollY >= top - 100 &&
            window.scrollY < top + height - 100
          ) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed w-full transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-lg py-2 shadow-md"
          : "bg-black/50 py-4 md:py-1"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center animate__animated animate__fadeInLeft gap-5">
          <img src="/Logo.png" alt="" className="w-12 h-12" />
          <a
            href="#"
            className={`text-2xl lg:hidden md:block font-bold ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            IFLBH
          </a>
          <a
            href="#"
            className={`text-2xl hidden lg:block font-bold ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Innovative Footwear & Leather House
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-5 items-center py-4">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`font-medium px-4 py-1 rounded-md transition-all duration-200 ease-in-out ${
                activeSection === item
                  ? "bg-[#CC5500] text-white"
                  : isScrolled
                  ? "text-gray-800 hover:bg-[#CC5500] hover:text-white"
                  : "text-white hover:bg-[#CC5500]"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X
              className={isScrolled ? "text-leather-brown" : "text-white"}
              size={24}
            />
          ) : (
            <Menu
              className={isScrolled ? "text-leather-brown" : "text-white"}
              size={24}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute right-5 w-[150px]"
          data-aos="zoom-in-down"
          data-aos-easing="ease-in-sine"
        >
          <div className="px-4 py-4 space-y-3 flex flex-col bg-[#5C4033] rounded-lg text-white font-semibold text-center">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`rounded-lg hover:bg-[#CC5500] hover:py-1 transition-all duration-200 ease-in-out ${
                  activeSection === item ? "bg-[#CC5500]" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
