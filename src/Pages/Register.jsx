import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { auth } from '../Firebase/firebase.init';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { userCreate } = useAuth();
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const url = e.target.photourl.value.trim();

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain a lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain an uppercase letter");
      return;
    }

    const obj = {
      displayName: name,
      photoURL: url,
    };

    userCreate(email, password)
      .then(() => {
        updateProfile(auth.currentUser, obj)
          .then(() => {
            toast.success("Account created successfully");
            navigate('/');
          });
      })
      .catch(() => {
        toast.error("Please enter valid information");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-8">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border-2 border-[#ff3d41] rounded-2xl shadow-xl p-8">
        <title>Sign Up</title>
        <h3 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-8">
          Registration Now
        </h3>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3d41]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3d41]"
            />
          </div>

          <div>
            <label htmlFor="photourl" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Photo Url
            </label>
            <input
              id="photourl"
              name="photourl"
              type="text"
              placeholder="Photo URL"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3d41]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3d41]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#ff3d41] hover:bg-[#e0323a] transition-colors rounded-lg text-white font-semibold"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="text-[#ff3d41] font-semibold hover:underline dark:text-[#ff6f6f]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
