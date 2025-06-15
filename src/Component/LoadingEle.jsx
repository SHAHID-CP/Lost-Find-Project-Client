import React from 'react';

const LoadingEle = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-330px)]'>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default LoadingEle;