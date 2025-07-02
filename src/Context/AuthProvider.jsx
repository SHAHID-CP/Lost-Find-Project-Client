import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { AuthContext } from './AuthContext';



const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading,setLoading] =useState(true);

    const userCreate = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async(currentUser) => {

            if(currentUser){
                const idToken= await currentUser.getIdToken();
                setUser(currentUser);
                setToken(idToken);
            }
            else{
                setUser(null)
                setToken(null)
            }

            
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo ={
        userCreate,
        loginUser,
        googleLogin,
        logoutUser,
        user,
        loading,
        token
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider