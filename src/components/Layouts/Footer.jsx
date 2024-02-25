import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 border-b">Contact Us</h3>
          <p>Prevent Children Social Care Consultancy</p>
          <p>Lanwood House, 18 Lan Park Road</p>
          <p>Pontypridd CF37 2DH</p>
          <p>Telephone: 01400 000 / 0000000 000</p>
          <p>Email: info@preventchildrensocialcare.co.uk</p>

          <div className='mt-4 mb-4'>
          <Link to="/">
                <img src={logo} alt="preventchildrensocialcare" style={{ width: '200px', height: 'auto' }} />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 border-b">Our Services</h3>
          <p><Link to="/mock-inspections">Mock Inspections</Link></p>
          <p><Link to="/support-enforcement-action">Support with Enforcement Action</Link></p>
          <p><Link to="/action-plans">Action Plans</Link></p>
          <p><Link to="/inspection-report-responses">Inspection Report Responses</Link></p>
          <p><Link to="/compliance-audits">Compliance Audits</Link></p>
          <p><Link to="/training">Training</Link></p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4 border-b">Information</h3>
          <p><Link to="/about-us">About Us</Link></p>
          <p><Link to="/pricing">Pricing</Link></p>
          <p><Link to="/news">News</Link></p>
          <p><Link to="/client-testimonials">Client Testimonials</Link></p>
          <p><Link to="/privacy-policy">Privacy Policy</Link></p>
          <p><Link to="/cookie-policy">Cookie Policy</Link></p>
          <p><Link to="/accessibility-statement">Accessibility Statement</Link></p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>© {currentYear} Prevent Children Social Care Consultants Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
