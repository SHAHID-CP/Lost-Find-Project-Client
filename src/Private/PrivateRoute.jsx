import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import LoadingEle from '../Component/LoadingEle';

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth();
    const location= useLocation();

    if(loading){
        return <LoadingEle></LoadingEle>
    }
    if(!user){
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;