import React from 'react';
import MainLayouts from '../Layouts/MainLayouts';
import { Link } from 'react-router-dom';

const Pricing = ({ imageUrl, title, description, price, link }) => {
  return (
    <Link
      to={link}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 rounded overflow-hidden mx-4 my-8 transform hover:scale-105 transition duration-300 ease-in-out"
    >
      <img className="w-full h-auto" src={imageUrl} alt={title} />
      <div className="bg-blue-950 px-6 py-4">
        <div className="font-bold text-white text-lg mb-2">{title}</div>
        {price && <p className="text-white text-lg mb-2 mt-8"> £{price}</p>}
        <p className="text-white text-lg">{description}</p>
      </div>
    </Link>
  );
};

const PriceIndex = () => {
  return (
    <MainLayouts>
      <div className="mt-56 relative overflow-hidden">
        <img
          src="https://img.freepik.com/premium-photo/price-is-going-down-up-cubes-form-word-price-down-up-concept-business_556258-3943.jpg?w=740"
          alt="About Us Banner"
          className="w-full object-cover"
          style={{
            height: '550px',
            minWidth: '100vw',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <div className="container mx-auto px-4 mt-8">
          <h2 className="text-3xl mt-8 text-blue-950 font-bold">
            What does it cost?
          </h2>
          <p className="text-xl font-[Open Sans] mb-8 mt-8">
          We believe that we offer superb value for money and as such offer completely transparent pricing. < br /> 
          Prevention is better than the substantial cash drain that special measures can cause.
          </p>
          <div className="flex flex-wrap justify-center">
            <Pricing
              imageUrl="https://img.freepik.com/free-photo/top-view-career-guidance-items-judges_23-2149443469.jpg?w=740&t=st=1708807160~exp=1708807760~hmac=a531ced7cc38bf006d1ac260403b0715186798ad311e7108b2000a877f099c50"
              title="Regulation 44"
              price="300"
              link="/service1"
            />
            <Pricing
              imageUrl="https://img.freepik.com/free-photo/company-representatives-reading-applicant-resume-hiring_1163-4684.jpg?w=740&t=st=1708807268~exp=1708807868~hmac=6bf0638e2327bfeeb69421ba121e0230acd390bb3d726eb458634df602ca8545"
              title="Recruitment Support"
              price="35 /hour"
              link="/service2"
            />
            <Pricing
              imageUrl="https://img.freepik.com/free-vector/tiny-people-signing-legal-principles-document-protection-privacy-data-control-employee-statement-with-text-protocol-flat-vector-illustration-regulation-procedure-concept_74855-26122.jpg?w=740&t=st=1708807556~exp=1708808156~hmac=835c8a3b8ebb4ac481552e4e69add6a4ef577135bab265b2eb4bb6ea8c341b3b"
              title="Compliance Assistance"
              price="45"
              link="/service3"
            />
            <Pricing
              imageUrl="https://img.freepik.com/premium-photo/st-petersburg-abstract-style-wallpaper-background_888846-2558.jpg?w=740"
              title="Report Preparation"
              price=""
              link="/service4"
            />
          </div>
          <p className="text-xl font-[Open Sans] mb-8 mt-8">All costs are plus VAT. For more information about our services, please <a href='/Services' className='text-lg font-semibold text-blue-800'>Click Here</a> or <a href='/ContactUs' className='text-lg font-semibold text-blue-800'>Contact us</a></p>
        </div>
      </div>
    </MainLayouts>
  );
};

export default PriceIndex;
