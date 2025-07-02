import React from 'react';
import Marquee from "react-fast-marquee";
const SuccessStories = () => {
    return (
        
        <div className="max-w-7xl mx-auto py-12">
            
        <div className="text-center mb-12" >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-500">
            Real stories from real people who found their lost items through our platform
            </p>
        </div>

        
            
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                <div className="p-6  border-2 rounded-2xl bg-red-100 ">
                    <div className='flex items-end gap-2'>
                        <div className='size-16 rounded-full bg-gray-400 '>
                            <img src="https://i.ibb.co/DPY5C0Qv/law8.jpg" className='rounded-full size-16' alt="" />
                        </div>
                        <div>
                            <h4 className="font-semibold">
                            Sarah Johnson
                            </h4>
                            <div className="flex text-yellow-400">
                            <span>★★★★</span>
                            </div>
                        </div>
                    </div>
                    <p className=" italic">"
                        Lost my engagement ring at the beach. Found it back within 2 days thanks to this amazing community!"
                    </p>
                </div>
            </div>
            <div>
                <div className="p-6  border-2 rounded-2xl bg-blue-100">
                    <div className='flex items-end gap-2'>
                        <div className='size-16 rounded-full bg-gray-400 '>
                            <img src="https://i.ibb.co/hFXppLVZ/law4.jpg" className='rounded-full size-16' alt="" />
                        </div>
                        <div>
                            <h4 className="font-semibold">
                            Mike Chen
                            </h4>
                            <div className="flex text-yellow-400">
                            <span>★★★</span>
                            </div>
                        </div>
                    </div>
                    <p className=" italic">"
                        My cat went missing for a week. Someone found him and posted here. We're reunited and so grateful!"
                    </p>
                </div>
            </div>
            <div>
                <div className="p-6  border-2 rounded-2xl bg-green-100">
                    <div className='flex items-end gap-2'>
                        <div className='size-16 rounded-full bg-gray-400 '>
                            <img src="https://i.ibb.co/zW6WHBtB/law9.jpg" className='rounded-full size-16' alt="" />
                        </div>
                        <div>
                            <h4 className="font-semibold">
                            Emily Davis
                            </h4>
                            <div className="flex text-yellow-400">
                            <span>★★★★★</span>
                            </div>
                        </div>
                    </div>
                    <p className=" italic">"
                        Found someone's wallet and was able to return it the same day.Someone found him. It feels great to help others!"
                    </p>
                </div>
            </div>
            </div>
            
        
        

            
        </div>
    );
};

export default SuccessStories;