import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router';
import LoadingEle from '../Component/LoadingEle';
import ErrorPage from './ErrorPage';
import { toast } from 'react-toastify';

const UpdateItems = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { isPending, isError, data } = useQuery({
    queryKey: ['upItem', id],
    queryFn: async () => {
      const res = await axios.get(`https://whereisit-server-side-plum.vercel.app/item/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      });
      return res.data;
    },
    enabled: !!user?.accessToken
  });

  const hundleItem = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { useremail, username, ...newPost } = data;
    newPost.contact = { useremail, username };
    newPost.date = selectedDate.toLocaleDateString();

    axios.put(`https://whereisit-server-side-plum.vercel.app/addupdate/${id}`, newPost, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`
      }
    })
      .then(res => {
        if (res.data.modifiedCount) {
          toast.success("Update successfully!");
        }
      });
  }

  if (isPending) {
    return <LoadingEle />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className='mb-32 px-4 md:px-12 dark:bg-gray-900 dark:text-gray-200'>
      <title>Update your Item</title>
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100 py-12">
          Update Lost or Found Item
        </h1>
      </div>

      <form
        onSubmit={hundleItem}
        className='p-4 md:p-6 rounded-2xl
          bg-gradient-to-br from-[#ffe6e7] via-[#fff4ec] to-[#fef9c9]
          dark:from-gray-800 dark:via-gray-900 dark:to-gray-800'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Select Post Type</label>
            <select
              defaultValue={data?.status}
              className='bg-white p-2 rounded-md w-full dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600'
              name='status'
              required
            >
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </fieldset>

          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Photo Url</label>
            <input
              defaultValue={data?.photUrl}
              type="url"
              name='photUrl'
              className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md p-2"
              placeholder="Photo url"
              required
            />
          </fieldset>

          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Title</label>
            <input
              defaultValue={data?.titlee}
              type="text"
              name='titlee'
              className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md p-2"
              placeholder="Title"
              required
            />
          </fieldset>

          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Description</label>
            <textarea
              defaultValue={data?.description}
              name='description'
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white dark:bg-gray-700 dark:text-gray-200 min-h-[80px] border border-gray-300 dark:border-gray-600 p-2"
              required
            />
          </fieldset>

          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Select Category</label>
            <select
              defaultValue={data?.category}
              className='bg-white p-2 rounded-md w-full dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600'
              name='category'
              required
            >
              <option value="Pets">Pets</option>
              <option value="Documents">Documents</option>
              <option value="Gadgets">Gadgets</option>
            </select>
          </fieldset>

          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Location</label>
            <input
              defaultValue={data?.location}
              type="text"
              name='location'
              className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md p-2"
              placeholder="Location"
              required
            />
          </fieldset>

          <div className="p-2">
            <label className="label block mb-1 text-xs font-semibold dark:text-gray-300">Date Lost/Found</label>
            <DatePicker
              className='bg-white p-2 rounded-md w-full dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600'
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MM/dd/yyyy"
            />
          </div>

          <div className='p-6 bg-gray-300 rounded-2xl sm:col-span-2 mb-4 dark:bg-gray-700'>
            <span className='block mb-2 font-semibold dark:text-gray-200'>Contact Information</span>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <fieldset className="p-2">
                <label className="label block mb-1 font-semibold dark:text-gray-300">Display Name</label>
                <input
                  readOnly
                  value={user?.displayName}
                  type="text"
                  name='username'
                  className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md p-2"
                  placeholder="User Name"
                  required
                />
              </fieldset>
              <fieldset className="p-2">
                <label className="label block mb-1 font-semibold dark:text-gray-300">Email</label>
                <input
                  readOnly
                  value={user?.email}
                  type="email"
                  name='useremail'
                  className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md p-2"
                  placeholder="User Email"
                  required
                />
              </fieldset>
            </div>
          </div>

        </div>

        <input
          type="submit"
          className='btn w-full bg-primary hover:bg-red-400 text-white font-semibold py-3 rounded-md transition-colors duration-300 '
          value="Update Post"
        />
      </form>
    </div>
  );
};

export default UpdateItems;
