import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';

import Swal from 'sweetalert2';
import axios from 'axios';
import useAuth from '../Hooks/useAuth';
import LoadingEle from '../Component/LoadingEle';
import ErrorPage from './ErrorPage';
import { Link } from 'react-router';

const MyItem = () => {
  const [datas, setDatas] = useState([]);
  const { user, token, loading } = useAuth();

  const {
    isLoading,
    isError,
    data,
    error,
  } = useQuery({
    queryKey: ['manageItem', user?.email],
    enabled: !loading && !!token && !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `https://whereisit-server-side-plum.vercel.app/myItem?email=${user.email}`, {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      return res.data;
    },
    retry: 2, 
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) setDatas(data);
  }, [data]);

  if (loading || isLoading) return <LoadingEle />;
  if (isError) return <ErrorPage error={error} />;

  if (datas.length === 0) {
    return (
      <p className='text-3xl md:text-5xl text-center font-semibold mt-24 dark:text-gray-300'>
        No Manage Data Found
      </p>
    );
  }

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.delete(
          `https://whereisit-server-side-plum.vercel.app/itemdel/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data.deletedCount) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setDatas(prev => prev.filter(item => item._id !== id));
          
        }
      } catch (error) {
        Swal.fire("Error!", "Failed to delete the item.", "error");
      }
    }
  };

  return (
    <div className='mb-24 px-4 md:px-12 max-w-7xl mx-auto'>
      <title>My Item</title>
      <h2 className="text-4xl md:text-5xl font-extrabold text-center my-12 dark:text-white">
        Manage My Items
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full min-w-max border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">#</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Image</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Title</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Date</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Email</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Manage Item</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item, index) => (
              <tr
                key={item._id}
                className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700"
              >
                <td className="p-3 border-b border-gray-300 dark:border-gray-600 text-center">{index + 1}</td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600">
                  <img
                    src={item.photUrl}
                    alt={item.titlee}
                    className="h-12 w-12 object-cover rounded-md mx-auto"
                    loading="lazy"
                    style={{ aspectRatio: '1 / 1' }} // square ratio
                  />
                </td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600">{item.titlee}</td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600">{item.date}</td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600 break-all">{item.contact?.useremail}</td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600 text-center space-x-4">
                  <Link to={`/updateItems/${item._id}`}>
                    <button aria-label="Update Item" className="cursor-pointer hover:text-green-600 transition-colors duration-300">
                      <GrUpdate size={22} />
                    </button>
                  </Link>
                  <button
                    aria-label="Delete Item"
                    onClick={() => handleDelete(item._id)}
                    className="cursor-pointer hover:text-red-600 transition-colors duration-300"
                  >
                    <MdDeleteForever size={22} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItem;
