import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & close icons
import { useAuth } from "../../hooks/useAuth";
import LogoutButton from "../auth/LogoutButton"; // our logout component

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth(); // get current user

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Universities", path: "/universities" },
    { name: "Tasks", path: "/tasks" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            AI Counsellor
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg border border-transparent hover:border-indigo-500 hover:bg-indigo-50 transition ${
                  location.pathname === item.path
                    ? "border-indigo-500 bg-indigo-100 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Auth Buttons */}
            {user ? (
              <>
                <span className="mr-4">Hi, {user.name}</span>
                <LogoutButton />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg border border-transparent hover:border-indigo-500 hover:bg-indigo-50 transition ${
                  location.pathname === item.path
                    ? "border-indigo-500 bg-indigo-100 font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {user ? (
              <>
                <span className="px-4 py-2">Hi, {user.name}</span>
                <LogoutButton />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
