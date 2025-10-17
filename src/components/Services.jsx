// import { FaSmileBeam, FaTooth, FaXRay } from 'react-icons/fa';
// import React from 'react';
// import { GiToothbrush } from 'react-icons/gi';
// import { motion } from "framer-motion";

// const services = [
//     {
//         icon: <FaTooth className="w-10 h-10 text-sky-500" />,
//         title: "Comprehensive Dental Exam",
//         desc: "A thorough examination of your teeth, gums, and mouth to assess your oral health, identify issues, and create a personalized treatment plan"
//     },
//     {
//         icon: <GiToothbrush className="w-10 h-10 text-green-500" />,
//         title: "Professional Teeth Cleaning",
//         desc: "A deep cleaning by our experts to remove plaque and tartar, polish your teeth, and promote a healthy, bright smile."
//     },
//     {
//         icon: <FaSmileBeam className="w-10 h-10 text-yellow-500" />,
//         title: "Cosmetic Dentistry",
//         desc: "Enhance your smile with treatments like teeth whitening, veneers, or bonding to improve appearance and boost confidence."
//     },
//     {
//         icon: <FaXRay className="w-10 h-10 text-purple-500" />,
//         title: "Comprehensive Dental Exam",
//         desc: "Specialized care to straighten teeth and correct bite issues using braces or aligners for a perfect smile"
//     },
// ];

// const Services = () => {
//     return (
//         <section id="services" className="scroll-mt-20 py-24 bg-gradient-to-br from-white to-sky-50">
//             <div className="container mx-auto px-4">
//                 <div className="text-center mx-16">
//                     <h2 className="text-4xl font-bold text-sky-900 mb-4">Our Dental Services</h2>
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                        Comprehensive Dental Exam," "Professional Teeth Cleaning," "Cosmetic Dentistry," and another "Comprehensive Dental Exam"
//                     </p>
//                 </div>
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {services.map((service, index) => (
//                         <motion.div key={index} className='bg-white rounded-3xl p-6 shadow-md hover:shadow-lg trasition-all border border-sky-100
//             hover:border-sky-300'
//                             whileHover={{ scale: 1.05 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                         >
//                             <div className="flex items-center justify-center mb-4">
//                                 {service.icon}
//                             </div>
//                             <h3 className="text-lg font-semibold text-sky-800 mb-2 text-center">
//                                 {service.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm text-center">
//                                 {service.desc}
//                             </p>
//                             </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;



import { FaSmileBeam, FaTooth, FaXRay } from 'react-icons/fa';
import React from 'react';
import { GiToothbrush } from 'react-icons/gi';
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaTooth className="w-10 h-10 text-sky-500" />,
    title: "Comprehensive Dental Exam",
    desc: "A thorough examination of your teeth, gums, and mouth to assess your oral health, identify issues, and create a personalized treatment plan",
  },
  {
    icon: <GiToothbrush className="w-10 h-10 text-green-500" />,
    title: "Professional Teeth Cleaning",
    desc: "A deep cleaning by our experts to remove plaque and tartar, polish your teeth, and promote a healthy, bright smile.",
  },
  {
    icon: <FaSmileBeam className="w-10 h-10 text-yellow-500" />,
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with treatments like teeth whitening, veneers, or bonding to improve appearance and boost confidence.",
  },
  {
    icon: <FaXRay className="w-10 h-10 text-purple-500" />,
    title: "Orthodontic Care",
    desc: "Specialized care to straighten teeth and correct bite issues using braces or aligners for a perfect smile.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 py-24 bg-gradient-to-br from-white to-sky-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mx-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-sky-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive Dental Exam, Professional Teeth Cleaning, Cosmetic
            Dentistry, and Orthodontic Care.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-sky-100 hover:border-sky-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-sky-800 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
