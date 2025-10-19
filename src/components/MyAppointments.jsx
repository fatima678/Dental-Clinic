// import React, { useEffect, useState } from "react";

// const MyAppointments = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please login first!");
//       window.location.href = "/login";
//       return;
//     }

//     fetch("http://localhost:5000/api/appointments/my", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => setAppointments(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">My Appointments</h2>

//       {appointments.length === 0 ? (
//         <p>No appointments found.</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-200">
//           <thead className="bg-blue-100">
//             <tr>
//               <th className="border p-2">Service</th>
//               <th className="border p-2">Date</th>
//               <th className="border p-2">Time</th>
//               <th className="border p-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((a) => (
//               <tr key={a._id}>
//                 <td className="border p-2">{a.service}</td>
//                 <td className="border p-2">{a.date}</td>
//                 <td className="border p-2">{a.time}</td>
//                 <td
//                   className={`border p-2 capitalize ${
//                     a.status === "accepted"
//                       ? "text-green-600"
//                       : a.status === "rejected"
//                       ? "text-red-600"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   {a.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MyAppointments;


import React, { useEffect, useState } from "react";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      window.location.href = "/login";
      return;
    }

    fetch("http://localhost:5000/api/appointments/my", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch appointments");
        return res.json();
      })
      .then((data) => {
        // Ensure data is an array
        if (Array.isArray(data)) {
          setAppointments(data);
        } else {
          setAppointments([]);
          setError(data.error || "No appointments found.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong while fetching appointments.");
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">My Appointments</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {appointments.length === 0 && !error ? (
        <p>No appointments found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-2">Service</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a._id}>
                <td className="border p-2">{a.service}</td>
                <td className="border p-2">{a.date}</td>
                <td className="border p-2">{a.time}</td>
                <td
                  className={`border p-2 capitalize ${
                    a.status === "accepted"
                      ? "text-green-600"
                      : a.status === "rejected"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {a.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyAppointments;
