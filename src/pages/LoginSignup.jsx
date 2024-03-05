import React from 'react';

const LoginSignup = () => {
  return (
    <div className="bg-gray-200 text-white flex flex-col justify-center items-center">
      {/* Main Content */}
      <div className="m-7 flex flex-col items-center justify-center py-4 px-2 w-full"> {/* Decreased padding */}
        <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-3xl text-center mb-4">Sign Up</h1>
          <div className="mb-4">
            <input className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-2" type="text" placeholder="Your Name" />
            <input className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-2" type="email" placeholder="Email Address" />
            <input className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-2" type="password" placeholder="Password" />
          </div>
          <button className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Continue</button>
          <p className="mt-4 text-sm text-gray-300">Already have an account? <span className="text-white">Login here</span></p>
          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" id="agree" />
            <p className="text-sm text-gray-300">By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
