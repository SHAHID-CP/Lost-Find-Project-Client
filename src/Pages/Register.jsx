import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { auth } from '../Firebase/firebase.init';
import { updateProfile } from 'firebase/auth';

const Register = () => {
     const {userCreate}= useAuth() ;
    const navigate= useNavigate();


    const hundleregister = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.photourl.value;

        if(password.length < 6){
            toast("password 6 charecter must");
            return;
        }
        if(!/[a-z]/.test(password)){
            toast("Password Lowercase must");
            return;
        }
        if(!/[A-Z]/.test(password)){
            toast("Password upercase must");
            return;
        }

        const obj ={
            displayName: name,
            photoURL: url
        }

        userCreate(email,password)
        .then( () =>{
            
            updateProfile(auth.currentUser ,obj)
            .then( () =>{
                toast("Account create successfully");
            })
            navigate('/')
        })
        .catch(()=>{
            toast("Please enter a valid information");
        })
    }


    return (
 <div className="card bg-gray-300 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl border-2 mb-24 border-orange-600 ">
            <title>Sign up</title>
            <h3 className="text-3xl text-center font-bold">Registration now</h3>
            <div className="card-body">
                <form onSubmit={hundleregister}  className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Enter your name" required/>

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />

                    <label className="label">Photo Url</label>
                    <input type="text" name='photourl' className="input" placeholder="Photo url" required/>

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required/>

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already Have an account? Please <Link className='text-blue-400 underline' to="/login">Login</Link></p>
                
            </div>
        </div>        
    );
};

export default Register;