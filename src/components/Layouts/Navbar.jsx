import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="relative z-50">
          <div className="bg-blue-950 flex justify-between pr-16 relative">
      <p className="text-white mt-0 lg:text-lg mb-2 font-[Open Sans]">
        Contact Us on 01400 00000 | info@preventchildrensocialcare.co.uk
      </p>
      <HiMenuAlt3
        onClick={handleNavToggle}
        className="z-20 text-white mt-2 font-bold text-3xl cursor-pointer lg:hidden absolute top-0 right-0"
        size={48}
      />
    </div>
      <div className="absolute top-0 left-0 w-full p-4">
            <div className="flex items-center justify-between mt-16 lg:pl-32">
            <Link to="/">
                <img src={logo} alt="preventchildrensocialcare" style={{ width: '300px', height: 'auto' }} />
            </Link>
            <div className="ml-4 lg:ml-8 w-full lg:w-auto">
                <p className="text-right lg:text-left lg:pr-24 lg:text-xl text-blue-950 lg:font-semibold">
                Safeguarding the well-being and happiness of children across the UK
                </p>
            </div>
            
        </div>
        <div className={`mt-4 lg:mt-8 lg:flex lg:justify-center ${navOpen ? 'hidden md:flex' : 'hidden lg:flex'}`}>
          <ul className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-16 lg:flex-row lg:items-center">
            <li className="font-[Open Sans] text-xl text-black">
              <Link to="/" className="hover:text-gray-800 hover:underline">
                Home
              </Link>
            </li>
            <li className="font-[Open Sans] text-xl text-black">
              <Link to="/Aboutus" className="hover:text-gray-800 hover:underline">
                About us
              </Link>
            </li>
            <li className="font-[Open Sans] text-xl text-black">
              <Link to="/services" className="hover:text-gray-800 hover:underline">
                Services
              </Link>
            </li>
            <li className="font-[Open Sans] text-xl text-black">
              <Link to="/services" className="hover:text-gray-800 hover:underline">
                Training
              </Link>
            </li>
            <li className="font-[Open Sans] text-xl text-black">
              <Link to="/services" className="hover:text-gray-800 hover:underline">
                Pricing
              </Link>
            </li>
            <li className="font-[Open Sans] text-xl text-black">
              <Link to="/services" className="hover:text-gray-800 hover:underline">
                Testimonials
              </Link>
            </li>
            <li className="font-[Open Sans] text-xl text-black">
              <Link to="/contact" className="hover:text-gray-800 hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {navOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <ul className="flex flex-col space-y-4">
            <li className="font-semibold text-xl text-white">
              <Link to="/" className="hover:text-green-800">
                Home
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/AboutUs" className="hover:text-green-800">
                About us
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/services" className="hover:text-green-800">
                Services
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/contact" className="hover:text-green-800">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
