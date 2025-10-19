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
//       localStorage.setItem("token", data.token);
//       alert("Signup successful!");
//       window.location.href = "/book";
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-50">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center text-blue-700">Signup</h2>

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded"
//         />

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
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Signup</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

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
          Signup
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
