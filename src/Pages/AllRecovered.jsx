import React, { useState } from 'react';
import HomeCard from '../Component/Home/HomeCard';
import { MdApps } from 'react-icons/md';
import { FaTableList } from 'react-icons/fa6';

const AllRecovered = () => {
    const[mode,setmode] = useState(false)

    return (
        <div>
            <h2 className="text-3xl text-center font-bold my-8">All Recovered Item </h2>
            <div className='flex justify-end mb-4'>
                <button onClick={()=>setmode(true)} className='mr-4 cursor-pointer'><FaTableList size={20} /></button>
                <button onClick={()=>setmode(false)} className='cursor-pointer'><MdApps size={24} /></button>
            </div>

            {
                mode&& <>
                
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        
                            <tr>
                                <th>1</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                        <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>item title</td>
                                
                                <td>item dedline</td>
                                <td>jahid@gmail.com</td>
                            </tr>
                            
                    </tbody>
                </table>
            </div>
                </>
            }










            {
                !mode&& <>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>

                </div>
                
                
                </>
            }
            
        </div>
    );
};

export default AllRecovered;