import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaRegUser, FaTag } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const PostDetails = () => {

    const status='Recovered';
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
                                status=="Lost" && <button className='btn bg-red-300 w-full'>Found This!</button>
                            }
                            {
                                status=="Found" && <button className='btn bg-blue-300 w-full'>This is Mine!</button>
                            }
                            {
                                status=="Recovered" && <button className='btn bg-green-300 w-full'>Allready Recovered!</button>
                            }
                            
                            
                            
                            
                        </div>
                    </div>

        </div>
    );
};

export default PostDetails;