
// // import React from 'react';
// // import { CalendarCheck } from 'lucide-react';
// // import hero from '../assets/heroo.jpg';

// // const Hero = () => {
// //   return (
// //     <section id='home' className='bg-sky-50 py-20'>
// //       <div className='container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10'>
// //         <div className='max-w-xl text-center lg:text-left space-y-6'>
// //           <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'>
// //             Brighten Your Smile <br /> with Expert Dental Care
// //           </h1>
// //           <p className='text-gray-700 text-sm lg:text-base'>
// //            Welcome to our state-of-the-art dental clinic, where we provide comprehensive oral healthcare with a focus on patient comfort and advanced technology. Our experienced team of dentists, hygienists, and assistants offers a full range of services, from routine cleanings and preventive care to complex procedures like root canals and cosmetic treatments. 
// //           </p>
// //           <a
// //             href="#"
// //             className='inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium'
// //           >
// //             <CalendarCheck className='w-5 h-5 mr-2' />
// //             Book Appointment
// //           </a>
// //         </div>
// //         <div className='flex justify-center lg:justify-end'>
// //           <img src={hero} alt="Dental Clinic" className='w-80 lg:w-[429px] h-[400px] lg:h-[400px] rounded-[32px] object-cover' />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;



// import React from 'react';
// import { CalendarCheck } from 'lucide-react';
// import { motion } from 'framer-motion';
// import hero from '../assets/heroo.jpg';

// const Hero = () => {
//   return (
//     <section id='home' className='bg-sky-50 py-20 overflow-hidden'>
//       <div className='container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10'>

//         {/* ---------- Text Content ---------- */}
//         <motion.div
//           className='max-w-xl text-center lg:text-left space-y-6'
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//           viewport={{ once: true }}
//         >
//           <motion.h1
//             className='text-2xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Brighten Your Smile <br /> with Expert Dental Care
//           </motion.h1>

//           <motion.p
//             className='text-gray-700 text-sm lg:text-base'
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           >
//             Welcome to our state-of-the-art dental clinic, where we provide comprehensive oral healthcare with a focus on patient comfort and advanced technology. Our experienced team of dentists, hygienists, and assistants offers a full range of services, from routine cleanings and preventive care to complex procedures like root canals and cosmetic treatments.
//           </motion.p>

//           <motion.a
//             href="#book"
//             className='inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium'
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <CalendarCheck className='w-5 h-5 mr-2' />
//             Book Appointment
//           </motion.a>
//         </motion.div>

//         {/* ---------- Image with Animation ---------- */}
//         <motion.div
//           className='flex justify-center lg:justify-end'
//           initial={{ opacity: 0, x: 80, scale: 0.9 }}
//           whileInView={{ opacity: 1, x: 0, scale: 1 }}
//           transition={{ duration: 1.2, ease: 'easeOut' }}
//           viewport={{ once: true }}
//         >
//           <motion.img
//             src={hero}
//             alt="Dental Clinic"
//             className='w-80 lg:w-[429px] h-[400px] lg:h-[400px] rounded-[32px] object-cover shadow-lg'
//             whileHover={{
//               scale: 1.05,
//               rotate: 2,
//               transition: { type: 'spring', stiffness: 200 }
//             }}
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import hero from '../assets/heroo.jpg';

const Hero = () => {
  return (
    <section id='home' className='bg-sky-50 py-20 overflow-hidden'>
      <div className='container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10'>

        {/* ---------- Text Content ---------- */}
        <motion.div
          className='max-w-xl text-center lg:text-left space-y-6'
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h1
            className='text-2xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Brighten Your Smile <br /> with Expert Dental Care
          </motion.h1>

          <motion.p
            className='text-gray-700 text-sm lg:text-base'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Welcome to our state-of-the-art dental clinic, where we provide comprehensive oral healthcare with a focus on patient comfort and advanced technology. Our experienced team of dentists, hygienists, and assistants offers a full range of services, from routine cleanings and preventive care to complex procedures like root canals and cosmetic treatments.
          </motion.p>

          <motion.a
            href="#book"
            className='inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CalendarCheck className='w-5 h-5 mr-2' />
            Book Appointment
          </motion.a>
        </motion.div>

        {/* ---------- Image (no hover animation) ---------- */}
        <motion.div
          className='flex justify-center lg:justify-end'
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.img
            src={hero}
            alt="Dental Clinic"
            className='w-80 lg:w-[429px] h-[400px] lg:h-[400px] rounded-[32px] object-cover shadow-lg'
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
