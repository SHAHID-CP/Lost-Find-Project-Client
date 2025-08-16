import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from './Logo';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';
import { ModeToggle } from '@/Theme/ModeToggle';

const Navbar = () => {
  const { user, logoutUser, loading } = useAuth();
  const navi = useNavigate();
  const userPhoto = user?.photoURL;

  const handleLogout = () => {
    toast("Log out successfully");
    logoutUser();
  };

  const handleLogin = () => {
    navi('/login');
  };

  if (loading) {
    return <p>.</p>;
  }

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-primary border-b-2 border-primary'
      : 'text-gray-900 hover:text-primary dark:hover:text-primary transition-colors dark:transition-colors duration-200 dark:duration-200 dark:text-gray-100 ';

  return (
    <div className='navbar p-0 z-50  bg-white dark:bg-gray-900 shadow-md mx-auto px-8 md:px-12 lg:px-16 xl:px-24 py-3 sticky top-0 max-w-[2520px] transition-colors duration-300'>

      {/* Navbar Start */}
      <div className='navbar-start'>
        {/* Mobile Menu */}
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='cursor-pointer mr-1 lg:hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-800 dark:text-gray-200' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </div>

          <div tabIndex={0} className='menu menu-sm dropdown-content bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
            <ul>
              <li><NavLink to='/' className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to='/allItems' className={navLinkClass}>All Items</NavLink></li>
              <li><NavLink to='/about' className={navLinkClass}>About</NavLink></li>
              <li><NavLink to='/contact' className={navLinkClass}>Contact</NavLink></li>
              <li><NavLink to='/support' className={navLinkClass}>Support</NavLink></li>
            </ul>
            <div className="mt-2">
              <button
                onClick={user ? handleLogout : handleLogin}
                className='w-full py-2 bg-primary hover:bg-primary/90 text-white rounded-full border-none transition-colors duration-200'
              >
                {user ? 'Logout' : 'Login'}
              </button>
            </div>
          </div>
        </div>

        {/* Logo */}
        <Link to='/'><Logo /></Link>
      </div>

      {/* Navbar Center - Desktop Menu */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-lg font-medium'>
          <li><NavLink to='/' className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to='/allItems' className={navLinkClass}>All Items</NavLink></li>
          <li><NavLink to='/about' className={navLinkClass}>About</NavLink></li>
          <li><NavLink to='/contact' className={navLinkClass}>Contact</NavLink></li>
          <li><NavLink to='/support' className={navLinkClass}>Support</NavLink></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-2">
        <ModeToggle />

        <button
          onClick={user ? handleLogout : handleLogin}
          className="btn bg-primary hover:bg-primary/90 text-white rounded-full border-none px-5 hidden lg:inline-flex transition-colors duration-200"
        >
          {user ? 'Logout' : 'Login'}
        </button>

        {user && (
          <div className="dropdown dropdown-end relative">
            <div tabIndex={0} role="button" className="cursor-pointer mr-1 flex items-center gap-2 select-none group">
              <Link className='my-anchor-element flex items-center gap-2'>
                <div className="avatar online relative">
                  <div className="w-10 rounded-full border-2 border-primary overflow-hidden">
                    {userPhoto ? (
                      <img src={userPhoto} alt='No photo' className="object-cover w-full h-full" />
                    ) : (
                      <div className="bg-gray-300 w-full h-full flex items-center justify-center text-gray-600">
                        N/A
                      </div>
                    )}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 absolute -bottom-1 -right-1 text-primary bg-white dark:bg-gray-900 rounded-full p-[1px] shadow-md"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
              </Link>
            </div>

            <ul tabIndex={0} className="dropdown-content menu bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-box mt-3 z-1 w-42 p-2 shadow-sm not-sm:text-xs">
              <li><NavLink to='/addItems' className={navLinkClass}>Add Item</NavLink></li>
              <li><NavLink to='/allrecovered' className={navLinkClass}>Recovered Items</NavLink></li>
              <li><NavLink to='/myItems' className={navLinkClass}>My Items</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
