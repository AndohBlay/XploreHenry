import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle smooth route transitions
  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-sm fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            <h1 className="text-2xl font-bold text-blue-600">HenryXplore</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <button
              onClick={() => handleNavigate("/")}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Packages
            </button>
            <button
              onClick={() => handleNavigate("/")}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Popular Destinations
            </button>
            <button
              onClick={() => handleNavigate("/about")}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </button>
          </nav>

          {/* Plan Your Trip Button */}
          <div>
            <Link
              to="/login"
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
