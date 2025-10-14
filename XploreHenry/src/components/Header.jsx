import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">HenryXplore</h1>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Packages</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Popular Destinations</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About Us</a>
          </nav>
          <div>
            <Link 
              to="/login"
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;