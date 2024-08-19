import React from 'react';

const NewsLetter = () => {
  return (

    
    <div className="bg- py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center ">
          Get Exclusive Offers in Your Email
        </h1>
        <p className="text-gray-600 text-2xl mb-6 text-center">
          Subscribe to our newsletter and stay updated
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[burlywood]"
          />
          <button className="w-full sm:w-auto mt-4 sm:mt-0 px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-[burlywood]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
