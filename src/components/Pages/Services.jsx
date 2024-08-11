import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
import { Link } from 'react-router-dom';
import OURSERVICES from '../../assets/OURSERVICES.jpg'
import COMPLAINTASSISTANCE from '../../assets/COMPLAINTASSISTANCE.jpg'
import DISCIPLINARYPROCEDURE from '../../assets/DISCIPLINARYPROCEDURE.jpg'
import RECRUITMENTSUPPORT from '../../assets/RECRUITMENTSUPPORT.jpg'
import REGULATION44 from '../../assets/REGULATION44.jpg'

const ServiceCard = ({ imageUrl, title, description, link }) => {
    return (
      <Link to={link} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded overflow-hidden mx-4 my-8 transform hover:scale-105 transition duration-300 ease-in-out">
        <img className="w-full h-auto" src={imageUrl} alt={title} />
        <div className=" bg-blue-950 px-6 py-4">
          <div className="font-bold text-white text-lg mb-2">{title}</div>
          <p className="text-white text-lg">{description}</p>
        </div>
      </Link>
    );
  };

const Services = () => {
  return (
    <MainLayouts>
      <div className='mt-56 relative overflow-hidden'>
        <img
          src={OURSERVICES}
          alt="About Us Banner"
          className="w-full object-cover"
          style={{ height: '550px', 
          minWidth: '100vw', 
          position: 'relative', 
          left: '50%', 
          transform: 'translateX(-50%)'
        }}
        />
        <div className="container mx-auto px-4 mt-8">
            <h2 className='text-3xl mt-8 text-blue-950 text-center font-bold'>Our Services</h2>
            <p className="text-xl font-[Open Sans]  mb-8 mt-8">
                  Prevent Children Social Care Consultancy offers a professional service to the Childrens home sector.
                  Our services are designed to ensure that you have peace of mind about the level of compliance of your children’s home. <br />
            </p>
            <p className="text-xl font-[Open Sans] text-center mb-8">
                Take a look at our services below, or for more information please <a href='/Contact' className='text-lg font-semibold text-blue-800'>Contact us</a>
            </p>
            <div className="flex flex-wrap justify-center">
                <ServiceCard
                imageUrl={REGULATION44}
                title="Regulation 44 Visit"
                link="/Regulation44" 
                />
                <ServiceCard
                imageUrl={RECRUITMENTSUPPORT}
                title="Recruitment Support"
                link="/Recruitment" 
                />
                <ServiceCard
                imageUrl={COMPLAINTASSISTANCE}
                title="Compliance Assistance"
                link="/Compliance" 
                />
                {/* <ServiceCard
                imageUrl="https://img.freepik.com/premium-photo/st-petersburg-abstract-style-wallpaper-background_888846-2558.jpg?w=740"
                title="Ofsted Report Preparation"
                link="#" 
                /> */}
                <ServiceCard
                imageUrl={DISCIPLINARYPROCEDURE}
                title=" Disciplinary Procedures"
                link="/Discipline" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/free-photo/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime_146671-16288.jpg?w=740&t=st=1708808018~exp=1708808618~hmac=5764ad89639e7d2f1048609e2dd94391d07ed27f6f154a0f9f419265b1d0599a"
                title="Training and Development"
                link="/TrainingDev" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/premium-photo/sales-manager-giving-advice-application-form-document-considering-mortgage-loan-offer-car-house-insurance_1715-1394.jpg?w=740"
                title="Policy & Procedure Development"
                link="/Policy" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/free-photo/business-people-meeting_53876-15178.jpg?w=740&t=st=1708808767~exp=1708809367~hmac=18c7f7867d49bdcac4dc2a4a0b02de452aed771ed567c335116a49d0110cfa52"
                title="Supervision of Care Home Staffs"
                link="/Staffing" 
                />
                {/* <ServiceCard
                imageUrl="https://img.freepik.com/free-photo/judges-gavel-book-wooden-table-law-justice-concept-background_1150-9095.jpg?w=740&t=st=1708806969~exp=1708807569~hmac=8872411847edc4a61b5c114e1ffe0fad018e8c10a0d53147bd02bd257591a4f6"
                title="Disciplinary Procedures"
                link="#" 
                /> */}
                
        </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Services;
