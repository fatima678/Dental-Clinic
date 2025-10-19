// import React, { useState } from "react";

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
//       window.location.href = "/book";
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-50">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border rounded"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>

//         <p className="text-center text-sm">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-blue-600 font-semibold">
//             Signup
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      // Redirect to home page (full site now accessible)
      window.location.href = "/";
    } else {
      alert(data.message || "Invalid credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 font-semibold">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
