import React from 'react';

const LoginForm = ({ toggleView }) => {
  return (
    <form className="flex flex-col space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Login</h2>

      {/* Email Input */}
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        />
      </div>

      {/* Password Input */}
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        />
      </div>

      {/* Forgot Password Link */}
      <div className="text-sm text-right">
        <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
          Forgot password?
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-200 shadow-md"
      >
        Login
      </button>

      {/* Don't have an account? Signup link */}
      <div className="text-center text-sm">
        Don't have an account?{' '}
        <span
          className="text-teal-600 hover:text-teal-700 font-medium cursor-pointer"
          onClick={toggleView}
        >
          Signup
        </span>
      </div>
    </form>
  );
};

export default LoginForm;