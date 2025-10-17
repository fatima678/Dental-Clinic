
// import React from 'react';
// import { FaUserMd } from 'react-icons/fa';
// import Img from '../assets/about.jpg';

// const About = () => {
//   return (
//     <section id="about" className="py-20 scroll-mt-20 bg-sky-50">
//       <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <img src={Img} alt="About" className="w-80 lg:w-[420px] h-80 lg:h-[420px] rounded-full shadow-md object-cover" />
//         </div>
//         <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
//           <div className="flex items-center justify-center lg:justify-start space-x-2">
//             <FaUserMd className="text-sky-600 w-7 h-7" />
//             <h2 className="text-3xl font-bold text-sky-900">
//               About Our Clinic
//             </h2>
//           </div>
//           <p className="text-gray-700 text-lg leading-relaxed">
//            Welcome to Smile Dental Clinic where we are dedicated to providing exceptional dental care with a personal touch. Established with a passion for oral health, our clinic combines advanced technology with a warm, patient-centered approach to ensure your comfort and satisfaction.
//           </p>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Our team of highly skilled dentists and staff brings years of experience, offering a wide range of services from routine check-ups to cosmetic enhancements. We prioritize your well-being, focusing on preventive care, education, and tailored treatments to meet your unique needs.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import { FaUserMd } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Img from '../assets/about.jpg';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -80 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  hover: { scale: 1.05, rotate: 2, transition: { type: 'spring', stiffness: 150 } }
};

const textVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } }
};

const About = () => {
  return (
    <section id="about" className="py-20 scroll-mt-20 bg-sky-50 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* ---- Image Section ---- */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            src={Img}
            alt="About"
            className="w-80 lg:w-[420px] h-80 lg:h-[420px] rounded-full shadow-xl object-cover border-4 border-white"
            whileHover={{
              scale: 1.08,
              rotate: 3,
              boxShadow: '0 15px 30px rgba(56, 189, 248, 0.3)',
            }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </motion.div>

        {/* ---- Text Section ---- */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          variants={textVariants}
        >
          <motion.div
            className="flex items-center justify-center lg:justify-start space-x-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaUserMd className="text-sky-600 w-7 h-7" />
            <h2 className="text-3xl font-bold text-sky-900">About Our Clinic</h2>
          </motion.div>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <span className="font-semibold text-sky-600">Smile Dental Clinic</span>, where we are dedicated to providing exceptional dental care with a personal touch. Established with a passion for oral health, our clinic combines advanced technology with a warm, patient-centered approach to ensure your comfort and satisfaction.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Our team of highly skilled dentists and staff brings years of experience, offering a wide range of services from routine check-ups to cosmetic enhancements. We prioritize your well-being, focusing on preventive care, education, and tailored treatments to meet your unique needs.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
