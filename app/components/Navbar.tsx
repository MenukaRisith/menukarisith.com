import React from 'react';
import { Link, useLocation } from '@remix-run/react';

const Navbar: React.FC = () => {
  const route = useLocation();

  return (
    <nav className="p-4 mx-auto">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
              .font-roboto {
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
              }
            `}
          </style>
          <div className="text-2xl font-semibold text-gray-800 font-roboto text-center">
            menukarisith.com
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className={`text-gray-800 font-roboto p-2 rounded ${route.pathname === '/' ? 'bg-gray-300' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`text-gray-800 font-roboto p-2 rounded ${route.pathname === '/about' ? 'bg-gray-300' : ''}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`text-gray-800 font-roboto p-2 rounded ${route.pathname === '/projects' ? 'bg-gray-300' : ''}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`text-gray-800 font-roboto p-2 rounded ${route.pathname === '/contact' ? 'bg-gray-300' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
