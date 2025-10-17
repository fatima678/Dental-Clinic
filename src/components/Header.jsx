
import { useState } from "react";
import { Stethoscope, Menu, X } from "lucide-react"; // Removed Phone icon import
import React from "react";

const navList = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#tips", label: "Tips" },
  { href: "#book", label: "Book Appointment" },
  { href: "#testimonials", label: "Testimonials" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 lg:px-8">
        <div className="flex items-center space-x-4"> 
          <Stethoscope className="w-8 h-8 text-sky-600" />
          <span className="text-xl font-bold text-sky-600">Smile Dental Clinic</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navList.map((link) => (
            <a href={link.href} key={link.href} className="hover:text-sky-600 transition">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <a href="#" className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm">
            Book Appointment
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border border-gray-200 shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
          {navList.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="block hover:text-sky-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;