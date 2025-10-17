
// import React from 'react';
// import { FaInstagram, FaPhone, FaTelegram, FaWhatsapp, FaTooth, FaRegClock, FaMapMarkedAlt, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
// import { MdOutlineEmail } from 'react-icons/md';

// // --- Data Structures ---

// const socialLinks = [
//     { icon: <FaInstagram className="text-xl" />, href: '#' },
//     { icon: <FaWhatsapp className="text-xl" />, href: '#' },
//     { icon: <FaTelegram className="text-xl" />, href: '#' },
// ];

// const clinicHours = [
//     { day: 'Sunday - Thursday', time: '9 AM - 8 PM' },
//     { day: 'Friday', time: '4 AM - 9 PM' },
//     { day: 'Saturday', time: 'Closed' },
// ];

// const contactInfo = [
//     {
//         icon: <FaPhone className="mr-4 text-white/70" />,
//         text: <a href="#" className="hover:text-sky-300 transition-colors">
//             +1 (234) 567-89
//         </a>
//     },
//     {
//         icon: <MdOutlineEmail className="mr-4 text-white/70" />,
//         text: <a href="#" className="hover:text-sky-300 transition-colors">
//             info@brightsmile.com
//         </a>
//     },
//     {
//         icon: <FaMapMarkedAlt className="mr-4 text-white/70" />,
//         text: <span>123 Dental Avenue, Health District, City</span>
//     },
// ];

// // --- Footer Component ---

// const Footer = () => {
//     return (
//         <footer className="bg-gradient-to-b from-blue-950 to-blue-950 text-white pt-16 pb-12 relative overflow-hidden">
//             <div className="absolute bottom-0 left-0 right-0 h-20 bg-cover opacity-20"></div>
//             <div className="container mx-auto px-6 relative z-10">
                
//                 {/* 1. Logo and Social Links Section */}
//                 <div className="flex flex-col items-center mb-14">
//                     <div className="flex items-center mb-6">
//                         <div className="bg-white/20 p-3 rounded-full mr-4">
//                             <FaTooth className="text-2xl text-sky-300" />
//                         </div>
//                         <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-200">
//                             Bright Smile Dental Clinic
//                         </h2>
//                     </div>

//                     <div className="flex space-x-6 mb-8">
//                         {socialLinks.map((link, index) => (
//                             <a
//                                 key={index}
//                                 href={link.href}
//                                 className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
//                             >
//                                 {link.icon}
//                             </a>
//                         ))}
//                     </div>
//                 </div>

//                 {/* 2. Three Column Section (Hours, Contact, Newsletter) */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//                     {/* Column 1: Clinic Hours */}
//                     <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
//                         <h3 className="text-xl font-semibold mb-5 flex items-center">
//                             <FaRegClock className="mr-3 text-sky-300" />
//                             Clinic Hours
//                         </h3>
//                         <ul className="space-y-3">
//                             {clinicHours.map((item, index) => (
//                                 <li key={index} className="flex justify-between">
//                                     <span className="text-white/70">{item.day}</span>
//                                     <span>{item.time}</span>
//                                 </li>
//                             ))}
//                             <li className="pt-3 mt-3 border-t border-white/10 text-sky-300 font-medium">
//                                 Emergency services available 24/7
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Column 2: Contact Us */}
//                     <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
//                         <h3 className="text-xl font-semibold mb-5 flex items-center">
//                             <FaPhone className="mr-3 text-sky-300" />
//                             Contact Us
//                         </h3>
//                         <ul className="space-y-4">
//                             {contactInfo.map((item, index) => (
//                                 <li key={index} className="flex items-start">
//                                     {item.icon}
//                                     {item.text}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Column 3: Newsletter */}
//                     <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
//                         <h3 className="text-xl font-semibold mb-5">Dental Tips Newsletter</h3>
//                         <p className="text-white/70 mb-5">
//                             Subscribe to receive oral health tips and special offers
//                         </p>
//                         <div className="flex">
//                             <input
//                                 type="email"
//                                 placeholder="Your email address"
//                                 className="bg-white/10 border border-white/20 text-white px-5 py-3 rounded-r-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-300 w-full placeholder:text-white/50"
//                             />
//                             <button className="bg-sky-500 hover:bg-sky-400 text-blue-900 font-medium px-5 py-3 rounded-l-none rounded-r-lg transition-colors flex items-center">
//                                 Subscribe
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 3. Copyright Section */}
//                 <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
//                     <p className="text-white/50 text-sm mb-3 md:mb-0">
//                         &copy; {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved
//                     </p>
//                     <div className="flex space-x-6">
//                         <a href="#" className="text-white/50 hover:text-sky-300 text-sm transition-colors">
//                             Trems of Service
//                         </a>
//                         <a href="#" className="text-white/50 hover:text-sky-300 text-sm transition-colors">
//                             Privacy Policy
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import { motion } from "framer-motion";
import { 
  FaInstagram, FaPhone, FaTelegram, FaWhatsapp, FaTooth, 
  FaRegClock, FaMapMarkedAlt 
} from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

// --- Data Structures ---
const socialLinks = [
  { icon: <FaInstagram className="text-xl" />, href: '#' },
  { icon: <FaWhatsapp className="text-xl" />, href: '#' },
  { icon: <FaTelegram className="text-xl" />, href: '#' },
];

const clinicHours = [
  { day: 'Sunday - Thursday', time: '9 AM - 8 PM' },
  { day: 'Friday', time: '4 AM - 9 PM' },
  { day: 'Saturday', time: 'Closed' },
];

const contactInfo = [
  {
    icon: <FaPhone className="mr-4 text-white/70" />,
    text: <a href="#" className="hover:text-sky-300 transition-colors">
      +1 (234) 567-89
    </a>
  },
  {
    icon: <MdOutlineEmail className="mr-4 text-white/70" />,
    text: <a href="#" className="hover:text-sky-300 transition-colors">
      info@brightsmile.com
    </a>
  },
  {
    icon: <FaMapMarkedAlt className="mr-4 text-white/70" />,
    text: <span>123 Dental Avenue, Health District, City</span>
  },
];

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const Footer = () => {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="bg-gradient-to-b from-blue-950 to-blue-950 text-white pt-16 pb-12 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-cover opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. Logo and Social Links Section */}
        <motion.div 
          variants={fadeUp} 
          className="flex flex-col items-center mb-14"
        >
          <motion.div 
            variants={fadeUp}
            className="flex items-center mb-6"
          >
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/20 p-3 rounded-full mr-4"
            >
              <FaTooth className="text-2xl text-sky-300" />
            </motion.div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-200">
              Bright Smile Dental Clinic
            </h2>
          </motion.div>

          <motion.div 
            variants={fadeUp} 
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.2, y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* 2. Three Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Clinic Hours */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <FaRegClock className="mr-3 text-sky-300" />
              Clinic Hours
            </h3>
            <ul className="space-y-3">
              {clinicHours.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-white/70">{item.day}</span>
                  <span>{item.time}</span>
                </li>
              ))}
              <li className="pt-3 mt-3 border-t border-white/10 text-sky-300 font-medium">
                Emergency services available 24/7
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Contact Us */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-5 flex items-center">
              <FaPhone className="mr-3 text-sky-300" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Newsletter */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-5">Dental Tips Newsletter</h3>
            <p className="text-white/70 mb-5">
              Subscribe to receive oral health tips and special offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 text-white px-5 py-3 rounded-r-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-300 w-full placeholder:text-white/50"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-sky-500 hover:bg-sky-400 text-blue-900 font-medium px-5 py-3 rounded-l-none rounded-r-lg transition-colors flex items-center"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 3. Copyright Section */}
        <motion.div 
          variants={fadeUp}
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-sky-300 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-sky-300 text-sm transition-colors">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
