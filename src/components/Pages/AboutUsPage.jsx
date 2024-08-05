import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
import abouts from '../../assets/abouts.jpg'

const AboutUsPage = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src={abouts}
          alt="About Us Banner"
          className="w-full object-cover"
          style={{ height: '500px', 
          minWidth: '100vw', 
          position: 'relative', 
          left: '50%', 
          transform: 'translateX(-50%)'
        }}
        />
        <div className="container mx-auto px-4 mt-2">
          <div className="max-w-3xl mx-auto leading-relaxed">
            <h2 className='text-2xl text-blue-950 font-semibold mb-2 text-center'>Who We Are</h2>
            <p className="mb-4 text-xl">
                We are a team of experienced professionals with a passion for making a positive
                difference in the lives of children in residential care settings.
                Our consultants bring together a wealth of knowledge and expertise in children’s homes,
                regulatory compliance, leadership development, and training.
            </p>
            <h2 className='text-2xl text-blue-950 font-semibold mt-4 mb-4 text-center'>Our Mission</h2>
            <p className="mb-4 text-xl">
                Our mission is clear: to ensure that every child in residential care receives the exceptional support they deserve.
                Through our consultancy services, we provide guidance and assistance to children’s homes, enabling them to meet regulatory
                requirements while prioritising the welfare of the children they support.
            </p>
            {/* <h2 className='text-2xl text-blue-950 font-semibold mt-4 mb-4 text-center'>Our Mission</h2>
            <p className="mb-4 text-xl">
                We envision a future where every child in residential care thrives in a nurturing environment. By working closely with care homes, 
                we aim to optimize their operations, ensuring peak efficiency, effectiveness, and compliance. 
                Our vision is one of positive outcomes and experiences for all involved, with children receiving 
                the care and support they need to flourish.
            </p> */}
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default AboutUsPage;
