import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Navbar */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-6 px-4 md:px-8 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-indigo-600">AI Counsellor</h1>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/universities" className="hover:text-indigo-600 transition">Universities</Link>
          <Link to="/tasks" className="hover:text-indigo-600 transition">Tasks</Link>
          <Link to="/counsellor" className="hover:text-indigo-600 transition">AI Counsellor</Link>
        </div>
      </nav>

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
