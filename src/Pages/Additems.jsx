import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const Additems = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = useAuth();

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const imgbbApiKey = import.meta.env.VITE_image_upload_key ;

  // Image file select handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImageUrl("");
    setUploadError("");
  };

  // Image upload to imgbb
  const uploadImageToImgbb = async () => {
    if (!imageFile) {
      setUploadError("Please select an image first!");
      return null;
    }

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

  // Form submit handler
  const hundleItem = async (e) => {
    e.preventDefault();

    //  Upload image first
    const uploadedUrl = await uploadImageToImgbb();
    if (!uploadedUrl) return; // stop if upload failed

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Replace photo URL with uploaded URL
    data.photUrl = uploadedUrl;

    const { useremail, username, ...newPost } = data;
    newPost.contact = { useremail, username };
    newPost.date = selectedDate.toLocaleDateString();

    //  Send form data to backend
    axios.post('https://whereisit-server-side-plum.vercel.app/addItem', newPost, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`
      }
    })
      .then(res => {
        if (res.data.insertedId) {
          e.target.reset();
          setImageFile(null);
          setImageUrl("");
          toast.success("Item added successfully");
        }
      })
      .catch(() => {
        toast.error("Failed to add item");
      });
  };

  return (
    <div className="mb-32 min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
      <title>Add Item</title>

      <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-gray-100 pt-12">
          Submit Lost or Found Item
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
          Help reunite lost items with their owners or find what you've lost
        </p>
      </div>

      <form
        onSubmit={hundleItem}
        className="max-w-4xl mx-auto p-6 rounded-3xl bg-white
                   dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Post Type */}
          <fieldset className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Select Post Type</label>
            <select name="status" required className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#ff3d41]">
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </fieldset>

          {/* Image Upload */}
          <fieldset className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Upload Photo</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required
              className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#ff3d41]" />
            {uploading && <p className="text-sm text-yellow-500 mt-1">Uploading...</p>}
            {uploadError && <p className="text-sm text-red-500 mt-1">{uploadError}</p>}
            {imageUrl && <img src={imageUrl} alt="preview" className="mt-2 w-32 rounded-lg" />}
          </fieldset>

          {/* Title */}
          <fieldset className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Title</label>
            <input type="text" name="titlee" placeholder="Title" required className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border" />
          </fieldset>

          {/* Description */}
          <fieldset className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Description</label>
            <textarea name="description" placeholder="Describe your item..." required className="resize-none min-h-[80px] p-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
          </fieldset>

          {/* Category */}
          <fieldset className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Select Category</label>
            <select name="category" required className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border">
              <option value="Pets">Pets</option>
              <option value="Documents">Documents</option>
              <option value="Gadgets">Gadgets</option>
            </select>
          </fieldset>

          {/* Location */}
          <fieldset className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Location</label>
            <input type="text" name="location" placeholder="Location" required className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border" />
          </fieldset>

          {/* Date */}
          <div className="flex flex-col p-2">
            <label className="mb-1 text-xs font-semibold text-gray-700 dark:text-gray-400">Date Lost/Found</label>
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="dd/MM/yyyy"
              className="p-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border" />
          </div>

          {/* Contact Info */}
          <div className="p-6 rounded-2xl sm:col-span-2 bg-background dark:bg-gray-700 mb-4">
            <span className="block mb-3 font-semibold text-gray-800 dark:text-gray-200">Contact Information</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Display Name</label>
                <input defaultValue={user?.displayName} type="text" name="username" required className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border" />
              </fieldset>

              <fieldset className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-800 dark:text-gray-200">Email</label>
                <input defaultValue={user?.email} type="email" name="useremail" required className="p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border" />
              </fieldset>
            </div>
          </div>
        </div>

        <input type="submit" value="Add Post" className="w-full py-3 mt-4 rounded-lg font-semibold text-white bg-[#ff3d41] hover:bg-[#e0323a] transition-colors cursor-pointer" />
      </form>
    </div>
  );
};

export default Additems;
