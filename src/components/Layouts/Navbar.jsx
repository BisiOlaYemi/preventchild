import React, { useState } from 'react';
import { CgMenuRound } from "react-icons/cg";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="relative z-50">
          <div className="bg-blue-950 flex lg:justify-end pr-16 relative">
      <p className="text-white ml-2 mt-0 lg:text-lg mb-2 font-[Open Sans] lg:text-sm text-sm">
        Contact Us on 07414899199 | info@preventchildrensocialcare.co.uk
      </p>
      <CgMenuRound
        onClick={handleNavToggle}
        className="z-20 text-white font-bold text-3xl pr-2 cursor-pointer lg:hidden absolute top-0 right-0"
        size={45}
      />
    </div>
      <div className="absolute top-0 left-0 w-full p-4">
            <div className="flex items-center justify-between mt-16 lg:pl-32">
            <Link to="/">
                <img src={logo} alt="preventchildrensocialcare" style={{ width: '100px', height: 'auto' }} />
            </Link>
            <div className="ml-4 lg:ml-8 w-full lg:w-auto">
                <p className="font-[Open Sans] text-right lg:text-left lg:pr-24 lg:text-lg text-blue-950 lg:font-semibold bg-gradient-to-r from-amber-500 to-purple-800 text-transparent bg-clip-text animate-fade-out-up">
                Safeguarding the well-being and happiness of children.
                </p>
            </div>
            
        </div>
        <div className={`mt-4 lg:mt-8 lg:flex lg:justify-center ${navOpen ? 'hidden md:flex' : 'hidden lg:flex'}`}>
          <ul className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-16 lg:flex-row lg:items-center">
            <li className="font-[Open Sans] text-lg text-black">
              <Link to="/" className="hover:text-gray-800 hover:underline">
                Home
              </Link>
            </li>
            <li className="font-[Open Sans] text-lg text-black">
              <Link to="/Aboutus" className="hover:text-gray-800 hover:underline">
                About us
              </Link>
            </li>
            <li className="font-[Open Sans] text-lg text-black">
              <Link to="/Services" className="hover:text-gray-800 hover:underline">
                Services
              </Link>
            </li>
            <li className="font-[Open Sans] text-lg text-black">
              <Link to="/Training" className="hover:text-gray-800 hover:underline">
                Training
              </Link>
            </li>
            <li className="font-[Open Sans] text-lg text-black">
              <Link to="/PriceIndex" className="hover:text-gray-800 hover:underline">
                Pricing
              </Link>
            </li>
            <li className="font-[Open Sans] text-lg text-black">
              <Link to="/#" className="hover:text-gray-800 hover:underline">
                Testimonials
              </Link>
            </li>
            <li className="font-[Open Sans] text-lg text-black">
              <Link to="/Contact" className="hover:text-gray-800 hover:underline">
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
              <Link to="/" className="hover:text-blue-950">
                Home
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/AboutUs" className="hover:text-blue-950">
                About us
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/Services" className="hover:text-blue-950">
                Services
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/Training" className="hover:text-blue-950">
                Training
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/PriceIndex" className="hover:text-blue-950">
                Pricing
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/#" className="hover:text-blue-950">
                Testimonials
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/Contact" className="hover:text-blue-950">
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
