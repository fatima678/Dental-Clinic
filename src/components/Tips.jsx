
// import { useState } from 'react';
// import { FaShieldAlt, FaTooth, FaSmile } from 'react-icons/fa'; // Added FaSmile as fallback
// import { GiToothbrush, GiWaterDrop } from 'react-icons/gi'; // Removed GiGrin, kept valid gi icons

// import React from 'react';

// const Tips = () => {
//   const [activeTip, setActiveTip] = useState(0);

//   const tips = [
//     {
//       title: 'Proper Brushing Technique',
//       content: 'Brush twice daily with fluoride toothpaste for two minutes.',
//       icon: <GiToothbrush className='w-8 h-8 text-sky-500' />,
//     },
//     {
//       title: 'Cavity Prevention',
//       content: 'Use fluoride, floss daily, and reduce sugary intake.',
//       icon: <FaTooth className='w-8 h-8 text-blue-500' />,
//     },
//     {
//       title: 'Gum Care',
//       content: 'Massage gums gently and avoid harsh brushing.',
//       icon: <GiWaterDrop className='w-8 h-8 text-pink-500' />,
//     },
//     {
//       title: 'Tooth Protection',
//       content: 'Wear a mouthguard for sports and avoid chewing hard objects.',
//       icon: <FaShieldAlt className='w-8 h-8 text-amber-500' />,
//     },
//     {
//       title: 'Regular Check-ups',
//       content: 'Visit the dentist every six months for cleanings and exams.',
//       icon: <FaSmile className='w-8 h-8 text-emerald-500' />, // Replaced GiGrin with FaSmile
//     },
//   ];

//   return (
//     <section id='tips' className='scroll-mt-20 max-w-6xl mx-auto px-4 py-12'>
//       <div className='text-center mb-12'>
//         <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>Dental Care Tips</h2>
//         <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          
//         </p>
//       </div>
//       <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
//         {tips.map((tip, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTip(index)}
//             className={`p-4 rounded-xl transition-all duration-300 flex flex-col 
//       items-center ${activeTip === index
//                 ? ' bg-white shadow-lg border-b-4 border-sky-400'
//                 : ' bg-gray-100 hover:bg-blue-200'
//               }`}
//           >
//             <div className='mb-2'>{tip.icon}</div>
//             <h3 className='font-medium text-gray-800 text-sm md:text-base'>{tip.title}</h3>
//           </button>
//         ))}
//       </div>
//       <div className='bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm'>
//         <div className='flex flex-col md:flex-row items-center gap-6'>
//           <div className='flex-shrink-0 bg-white p-6 rounded-xl shadow-md'>
//             {tips[activeTip].icon}
//           </div>
//           <div>
//             <h3 className='text-2xl font-bold text-gray-800 mb-3'>{tips[activeTip].title}</h3>
//             <p className='text-gray-600 text-lg leading-relaxed'>{tips[activeTip].content}</p>
//           </div>
//         </div>
//       </div>
//       <div className='mt-8 flex justify-center'>
//         <div className='flex space-x-2'>
//           {tips.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveTip(index)}
//               className={`w-3 h-3 rounded-full transition-all ${activeTip === index
//                 ? ' bg-sky-500 w-6'
//                 : ' bg-gray-300'
//                 }`}
//               aria-label={`Go to tip ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tips;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaTooth, FaSmile } from 'react-icons/fa';
import { GiToothbrush, GiWaterDrop } from 'react-icons/gi';

const Tips = () => {
  const [activeTip, setActiveTip] = useState(0);

  const tips = [
    {
      title: 'Proper Brushing Technique',
      content: 'Brush twice daily with fluoride toothpaste for two minutes.',
      icon: <GiToothbrush className="w-8 h-8 text-sky-500" />,
    },
    {
      title: 'Cavity Prevention',
      content: 'Use fluoride, floss daily, and reduce sugary intake.',
      icon: <FaTooth className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Gum Care',
      content: 'Massage gums gently and avoid harsh brushing.',
      icon: <GiWaterDrop className="w-8 h-8 text-pink-500" />,
    },
    {
      title: 'Tooth Protection',
      content: 'Wear a mouthguard for sports and avoid chewing hard objects.',
      icon: <FaShieldAlt className="w-8 h-8 text-amber-500" />,
    },
    {
      title: 'Regular Check-ups',
      content: 'Visit the dentist every six months for cleanings and exams.',
      icon: <FaSmile className="w-8 h-8 text-emerald-500" />,
    },
  ];

  // Variants for smooth animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
  };

  return (
    <section id="tips" className="scroll-mt-20 max-w-6xl mx-auto px-4 py-20">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">
          Dental Care Tips
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Follow these simple yet powerful tips to maintain a healthy, radiant smile every day.
        </p>
      </motion.div>

      {/* Tips Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {tips.map((tip, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTip(index)}
            className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center ${
              activeTip === index
                ? 'bg-white shadow-lg border-b-4 border-sky-400'
                : 'bg-gray-100 hover:bg-blue-100'
            }`}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
              className="mb-2"
            >
              {tip.icon}
            </motion.div>
            <h3 className="font-medium text-gray-800 text-sm md:text-base text-center">
              {tip.title}
            </h3>
          </motion.button>
        ))}
      </div>

      {/* Active Tip Content */}
      <motion.div
        className="bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTip}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <motion.div
              className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {tips[activeTip].icon}
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {tips[activeTip].title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {tips[activeTip].content}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Dots Navigation */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="flex space-x-2">
          {tips.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTip(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTip === index ? 'bg-sky-500 w-6' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.3 }}
              aria-label={`Go to tip ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Tips;
