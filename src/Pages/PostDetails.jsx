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
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const { isPending, isError, data } = useQuery({
        queryKey: ['singleItem', id],
        enabled: !!user?.accessToken,
        queryFn: async () => {
            const res = await axios.get(`https://whereisit-server-side-plum.vercel.app/item/${id}`, {
                headers: {
                    Authorization: `Bearer ${user?.accessToken}`
                }
            });
            return res.data;
        },
    });

    const { _id, titlee, photUrl, location, description, date, status, contact, category } = data || {};

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDated, setSelectedDated] = useState(new Date());

    const handleItem = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const { status, useremail, username, recoveredUsername, recoveredUseremail, ...newPost } = data;
        newPost.contact = { useremail, username };
        newPost.recoverContact = { recoveredUseremail, recoveredUsername };
        newPost.recoveredDate = selectedDated.toLocaleDateString();
        newPost.date = selectedDate.toLocaleDateString();
        newPost.status = 'Recovered';

        const update = { status: newPost.status };

        axios.post('https://whereisit-server-side-plum.vercel.app/addRecover', newPost, {
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        }).then(res => {
            if (res.data.insertedId) {
                e.target.reset();
                toast("Item Recovered successfully");
                axios.patch(`https://whereisit-server-side-plum.vercel.app/item/${_id}`, update, {
                    headers: {
                        Authorization: `Bearer ${user?.accessToken}`
                    }
                });
            }
        });
    };

    const handleModal = () => {
        if (user.email === contact.useremail) {
            navigate('/');
            return;
        }
        document.getElementById('my_modal_2').showModal();
    };

    if (isPending) {
        return <LoadingEle />;
    }
    if (isError) {
        return <ErrorPage />;
    }

    return (
        <div className='py-24 dark:bg-gray-900 dark:text-gray-200'>
            <title>Update Item</title>
            <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors duration-500 text-center '>Post Details</h2>
            <p className=' w-2/3 text-center mx-auto text-xl text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'>
               This post contains detailed information about the item including its category, location, and contact details. Please review all the details carefully before proceeding.
            </p>
            <div className='border-2 rounded-2xl border-gray-200 p-5 bg-gray-100 sm:flex items-stretch md:w-10/12 mx-auto
                            dark:border-gray-700 dark:bg-gray-800'>

                <div className='overflow-hidden aspect-[3/2]'>
                    <img className='object-cover w-full h-full rounded-2xl' src={photUrl} alt="None" />
                </div>

                <div className='mt-2 sm:w-1/2 sm:ml-4 flex flex-col justify-end'>
                    <p className={`max-w-fit text-xs font-semibold text-white px-3 py-1 rounded-2xl
                        ${status === "Lost"
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-green-500 hover:bg-green-600"}`}>
                        {status}
                    </p>

                    <h3 className='text-xl font-bold mb-4 mt-2 dark:text-gray-100'>{titlee}</h3>

                    <div className='mb-2 text-sm font-semibold flex items-center gap-1 dark:text-gray-300'>
                        <FaTag /><p>{category}</p>
                    </div>

                    <div className='mb-2 pl-2 text-xs font-semibold dark:text-gray-300'>
                        {description}
                    </div>

                    <div className='mb-2 text-sm font-semibold flex items-center gap-1 dark:text-gray-300'>
                        <FaLocationDot /> <p>{location}</p>
                    </div>

                    <div className='mb-2 text-sm font-semibold flex items-center gap-1 dark:text-gray-300'>
                        <CiCalendarDate /> <p>{date}</p>
                    </div>

                    <div className='mb-4 pt-4 text-sm font-semibold border-t border-gray-300 border-dashed dark:border-gray-600 dark:text-gray-300'>
                        Contact Information
                        <div className='text-xs pl-2 mb-1 flex items-center gap-1'>
                            <FaRegUser /><p>{contact.username}</p>
                        </div>
                        <div className='text-xs pl-2 mb-1 flex items-center gap-1'>
                            <MdOutlineEmail /><p>{contact.useremail}</p>
                        </div>
                    </div>

                    {status === "Lost" && <button onClick={handleModal} className='btn bg-red-300 w-full dark:bg-red-600 dark:text-white'>Found This!</button>}
                    {status === "Found" && <button onClick={handleModal} className='btn bg-blue-300 w-full dark:bg-blue-600 dark:text-white'>This is Mine!</button>}
                    {status === "Recovered" && <button className='btn bg-green-300 w-full border-2 border-primary dark:bg-green-600 dark:text-white' disabled>Already Recovered!</button>}

                </div>
            </div>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box max-w-2/3 max-auto
                    dark:bg-gray-800 dark:text-gray-200">
                    <h3 className="font-bold text-center text-lg mb-4 text-red-500 dark:text-red-400">
                        Recovered Information
                    </h3>

                    <form onSubmit={handleItem} className='p-2 rounded-2xl bg-gradient-to-br from-[#ffe6e7] via-[#fff4ec] to-[#fef9c9] dark:from-gray-700 dark:via-gray-800 dark:to-gray-900'>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

                            <fieldset className="fieldset p-2">
                                <label className="label dark:text-gray-300">Select Post Type</label>
                                <select defaultValue={status} className='bg-white p-2 rounded-l-sm dark:bg-gray-700 dark:text-gray-200' name='status' required>
                                    <option value="Lost">Lost</option>
                                    <option value="Found">Found</option>
                                </select>
                            </fieldset>

                            <fieldset className="fieldset p-2">
                                <label className="label dark:text-gray-300">Photo Url</label>
                                <input defaultValue={photUrl} type="url" name='photUrl' className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="Photo url" required />
                            </fieldset>

                            <fieldset className="fieldset p-2">
                                <label className="label dark:text-gray-300">Title</label>
                                <input defaultValue={titlee} type="text" name='titlee' className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="Title" required />
                            </fieldset>

                            <fieldset className="fieldset p-2">
                                <label className="label dark:text-gray-300">Description</label>
                                <textarea defaultValue={description} name='description' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white min-h-[60px] border border-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" required></textarea>
                            </fieldset>

                            <fieldset className="fieldset p-2">
                                <label className="label dark:text-gray-300">Select Category</label>
                                <select defaultValue={category} className='bg-white p-2 rounded-l-sm dark:bg-gray-700 dark:text-gray-200' name='category' required>
                                    <option value="Pets">Pets</option>
                                    <option value="Documents">Documents</option>
                                    <option value="Gadgets">Gadgets</option>
                                </select>
                            </fieldset>

                            <fieldset className="fieldset p-2">
                                <label className="label dark:text-gray-300">Location</label>
                                <input defaultValue={location} type="text" name='location' className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="Location" required />
                            </fieldset>

                            <div className="p-2">
                                <label className="label block mb-1 text-xs dark:text-gray-300">Date Lost/Found</label>
                                <DatePicker
                                    value={date}
                                    className='bg-white p-1 rounded-md dark:bg-gray-700 dark:text-gray-200'
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                />
                            </div>

                            <div className='p-6 bg-gray-300 rounded-2xl sm:col-span-2 mb-4 dark:bg-gray-700'>
                                <span className='dark:text-gray-200'>Contact Information</span>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                    <fieldset className="fieldset p-2">
                                        <label className="label dark:text-gray-300">Display Name</label>
                                        <input defaultValue={contact.username} type="text" name='username' className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="User Name" required />
                                    </fieldset>
                                    <fieldset className="fieldset p-2">
                                        <label className="label dark:text-gray-300">Email</label>
                                        <input defaultValue={contact.useremail} type="email" name='useremail' className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="User Email" required />
                                    </fieldset>
                                </div>
                            </div>

                            <fieldset className="fieldset p-2">
                                <label className="label dark:text-gray-300">Recovered Location</label>
                                <input type="text" name='recoverLocation' className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="Recovered Location" required />
                            </fieldset>

                            <div className="p-2">
                                <label className="label block mb-1 text-xs dark:text-gray-300">Date Recovered Item</label>
                                <DatePicker
                                    className='bg-white p-1 rounded-md dark:bg-gray-700 dark:text-gray-200'
                                    selected={selectedDated}
                                    onChange={(date) => setSelectedDated(date)}
                                />
                            </div>

                            <div className='p-6 bg-gray-300 rounded-2xl sm:col-span-2 mb-4 dark:bg-gray-700'>
                                <span className='dark:text-gray-200'>Recovered Person Information</span>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                    <fieldset className="fieldset p-2">
                                        <label className="label dark:text-gray-300">Display Name</label>
                                        <input readOnly value={user?.displayName} type="text" name='recoveredUsername' className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="Recovered user Name" required />
                                    </fieldset>
                                    <fieldset className="fieldset p-2">
                                        <label className="label dark:text-gray-300">Email</label>
                                        <input readOnly value={user?.email} type="email" name='recoveredUseremail' className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="Recovered user Email" required />
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
