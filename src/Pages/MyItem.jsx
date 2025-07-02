import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAuth from '../Hooks/useAuth';
import LoadingEle from '../Component/LoadingEle';
import ErrorPage from './ErrorPage';


const MyItem = () => {
        const [datas,setdatas] =useState([]);
        const {user,token,loading} =useAuth();
        const { isPending, isError, data } = useQuery({
        queryKey: ['manageItem'],
        enabled: !loading && !!token,
        queryFn: async ()=>{
                const res= await axios.get(`https://whereisit-server-side-plum.vercel.app/myItem?email=${user?.email}`,{
                    headers: {
                    Authorization: `Bearer ${token}`
                    }
                })
                return res.data;
        },
        })

    useEffect(() => {
        if (data) {
        setdatas(data);
        }
    }, [data]);


    if(isPending){
        return <LoadingEle></LoadingEle>
    }
    
    if(data.length === 0){
        return <p className='text-5xl text-center font-bold mt-24'>No Manage Data</p>
    }
  
    


    const hundleDelete= (id)=>{ 


        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://whereisit-server-side-plum.vercel.app/itemdel/${id}`,{
                    headers: {
                    Authorization: `Bearer ${user?.accessToken}`
                    }
                })
                .then(res=>{
                    if(res.data.deletedCount){
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });

                        const updated = datas.filter(dat => dat._id !== id);
                        setdatas(updated)
                    }
                })

                
            }
            });

    }
    return (
        <div className='mb-24'>
            <title>My Item</title>
            <h2 className="text-3xl text-center font-bold my-8">Manage My Item </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Manage Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        
                            {
                                datas.map((singleItem,index)=><tr key={index}>
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
                                <td>{singleItem?.contact?.useremail}</td>
                                <td>
                                    <Link to={`/updateItems/${singleItem?._id}`} ><button className='cursor-pointer mr-8'><GrUpdate color='green'/></button></Link>
                                    <button onClick={()=>hundleDelete(singleItem._id)} className='cursor-pointer'><MdDeleteForever  color='red' size={22}/></button>
                                </td>
                            </tr>)
                            }
                            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItem;