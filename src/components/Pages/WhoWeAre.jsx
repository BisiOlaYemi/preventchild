import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:py-20 lg:px-8 border-t border-b border-blue-950 ">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden mt-0 animate-fade-in-up">
        <div className="p-6 md:w-2/3">
          <h2 className="text-3xl font-semibold text-blue-950 font-[Open Sans] mb-2">Key components of prevention efforts</h2>
          <p className="text-lg text-black font-[Verdana]">
          Providing accessible and comprehensive early intervention services for families at risk can help address issues before they escalate. This may include parenting classes, counseling, mental health support, and financial assistance.
          Offering parenting education and support programs can help parents develop the skills and resources they need to provide a nurturing and stable environment for their children. This might involve teaching positive discipline techniques,
          communication skills, and stress management strategies.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center items-center">
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
