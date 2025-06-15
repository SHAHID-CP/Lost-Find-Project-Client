import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router';

const HomeCard = () => {
    const id=2;
    const category="Loost";
    return (
        <div className='border-2 rounded-2xl border-gray-200 p-5 bg-gray-100 hover:shadow-lg transition-shadow'>
            <img className='w-full max-h-48 rounded-2xl ' src='https://i.ibb.co/TBvs0S1b/Bid5-min.png' alt="None" />
            <div className='mt-2'>
                <div className='sm:flex justify-between items-center'>
                        <h3 className='text-xl font-semibold not-sm:mb-2'>Title</h3>
                        <p className={`max-w-fit text-xs font-semibold text-white px-3 py-1 rounded-2xl ${category == "Lost" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}>lost</p>
                </div>
                <p className='text-gray-500 my-1 text-sm'>Lorem ipsum dolor sit amet.</p>
                <div className='text-gray-500 text-sm flex gap-1 items-center'>
                        <FaLocationDot />   Location
                </div>
                <div className='text-gray-500 my-1 text-sm flex gap-1 items-center'>
                    <MdOutlineDateRange />date
                </div>
                
                <Link to={`/items/${id}`} >
                <button className='btn w-full rounded-2xl bg-[#f43f5e] text-white'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeCard;


// to={`/details/${_id}`}