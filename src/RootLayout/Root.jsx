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
                <div >
                        <Outlet></Outlet>
                </div>
            </div>
            <ToastContainer />
            <Foooter></Foooter>
        </>
    );
};

export default Root;