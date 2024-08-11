import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
import comply from '../../assets/comply.jpg'





const TrainingDev = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src="https://img.freepik.com/free-photo/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime_146671-16288.jpg?w=740&t=st=1708808018~exp=1708808618~hmac=5764ad89639e7d2f1048609e2dd94391d07ed27f6f154a0f9f419265b1d0599a"
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
            <h2 className='text-2xl mt-8 text-blue-950 font-bold text-center'>Training and Development</h2>
            <p className="text-lg font-[Open Sans] mb-2 mt-4" >
            Prevent Children Social care consultancy offers training to meet the needs of staff teams and managers. Our training includes:
            </p>
            
            
        <ul className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
            <li className="text-lg font-[Open Sans] mb-2 mt-4">Safeguarding Children(Level 1 & 2)</li>
            <li className="text-lg font-[Open Sans] mb-2 mt-4">Child Sexual Exploitation (CSE)</li>
            <li className="text-lg font-[Open Sans] mb-2 mt-4">Child Criminal Exploitation (CCE) and County Lines</li>
            <li className="text-lg font-[Open Sans] mb-2 mt-4">Record Keeping and Report Writing</li>
            <li className="text-lg font-[Open Sans] mb-2 mt-4">Risk Assessment</li>
            <li className="text-lg font-[Open Sans] mb-2 mt-4">Key Working Skills</li>
            <li className="text-lg font-[Open Sans] mb-2 mt-4">Allegations Management</li>
        </ul>

        

            
            <div className="flex flex-wrap justify-center">

           </div>     
        </div>
      </div>
    </MainLayouts>
  );
};

export default TrainingDev;
