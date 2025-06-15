
import React from 'react';
import { Link } from 'react-router';

const Carosel = () => {
    return (
    <div className='pt-8 bg-gray-800 mb-12'>
    <div className="carousel w-full ">
    <div id="slide1" className="carousel-item relative w-full ">
        <p className='w-1/2 pl-8 sm:pl-16  flex justify-center items-center text-white font-bold sm:text-3xl'>Join thousands of people who have successfully reunited with their lost belongings through our platform.</p>
    <img
        src="https://i.ibb.co/6cddyK5W/im2.jpg"
        className="w-1/2 rounded-tl-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div>


    <div id="slide2" className="carousel-item relative w-full">
    <p className='w-1/2 flex justify-center items-center text-white font-bold sm:text-3xl sm:pl-16 pl-8'>Be a hero in someone's story by reporting found items and helping reunite them with their owners.</p>
    <img
        src="https://i.ibb.co/WN5Bzwdn/im3.png"
        className="w-1/2 rounded-tl-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div>


    <div id="slide3" className="carousel-item relative w-full">
    <p className='w-1/2 flex justify-center items-center text-white font-bold sm:text-3xl pl-8 sm:pl-16'>people who have successfully reunited with their lost belongings through our platform.</p>
    <img
        src="https://i.ibb.co/3bSVSVw/im4.jpg"
        className="w-1/2 rounded-tl-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    </div>


    <div id="slide4" className="carousel-item relative w-full">
    <p className='w-1/2 flex justify-center items-center text-white font-bold sm:text-3xl pl-8 sm:pl-16'>we've helped thousands of people reconnect with what matters most.</p>
    <img
        src="https://i.ibb.co/v4hvmrZh/im1.jpg"
        className="w-1/2 rounded-tl-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    </div>
</div>

    </div>
    );
};

export default Carosel;