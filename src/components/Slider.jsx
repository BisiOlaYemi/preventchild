import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cards from './Pages/Cards';
import Page from './Pages/WhoWeAre';
import Testimonial from './Pages/Testimonial';
import BANNER1 from '../assets/BANNER1.png';
import BANNER2 from '../assets/BANNER2.png';
import BANNER3 from '../assets/BANNER3.png';

const MySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  const slides = [
    {
      image: BANNER1,
      text: 'Access to Education',
      cta: 'Find out More',
    },
    {
      image: BANNER2,
      text: 'Safe Housing Support',
      cta: 'Find out More',
    },
    {
      image: BANNER3,
      text: 'Parenting Support',
      cta: 'Find out More',
    },
  ];

  return (
    <div style={{ marginTop: '200px' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="lg:text-8xl font-bold mb-4">{slide.text}</h1>
              <button className="bg-blue-950 text-white lg:px-10 lg:text-xl py-3 rounded-lg mt-4 border border-white outline-none">{slide.cta}</button>
            </div>
          </div>
        ))}
      </Slider>
        <div className='bg-blue-950 w-full h-auto object-cover justify-center text-center'>
          <div className="h-full flex justify-center items-center">
            <h2 className='text-xl text-white mt-16 mb-16'>Our services are designed to assist care homes in adhering to <br /> the highest standards of regulation, compliance, and care.</h2>
          </div>
        </div>
        <div className="mb-8">
        <Cards />
        </div>
        <div>
          <Page />
        </div>
        <div>
          <Testimonial />
        </div>
        
    </div>
  );
}

export default MySlider;
