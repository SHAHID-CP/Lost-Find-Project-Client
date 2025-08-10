import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineDateRange } from 'react-icons/md';

const RecoCard = ({ singleItem }) => {
  const { _id, titlee, photUrl, location, description, date, status } = singleItem || {};

  return (
    <div className="border-2 rounded-2xl border-gray-300 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow cursor-pointer">
      <img
        className="w-full max-h-48 rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
        src={photUrl}
        alt={titlee || "Lost or Found Item"}
      />
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{titlee}</h3>
          <p
            className={`max-w-fit text-xs font-semibold text-white px-3 py-1 rounded-2xl select-none
              ${
                status === "Lost"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
          >
            {status}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">{description}</p>
        <div className="flex gap-2 items-center text-gray-500 dark:text-gray-400 text-sm mb-1">
          <FaLocationDot className="text-[#ff3d41]" />
          <span>{location}</span>
        </div>
        <div className="flex gap-2 items-center text-gray-500 dark:text-gray-400 text-sm">
          <MdOutlineDateRange className="text-[#ff3d41]" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default RecoCard;
