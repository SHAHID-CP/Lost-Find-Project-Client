import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Foooter from '../Component/Foooter';
import Navbar from '../Component/Navbar';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-330px)]'>
                <div className='mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                        <Outlet></Outlet>
                </div>
            </div>
            <ToastContainer />
            <Foooter></Foooter>
        </>
    );
};

export default Root;