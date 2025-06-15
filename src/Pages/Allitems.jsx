import React from 'react';
import HomeCard from '../Component/Home/HomeCard';

const Allitems = () => {
    return (
        <div className="max-w-7xl mx-auto my-12">
            <h2 className="text-4xl font-bold mb-8 text-center">All Lost & Found Items</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <HomeCard></HomeCard>
            </div>
        </div>
    );
};

export default Allitems;