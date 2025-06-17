import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import HomeCard from '../Component/Home/HomeCard';
import { MdApps } from 'react-icons/md';
import { FaTableList } from 'react-icons/fa6';
import axios from 'axios';
import useAuth from '../Hooks/useAuth';
import LoadingEle from '../Component/LoadingEle';
import ErrorPage from './ErrorPage';
import RecoCard from '../Component/RecoCard';


const AllRecovered = () => {
    const[mode,setmode] = useState(false)
    
    const {user} =useAuth();
    const { isPending, isError, data } = useQuery({
        queryKey: ['singlerecover'],
        queryFn: async ()=>{
            const res= await axios.get(`http://localhost:3000/recover?email=${user?.email}`,{
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        })
            return res.data;
        },
        })

    if(isPending){
        return <LoadingEle></LoadingEle>
    }
    if(isError){
        return <ErrorPage></ErrorPage>
    }
    if(data.length === 0){
        return <p className='text-5xl text-center font-bold mt-24'>No recover Data</p>
    }

    
    return (
        <div>
            <title>Recover Item</title>
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
                            {
                                data.map=(singledata,index)=>(<tr key={singledata._id}>
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

                                )
                            }
                    </tbody>
                </table>
            </div>
                </>
            }










            {
                !mode&& <>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    data.map(singleItem =>(<RecoCard key={singleItem._id} singleItem={singleItem}></RecoCard>))
                }

                </div>
                
                
                </>
            }
            
        </div>
    );
};

export default AllRecovered;