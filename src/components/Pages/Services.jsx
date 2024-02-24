import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
import { Link } from 'react-router-dom';


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
          src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041866.jpg?w=740&t=st=1708797464~exp=1708798064~hmac=ace44481cda9392e555e77f990ff563b0d0d3b9459cf13354e4f4d424f8273fe"
          alt="About Us Banner"
          className="w-full object-cover"
          style={{ height: '550px', minWidth: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)'}}
        />
        <div className="container mx-auto px-4 mt-8">
            <h2 className='text-3xl mt-8 text-blue-950 text-center font-bold'>Our Services</h2>
            <p className="text-2xl font-[Open Sans] text-center mb-8 mt-8">
                Prevent Children Social Care Consultants offers a 
                professional service to the care sector all over the UK. 
                Our services are designed to ensure that you have peace of mind about 
                the level of compliance of your care service. <br />
            </p>
            <p className="text-2xl font-[Open Sans] text-center mb-8">
                Take a look at our services below, or for more information please <a href='/ContactUs' className='text-xl text-blue-800'>Contact us</a>
            </p>
            <div className="flex flex-wrap justify-center">
                <ServiceCard
                imageUrl="https://img.freepik.com/free-photo/top-view-career-guidance-items-judges_23-2149443469.jpg?w=740&t=st=1708807160~exp=1708807760~hmac=a531ced7cc38bf006d1ac260403b0715186798ad311e7108b2000a877f099c50"
                title="Regulation 44 Compliance"
                link="/service1" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/free-photo/company-representatives-reading-applicant-resume-hiring_1163-4684.jpg?w=740&t=st=1708807268~exp=1708807868~hmac=6bf0638e2327bfeeb69421ba121e0230acd390bb3d726eb458634df602ca8545"
                title="Recruitment Support"
                link="/service2" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/free-vector/tiny-people-signing-legal-principles-document-protection-privacy-data-control-employee-statement-with-text-protocol-flat-vector-illustration-regulation-procedure-concept_74855-26122.jpg?w=740&t=st=1708807556~exp=1708808156~hmac=835c8a3b8ebb4ac481552e4e69add6a4ef577135bab265b2eb4bb6ea8c341b3b"
                title="Compliance Assistance"
                link="/service3" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/premium-photo/st-petersburg-abstract-style-wallpaper-background_888846-2558.jpg?w=740"
                title="Ofsted Report Preparation"
                link="/service4" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/free-photo/angry-executive-pointing-wristwatch-scolding-employee-being-late_1163-4708.jpg?w=740&t=st=1708807841~exp=1708808441~hmac=33f18f4352e72b363aca498c2043a8934210c2ca108fb047181708d49c702452"
                title=" Disciplinary Procedures"
                link="/service3" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/free-photo/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime_146671-16288.jpg?w=740&t=st=1708808018~exp=1708808618~hmac=5764ad89639e7d2f1048609e2dd94391d07ed27f6f154a0f9f419265b1d0599a"
                title="Training and Development"
                link="/service4" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/premium-photo/sales-manager-giving-advice-application-form-document-considering-mortgage-loan-offer-car-house-insurance_1715-1394.jpg?w=740"
                title="Policy and Procedure Development"
                link="/service3" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/free-photo/business-people-meeting_53876-15178.jpg?w=740&t=st=1708808767~exp=1708809367~hmac=18c7f7867d49bdcac4dc2a4a0b02de452aed771ed567c335116a49d0110cfa52"
                title="Supervision of Care Home Managers"
                link="/service4" 
                />
                <ServiceCard
                imageUrl="https://img.freepik.com/free-photo/judges-gavel-book-wooden-table-law-justice-concept-background_1150-9095.jpg?w=740&t=st=1708806969~exp=1708807569~hmac=8872411847edc4a61b5c114e1ffe0fad018e8c10a0d53147bd02bd257591a4f6"
                title="Disciplinary Procedures"
                link="/service3" 
                />
                
        </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Services;
