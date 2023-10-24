import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} menukarisith.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
