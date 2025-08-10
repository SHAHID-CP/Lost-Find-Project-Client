import React from 'react';
import HomeCard from './HomeCard';
import { Link, useLoaderData } from 'react-router';

const LatestContainer = () => {
    const data= useLoaderData();
    return (
        <div className="max-w-[1440px] mx-auto pt-12 mb-12 px-2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">Latest Lost & Found Items</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
              Browse the most recent items reported by our community. Your lost item might be here!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* 
                   <HomeCard></HomeCard>
                   <HomeCard></HomeCard>
                   <HomeCard></HomeCard>
                */}
                {   [...data]
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .slice(0, 6)
                    .map((singleItem)=><HomeCard key={singleItem._id} singleItem={singleItem}></HomeCard>)
                }

            </div>
            <div className='flex justify-center'>
                <Link to='/allItems'>
                <button className='btn border-2 border-primary bg-background hover:bg-white rounded-lg text-primary '>See All Items </button>
                </Link>
            </div>
        </div>
    );
};

export default LatestContainer;