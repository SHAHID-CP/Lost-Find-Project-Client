import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from './Logo';
import { Tooltip } from 'react-tooltip';
import useAuth from '../Hooks/useAuth';
import LoadingEle from './LoadingEle';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user,logoutUser,loading}= useAuth();
    const navi= useNavigate();
    
    // const user=true;
    
    const userPhoto=user?.photoURL;
    const userNamed=user?.displayName;

    if(loading){
        <LoadingEle></LoadingEle>
        return;
    }


    const hundle = ()=>{
        toast("Log out successfully");
        logoutUser() ;
    }
    
    const navihundle= ()=>{
        navi('/login') ;
    }
    

    return (
        <div className='navbar p-0 z-50 backdrop-blur-lg bg-white/30 shadow-md  mx-auto px-8 md:px-12 lg:px-16 xl:px-24 py-3 sticky top-0'>
        <div className='navbar-start'>
        <div className='dropdown'>
            <div
            tabIndex={0}
            role='button'
            className='cursor-pointer mr-1 lg:hidden'
            >
            <svg
                xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' >
                {' '}
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16'
                />{' '}
            </svg>
            </div>





            <div
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
                <ul>

            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/' >
                Home
                </NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/allItems' >
                All Items
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/about' >
                About
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/contact' >
                Contact
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/support' >
                Support
                </NavLink>
            </li>
            
            </ul>
            <button onClick={user ? hundle : navihundle} className='btn btn-primary'>{user? 'Logoout' : 'Login'}</button>
            
            </div>

            
        </div>

        <Link to='/' >
            <Logo></Logo>
        </Link>
        </div>

        <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-xl font-medium'>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/' >
                Home
                </NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/allItems' >
                All Items
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/about' >
                About
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/contact' >
                Contact
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-black' } to='/support' >
                Support
                </NavLink>
            </li>
        </ul>
        </div>

        <div className="navbar-end hidden lg:flex">
            
            <button onClick={user ? hundle : navihundle} className="btn bg-[#ff5835] rounded-full border-none text-gray-300 text-xl font-bold">{user? 'Logoout' : 'Login'}</button>
        </div>

                {/* image dropdown */}

                <div className={`not-lg:navbar-end ${user ? 'flex' : 'hidden'}`}>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="cursor-pointer mr-1">
                        <Link className='my-anchor-element'>
                        <div className={`avatar online sm:ml-2 ${user ? 'flex' : 'hidden'} `}>
                            <div className={`w-10 rounded-full border-2 border-[#ff5835] ${user ? 'block' : 'hidden'}  `} >
                    
                            {
                                userPhoto && <img src={userPhoto} alt='No photo' /> 
                            }
                            
                            </div>
                        </div>
                        <Tooltip anchorSelect=".my-anchor-element" place="bottom">
                        {
                            userNamed 
                        }
                        </Tooltip>
                        </Link>

                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box mt-3 z-1 w-42 p-2 shadow-sm not-sm:text-xs">
                    
                    {user && <>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/addItems' >
                        Add Item
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/allrecovered' >
                        Recovered Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : '' } to='/myItems' >
                        My Items
                        </NavLink>
                    </li>
                
                    </>}
                </ul>
                </div>
                </div>
    </div>
    );
};

export default Navbar;
