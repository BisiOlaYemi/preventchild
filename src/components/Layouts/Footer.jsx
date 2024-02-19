import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white mt-24">
      <div className="absolute inset-0 opacity-80"></div>
      <div className="relative container mx-auto py-10 mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/Aboutus" className="hover:text-gray-400">
            About Us
          </Link>
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>
        </div>
        <hr className="border-t border-gray-400 my-4" />
        <div className="flex justify-center items-center space-x-4 mt-6">
          <Link to="#" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-400">
         &copy; Prevent Children Social Care | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;