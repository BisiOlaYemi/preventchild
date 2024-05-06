import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
// import { Link } from 'react-router-dom';
import TRAINING from '../../assets/TRAINING.jpg'



const Training = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src={TRAINING}
          alt="About Us Banner"
          className="w-full object-cover"
          style={{ height: '550px', minWidth: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)'}}
        />
        <div className="container mx-auto px-4 mt-8">
            <h2 className='text-2xl mt-8 text-blue-950 font-bold'>Training & Development</h2>
            <p className="text-lg font-[Open Sans] mb-2 mt-4" >Prevent Children Social care consultancy offers training to meet the needs of staff teams and managers. Our training includes:</p>
            <ul className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
                <li>Safeguarding Children(Level 1 & 2)</li>
                <li>Child Sexual Exploitation (CSE)</li>
                <li>Child Criminal Exploitation (CCE) and County Lines</li>
                <li>Record Keeping and Report Writing</li>
                <li>Risk Assessment</li>
                <li>Key Working Skills</li>
                <li>Allegations Management</li>
                <li>Staffs' supervision</li>
            </ul>
        
          <p className="text-lg font-[Open Sans] mb-2 mt-4">We are able to deliver face-to-face training. Our Face-to-face courses take into account all
            current health and safety requirements.</p>
            
            <div className="flex flex-wrap justify-center">

           </div>     
        </div>
      </div>
    </MainLayouts>
  );
};

export default Training;
