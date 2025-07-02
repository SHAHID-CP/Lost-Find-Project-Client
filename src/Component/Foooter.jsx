import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Foooter = () => {
    return (
         <footer className="bg-muted py-8  bg-gray-200 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h2 className="text-xl font-bold">WhereIsIt</h2>
            <p className="text-sm ">Providing lost and find services since 2018</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>House 12, Road 4, Dhanmondi</p>
              <p>Dhaka 1205, Bangladesh</p>
              <p>Email: contact@whereIsItbd.com</p>
              <p>Phone: +880 1234-567890</p>
            </div>
          </div>

          
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to='/' className=" hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about'  className=" hover:text-indigo-600">
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact'  className=" hover:text-indigo-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/support' className=" hover:text-indigo-600">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to='https://www.facebook.com/' target='_blank'><FaFacebookF className='bg-blue-600 rounded-full p-1' color='white' size={28} /></Link>
              <Link to='https://x.com/' target='_blank'><FaXTwitter className='p-1'  size={28} color='black' /></Link>
              <Link to='https://www.linkedin.com/' target='_blank'><FaLinkedinIn className='bg-blue-500 rounded-full p-1' size={28}/></Link>
              <Link to='https://www.youtube.com/' target='_blank'><FaYoutube className='bg-red-600 rounded-full p-1' size={28} color='white' /></Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dashed">
          <p className="text-center text-sm font-medium">
            &copy; 2025 WhereIsIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Foooter;