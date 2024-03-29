import React from 'react';
import TestimonialSlider from '../TestimonialSlider';

const Testimonial = () => {
  const testimonials = [
    {
      text: "I'm really impressed with the service!",
      author: "- John Doe",
    },
    {
      text: "Awesome Job done by experience company.",
      author: " - Jane Smith",
    },
    {
        text: "Amazing experience with this company.",
        author: " - Elon Steve",
    },
    
  ];

  return (
    <div className='mt-8 text-center py-8'>
      <h1 className='text-center font-[Open Sans] text-xl mb-8 font-semibold'>Testimonials</h1>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Testimonial;