import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();

    loginUser(email, password)
      .then(() => {
        toast.success("User logged in successfully");
        navigate(location?.state?.from || '/');
      })
      .catch(() => {
        toast.error("Please enter valid email and password");
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("User logged in successfully");
        navigate(location?.state?.from || '/');
      });
  };

  
  const autofillData = {
    email: 'jahhidbabu@gmail.com',
    password: 'Jjjjjj',
  };

  const fillCredentials = (emailValue, passwordValue) => {
    setEmail(emailValue);
    setPassword(passwordValue);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 space-y-6 py-6">
      {/* Login Form Card */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border-2 border-[#ff3d41] rounded-2xl shadow-xl p-8">
        <title>Login</title>
        <h3 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-8">
          Login now
        </h3>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3d41]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3d41]"
            />
          </div>

          <div className="text-right">
            <Link
              to="#"
              className="text-sm text-[#ff3d41] hover:underline dark:text-[#ff6f6f]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#ff3d41] hover:bg-[#e0323a] transition-colors rounded-lg text-white font-semibold"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Don't have an account yet?{' '}
          <Link to="/register" className="text-[#ff3d41] font-semibold hover:underline dark:text-[#ff6f6f]">
            Register
          </Link>
        </p>

        <button
          onClick={handleGoogle}
          className="mt-6 w-full flex items-center justify-center gap-2 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="M0 0h512v512H0z" fill="#fff" />
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
            </g>
          </svg>
          Login with Google
        </button>
      </div>

      
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border-2 border-[#ff3d41] rounded-xl shadow-md p-3">
        <h2 className="text-lg font-semibold text-[#ff3d41] mb-2 text-center">
          Auto-fill Admin Credentials
        </h2>

        <button
          onClick={() => fillCredentials(autofillData.email, autofillData.password)}
          className="w-full flex justify-center items-center gap-2 bg-[#ffe6e7] dark:bg-[#3f1f1f] border border-[#ff3d41] rounded-md px-3 py-2 text-sm font-medium text-[#ff3d41] hover:bg-[#ff3d41] hover:text-white transition"
          title="Click to auto-fill email and password"
        >
          Auto-fill gmail & password
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;
