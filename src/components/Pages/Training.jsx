import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
// import { Link } from 'react-router-dom';



const Training = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src="https://img.freepik.com/premium-photo/close-up-ux-developer-ui-designer-brainstorming-about-mobile-app-interface-wireframe-design-table-with-customer-breif-color-code-modern-officecreative-digital-development-agency_49553-3114.jpg?w=996"
          alt="About Us Banner"
          className="w-full object-cover"
          style={{ height: '550px', minWidth: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)'}}
        />
        <div className="container mx-auto px-4 mt-8">
            <h2 className='text-2xl mt-8 text-blue-950 font-bold'>Training</h2>
            <p className="text-xl font-[Open Sans] mb-2 mt-4" >We offer a wide range of health and social care courses, these range from a few hours up to 10 days over a few months. All of our courses are:</p>
            <ul className="list-disc text-lg font-[Open Sans] mb-2 mt-2">
                <li>Based on current legislation and best practice</li>
                <li>Delivered by a trainer with extensive experience of the subject</li>
                <li>Engaging, fun and thought provoking</li>
                <li>Designed to; improve knowledge, increase confidence, develop competence</li>
                <li>Delivered by a trainer with a proper training qualification e.g. PGCE</li>
            </ul>
        
          <p className="text-lg font-[Open Sans] mb-2 mt-4">We are able to deliver both face to face and virtual courses.  Face to face courses take into account all
            current health and safety requirements. Virtual courses are delivered via Zoom.</p>
            
            <div className="flex flex-wrap justify-center">

           </div>     
        </div>
      </div>
    </MainLayouts>
  );
};

export default Training;
