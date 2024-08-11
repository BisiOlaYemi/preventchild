import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';





const Policy = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src="https://img.freepik.com/premium-photo/sales-manager-giving-advice-application-form-document-considering-mortgage-loan-offer-car-house-insurance_1715-1394.jpg?w=740"
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
            <h2 className='text-2xl mt-8 text-blue-950 font-bold text-center'>Policy and Procedure Development</h2>
            <p className="text-lg font-[Open Sans] mb-2 mt-4" >
            Policy and procedures support in children’s homes is essential for maintaining a safe and effective environment for vulnerable children. 
            </p>
            
            <h3 className='mt-4 font-bold text-base text-xl'>Legal Compliance and Best Practices:</h3>
            
        <p className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
            Every residential children’s home needs to have policies and procedures in place to meet lawful requirements.
            These policies cover various aspects, including care, health and safety, safeguarding and more. 
            They reflect both the law and best practices relevant to running the home.
        </p>

        

            
            <div className="flex flex-wrap justify-center">

           </div>     
        </div>
      </div>
    </MainLayouts>
  );
};

export default Policy;
