import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
import prevt from '../../assets/prevt.jpg'





const Recruitment = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src={prevt}
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
            <h2 className='text-2xl mt-8 text-blue-950 font-bold text-center'>Recruitment Support</h2>
            <p className="text-lg font-[Open Sans] mb-2 mt-4" >
              Recruitment support is crucial for every successful business.
              Finding and retaining the right people can be challenging,
              but it’s essential for long-term success.
              Let’s explore how you can get the best recruitment support:
            </p>
            
            <h3 className='mt-4 font-bold text-base text-xl'>Understanding Your Needs:</h3>
          <ul className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
            <p>At Prevent Children Social Care Consultancy,
            we have  20 years’ experience, working in the care sector,
            we can support you and tailor our recruitment support to align closely with your organisation’s needs and culture.
            </p>
        </ul>

        <h3 className='mt-4 font-bold text-base text-xl'>Comprehensive Support:</h3>
        <p className='text-lg font-[Open Sans] mb-2 mt-4'>We offer end-to-end recruitment assistance, including:</p>
        <ul className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
            <li>Developing job specifications.
            <li>Conducting interviews.</li>
            <li>Assisting with onboarding successful candidates and beyond.</li>
            </li>
        </ul>

            
            <div className="flex flex-wrap justify-center">

           </div>     
        </div>
      </div>
    </MainLayouts>
  );
};

export default Recruitment;
