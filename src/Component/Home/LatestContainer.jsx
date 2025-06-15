import React from 'react';
import HomeCard from './HomeCard';
import { Link } from 'react-router';

const LatestContainer = () => {
    return (
        <div className="max-w-7xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-center">Latest Lost & Found Items</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
              Browse the most recent items reported by our community. Your lost item might be here!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>

            </div>
            <div className='flex justify-center'>
                <Link to='/allItems'>
                <button className='btn bg-black rounded-lg text-white '>See All Items </button>
                </Link>
            </div>
        </div>
    );
};

export default LatestContainer;