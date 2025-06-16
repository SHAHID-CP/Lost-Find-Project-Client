import React from 'react';
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyItem = () => {






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
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
            }
            });

    }
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
                                    <button onClick={()=>hundleDelete(2)} className='cursor-pointer'><MdDeleteForever  color='red' size={22}/></button>
                                </td>
                            </tr>
                            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItem;