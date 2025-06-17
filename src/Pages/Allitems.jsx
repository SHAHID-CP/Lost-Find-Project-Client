import React, { useState } from 'react';
import HomeCard from '../Component/Home/HomeCard';
import { useLoaderData } from 'react-router';

const Allitems = () => {
    const data=useLoaderData();
    

    const [item,setItem] = useState(data);
    const [serchdata,setserch]= useState('');
    const filteredData = item.filter(itemm =>
            itemm.titlee.toLowerCase().includes(serchdata.toLowerCase()) ||
            itemm.location.toLowerCase().includes(serchdata.toLowerCase())
   );

    return (
        <div className="max-w-7xl mx-auto my-12">
            <title>All Item</title>
            <h2 className="text-4xl font-bold mb-8 text-center">All Lost & Found Items</h2>
            
            <div className='mb-12 flex justify-center'>
                <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor" >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                        </svg>
                        <input onChange={(e) => setserch(e.target.value)} value={serchdata} type="search" required placeholder="Search" />
                </label>
            </div>
            {
                    item.length === 0 && ( <p className='text-5xl text-center font-bold mt-12'>No data any Item</p>)
            }
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                
                {
                    filteredData.map(singleItem =>(<HomeCard key={singleItem._id} singleItem={singleItem}></HomeCard>))
                }
            </div>
        </div>
    );
};

export default Allitems;