import React, { useState } from 'react';

const LoginPage = () => {
  // State to manage which form is visible: 'login' or 'signup'
  const [isLoginView, setIsLoginView] = useState(true);

  // Function to switch the view
  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700 p-4">
      {/* The main card container */}
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h1></h1>
        {/* === FORM HEADER === */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          <h3 className='text-blue-600 font-serif font-semibold'>PLAN YOUR TRIP</h3>
          {isLoginView ? ' Login' : 'Signup'}
        </h2>

        {/* === LOGIN FORM VIEW === */}
        {isLoginView ? (
          <form className="flex flex-col space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-sm text-right">
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Login
            </button>

            {/* Switch to Signup Link */}
            <div className="text-center text-sm mt-4">
              Don't have an account?{' '}
              <span
                className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                onClick={toggleView}
              >
                Signup
              </span>
            </div>
          </form>
        ) : (
          /* === SIGNUP FORM VIEW === */
          <form className="flex flex-col space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Create Password Input */}
            <div>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Signup
            </button>

            {/* Switch to Login Link */}
            <div className="text-center text-sm mt-4">
              Already have an account?{' '}
              <span
                className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
                onClick={toggleView}
              >
                Login
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;