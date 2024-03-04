import React, { useState } from 'react';
import MainLayout from '../Layouts/MainLayouts';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    comments: '',
    humanVerification: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://getform.io/f/jawljzqb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        
        alert('Form submitted successfully!');
      } else {
        
        alert('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };
  

  return (
    <MainLayout>
    <div className='mt-56 relative overflow-hidden'>
        <img
            src="https://img.freepik.com/premium-photo/contact-us-concept-wood-block-symbol-telephone-mail-address-desk_52701-83.jpg?w=826"
            alt="Contact Us Banner"
            className="w-full object-cover"
            style={{ height: '550px', minWidth: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)'}}
        />
         <div className='mt-10 sm:mt-24'>
        <h2 className='text-xl sm:text-2xl font-[Open Sans] mt-4 sm:mt-8 text-center sm:text-left pl-4 sm:pl-16'>Please complete Enquiry Form below</h2>
        <div className="flex flex-col sm:flex-row mt-4 sm:mt-8 pl-4 sm:pl-16">
          <form className="w-full sm:w-1/2 p-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-80 mb-4 p-2 border rounded"
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-80 mb-4 p-2 border rounded"
            >
              <option value="General Enquiry">General Enquiry</option>
              <option value="Services">Services</option>
              <option value="Training">Training</option>
            </select>
            <textarea
              name="comments"
              placeholder="Comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <div className="flex items-center mb-4">
              <label htmlFor="humanVerification" className="mr-2 font-[Open Sans] text-lg">
                Are you human?
              </label>
              <span className="ml-2 pr-2 font-[Open Sans] text-lg">3 + 1 = </span>
              <input
                type="text"
                name="humanVerification"
                value={formData.humanVerification}
                onChange={handleChange}
                className="w-16 p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-950 text-white px-4 py-2 rounded w-40"
            >
              Submit
            </button>
          </form>
          <div className="w-full sm:w-1/2 p-4 text-center sm:text-left font-[Open Sans] text-lg text-center">
            <p className="font-bold">Contact details</p>
            <p>Telephone: 07414899199 </p>
            <p>Email: info@preventchildrensocialcare.co.uk</p>
            <p>Website: www.preventchildrensocialcare.co.uk</p>
            <p className="font-bold mt-4">Address</p>
            <p>Prevent Children Social Care Consultancy</p>
            <p>Lanwood House, Pontypridd CF37 2DH</p>
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default Contact;
