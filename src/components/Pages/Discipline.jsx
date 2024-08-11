import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
import DISCIPLINARYPROCEDURE from '../../assets/DISCIPLINARYPROCEDURE.jpg'





const Discipline = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src={DISCIPLINARYPROCEDURE}
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
            <h2 className='text-2xl mt-8 text-blue-950 font-bold text-center'>Disciplinary Support</h2>
            <p className="text-lg font-[Open Sans] mb-2 mt-4" >
            Disciplinary support is crucial in maintaining a fair and effective workplace. 
            </p>
            
            
        <p className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
          Disciplinary procedures are a structured way for employers to address issues related to an employee’s work, conduct, or absence.
          Before formal disciplinary action or dismissal, employers may attempt informal resolution. However, they can proceed directly to formal procedures if necessary
            
        </p>

        <h3 className='mt-4 font-bold text-base text-xl'>Importance:</h3>

        <ul className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
            <li>Corrects behaviours or performance.</li>
            <li>Ensures clear understanding of expected standards.</li>   
            <li>Demonstrates commitment to addressing issues within the team.</li>           
            
        </ul>
        
        <p className="pl-2 list-disc text-lg font-[Open Sans] mb-2 mt-2">
        Remember, effective disciplinary procedures contribute to a positive work environment and maintain standards!
        </p>         

            
        <div className="flex flex-wrap justify-center">

        </div>     
        </div>
      </div>
    </MainLayouts>
  );
};

export default Discipline;
