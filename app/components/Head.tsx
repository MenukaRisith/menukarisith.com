import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="text-center mt-20 pb-0">
        <div className="relative inline-block">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white">
            <img
              src="https://res.cloudinary.com/dyjaqv0t2/image/upload/v1697383449/menukarisith.compro_uhsawa.jpg"
              alt="MenukaRisith"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="mt-2 pt-5">
          <p className="text-3xl font-bold text-gray-800 font-roboto-condensed">Hello, I'm Menuka Risith.</p>
          <p className="text-lg font-medium text-gray-600 font-roboto pt-5">Entrepreneur, Programmer, and Student in Sri Lanka</p>
          <p className="text-base text-gray-600 font-roboto">
            Founder of Eleventastic Solutions || trying to expand the IT industry in Sri Lanka
          </p>
          <div className="mt-6">
            <Link to="/about">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-2 px-4 rounded mr-4">About Menuka</button>
            </Link>
            <Link to="/projects">
            <button className="bg-white text-black font-medium py-2 px-4 rounded border border-gray-400 mb-0">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
