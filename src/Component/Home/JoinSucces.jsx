import React from 'react';

const JoinSucces = () => {
    return (
        <div className="bg-[#e7e7e8] rounded-lg p-8 max-w-7xl mx-auto mb-12">
            <h4 className="text-2xl font-bold mb-4 text-center" >Join Our Success Stories</h4>
            <p className="text-gray-400 mb-6 text-center">Over 10,000+ items successfully reunited with their owners</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Report Lost Item</button>
                <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Report Found Item</button>
            </div>
        </div>
    );
};

export default JoinSucces;