import React from 'react';
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


const Cards = () => {
  return (
    <div className="container mx-auto">
      
      <p className="text-2xl font-[Open Sans] text-center mb-8 mt-8">
      Supporting families to build resilience and strengthen their relationships< br />
      can help prevent crises that may lead to the involvement of social services.
      </p>
      <p className="text-2xl font-[Open Sans] text-center mb-8">
      The need for children's social care involves addressing various factors that can contribute to family stress
      </p>
      <div className="flex flex-wrap justify-center">
        <ServiceCard
          imageUrl="https://img.freepik.com/free-photo/high-angle-woman-girls-home_23-2150275602.jpg?size=626&ext=jpg&ga=GA1.1.391507465.1706553752&semt=ais"
          title="Child-Centric Approach"
          
          link="/service1" 
        />
        <ServiceCard
          imageUrl="https://img.freepik.com/free-photo/teacher-putting-her-hands-together-with-her-students-game_23-2148633397.jpg?size=626&ext=jpg&ga=GA1.2.391507465.1706553752&semt=ais"
          title="Intervention  Services"
          
          link="/service2" 
        />
        <ServiceCard
          imageUrl="https://img.freepik.com/premium-photo/sensitive-albino-child-girl-hugs-african-boy-isolated_183219-2072.jpg?size=626&ext=jpg&ga=GA1.2.391507465.1706553752&semt=ais"
          title="Family Strengthening Programs"
          
          link="/service3" 
        />
        <ServiceCard
          imageUrl="https://img.freepik.com/premium-photo/family-staying-hotel_53876-48206.jpg?size=626&ext=jpg&ga=GA1.2.391507465.1706553752&semt=ais"
          title="Safe Housing and Community "
          
          link="/service4" 
        />
        <ServiceCard
          imageUrl="https://img.freepik.com/free-photo/view-young-children-suffering-from-abuse_23-2150248246.jpg?size=626&ext=jpg&ga=GA1.2.391507465.1706553752&semt=ais"
          title=" Multi-Agency Approach"
          
          link="/service3" 
        />
        <ServiceCard
          imageUrl="https://img.freepik.com/premium-photo/friends-teasing-boy_107420-24710.jpg?size=626&ext=jpg&ga=GA1.2.391507465.1706553752&semt=ais"
          title="Trauma-informed Approach"
          
          link="/service4" 
        />
      </div>
    </div>
  );
};

export default Cards;
