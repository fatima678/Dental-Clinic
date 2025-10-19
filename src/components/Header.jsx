
// // // import { useState } from "react";
// // // import { Stethoscope, Menu, X } from "lucide-react"; // Removed Phone icon import
// // // import React from "react";

// // // const navList = [
// // //   { href: "#home", label: "Home" },
// // //   { href: "#services", label: "Services" },
// // //   { href: "#about", label: "About" },
// // //   { href: "#tips", label: "Tips" },
// // //   { href: "#book", label: "Book Appointment" },
// // //   { href: "#testimonials", label: "Testimonials" },
// // // ];

// // // const Header = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   return (
// // //     <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
// // //       <div className="container mx-auto flex items-center justify-between py-4 lg:px-8">
// // //         <div className="flex items-center space-x-4"> 
// // //           <Stethoscope className="w-8 h-8 text-sky-600" />
// // //           <span className="text-xl font-bold text-sky-600">Smile Dental Clinic</span>
// // //         </div>
// // //         <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
// // //           {navList.map((link) => (
// // //             <a href={link.href} key={link.href} className="hover:text-sky-600 transition">
// // //               {link.label}
// // //             </a>
// // //           ))}
// // //         </nav>
// // //         <div className="hidden md:flex items-center space-x-2">
// // //           <a href="#" className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm">
// // //             Book Appointment
// // //           </a>
// // //         </div>
// // //         <div className="md:hidden">
// // //           <button
// // //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //             className="text-gray-700 focus:outline-none"
// // //           >
// // //             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {isMenuOpen && (
// // //         <div className="md:hidden bg-white border border-gray-200 shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
// // //           {navList.map((link) => (
// // //             <a
// // //               href={link.href}
// // //               key={link.href}
// // //               className="block hover:text-sky-600 transition"
// // //               onClick={() => setIsMenuOpen(false)}
// // //             >
// // //               {link.label}
// // //             </a>
// // //           ))}
// // //           <a
// // //             href="#"
// // //             className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm"
// // //           >
// // //             Book Appointment
// // //           </a>
// // //         </div>
// // //       )}
// // //     </header>
// // //   );
// // // };

// // // export default Header;


// // import { useState } from "react";
// // import { Stethoscope, Menu, X } from "lucide-react";
// // import React from "react";

// // const navList = [
// //   { href: "#home", label: "Home" },
// //   { href: "#services", label: "Services" },
// //   { href: "#about", label: "About" },
// //   { href: "#tips", label: "Tips" },
// //   { href: "#book", label: "Book Appointment" },
// //   { href: "#testimonials", label: "Testimonials" },
// // ];

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   return (
// //     <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
// //       <div className="container mx-auto flex items-center justify-between py-4 lg:px-8">
// //         <div className="flex items-center space-x-4">
// //           <Stethoscope className="w-8 h-8 text-sky-600" />
// //           <span className="text-xl font-bold text-sky-600">Smile Dental Clinic</span>
// //         </div>

// //         {/* Desktop Nav */}
// //         <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
// //           {navList.map((link) => (
// //             <a
// //               href={link.href}
// //               key={link.href}
// //               className="hover:text-sky-600 transition"
// //             >
// //               {link.label}
// //             </a>
// //           ))}
// //           {/* Login Link */}
// //           <a
// //             href="/login"
// //             className="ml-4 bg-white text-sky-600 border border-sky-600 px-4 py-2 rounded-xl hover:bg-sky-600 hover:text-white transition text-sm"
// //           >
// //             Login
// //           </a>
// //         </nav>

// //         {/* Desktop Book Appointment button */}
// //         <div className="hidden md:flex items-center space-x-2">
// //           <a
// //             href="/book"
// //             className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm"
// //           >
// //             Book Appointment
// //           </a>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden">
// //           <button
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             className="text-gray-700 focus:outline-none"
// //           >
// //             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden bg-white border border-gray-200 shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
// //           {navList.map((link) => (
// //             <a
// //               href={link.href}
// //               key={link.href}
// //               className="block hover:text-sky-600 transition"
// //               onClick={() => setIsMenuOpen(false)}
// //             >
// //               {link.label}
// //             </a>
// //           ))}
// //           <a
// //             href="/book"
// //             className="block bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Book Appointment
// //           </a>
// //           <a
// //             href="/login"
// //             className="block bg-white text-sky-600 border border-sky-600 px-4 py-2 rounded-xl hover:bg-sky-600 hover:text-white transition text-sm"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Login
// //           </a>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;



// import { useState } from "react";
// import { Stethoscope, Menu, X } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom"; // Import Link

// const navList = [
//   { href: "#home", label: "Home" },
//   { href: "#services", label: "Services" },
//   { href: "#about", label: "About" },
//   { href: "#tips", label: "Tips" },
//   { href: "#testimonials", label: "Testimonials" },
// ];

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between py-4 lg:px-8">
//         <div className="flex items-center space-x-4">
//           <Stethoscope className="w-8 h-8 text-sky-600" />
//           <span className="text-xl font-bold text-sky-600">Smile Dental Clinic</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           {navList.map((link) => (
//             <a
//               href={link.href}
//               key={link.href}
//               className="hover:text-sky-600 transition"
//             >
//               {link.label}
//             </a>
//           ))}

//           {/* Login Button */}
//           <Link
//             to="/login" // Use Link to navigate
//             className="ml-4 bg-white text-sky-600 border border-sky-600 px-4 py-2 rounded-xl hover:bg-sky-600 hover:text-white transition text-sm"
//           >
//             Login
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-gray-700 focus:outline-none"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border border-gray-200 shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
//           {navList.map((link) => (
//             <a
//               href={link.href}
//               key={link.href}
//               className="block hover:text-sky-600 transition"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.label}
//             </a>
//           ))}

//           {/* Login Button Mobile */}
//           <Link
//             to="/login"
//             className="block bg-white text-sky-600 border border-sky-600 px-4 py-2 rounded-xl hover:bg-sky-600 hover:text-white transition text-sm"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Login
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



import { useState } from "react";
import { Stethoscope, Menu, X } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const navList = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#tips", label: "Tips" },
  { href: "#testimonials", label: "Testimonials" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Stethoscope className="w-8 h-8 text-sky-600" />
          <span className="text-xl font-bold text-sky-600">
            Smile Dental Clinic
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navList.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="hover:text-sky-600 transition"
            >
              {link.label}
            </a>
          ))}

          {/* Conditionally render Login or Logout button */}
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="ml-4 bg-white text-sky-600 border border-sky-600 px-4 py-2 rounded-xl hover:bg-sky-600 hover:text-white transition text-sm"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="ml-4 bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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

          {/* Conditionally render Login or Logout for mobile */}
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="block bg-white text-sky-600 border border-sky-600 px-4 py-2 rounded-xl hover:bg-sky-600 hover:text-white transition text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="block bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
