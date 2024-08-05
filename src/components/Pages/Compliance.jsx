import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
import comply from '../../assets/comply.jpg'





const Compliance = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src={comply}
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
            <h2 className='text-2xl mt-8 text-blue-950 font-bold text-center'>Compliance</h2>
            <p className="text-lg font-[Open Sans] mb-2 mt-4" >
            Compliance support for children’s homes is crucial to ensure the safety, well-being,
            and legal adherence of vulnerable children and young people residing in children’s homes.
            </p>
            
            <h3 className='mt-4 font-bold text-base text-xl'>Statutory Guidance and Regulations:</h3>
          <ul className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
            <p className="text-lg font-[Open Sans] mb-2 mt-4">The Department for Education (DfE) provides comprehensive guidance for 
               those involved in the care of children and young people in residential children’s homes.
               This guidance accompanies the Children’s Homes (England) Regulations 2015 and includes quality standards. 
               It covers various aspects, including staffing, safeguarding, and operational procedures
            </p>
        </ul>

        <h3 className='mt-4 font-bold text-base text-xl'>Consultancy Support for Setting Up New Children’s Homes:</h3>
       
        <ul className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
            <p className="text-lg font-[Open Sans] mb-2 mt-4">If you are planning to open a new residential children’s home,
                Prevent Children Social Care consultancy  offer step-by-step assistance through the registration process.
                We also provide post-registration operational policies and procedures to prepare for your first Ofsted inspection.
            </p>
            <h3 className='mt-4 font-bold text-base text-xl'>Customizable Policies and Procedures:</h3>
            <ul className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
            <p className="text-lg font-[Open Sans] mb-2 mt-4">
                Prevent Children Social Care consultancy offers access to up-to-date children’s home policies and procedures. 
                These resources are designed to be Ofsted compliant and can be customised to meet your unique needs. 
                Having well defined policies ensures legal compliance and effective management of your children’s homes.
            </p>
        </ul>

            
        </ul>

            
            <div className="flex flex-wrap justify-center">

           </div>     
        </div>
      </div>
    </MainLayouts>
  );
};

export default Compliance;
