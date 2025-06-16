import React from 'react';
import HomeCard from '../Component/Home/HomeCard';

const Allitems = () => {
    return (
        <div className="max-w-7xl mx-auto my-12">
            <h2 className="text-4xl font-bold mb-8 text-center">All Lost & Found Items</h2>
            
            <div className='mb-12 flex justify-center'>
                <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor" >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                </label>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <HomeCard></HomeCard>
            </div>
        </div>
    );
};

export default Allitems;