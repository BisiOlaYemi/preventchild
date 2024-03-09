import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white py-8 mt-24 pl-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 border-b">Contact Us</h3>
          <p>Prevent Children Social Care Consultancy</p>
          <p>Lanwood House, 18 Lan Park Road</p>
          <p>Pontypridd CF37 2DH</p>
          <p>Telephone: 07414899199 </p>
          <p>Email: info@preventchildrensocialcare.co.uk</p>

          <div className='mt-4 mb-4'>
          <Link to="/">
                <img src={logo} alt="preventchildrensocialcare" style={{ width: '200px', height: 'auto' }} />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 border-b">Our Services</h3>
          <p><Link to="/Regulation44">Regulation 44 Compliance</Link></p>
          <p><Link to="#">Recruitment Support</Link></p>
          <p><Link to="#">Compliance Assistance</Link></p>
          <p><Link to="#">Ofsted Report Preparation</Link></p>
          <p><Link to="#">Disciplinary Procedures</Link></p>
          <p><Link to="#">Training and Development</Link></p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 border-b">Information</h3>
          <p><Link to="/AboutUs">About Us</Link></p>
          <p><Link to="/PriceIndex">Pricing</Link></p>
          <p><Link to="#">News</Link></p>
          <p><Link to="#">Client Testimonials</Link></p>
          <p><Link to="#">Privacy Policy</Link></p>
          <p><Link to="#">Cookie Policy</Link></p>
          <p><Link to="#">Accessibility Statement</Link></p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>© {currentYear} Prevent Children Social Care Consultants Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
