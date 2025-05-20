"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-lg py-2 shadow-md z-50"
          : "bg-leather-ivory backdrop-blur-md py-4 md:py-1 z-50"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-leather-brown">
            LeatherBD
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-5 items-center py-4">
          {["Home", "About", "Products", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium hover:bg-[#CC5500] hover:text-white rounded-lg transition-all duration-200 ease-in-out px-4 py-1 ${
                isScrolled ? "" : "text-white"
              }`}
            >
              {item}
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
              className={
                isScrolled ? "text-leather-brown" : "text-leather-ivory"
              }
              size={24}
            />
          ) : (
            <Menu
              className={
                isScrolled ? "text-leather-brown" : "text-leather-ivory"
              }
              size={24}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute right-5 w-[150px]">
          <div className="px-4 py-4 space-y-3 flex flex-col bg-[#5C4033] rounded-lg text-white font-semibold text-center">
            {["Home", "About", "Products", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:bg-[#CC5500] rounded-lg hover:py-1 transition-all duration-200 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
