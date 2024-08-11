import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
import REGULATION44 from '../../assets/REGULATION44.jpg'




const Regulation44 = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src={REGULATION44}
          alt="Banner"
          className="w-full object-cover"
          style={{ height: '550px', 
          minWidth: '100vw', 
          position: 'relative', 
          left: '50%', 
          transform: 'translateX(-50%)'
        }}
        />
        <div className="container mx-auto px-4 mt-8">
            <h2 className='text-2xl mt-8 text-blue-950 font-bold text-center'>Regulation 44</h2>
            <p className="text-lg font-[Open Sans] mb-2 mt-4" >Independent Visits for providers of Children’s Homes.
            Our Regulation 44 visitor is an independent person, who will visit your home on a monthly basis, to write a report about how the home is 
            meeting the needs of the young people placed. This will be judged by the 9 Quality standards and the children’s homes regulations 2015.
            </p>
        
          <p className="text-lg font-[Open Sans] mb-2 mt-4">A report will be written outlining the positives and areas for improvement. 
          The report will be sent to you for approval and comment, and then sent directly to Ofsted. Our aim is to identify areas for improvement and support the manager,
          so when Ofsted arrives, you are in the best position to achieve Good or Outstanding.</p>
            
            <div className="flex flex-wrap justify-center">

           </div>     
        </div>
      </div>
    </MainLayouts>
  );
};

export default Regulation44;
