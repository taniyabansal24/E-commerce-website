import React from 'react';

const NewsLetter = () => {
  return (
    <div className="newsletter md:w-4/5 lg:w-3/5 xl:w-2/3 h-auto flex flex-col items-center justify-center mx-auto px-6 md:px-28 mb-12 lg:mb-24 bg-gradient-to-b from-pink-200 to-green-200 gap-8 rounded-lg pt-5">
      <h1 className="text-gray-700 text-3xl md:text-5xl font-semibold text-center">Get Exclusive Offers On Your Email</h1>
      <p className="text-gray-700 text-base md:text-lg text-center">Subscribe to our newsletter and stay updated</p>
      <div className="flex flex-col md:flex-row items-center justify-center bg-white w-full md:w-96 h-auto rounded-full border border-gray-300 mb-5">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-full md:w-60 ml-4 md:ml-0 mb-4 md:mb-0 px-4 py-2 focus:outline-none text-gray-600 font-medium text-base rounded-full"
        />
        <button className="w-full md:w-32 h-12 md:h-full rounded-full bg-black text-white text-base md:text-lg font-semibold cursor-pointer mb-4 md:mb-0">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
