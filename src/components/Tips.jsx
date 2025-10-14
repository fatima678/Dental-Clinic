// // import { useState } from 'react'
// // import { FaShieldAlt, FaTooth } from 'react-icons/fa';
// // import { GiToothbrush, GiWaterDrop, GiSmile} from 'react-icons/gi';

// // import React from 'react';

// // const Tips = () => {
// //     const [activeTip, setActiveTip] = useState(0);

// //     const tips = [
// //         {
// //             title: 'Proper Brushing Technique',
// //             content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repell',
// //             icon: <GiToothbrush className='w-8 h-8 text-sky-500' />,
// //         },
// //         {
// //             title: 'Cavity Prevention',
// //             content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repell',
// //             icon: <FaTooth className='w-8 h-8 text-blue-500' />,
// //         },
// //         {
// //             title: 'Gum Care',
// //             content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repel',
// //             icon: <GiWaterDrop className='w-8 h-8 text-pink-500' />,
// //         },
// //         {
// //             title: 'Tooth Protection',
// //             content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repel',
// //             icon: <FaShieldAlt className='w-8 h-8 text-amber-500' />,
// //         },
// //         {
// //             title: 'Regular Check-ups',
// //             content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repel',
// //             icon: <GiSmile className='w-8 h-8 text-emerald-500' />,
// //         },
// //     ]
// //     return (
// //         <section id='tips' className='scroll-mt-20 max-w-6xl mx-auto px-4 py-12'>
// //             <div className='text-center mb-12'>
// //                 <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>Dental Care Tips</h2>
// //                 <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
// //                     adipisicing elit. libero veritatis facilis esse molestias consectetur, maxime tempora
// //                 </p>
// //             </div>
// //             <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
// //                 {tips.map((tip, index) => (
// //                     <button
// //                         key={index}
// //                         onClick={() => setActiveTip(index)}
// //                         className={`p-4 rounded-xl transition-all duration-300 flex flex-col 
// //       items-center ${activeTip === index
// //                                 ? ' bg-white shadow-lg border-b-4 border-sky-400'
// //                                 : ' bg-gray-100 hover:bg-blue-200'
// //                             }`
// //                         }
// //                     >
// //                         <div className='mb-2'>{tip.icon}</div>
// //                         <h3 className='font-medium text-gray-800 text-sm md:text-base'>{tip.title}</h3>
// //                     </button>
// //                 ))}

// //             </div>
// //             <div className='bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm'>
// //                 <div className='flex flex-col md:flex-row items-center gap-6'>
// //                     <div className='flex-shrink-0 bg-white p-6 rounded-xl shadow-md'>
// //                         {tips[activeTip].icon}
// //                     </div>
// //                     <div>
// //                         <h3 className='text-2xl font-bold text-gray-800 mb-3'>{tips[activeTip].title}</h3>
// //                         <p className='text-gray-600 text-lg leading-relaxed'>{tips[activeTip].content}</p>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className='mt-8 flex justify-center'>
// //                 <div className='flex space-x-2'>
// //                     {tips.map((_, index) => (
// //                         <button
// //                             key={index}
// //                             onClick={() => setActiveTip(index)}
// //                             className={`w-3 h-3 rounded-full transition-all ${activeTip === index
// //                                 ? ' bg-sky-500 w-6'
// //                                 : ' bg-gray-300'
// //                                 }`
// //                             }
// //                             aria-label={`Go to tip ${index + 1}`}
// //                         />
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // }
// // export default Tips


// import { useState } from 'react';
// import { FaShieldAlt, FaTooth } from 'react-icons/fa';
// import { GiToothbrush, GiWaterDrop, GiSmileBeam } from 'react-icons/gi'; // Replaced FaSmileAlt with GiSmile

// import React from 'react';

// const Tips = () => {
//   const [activeTip, setActiveTip] = useState(0);

//   const tips = [
//     {
//       title: 'Proper Brushing Technique',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repell',
//       icon: <GiToothbrush className='w-8 h-8 text-sky-500' />,
//     },
//     {
//       title: 'Cavity Prevention',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repell',
//       icon: <FaTooth className='w-8 h-8 text-blue-500' />,
//     },
//     {
//       title: 'Gum Care',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repel',
//       icon: <GiWaterDrop className='w-8 h-8 text-pink-500' />,
//     },
//     {
//       title: 'Tooth Protection',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repel',
//       icon: <FaShieldAlt className='w-8 h-8 text-amber-500' />,
//     },
//     {
//       title: 'Regular Check-ups',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repel',
//       icon: <GiSmileBeam className='w-8 h-8 text-emerald-500' />, // Replaced FaSmileAlt with GiSmile
//     },
//   ];

//   return (
//     <section id='tips' className='scroll-mt-20 max-w-6xl mx-auto px-4 py-12'>
//       <div className='text-center mb-12'>
//         <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>Dental Care Tips</h2>
//         <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
//           adipisicing elit. libero veritatis facilis esse molestias consectetur, maxime tempora
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



import { useState } from 'react';
import { FaShieldAlt, FaTooth, FaSmile } from 'react-icons/fa'; // Added FaSmile as fallback
import { GiToothbrush, GiWaterDrop } from 'react-icons/gi'; // Removed GiGrin, kept valid gi icons

import React from 'react';

const Tips = () => {
  const [activeTip, setActiveTip] = useState(0);

  const tips = [
    {
      title: 'Proper Brushing Technique',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repell',
      icon: <GiToothbrush className='w-8 h-8 text-sky-500' />,
    },
    {
      title: 'Cavity Prevention',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repell',
      icon: <FaTooth className='w-8 h-8 text-blue-500' />,
    },
    {
      title: 'Gum Care',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repel',
      icon: <GiWaterDrop className='w-8 h-8 text-pink-500' />,
    },
    {
      title: 'Tooth Protection',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repel',
      icon: <FaShieldAlt className='w-8 h-8 text-amber-500' />,
    },
    {
      title: 'Regular Check-ups',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto vitae quasi, quidem repel',
      icon: <FaSmile className='w-8 h-8 text-emerald-500' />, // Replaced GiGrin with FaSmile
    },
  ];

  return (
    <section id='tips' className='scroll-mt-20 max-w-6xl mx-auto px-4 py-12'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>Dental Care Tips</h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          adipisicing elit. libero veritatis facilis esse molestias consectetur, maxime tempora
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
        {tips.map((tip, index) => (
          <button
            key={index}
            onClick={() => setActiveTip(index)}
            className={`p-4 rounded-xl transition-all duration-300 flex flex-col 
      items-center ${activeTip === index
                ? ' bg-white shadow-lg border-b-4 border-sky-400'
                : ' bg-gray-100 hover:bg-blue-200'
              }`}
          >
            <div className='mb-2'>{tip.icon}</div>
            <h3 className='font-medium text-gray-800 text-sm md:text-base'>{tip.title}</h3>
          </button>
        ))}
      </div>
      <div className='bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm'>
        <div className='flex flex-col md:flex-row items-center gap-6'>
          <div className='flex-shrink-0 bg-white p-6 rounded-xl shadow-md'>
            {tips[activeTip].icon}
          </div>
          <div>
            <h3 className='text-2xl font-bold text-gray-800 mb-3'>{tips[activeTip].title}</h3>
            <p className='text-gray-600 text-lg leading-relaxed'>{tips[activeTip].content}</p>
          </div>
        </div>
      </div>
      <div className='mt-8 flex justify-center'>
        <div className='flex space-x-2'>
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTip(index)}
              className={`w-3 h-3 rounded-full transition-all ${activeTip === index
                ? ' bg-sky-500 w-6'
                : ' bg-gray-300'
                }`}
              aria-label={`Go to tip ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;