// // // import React, { useState } from "react";

// // // const Signup = () => {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const handleSignup = async (e) => {
// // //     e.preventDefault();
// // //     const res = await fetch("http://localhost:5000/api/auth/register", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({ name, email, password }),
// // //     });
// // //     const data = await res.json();
// // //     if (res.ok) {
// // //       localStorage.setItem("token", data.token);
// // //       alert("Signup successful!");
// // //       window.location.href = "/book";
// // //     } else {
// // //       alert(data.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-blue-50">
// // //       <form
// // //         onSubmit={handleSignup}
// // //         className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
// // //       >
// // //         <h2 className="text-2xl font-bold text-center text-blue-700">Signup</h2>

// // //         <input
// // //           type="text"
// // //           placeholder="Full Name"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //           className="w-full p-2 border rounded"
// // //         />

// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           className="w-full p-2 border rounded"
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           className="w-full p-2 border rounded"
// // //         />

// // //         <button
// // //           type="submit"
// // //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// // //         >
// // //           Signup
// // //         </button>

// // //         <p className="text-center text-sm">
// // //           Already have an account?{" "}
// // //           <a href="/login" className="text-blue-600 font-semibold">
// // //             Login
// // //           </a>
// // //         </p>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Signup;



// // import React, { useState } from "react";

// // const Signup = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSignup = async (e) => {
// //     e.preventDefault();

// //     const res = await fetch("http://localhost:5000/api/auth/register", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ name, email, password }),
// //     });

// //     const data = await res.json();

// //     if (res.ok) {
// //       alert("Signup successful! Please login now.");
// //       // Redirect to login page
// //       window.location.href = "/login";
// //     } else {
// //       alert(data.message || "Signup failed, please try again.");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-blue-50">
// //       <form
// //         onSubmit={handleSignup}
// //         className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
// //       >
// //         <h2 className="text-2xl font-bold text-center text-blue-700">Signup</h2>

// //         <input
// //           type="text"
// //           placeholder="Full Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           className="w-full p-2 border rounded"
// //           required
// //         />

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="w-full p-2 border rounded"
// //           required
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="w-full p-2 border rounded"
// //           required
// //         />

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// //         >
// //           Signup
// //         </button>

// //         <p className="text-center text-sm">
// //           Already have an account?{" "}
// //           <a href="/login" className="text-blue-600 font-semibold">
// //             Login
// //           </a>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Signup;


// import React, { useState } from "react";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/api/auth/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       alert("Signup successful! Please login now.");
//       // Redirect to login page
//       window.location.href = "/login";
//     } else {
//       alert(data.message || "Signup failed, please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-blue-50 overflow-hidden">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center text-blue-700">
//           Signup
//         </h2>

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Signup
//         </button>

//         <p className="text-center text-sm">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-600 font-semibold">
//             Login
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { User, Mail, Lock, LogIn } from "lucide-react"; 
// Assuming a relevant image is available in your assets folder
import signupImage from "../assets/teeth.jpg"; 

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup successful! Please login now.");
      // Redirect to login page
      window.location.href = "/login";
    } else {
      alert(data.message || "Signup failed, please try again.");
    }
  };

  return (
    // Main container - Centered and takes up full screen
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      
      {/* Card container for form and image */}
      <div className="flex max-w-4xl w-full mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* ----- LEFT SIDE – SIGNUP FORM ----- */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-12 space-y-6">
          <h2 className="text-3xl font-extrabold text-blue-900">
            Create Your Account
          </h2>
          <p className="text-gray-500">
            Start your journey with us today.
          </p>

          <form onSubmit={handleSignup} className="space-y-6">
            
            {/* Full Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password (min. 8 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.01]"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 pt-2">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-bold hover:text-blue-800 transition">
              Log in here
            </a>
          </p>
        </div>

        {/* ----- RIGHT SIDE – VISUAL (Hidden on small screens) ----- */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            // Make sure the path to your image is correct (e.g., /public/assets/signup-illustration.jpg)
            src={signupImage} 
            alt="Sign up illustration"
            className="object-cover w-full h-full"
          />
          {/* Optional: Add a subtle overlay for better text contrast/style */}
          <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;