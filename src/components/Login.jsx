// // // import React, { useState } from "react";

// // // const Login = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     const res = await fetch("http://localhost:5000/api/auth/login", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({ email, password }),
// // //     });
// // //     const data = await res.json();
// // //     if (res.ok) {
// // //       localStorage.setItem("token", data.token);
// // //       alert("Login successful!");
// // //       window.location.href = "/book";
// // //     } else {
// // //       alert(data.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-blue-50">
// // //       <form
// // //         onSubmit={handleLogin}
// // //         className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
// // //       >
// // //         <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>

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
// // //           Login
// // //         </button>

// // //         <p className="text-center text-sm">
// // //           Don’t have an account?{" "}
// // //           <a href="/signup" className="text-blue-600 font-semibold">
// // //             Signup
// // //           </a>
// // //         </p>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // import React, { useState } from "react";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     const res = await fetch("http://localhost:5000/api/auth/login", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ email, password }),
// //     });

// //     const data = await res.json();

// //     if (res.ok) {
// //       localStorage.setItem("token", data.token);
// //       alert("Login successful!");
// //       // Redirect to home page (full site now accessible)
// //       window.location.href = "/";
// //     } else {
// //       alert(data.message || "Invalid credentials.");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-blue-50">
// //       <form
// //         onSubmit={handleLogin}
// //         className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
// //       >
// //         <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>

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
// //           Login
// //         </button>

// //         <p className="text-center text-sm">
// //           Don’t have an account?{" "}
// //           <a href="/signup" className="text-blue-600 font-semibold">
// //             Signup
// //           </a>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;



// import React, { useState } from "react";
// import { User, Lock, ArrowRight, RefreshCw } from "lucide-react"; // optional icons

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       localStorage.setItem("token", data.token);
//       alert("Login successful!");
//       window.location.href = "/";
//     } else {
//       alert(data.message || "Invalid credentials.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       {/* ----- LEFT SIDE – FORM ----- */}
//       <div className="relative w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
//         <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 blur-xl"></div>

//         <h1 className="text-2xl font-bold text-blue-800 mb-2">
//           Login to  <span className="text-blue-600">Smile Dental</span>.
//         </h1>
       

//         <form onSubmit={handleLogin} className="space-y-5">
//           <div className="relative">
//             <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//             <input
//               type="email"
//               placeholder="Email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition"
//               required
//             />
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
//           >
//             Log in
//           </button>

          
          

//           <p className="text-center text-sm text-gray-600">
//             Don’t have an account?{" "}
//             <a href="/signup" className="text-blue-600 font-medium hover:underline">
//               Create new account.
//             </a>
//           </p>

         

//         </form>
//       </div>

//       {/* ----- RIGHT SIDE – IMAGE FROM ASSETS ----- */}
//       <div className="hidden md:block relative w-full max-w-lg h-full bg-gradient-to-br from-blue-600 to-cyan-400 rounded-r-xl overflow-hidden">
//         <img
//           src="/assets/login.jpg" // Adjust the path based on your project (e.g., /src/assets/login.png)
//           alt="Dental clinic"
//           className="object-cover w-full h-full opacity-90"
//         />
//         <div className="absolute top-6 right-6 bg-white px-3 py-1 rounded-md shadow">
//           <span className="text-blue-700 font-semibold">OrionDental</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { User, Lock, Facebook, Mail } from "lucide-react";

// Assuming your image is in 'public/assets/dental-chair.jpg'
// or in a similar accessible path relative to the root.
import dentalChairImage from "../assets/login.jpg"; 

const Login = () => {
  const [username, setUsername] = useState(""); // Changed email to username for visual match
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Use username/password for the body based on the state names
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }), // Adjusted to use username
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      window.location.href = "/";
    } else {
      alert(data.message || "Invalid credentials.");
    }
  };

  return (
    // Updated container for a slightly more off-white background
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex max-w-4xl w-full mx-auto shadow-2xl rounded-xl overflow-hidden">

        {/* ----- LEFT SIDE – FORM (Similar to the image's structure) ----- */}
        <div className="w-full md:w-1/2 p-10 bg-white z-10">
          
          {/* Header text */}
          <h1 className="text-3xl font-light text-gray-800 mb-8">
            Login to <span className="font-semibold text-blue-900">Smile Dental.</span>
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Enter your details below.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Username/Email Field */}
            <div className="relative">
              <input
                type="text" // Changed to text to match 'Username' input placeholder
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>

           
            
            
             {/* Login Link */}
          <p className="text-center text-sm text-gray-600 pt-2">
            You don't have an account?{" "}
            <a href="/signup" className="text-blue-600 font-bold hover:text-blue-800 transition">
              Signup here
            </a>
          </p>

          </form>
        </div>

        {/* ----- RIGHT SIDE – IMAGE (With abstract shapes) ----- */}
        <div className="hidden md:block md:w-1/2 relative bg-gray-50">
          
          {/* Background image container */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={dentalChairImage} // Use the imported image variable
              alt="Dental clinic equipment"
              className="object-cover w-full h-full opacity-90"
            />
          </div>

          {/* Abstract shapes (to mimic the image's background flair) */}
          <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-blue-500 rounded-full opacity-30 blur-3xl transform rotate-45"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-cyan-400 rounded-full opacity-30 blur-3xl transform -rotate-45"></div>


          
        </div>
      </div>
    </div>
  );
};

export default Login;