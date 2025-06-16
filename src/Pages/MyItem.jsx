import React from 'react';
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router';

const MyItem = () => {
    return (
        <div>
             <h2 className="text-3xl text-center font-bold my-8">Manage My Item </h2>
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
                            <th>Manage Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        
                            <tr>
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
                                <td>
                                    <Link to={`/updateItems/2`} ><button className='cursor-pointer mr-8'><GrUpdate color='green'/></button></Link>
                                    <button className='cursor-pointer'><MdDeleteForever  color='red' size={22}/></button>
                                </td>
                            </tr>
                            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItem;