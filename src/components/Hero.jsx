// // import React from 'react'
// // import { CalendarCheck } from 'lucide-react'
// // import hero from '../assets/heroo.jpg'

// // const Hero = () => {
// //     return (
// //         <section id='home' className='scroll-m-20 bg-sky-50 py-16'>
// //             <div className='container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
// //                 <div className='max-w-xl text-center lg:text-left space-y-6'>
// //                     <h1 className='text-xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'>
// //                         Brighten Your Smile <br /> with Expert Dental Care
// //                     </h1>
// //                     <p className='text-gray-700 text-sm lg:text-lg'>
// //                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro soluta excepturi in.
// //                     </p>
// //                     <a
// //                         href="#" // Assuming it's an anchor tag like in typical buttons/links
// //                         className='inline-flex items-center bg-sky-600 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-xl 
// //   hover:bg-sky-700 transition text-base font-medium'
// //                     >
// //                         <CalendarCheck className='w-5 h-5 mr-2' />
// //                         Book Appointment
// //                     </a>
// //                 </div>
// //                 <div className='flex justify-center'>
// //                     <img src={hero} alt="Dental" className='w-80 lg:w-[429px] rounded-4xl' />
// //                 </div>
// //             </div> 
// //         </section>
// //     )
// // }

// // export default Hero


// import React from 'react';
// import { CalendarCheck } from 'lucide-react';
// import hero from '../assets/heroo.jpg';

// const Hero = () => {
//   return (
//     <section id='home' className='bg-sky-50 py-20'>
//       <div className='container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10'>
//         <div className='max-w-xl text-center lg:text-left space-y-6'>
//           <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'>
//             Brighten Your Smile <br /> with Expert Dental Care
//           </h1>
//           <p className='text-gray-700 text-sm lg:text-base'>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro soluta excepturi in.
//           </p>
//           <a
//             href="#"
//             className='inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium'
//           >
//             <CalendarCheck className='w-5 h-5 mr-2' />
//             Book Appointment
//           </a>
//         </div>
//         <div className='flex justify-center lg:justify-end'>
//           <img src={hero} alt="Dental Clinic" className='w-80 lg:w-[429px] rounded-[32px]' />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { CalendarCheck } from 'lucide-react';
import hero from '../assets/heroo.jpg';

const Hero = () => {
  return (
    <section id='home' className='bg-sky-50 py-20'>
      <div className='container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10'>
        <div className='max-w-xl text-center lg:text-left space-y-6'>
          <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'>
            Brighten Your Smile <br /> with Expert Dental Care
          </h1>
          <p className='text-gray-700 text-sm lg:text-base'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro soluta excepturi in.
          </p>
          <a
            href="#"
            className='inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium'
          >
            <CalendarCheck className='w-5 h-5 mr-2' />
            Book Appointment
          </a>
        </div>
        <div className='flex justify-center lg:justify-end'>
          <img src={hero} alt="Dental Clinic" className='w-80 lg:w-[429px] h-[400px] lg:h-[400px] rounded-[32px] object-cover' />
        </div>
      </div>
    </section>
  );
};

export default Hero;