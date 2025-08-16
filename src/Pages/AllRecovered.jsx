import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from '../Hooks/useAuth';
import LoadingEle from '../Component/LoadingEle';
import ErrorPage from './ErrorPage';

const AllRecovered = () => {
  const { user, loading } = useAuth();

  const {
    isLoading,
    isError,
    data,
    error,
  } = useQuery({
    queryKey: ['singlerecover', user?.email],
    enabled: !loading && !!user?.email && !!user?.accessToken,
    queryFn: async () => {
      const res = await axios.get(
        `https://whereisit-server-side-plum.vercel.app/recover?email=${user.email}`,
        {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        }
      );
      return res.data;
    },
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

  if (loading || isLoading) return <LoadingEle />;
  if (isError) return <ErrorPage error={error} />;
  if (!data || data.length === 0) {
    return (
      <p className="text-3xl md:text-5xl text-center font-semibold mt-24 dark:text-gray-300">
        No Recovered Data Found
      </p>
    );
  }

  return (
    <div className="mb-24 px-4 md:px-12 max-w-7xl mx-auto">
      <title>Recovered Items</title>
      <h2 className="text-4xl md:text-5xl font-extrabold text-center my-8 dark:text-white py-12">
        All Recovered Items
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">#</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Image</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Title</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Date</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Location</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item._id || index}
                className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700"
              >
                <td className="p-3 border-b border-gray-300 dark:border-gray-600 text-center">{index + 1}</td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600">
                  <img
                    src={item.photUrl}
                    alt={item.titlee || 'Recovered Item'}
                    className="h-12 w-12 object-cover rounded-md mx-auto"
                    loading="lazy"
                    style={{ aspectRatio: '1 / 1' }}
                  />
                </td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600">{item.titlee}</td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600">{item.date}</td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600">{item.location}</td>
                <td className="p-3 border-b border-gray-300 dark:border-gray-600">
                  <span className="inline-block max-w-fit text-xs font-semibold text-white px-3 py-1 rounded-2xl bg-green-500 hover:bg-green-600 transition-colors duration-300">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecovered;
