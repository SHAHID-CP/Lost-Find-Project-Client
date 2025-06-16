import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../Hooks/useAuth';

const Additems = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const {user} =useAuth();
    console.log(user);

    const hundleItem= e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        const {useremail,username,...newPost} = data;
        newPost.contact = {useremail,username} ;
        newPost.date = selectedDate.toLocaleDateString() ;
        console.log(newPost);






    }
    return (
        <div className='mb-32'>
            
        <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-center text-gray-900">Submit Lost or Found Item</h1>
            <p className="text-center text-gray-600 mt-2">
                Help reunite lost items with their owners or find what you've lost
            </p>
        </div>




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
                        

                </div>
                
                <input type="submit" className='btn w-full' value="Add Post" />
            </form>
            
            
        </div>

       
    );
};

export default Additems;