import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from './Logo';
import useAuth from '../Hooks/useAuth';
import LoadingEle from './LoadingEle';
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
  return (
    <div className='navbar p-0 z-50 backdrop-blur-lg bg-[#e3e3e3]/70 shadow-md mx-auto px-8 md:px-12 lg:px-16 xl:px-24 py-3 sticky top-0 max-w-[2520px]'>

      {/* Navbar Start */}
      <div className='navbar-start'>
        {/* Mobile Menu */}
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='cursor-pointer mr-1 lg:hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-200' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </div>

          
          <div tabIndex={0} className='menu menu-sm dropdown-content bg-background rounded-box z-1 mt-3 w-52 p-2 shadow'>
            <ul>
              <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-[#ff3d41]' : ''}>Home</NavLink></li>
              <li><NavLink to='/allItems' className={({ isActive }) => isActive ? 'text-[#ff3d41]' : ''}>All Items</NavLink></li>
              <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#ff3d41]' : ''}>About</NavLink></li>
              <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#ff3d41]' : ''}>Contact</NavLink></li>
              <li><NavLink to='/support' className={({ isActive }) => isActive ? 'text-[#ff3d41]' : ''}>Support</NavLink></li>
            </ul>

            
            <div className="mt-2">
              <button
                onClick={user ? handleLogout : handleLogin}
                className='w-full py-2 bg-[#ff3d41] text-white rounded-full border-none'
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
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-[#ff3d41] border-b-2 border-[#ff3d41]' : 'text-black'}>Home</NavLink></li>
          <li><NavLink to='/allItems' className={({ isActive }) => isActive ? 'text-[#ff3d41] border-b-2 border-[#ff3d41]' : 'text-black'}>All Items</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-[#ff3d41] border-b-2 border-[#ff3d41]' : 'text-black'}>About</NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#ff3d41] border-b-2 border-[#ff3d41]' : 'text-black'}>Contact</NavLink></li>
          <li><NavLink to='/support' className={({ isActive }) => isActive ? 'text-[#ff3d41] border-b-2 border-[#ff3d41]' : 'text-black'}>Support</NavLink></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-2">
        
        <ModeToggle />

        
        <button
          onClick={user ? handleLogout : handleLogin}
          className="btn bg-[#ff3d41] hover:bg-[#ff5835] text-white rounded-full border-none px-5 hidden lg:inline-flex"
        >
          {user ? 'Logout' : 'Login'}
        </button>

        
        {user && (
          <div className="dropdown dropdown-end relative">
            <div tabIndex={0} role="button" className="cursor-pointer mr-1 flex items-center gap-2 select-none group">
              <Link className='my-anchor-element flex items-center gap-2'>
                <div className="avatar online relative">
                  <div className="w-10 rounded-full border-2 border-[#ff3d41] overflow-hidden">
                    {userPhoto ? (
                      <img src={userPhoto} alt='No photo' className="object-cover w-full h-full" />
                    ) : (
                      <div className="bg-gray-300 w-full h-full flex items-center justify-center text-gray-600">
                        N/A
                      </div>
                    )}
                  </div>
                  {/* Hamburger icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 absolute -bottom-1 -right-1 text-[#ff3d41] bg-white rounded-full p-[1px] shadow-md"
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

            <ul tabIndex={0} className="dropdown-content menu bg-background rounded-box mt-3 z-1 w-42 p-2 shadow-sm not-sm:text-xs">
              <li><NavLink to='/addItems' className={({ isActive }) => isActive ? 'text-[#ff3d41]' : ''}>Add Item</NavLink></li>
              <li><NavLink to='/allrecovered' className={({ isActive }) => isActive ? 'text-[#ff3d41]' : ''}>Recovered Items</NavLink></li>
              <li><NavLink to='/myItems' className={({ isActive }) => isActive ? 'text-[#ff3d41]' : ''}>My Items</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
