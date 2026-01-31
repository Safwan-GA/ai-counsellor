import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-24">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        Build Smarter. Ship Faster.
      </h1>
      <p className="mt-6 max-w-xl text-gray-300 text-lg">
        An AI-powered hackathon-grade platform built with MERN + Tailwind + AI.
      </p>
      <div className="mt-10 flex gap-6">
        <Link
          to="/login"
          className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/30"
        >
          Get Started
        </Link>
        <Link
          to="/dashboard"
          className="px-8 py-3 rounded-xl border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black transition"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  );
}
