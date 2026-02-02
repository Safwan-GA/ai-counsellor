import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

      {/* Hero section */}
      <div className="flex flex-col items-center text-center mt-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fadeUp">
          Study Abroad Made Simple
        </h2>
        <p className="text-gray-700 mb-6 max-w-xl animate-fadeUp">
          Get personalized AI guidance for universities, costs, and tasks.
        </p>
        <Link to="/signup" className="btn-primary animate-fadeUp">
          Get Started
        </Link>
      </div>
    </div>
  );
}
