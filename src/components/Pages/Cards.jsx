import React from 'react';
import { Link } from 'react-router-dom';
import A1 from '../../assets/A1.png';
import A2 from '../../assets/A2.png';
import A3 from '../../assets/A3.png';
import A4 from '../../assets/A4.png';
import A5 from '../../assets/A5.png';
import A6 from '../../assets/A6.png';

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


const Cards = () => {
  return (
    <div className="container mx-auto">
      
      <p className="text-xl font-[Open Sans] text-center mb-8 mt-8">
          Supporting families to build resilience and strengthen their relationships < br />
          can help prevent crises that may lead to the involvement of social services.
      </p>
      <p className="text-xl font-[Open Sans] text-center mb-8">
          The need for children's social care involves addressing various factors that can contribute to family stress
      </p>
      <div className="flex flex-wrap justify-center">
        <ServiceCard
          imageUrl={A1}
          title="Child-Centric Approach"
          
          link="/service1" 
        />
        <ServiceCard
          imageUrl={A2}
          title="Intervention  Services"
          
          link="/service2" 
        />
        <ServiceCard
          imageUrl={A3}
          title="Family Strengthening Programs"
          
          link="/service3" 
        />
        <ServiceCard
          imageUrl={A4}
          title="Safe Housing and Community "
          
          link="/service4" 
        />
        <ServiceCard
          imageUrl={A5}
          title=" Multi-Agency Approach"
          
          link="/service3" 
        />
        <ServiceCard
          imageUrl={A6}
          title="Trauma-informed Approach"
          
          link="/service4" 
        />
      </div>
    </div>
  );
};

export default Cards;
