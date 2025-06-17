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
        <div>
            <title>Recover Item</title>
            <h2 className="text-3xl text-center font-bold my-8">All Recovered Item </h2>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    data.map(singleItem =>(<RecoCard key={singleItem._id} singleItem={singleItem}></RecoCard>))
                }

                </div>
                
        </div>
    );
};

export default AllRecovered;