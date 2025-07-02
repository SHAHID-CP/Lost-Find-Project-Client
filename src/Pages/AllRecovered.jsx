import React from 'react';
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
    
    
    const {user} =useAuth();
    const { isPending, isError, data } = useQuery({
        queryKey: ['singlerecover'],
        queryFn: async ()=>{
            const res= await axios.get(`https://whereisit-server-side-plum.vercel.app/recover?email=${user?.email}`,{
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
        <div className='mb-24'>
            <title>Recover Item</title>
            <h2 className="text-3xl text-center font-bold my-8">All Recovered Item </h2>
            
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        
                            {
                                data.map((singleItem,index)=><tr key={index}>
                                <th>{index+1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                        <img src={singleItem?.photUrl} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{singleItem?.titlee}</td>
                                
                                <td>{singleItem?.date}</td>
                                <td>{singleItem?.location}</td>
                                <td>
                                    <p className='max-w-fit text-xs font-semibold text-white px-3 py-1 rounded-2xl bg-green-500 hover:bg-green-600'>{singleItem?.status}</p>
                                </td>
                                
                            </tr>)
                            }
                            
                    </tbody>
                </table>
            </div>
                
        </div>
    );
};

export default AllRecovered;

// <p className='max-w-fit text-xs font-semibold text-white px-3 py-1 rounded-2xl bg-green-500 hover:bg-green-600'>{singleItem?.status}</p>