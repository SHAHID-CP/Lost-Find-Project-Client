import React from 'react';
import { Link, useRouteError } from 'react-router';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="py-24 text-center bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col justify-center items-center px-4">
      <title>Error page</title>
      
      <div className="w-full max-w-md mx-auto mb-8">
        <DotLottieReact
          src="https://lottie.host/5ed5666c-77ad-4976-80fc-592f172c1143/G0nOtcts02.lottie"
          loop
          autoplay
        />
      </div>

      <h1 className="mb-8 text-7xl font-thin text-gray-900 dark:text-gray-100">
        {error?.status || 404}
      </h1>

      <p className="mb-3 md:mb-8 text-xl font-bold text-gray-900 dark:text-gray-300 md:text-2xl">
        {error?.error?.message || 'Something Went Wrong!'}
      </p>

      <Link
        to="/"
        className="inline-block px-8 py-3 rounded-full font-bold text-xl
                   bg-[#ff3d41] text-white
                   hover:bg-[#e0323a]
                   transition-colors duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
