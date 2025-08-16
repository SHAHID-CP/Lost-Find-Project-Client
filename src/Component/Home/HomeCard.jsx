import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  hover: { scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }
};

const HomeCard = ({ singleItem }) => {
  const { _id, titlee, photUrl, description } = singleItem || {};

  return (
    <motion.div
      className="flex flex-col border-2 rounded-3xl border-gray-200 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg overflow-hidden font-sans cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      
      <div className="overflow-hidden rounded-t-3xl aspect-[3/2] border-b-2 border-background">
        <motion.img
          src={photUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={titlee || 'Item Image'}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4 flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {titlee || 'Untitled Item'}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {description || 'No description available.'}
        </p>

        <Link to={`/items/${_id}`} className="mt-auto">
          <motion.button
            className="w-full py-3 rounded-2xl bg-primary hover:bg-red-600 dark:bg-primary dark:hover:bg-red-600 text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default HomeCard;
