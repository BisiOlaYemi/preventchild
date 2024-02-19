import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
    console.log("NavOpen value:", navOpen);
  };
  

  return (
    <div className="relative z-50">
      <div className="bg-blue-950 flex justify-end items-center px-4 py-2">
        <p className="text-white text-sm lg:text-lg font-[Open Sans]">
          Contact Us on 01443 400307 | info@preventchildrensocialcare.co.uk
        </p>
        <HiMenuAlt3
          onClick={handleNavToggle}
          className="text-white cursor-pointer lg:hidden"
          size={35}
        />
      </div>
      <div className="absolute top-0 left-0 w-full p-4 ">
            <div className="flex items-center justify-between mt-16 lg:pl-32">
            <Link to="/">
                <img src={logo} alt="preventchildrensocialcare" style={{ width: '300px', height: 'auto' }} />
            </Link>
            <div className="ml-4 lg:ml-8 w-full lg:w-auto">
                <p className="text-right lg:text-left lg:pr-24 lg:text-xl text-blue-950 lg:font-semibold">
                Effective prevention strategies aim to address <br /> the underlying factors that can lead to family crises
                </p>
            </div>
        </div>
        <div className={`mt-4 lg:mt-8 lg:flex lg:justify-center ${navOpen ? '' : 'hidden lg:flex'}`}>
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
