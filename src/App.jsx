// // // // // // import React from 'react';
// // // // // // import Header from './components/Header';
// // // // // // import Hero from './components/Hero';
// // // // // // import Services from './components/Services';
// // // // // // import About from './components/About';
// // // // // // import Tips from './components/Tips';
// // // // // // import BookAppointment from './components/BookAppointment';
// // // // // // import Testimonials from './components/Testimonials';
// // // // // // import Footer from './components/Footer';
// // // // // // import Login from './components/Login';
// // // // // // import MyAppointments from './components/MyAppointments';
// // // // // // import Signup from './components/Signup';

// // // // // // function App() {
// // // // // //   return (
// // // // // //    <div>
// // // // // //     <Header/>
// // // // // //     <Hero/>
// // // // // //     <Services/>
// // // // // //     <About/>
// // // // // //     <Tips/>
// // // // // //     <BookAppointment/>
// // // // // //     <Testimonials/>
// // // // // //     <Footer/>
// // // // // //     <Login/>
// // // // // //    <MyAppointments/>
// // // // // //    <Signup/>
// // // // // //     </div>
   
// // // // // //   );
// // // // // // }
// // // // // // export default App;


// // // // // import React from "react";
// // // // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // // // import Header from "./components/Header";
// // // // // import Hero from "./components/Hero";
// // // // // import Services from "./components/Services";
// // // // // import About from "./components/About";
// // // // // import Tips from "./components/Tips";
// // // // // import BookAppointment from "./components/BookAppointment";
// // // // // import Testimonials from "./components/Testimonials";
// // // // // import Footer from "./components/Footer";
// // // // // import Login from "./components/Login";
// // // // // import MyAppointments from "./components/MyAppointments";
// // // // // import Signup from "./components/Signup";

// // // // // function App() {
// // // // //   const isLoggedIn = !!localStorage.getItem("token"); // simple auth check

// // // // //   return (
// // // // //     <Router>
// // // // //       <Header />
// // // // //       <Routes>
// // // // //         {/* Home Page */}
// // // // //         <Route
// // // // //           path="/"
// // // // //           element={
// // // // //             <>
// // // // //               <Hero />
// // // // //               <Services />
// // // // //               <About />
// // // // //               <Tips />
// // // // //               <BookAppointment />
// // // // //               <Testimonials />
// // // // //             </>
// // // // //           }
// // // // //         />

// // // // //         {/* Login */}
// // // // //         <Route
// // // // //           path="/login"
// // // // //           element={isLoggedIn ? <Navigate to="/profile" /> : <Login />}
// // // // //         />

// // // // //         {/* Signup */}
// // // // //         <Route
// // // // //           path="/signup"
// // // // //           element={isLoggedIn ? <Navigate to="/profile" /> : <Signup />}
// // // // //         />

// // // // //         {/* Profile / My Appointments */}
// // // // //         <Route
// // // // //           path="/profile"
// // // // //           element={isLoggedIn ? <MyAppointments /> : <Navigate to="/login" />}
// // // // //         />
// // // // //       </Routes>
// // // // //       <Footer />
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // export default App;


// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // // import Header from "./components/Header";
// // // // import Hero from "./components/Hero";
// // // // import Services from "./components/Services";
// // // // import About from "./components/About";
// // // // import Tips from "./components/Tips";
// // // // import Testimonials from "./components/Testimonials";
// // // // import BookAppointment from "./components/BookAppointment";
// // // // import MyAppointments from "./components/MyAppointments";
// // // // import Login from "./components/Login";
// // // // import Signup from "./components/Signup";
// // // // import Footer from "./components/Footer";

// // // // function App() {
// // // //   const isLoggedIn = !!localStorage.getItem("token");

// // // //   return (
// // // //     <Router>
// // // //       <Header />

// // // //       <Routes>
// // // //         {/* Home Page */}
// // // //         <Route
// // // //           path="/"
// // // //           element={
// // // //             <>
// // // //               <Hero />
// // // //               <Services />
// // // //               <About />
// // // //               <Tips />
// // // //               <Testimonials />
// // // //             </>
// // // //           }
// // // //         />

// // // //         {/* Login Page */}
// // // //         <Route
// // // //           path="/login"
// // // //           element={isLoggedIn ? <Navigate to="/profile" /> : <Login />}
// // // //         />

// // // //         {/* Signup Page */}
// // // //         <Route
// // // //           path="/signup"
// // // //           element={isLoggedIn ? <Navigate to="/profile" /> : <Signup />}
// // // //         />

// // // //         {/* Booking Page */}
// // // //         <Route
// // // //           path="/book"
// // // //           element={isLoggedIn ? <BookAppointment /> : <Navigate to="/login" />}
// // // //         />

// // // //         {/* Profile Page */}
// // // //         <Route
// // // //           path="/profile"
// // // //           element={isLoggedIn ? <MyAppointments /> : <Navigate to="/login" />}
// // // //         />

// // // //         {/* Catch-all */}
// // // //         <Route path="*" element={<Navigate to="/" />} />
// // // //       </Routes>

// // // //       <Footer />
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;


// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // import Header from "./components/Header";
// // // import Hero from "./components/Hero";
// // // import Services from "./components/Services";
// // // import About from "./components/About";
// // // import Tips from "./components/Tips";
// // // import Testimonials from "./components/Testimonials";
// // // import BookAppointment from "./components/BookAppointment";
// // // import MyAppointments from "./components/MyAppointments";
// // // import Login from "./components/Login";
// // // import Signup from "./components/Signup";
// // // import Footer from "./components/Footer";

// // // function App() {
// // //   const isLoggedIn = !!localStorage.getItem("token");

// // //   return (
// // //     <Router>
// // //       <Header />

// // //       <Routes>
// // //         <Route
// // //           path="/"
// // //           element={
// // //             <>
// // //               <Hero />
// // //               <Services />
// // //               <About />
// // //               <Tips />
// // //               <Testimonials />
// // //             </>
// // //           }
// // //         />

// // //         <Route
// // //           path="/login"
// // //           element={isLoggedIn ? <Navigate to="/profile" /> : <Login />}
// // //         />

// // //         <Route
// // //           path="/signup"
// // //           element={isLoggedIn ? <Navigate to="/profile" /> : <Signup />}
// // //         />

// // //         {/* Book Appointment Page - Always visible */}
// // //         <Route
// // //           path="/book"
// // //           element={<BookAppointment isLoggedIn={isLoggedIn} />}
// // //         />

// // //         <Route
// // //           path="/login"
// // //           element={isLoggedIn ? <MyAppointments /> : <Navigate to="/login" />}
// // //         />

// // //         <Route path="*" element={<Navigate to="/" />} />
// // //       </Routes>

// // //       <Footer />
// // //     </Router>
// // //   );
// // // }

// // // export default App;


// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import Header from "./components/Header";
// // import Hero from "./components/Hero";
// // import Services from "./components/Services";
// // import About from "./components/About";
// // import Tips from "./components/Tips";
// // import Testimonials from "./components/Testimonials";
// // import BookAppointment from "./components/BookAppointment";
// // import Login from "./components/Login";
// // import Signup from "./components/Signup";
// // import Footer from "./components/Footer";

// // function App() {
// //   const isLoggedIn = !!localStorage.getItem("token");

// //   return (
// //     <Router>
// //       <Header />

// //       <Routes>
// //         {/* Home Page */}
// //         <Route
// //           path="/"
// //           element={
// //             <>
// //               <Hero />
// //               <Services />
// //               <About />
// //               <Tips />
// //               <BookAppointment/>
// //               <Testimonials />
// //                   <Footer />
// //             </>
// //           }
// //         />

// //         {/* Login Page */}
// //         <Route path="/login" element={<Login />} />

// //         {/* Signup Page */}
// //         <Route path="/signup" element={<Signup />} />

       
// //       </Routes>

  
// //     </Router>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import About from "./components/About";
// import Tips from "./components/Tips";
// import Testimonials from "./components/Testimonials";
// import BookAppointment from "./components/BookAppointment";
// // import Login from "./components/Login";
// // import Signup from "./components/Signup";
// import Footer from "./components/Footer";

// // ✅ Wrapper component to handle layout logic
// function Layout({ children }) {
//   const location = useLocation();
//   const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";

//   return (
//     <>
//       {!hideHeaderFooter && <Header />}

//       {children}

//       {!hideHeaderFooter && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <Services />
//                 <About />
//                 <Tips />
//                 <BookAppointment />
//                 <Testimonials />
//               </>
//             }
//           />

//           {/* Login Page */}
//           <Route path="/login" element={<Login />} />

//           {/* Signup Page */}
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Tips from "./components/Tips";
import Testimonials from "./components/Testimonials";
import BookAppointment from "./components/BookAppointment";
import Footer from "./components/Footer";

// ✅ Wrapper component to handle layout logic
function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Tips />
                <BookAppointment />
                <Testimonials />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
