import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query'
import { CiCalendarDate } from 'react-icons/ci';
import { FaRegUser, FaTag } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import LoadingEle from '../Component/LoadingEle';
import ErrorPage from './ErrorPage';
import { toast } from 'react-toastify';

const PostDetails = () => {
        const {id}= useParams();
        const { isPending, isError, data } = useQuery({
        queryKey: ['singleItem',id],
        queryFn: async ()=>{
            const res= await axios.get(`https://whereisit-server-side-plum.vercel.app/item/${id}`,{
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        })
            return res.data;
        },
        })
        const navi= useNavigate();
        const {_id,titlee,photUrl,location,description,date,status,contact,category} = data || {};

        const [selectedDate, setSelectedDate] = useState(new Date());
        const [selectedDated, setSelectedDated] = useState(new Date());
        const {user} =useAuth();

        const hundleItem= e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        const {status,useremail,username,recoveredUsername,recoveredUseremail,...newPost} = data;
        newPost.contact = {useremail,username} ;
        newPost.recoverContact = {recoveredUseremail,recoveredUsername} ;
        newPost.recoveredDate = selectedDated.toLocaleDateString() ;
        
        newPost.date = selectedDate.toLocaleDateString() ;
        
        newPost.status='Recovered';
        const update= {status:newPost.status};
        
        axios.post('https://whereisit-server-side-plum.vercel.app/addRecover',newPost,{
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        })
        .then(res=>{
            if(res.data.insertedId){
                e.target.reset()
                toast("Item Recovered successfully");
                axios.patch(`https://whereisit-server-side-plum.vercel.app/item/${_id}`,update,{
                        headers: {
                        Authorization: `Bearer ${user?.accessToken}`
                        }
                })
            }
        })






    }

    const hundleModal= ()=>{
        if(user.email===contact.useremail){
            navi('/')
            return
        }
        document.getElementById('my_modal_2').showModal()
    }


    if(isPending){
        return <LoadingEle></LoadingEle>
    }
    if(isError){
        return <ErrorPage></ErrorPage>
    }

    return (
        <div className='my-14'>
            <title>Update Item</title>
            <h2 className='text-2xl font-bold text-center mb-8 text-green-400'>Post Details</h2>

            <div className='border-2 rounded-2xl border-gray-200 p-5 bg-gray-100 sm:flex items-end md:w-10/12 mx-auto'>

                        <div className='sm:w-1/2'>
                                <img className='object-cover w-full max-h-48 sm:max-h-80 rounded-2xl ' src={photUrl} alt="None" />
                        </div>
                        <div className='mt-2 sm:w-1/2 sm:ml-4'>
                            <p className={`max-w-fit text-xs font-semibold text-white px-3 py-1 rounded-2xl ${status == "Lost" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}>{status}</p>
                            <h3 className='text-xl font-bold mb-4 mt-2'>{titlee}</h3>

                            <div className='mb-2 text-sm font-semibold flex items-center gap-1'>
                                <FaTag /><p>{category}</p>
                            </div>

                            <div className='mb-2 pl-2 text-xs font-semibold '>
                                {description}
                            </div>
                            <div className='mb-2 text-sm font-semibold flex items-center gap-1'>
                                <FaLocationDot /> <p>{location}</p>
                            </div>
                            <div className='mb-2  text-sm font-semibold flex items-center gap-1'>
                                <CiCalendarDate /> <p>{date}</p>
                            </div>

                            <div className='mb-4 pt-4 text-sm font-semibold border-t-1 border-gray-300 border-dashed'>
                                Contact Information
                                <div className='text-xs pl-2 mb-1 flex items-center gap-1'>
                                    <FaRegUser /><p >{contact.username}</p>
                                </div>
                                <div className='text-xs pl-2 mb-1 flex items-center gap-1'>
                                    <MdOutlineEmail /><p>{contact.useremail}</p>
                                </div>
                                
                            </div>
                            
                            {
                                status=="Lost" && <button onClick={hundleModal} className='btn bg-red-300 w-full'>Found This!</button>
                            }
                            {
                                status=="Found" && <button onClick={hundleModal} className='btn bg-blue-300 w-full'>This is Mine!</button>
                            }
                            {
                                status=="Recovered" && <button className='btn bg-green-300 w-full'>Allready Recovered!</button>
                            }
                            
                            
                            
                            
                        </div>
                    </div>

















                        <dialog id="my_modal_2" className="modal">

                            <div className="modal-box max-w-2/3 max-auto">
                                <h3 className="font-bold text-center text-lg mb-4 text-red-500">Recovered Information</h3>
                                <form onSubmit={hundleItem} className=' p-2 rounded-2xl  bg-gradient-to-br from-[#ffe6e7] via-[#fff4ec] to-[#fef9c9]'>
                                            
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Select Post Type</label>
                                                    <select defaultValue={status} className='bg-white p-2 rounded-l-sm' name='status' required>
                                                            <option value="Lost">Lost</option>
                                                            <option value="Found">Found</option>
                                                    </select>
                                                </fieldset>
                            
                            
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Photo Url</label>
                                                    <input defaultValue={photUrl} type="url" name='photUrl' className="input w-full" placeholder="Photo url" required />
                                                </fieldset>
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Title</label>
                                                    <input defaultValue={titlee} type="text" name='titlee' className="input w-full" placeholder="Title" required />
                                                </fieldset>
                            
                            
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Description</label>
                                                    <textarea defaultValue={description} name='description' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white min-h-[60px] border-1 border-gray-300" required></textarea>
                                                </fieldset>
                            
                            
                            
                            
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Select Category</label>
                                                    <select defaultValue={category} className='bg-white p-2 rounded-l-sm' name='category' required>
                                                            <option value="Pets">Pets</option>
                                                            <option value="Documents">Documents</option>
                                                            <option value="Gadgets">Gadgets</option>
                                                    </select>
                                                </fieldset>
                            
                            
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Location</label>
                                                    <input defaultValue={location} type="text" name='location' className="input w-full" placeholder="Location" required/>
                                                </fieldset>
                            
                                                <div className=" p-2">
                                                <label className="label block mb-1 text-xs">Date Lost/Found</label>
                                                <DatePicker value={date} className='bg-white p-1 rounded-md'
                                                selected={selectedDate}
                                                onChange={(date) => setSelectedDate(date)}
                                                />
                                                </div>
                            
                                                <div className='p-6 bg-gray-300 rounded-2xl sm:col-span-2 mb-4 '>
                                                    <span>Contact Information</span>
                                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                                        <fieldset className="fieldset  p-2">
                                                        <label className="label">Display Name</label>
                                                        <input defaultValue={contact.username} type="text" name='username' className="input w-full" placeholder="User Name" required/>
                                                        </fieldset>
                                                        <fieldset className="fieldset  p-2">
                                                        <label className="label">Email</label>
                                                        <input defaultValue={contact.useremail} type="email" name='useremail' className="input w-full" placeholder="User Email" required/>
                                                        </fieldset>
                                                    </div>
                                                </div>

                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Recovered Location</label>
                                                    <input type="text" name='recoverLocation' className="input w-full" placeholder=" Recovered Location" required/>
                                                </fieldset>
                                                

                                                <div className=" p-2">
                                                <label className="label block mb-1 text-xs">Date Recovered Item</label>
                                                <DatePicker className='bg-white p-1 rounded-md'
                                                selected={selectedDated}
                                                onChange={(date) => setSelectedDated(date)}
                                                />
                                                </div>

                                                 <div className='p-6 bg-gray-300 rounded-2xl sm:col-span-2 mb-4 '>
                                                    <span>Recovered Person Information</span>
                                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                                        <fieldset className="fieldset  p-2">
                                                        <label className="label">Display Name</label>
                                                        <input readOnly value={user?.displayName} type="text" name='recoveredUsername' className="input w-full" placeholder="Recovered user Name" required/>
                                                        </fieldset>
                                                        <fieldset className="fieldset  p-2">
                                                        <label className="label">Email</label>
                                                        <input readOnly value={user?.email} type="email" name='recoveredUseremail' className="input w-full" placeholder="Recovered user Email" required/>
                                                        </fieldset>
                                                    </div>
                                                </div>   
                            
                                            </div>
                                            
                                            <input type="submit" className='btn w-full' value="Submit" />
                                        </form>

                            </div>
                            <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                            </form>
                            
                            
                        </dialog>


        </div>
    );
};

export default PostDetails;