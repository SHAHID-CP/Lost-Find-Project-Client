import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../Hooks/useAuth';

import { CiCalendarDate } from 'react-icons/ci';
import { FaRegUser, FaTag } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const PostDetails = () => {

        const [selectedDate, setSelectedDate] = useState(new Date("2025-01-15"));
        const [selectedDated, setSelectedDated] = useState(new Date());
        const {user} =useAuth();

        const hundleItem= e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        const {useremail,username,recoveredUsername,recoveredUseremail,...newPost} = data;
        newPost.contact = {useremail,username} ;
        newPost.recoverContact = {recoveredUseremail,recoveredUsername} ;
        newPost.date = selectedDate.toLocaleDateString() ;
        newPost.recoveredDate = selectedDated.toLocaleDateString() ;
        console.log(newPost);






    }











    const status='Lost';
    return (
        <div className='my-14'>
            
            <h2 className='text-2xl font-bold text-center mb-8 text-green-400'>Post Details</h2>

            <div className='border-2 rounded-2xl border-gray-200 p-5 bg-gray-100 sm:flex items-end md:w-10/12 mx-auto'>

                        <div className='sm:w-1/2'>
                                <img className='w-full max-h-48 sm:max-h-80 rounded-2xl ' src='https://i.ibb.co/zhmZR4Yp/istockphoto-613666608-612x612.jpg' alt="None" />
                        </div>
                        <div className='mt-2 sm:w-1/2 sm:ml-4'>
                            <p className={`max-w-fit text-xs font-semibold text-white px-3 py-1 rounded-2xl ${status == "Lost" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}>lost</p>
                            <h3 className='text-xl font-bold mb-4 mt-2'>Some Title</h3>

                            <div className='mb-2 text-sm font-semibold flex items-center gap-1'>
                                <FaTag /><p>Document type:</p>
                            </div>

                            <div className='mb-2 pl-2 text-xs font-semibold '>
                                Description
                            </div>
                            <div className='mb-2 text-sm font-semibold flex items-center gap-1'>
                                <FaLocationDot /> <p>Dhaka,rajshahi</p>
                            </div>
                            <div className='mb-2  text-sm font-semibold flex items-center gap-1'>
                                <CiCalendarDate /> <p>17/12/23</p>
                            </div>

                            <div className='mb-4 pt-4 text-sm font-semibold border-t-1 border-gray-300 border-dashed'>
                                Contact Information
                                <div className='text-xs pl-2 mb-1 flex items-center gap-1'>
                                    <FaRegUser /><p >jahid babu</p>
                                </div>
                                <div className='text-xs pl-2 mb-1 flex items-center gap-1'>
                                    <MdOutlineEmail /><p>jahid@gamil.com</p>
                                </div>
                                
                            </div>
                            
                            {
                                status=="Lost" && <button onClick={()=>document.getElementById('my_modal_2').showModal()} className='btn bg-red-300 w-full'>Found This!</button>
                            }
                            {
                                status=="Found" && <button onClick={()=>document.getElementById('my_modal_2').showModal()} className='btn bg-blue-300 w-full'>This is Mine!</button>
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
                                                    <select className='bg-white p-2 rounded-l-sm' name='status' required>
                                                            <option value="Lost">Lost</option>
                                                            <option value="Found">Found</option>
                                                    </select>
                                                </fieldset>
                            
                            
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Photo Url</label>
                                                    <input type="text" name='photUrl' className="input w-full" placeholder="Photo url" required />
                                                </fieldset>
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Title</label>
                                                    <input type="text" name='titlee' className="input w-full" placeholder="Title" required />
                                                </fieldset>
                            
                            
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Description</label>
                                                    <textarea name='description' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white min-h-[60px] border-1 border-gray-300" required></textarea>
                                                </fieldset>
                            
                            
                            
                            
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Select Category</label>
                                                    <select className='bg-white p-2 rounded-l-sm' name='category' required>
                                                            <option value="Pets">Pets</option>
                                                            <option value="Documents">Documents</option>
                                                            <option value="Gadgets">Gadgets</option>
                                                    </select>
                                                </fieldset>
                            
                            
                                                <fieldset className="fieldset  p-2">
                                                    <label className="label">Location</label>
                                                    <input type="text" name='location' className="input w-full" placeholder="Location" required/>
                                                </fieldset>
                            
                                                <div className=" p-2">
                                                <label className="label block mb-1 text-xs">Date Lost/Found</label>
                                                <DatePicker className='bg-white p-1 rounded-md'
                                                selected={selectedDate}
                                                onChange={(date) => setSelectedDate(date)}
                                                />
                                                </div>
                            
                                                <div className='p-6 bg-gray-300 rounded-2xl sm:col-span-2 mb-4 '>
                                                    <span>Contact Information</span>
                                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                                        <fieldset className="fieldset  p-2">
                                                        <label className="label">Display Name</label>
                                                        <input defaultValue={user?.displayName} type="text" name='username' className="input w-full" placeholder="User Name" required/>
                                                        </fieldset>
                                                        <fieldset className="fieldset  p-2">
                                                        <label className="label">Email</label>
                                                        <input defaultValue={user?.email} type="email" name='useremail' className="input w-full" placeholder="User Email" required/>
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
                                                        <input value={user?.displayName} type="text" name='recoveredUsername' className="input w-full" placeholder="Recovered user Name" required/>
                                                        </fieldset>
                                                        <fieldset className="fieldset  p-2">
                                                        <label className="label">Email</label>
                                                        <input value={user?.email} type="email" name='recoveredUseremail' className="input w-full" placeholder="Recovered user Email" required/>
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