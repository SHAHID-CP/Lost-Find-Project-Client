
import React from 'react';
import { motion } from "motion/react";

const slides = [
  {
    id: "slide1",
    text: "Join thousands of people who have successfully reunited with their lost belongings through our platform.",
    img: "https://i.ibb.co/6cddyK5W/im2.jpg"
  },
  {
    id: "slide2",
    text: "Be a hero in someone's story by reporting found items and helping reunite them with their owners.",
    img: "https://i.ibb.co/WN5Bzwdn/im3.png"
  },
  {
    id: "slide3",
    text: "Every item has a story. Help write a happy ending by reporting lost and found belongings.",
    img: "https://i.ibb.co/3bSVSVw/im4.jpg"
  },
  {
    id: "slide4",
    text: "We've helped thousands of people reconnect with what matters most. Be part of the journey.",
    img: "https://i.ibb.co/v4hvmrZh/im1.jpg"
  }
];

const Carosel = () => {
  return (
    <div className='pt-8 bg-gray-900 mb-12'>
      <div className="carousel w-full">
        {slides.map((slide, idx) => (
          <div id={slide.id} key={slide.id} className="carousel-item relative w-full h-[400px] sm:h-[500px]">
            {/* Background image with dark overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-tl-[80px] rounded-br-[80px]"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-tl-[80px] rounded-br-[80px]"></div>
            </div>

            {/* Text content */}
            <div className="relative z-10 flex flex-col justify-center items-start w-full sm:w-1/2 px-6 sm:px-16 text-left">
              <motion.h2 
                animate={{ color: ['#ff3d41', '#fd79a8', '#e84393'], transition: { duration: 4, repeat: Infinity } }}
                className="font-bold text-lg sm:text-3xl leading-snug"
              >
                {slide.text}
              </motion.h2>
              <p className="mt-4 text-gray-300 text-sm sm:text-base">
                Our platform is dedicated to reuniting people with their valuables — safely, quickly, and with care. Whether you've lost something or found an item, we make the process simple and trustworthy.
              </p>
            </div>

            {/* Carousel controls */}
            <div className="absolute left-5 right-5 bottom-4 flex justify-between z-10">
              <a href={`#${slides[(idx - 1 + slides.length) % slides.length].id}`} className="btn btn-circle btn-sm sm:btn-md">❮</a>
              <a href={`#${slides[(idx + 1) % slides.length].id}`} className="btn btn-circle btn-sm sm:btn-md">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosel;
