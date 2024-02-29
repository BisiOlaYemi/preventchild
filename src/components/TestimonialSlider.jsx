/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const TestimonialSlider = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  // eslint-disable-next-line
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="w-full max-w-xl mx-auto relative">
      <div className="testimonial-slider-container">
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-500 ease-in-out absolute top-0 left-0 right-0`}
            >
              <p className="testimonial-content text-xl">{testimonial.text}</p>
              <p className="testimonial-author text-2xl mb-24">{testimonial.author}</p>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
          <FaLessThan
            className="arrow left-arrow text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={prevSlide}
          />
          <FaGreaterThan
            className="arrow right-arrow text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
