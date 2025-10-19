import React from "react";
import { Link } from "react-router-dom";

const BookButton = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <Link
      to="/book"
      className="bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition"
    >
      Book Appointment
    </Link>
  ) : (
    <button
      disabled
      className="bg-gray-400 text-white px-6 py-3 rounded-xl cursor-not-allowed"
      title="Please login first"
    >
      Book Appointment
    </button>
  );
};

export default BookButton;
