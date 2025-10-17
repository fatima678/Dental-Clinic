// import React, { useState } from 'react'
// import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


// const Testimonials = () => {
//     const [currentIndex, setCurrentIndex] = useState(0) // Assuming initial state is 0, which is typical for an index

//     const testimonials = [
//         {
//             id: 1,
//             name: 'Ahmad ',
//             role: 'Patient',
//             content: 'The care I received was exceptional, and the staff were incredibly friendly and supportive. I highly recommend this place to anyone!', // Content is truncated in the image
//             rating: 5,
//             image: 'https://randomuser.me/api/portraits/men/32.jpg',
//         },
//         {
//             id: 2,
//             name: 'Annie',
//             role: 'Patient',
//             content: 'My treatment was completely pain-free, and the service was quick and efficient. I’m truly amazed by their professionalism!', // Content is truncated in the image
//             rating: 5,
//             image: 'https://randomuser.me/api/portraits/women/68.jpg',
//         },
//         {
//             id: 3,
//             name: 'Mehwish Khan',
//             role: 'Patient',
//             content: 'Thanks to their expert advice and treatment, my teeth feel healthier than ever. I’m so glad I chose this clinic!', // Content is truncated in the image
//             rating: 5,
//             image: 'https://randomuser.me/api/portraits/women/32.jpg',
//         },
//         {
//             id: 4,
//             name: 'Abdullah',
//             role: 'Patient',
//             content: ' Very professional and comfortable experience.', // Content is truncated in the image
//             rating: 5,
//             image: 'https://randomuser.me/api/portraits/men/75.jpg',
//         },

//     ]

//     const nextTestimonial = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const prevTestimonial = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//         );
//     };


//     return (
//         <section id="testimonials" className='scroll-mt-20 relative py-16 bg-gradient-to-r from-blue-50 to-sky-50 overflow-hidden'>
//             <div className='absolute inset-0 opacity-10'>
//                 <div className='absolute inset-y-0 left-0 w-1/2 bg-sky-300'></div>
//                 <div className='absolute inset-y-0 right-0 w-1/2 bg-blue-300'></div>
//             </div>

//             <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//                 <div className='text-center mb-16'>
//                     <h2 className='text-3xl font-extrabold text-sky-800 sm:text-4xl'>
//                         Patient Testimonilas
//                     </h2>
//                     <p className='mt-4 text-xl text-gray-600'>
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
//                     </p>
//                     <div className='relative'>
//                         <div
//                             className='flex transition-transform duration-500 ease-in-out'
//                             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                         >
//                             {testimonials.map((testimonial, index) => (
//                                 <div key={testimonial.id} className='w-full flex-shrink-0 px-4'>
//                                     <div className='bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center'>
//                                         <div className='md:w-1/3 md:mb-0 flex justify-center'>
//                                             <div className='relative'>
//                                                 <img
//                                                     className='w-40 h-40 rounded-full object-cover border-4 border-sky-100 shadow-lg'
//                                                     src={testimonial.image}
//                                                     alt={testimonial.name}
//                                                 />
//                                                 <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-medium'>
//                                                     {testimonial.role}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className='md:w-2/3 md:pl-12'>
//                                             <div className='relative'>
//                                                 <FaQuoteLeft className="text-sky-200  text-2xl md:text-3xl absolute -top-2 -left-7 md:-left-10" />
//                                                 <p className='text-lg text-gray-700 mb-6 relative z-10'>
//                                                     {testimonial.content}
//                                                 </p>
//                                                 <div>
//                                                     <div className='flex items-center justify-between'>
//                                                         <div>
//                                                             <h3 className='text-xl font-bold text-sky-800'>
//                                                                 {testimonial.name}
//                                                             </h3>
//                                                             <div className='flex mt-1'>
//                                                                 {[...Array(5)].map((_, i) => (
//                                                                     <FaStar
//                                                                         key={i}
//                                                                         className={`text-lg ${i < testimonial.rating
//                                                                             ? 'text-yellow-400'
//                                                                             : 'text-gray-300'
//                                                                             }`}
//                                                                     />
//                                                                 ))}
//                                                             </div>
//                                                         </div>
//                                                         <div className='hidden md:flex space-x-2'>
//                                                             <button
//                                                                 onClick={prevTestimonial}
//                                                                 className='p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors'
//                                                             >
//                                                                 <FaChevronLeft />
//                                                             </button>
//                                                             <button onClick={nextTestimonial}
//                                                                 className='p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors'
//                                                             >
//                                                                 <FaChevronRight />
//                                                             </button>
//                                                         </div>

//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className='flex justify-center mt-8 space-x-4 md:hidden'>
//                             {testimonials.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setCurrentIndex(index)}
//                                     className={`w-3 h-3 rounded-full ${currentIndex === index
//                                             ? 'bg-sky-600'
//                                             : 'bg-gray-300'
//                                         }`}
//                                 />
//                             ))}
//                         </div>
//                     </div>


//                     <div className='mt-16 text-center'>
//                         <button className='px-8 py-3 bg-sky-600 text-white rounded-full font-medium hover:bg-sky-700 transition-colors duration-300 shadow-lg hover:shadow-xl'>
//                             Share Your Experience
//                         </button>
//                     </div>
//                 </div>
//             </div >
//         </section >
//     )
// }

// export default Testimonials

import React, { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmad",
      role: "Patient",
      content:
        "The care I received was exceptional, and the staff were incredibly friendly and supportive. I highly recommend this place to anyone!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Annie",
      role: "Patient",
      content:
        "My treatment was completely pain-free, and the service was quick and efficient. I’m truly amazed by their professionalism!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 3,
      name: "Mehwish Khan",
      role: "Patient",
      content:
        "Thanks to their expert advice and treatment, my teeth feel healthier than ever. I’m so glad I chose this clinic!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 4,
      name: "Abdullah",
      role: "Patient",
      content: "Very professional and comfortable experience.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 relative py-16 bg-gradient-to-r from-blue-50 to-sky-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-sky-300"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-sky-800 sm:text-4xl"
          >
            Patient Testimonials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-xl text-gray-600"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          </motion.p>

          <div className="relative mt-12">
            <div className="relative w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center"
                >
                  <div className="md:w-1/3 md:mb-0 flex justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <img
                        className="w-40 h-40 rounded-full object-cover border-4 border-sky-100 shadow-lg"
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                      />
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {testimonials[currentIndex].role}
                      </div>
                    </motion.div>
                  </div>

                  <div className="md:w-2/3 md:pl-12 text-left">
                    <FaQuoteLeft className="text-sky-200 text-2xl md:text-3xl mb-2" />
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-lg text-gray-700 mb-6"
                    >
                      {testimonials[currentIndex].content}
                    </motion.p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-sky-800">
                          {testimonials[currentIndex].name}
                        </h3>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-lg ${
                                i < testimonials[currentIndex].rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="hidden md:flex space-x-2">
                        <button
                          onClick={prevTestimonial}
                          className="p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors"
                        >
                          <FaChevronLeft />
                        </button>
                        <button
                          onClick={nextTestimonial}
                          className="p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors"
                        >
                          <FaChevronRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-8 space-x-4 md:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-sky-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <button className="px-8 py-3 bg-sky-600 text-white rounded-full font-medium hover:bg-sky-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Share Your Experience
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
