import React, { useState, useEffect } from 'react';
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

  // Image upload states
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const imgbbApiKey = import.meta.env.VITE_image_upload_key;

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

  useEffect(() => {
    if (data?.photUrl) setImageUrl(data.photUrl);
  }, [data]);

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setUploadError("");
  };

  // Upload image to imgbb
  const uploadImageToImgbb = async () => {
    if (!imageFile) return imageUrl; // if no new file, keep old URL
    setUploading(true);
    setUploadError("");
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData);
      if (res.data && res.data.success) {
        setImageUrl(res.data.data.url);
        return res.data.data.url;
      } else {
        setUploadError("Image upload failed. Try again.");
        return null;
      }
    } catch (err) {
      console.error(err);
      setUploadError("Something went wrong during image upload.");
      return null;
    } finally {
      setUploading(false);
    }
  };

  const hundleItem = async (e) => {
    e.preventDefault();
    const uploadedUrl = await uploadImageToImgbb();
    if (!uploadedUrl) return;

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { useremail, username, photUrl, ...newPost } = data;
    newPost.contact = { useremail, username };
    newPost.date = selectedDate.toLocaleDateString();
    newPost.photUrl = uploadedUrl;

    axios.put(`https://whereisit-server-side-plum.vercel.app/addupdate/${id}`, newPost, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`
      }
    })
      .then(res => {
        if (res.data.modifiedCount) {
          toast.success("Update successfully!");
        }
      })
      .catch(() => toast.error("Update failed!"));
  }

  if (isPending) return <LoadingEle />;
  if (isError) return <ErrorPage />;

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
        className='max-w-4xl mx-auto p-6 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 shadow-lg'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

          {/* Post Type */}
          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Select Post Type</label>
            <select defaultValue={data?.status} name='status' required
              className='bg-white p-2 rounded-md w-full dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600'>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </fieldset>

          {/* Image Upload */}
          <fieldset className="p-2 flex flex-col">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Upload Photo</label>
            <input type="file" accept="image/*" onChange={handleImageChange}
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-200" />
            {uploading && <p className="text-sm text-yellow-500 mt-1">Uploading...</p>}
            {uploadError && <p className="text-sm text-red-500 mt-1">{uploadError}</p>}
            {imageUrl && <img src={imageUrl} alt="preview" className="mt-2 w-32 rounded-md" />}
          </fieldset>

          {/* Title */}
          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Title</label>
            <input defaultValue={data?.titlee} type="text" name='titlee' required
              className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md p-2"
              placeholder="Title" />
          </fieldset>

          {/* Description */}
          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Description</label>
            <textarea defaultValue={data?.description} name='description' required
              className="w-full rounded-md focus:ring focus:ring-opacity-75 bg-white dark:bg-gray-700 dark:text-gray-200 min-h-[80px] border border-gray-300 dark:border-gray-600 p-2"
              placeholder="Describe your item..." />
          </fieldset>

          {/* Category */}
          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Select Category</label>
            <select defaultValue={data?.category} name='category' required
              className='bg-white p-2 rounded-md w-full dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600'>
              <option value="Pets">Pets</option>
              <option value="Documents">Documents</option>
              <option value="Gadgets">Gadgets</option>
            </select>
          </fieldset>

          {/* Location */}
          <fieldset className="p-2">
            <label className="label block mb-1 font-semibold dark:text-gray-300">Location</label>
            <input defaultValue={data?.location} type="text" name='location' required
              className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md p-2"
              placeholder="Location" />
          </fieldset>

          {/* Date */}
          <div className="p-2">
            <label className="label block mb-1 text-xs font-semibold dark:text-gray-300">Date Lost/Found</label>
            <DatePicker
              className='bg-white p-2 rounded-md w-full dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600'
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MM/dd/yyyy"
            />
          </div>

          {/* Contact Info */}
          <div className='p-6 bg-background rounded-2xl sm:col-span-2 mb-4 dark:bg-gray-700'>
            <span className='block mb-2 font-semibold dark:text-gray-200'>Contact Information</span>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <fieldset className="p-2">
                <label className="label block mb-1 font-semibold dark:text-gray-300">Display Name</label>
                <input readOnly value={user?.displayName} type="text" name='username'
                  className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md p-2" />
              </fieldset>
              <fieldset className="p-2">
                <label className="label block mb-1 font-semibold dark:text-gray-300">Email</label>
                <input readOnly value={user?.email} type="email" name='useremail'
                  className="input w-full bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md p-2" />
              </fieldset>
            </div>
          </div>

        </div>

        <input type="submit"
          className='btn w-full bg-primary hover:bg-red-400 text-white font-semibold py-3 rounded-md transition-colors duration-300'
          value="Update Post"
        />
      </form>
    </div>
  );
};

export default UpdateItems;
