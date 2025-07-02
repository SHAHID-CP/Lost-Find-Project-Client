import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router';

const HomeCard = ({singleItem}) => {
    const {_id,titlee,photUrl,location,description,date,status} = singleItem || {};
    
    return (
        <div className='overflow-hidden flex flex-col justify-between border-2 rounded-2xl border-gray-200 p-5 bg-gray-100 hover:shadow-lg transition-shadow'>
            
            <div className='overflow-hidden aspect-3/2'>
                <img className='border-1 border-gray-300 object-cover w-full h-full rounded-2xl ' src={photUrl} alt="None" />
            </div>
            
            <div className='mt-2 flex flex-col grow'>
                <div className='sm:flex justify-between items-center'>
                        <h3 className='text-xl font-semibold not-sm:mb-2'>{titlee}</h3>
                        <p className={`max-w-fit text-xs font-semibold text-white px-3 py-1 rounded-2xl ${status == "Lost" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}>{status}</p>
                </div>
                <p className='text-gray-500 my-1 text-sm grow'>{description}</p>
                <div className='text-gray-500 text-sm flex gap-1 items-center'>
                        <FaLocationDot /> {location}
                </div>
                <div className='text-gray-500 my-1 text-sm flex gap-1 items-center'>
                    <MdOutlineDateRange />{date}
                </div>
                
                <Link to={`/items/${_id}`} >
                <button className='btn w-full rounded-2xl bg-[#ff5835] text-white'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeCard;


// to={`/details/${_id}`}