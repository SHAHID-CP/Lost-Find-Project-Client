import React from "react";
import { Star, MessageSquare, Users } from "lucide-react";

const FeedbackSection = () => {
  const feedbacks = [
    {
      name: "Karina",
      rating: 5,
      comment: "The service was excellent and very helpful!",
      date: "2025-08-05",
      photo: "https://i.ibb.co/DPY5C0Qv/law8.jpg",
    },
    {
      name: "Karim",
      rating: 4,
      comment: "Good experience, but there is room for improvement.",
      date: "2025-08-03",
      photo: "https://i.ibb.co/hFXppLVZ/law4.jpg",
    },
    {
      name: "Anika",
      rating: 5,
      comment: "Amazing experience, highly recommended!",
      date: "2025-08-01",
      photo: "https://i.ibb.co/zW6WHBtB/law9.jpg",
    },
  ];

  const stats = {
    totalFeedback: 125,
    avgRating: 4.8,
    bestCategory: "Lost & Found Management",
  };

  const topContributors = [
    { name: "Shuvo", count: 15, photo: "https://i.ibb.co.com/xqg0W7x4/images.jpg" },
    { name: "Nadia", count: 12, photo: "https://i.ibb.co.com/JjntnZhd/law13.jpg" },
    { name: "Tarek", count: 9, photo: "https://i.ibb.co.com/sdw4Vv6G/law7.jpg" },
  ];

  const highlights = [
    "‘Staff were very friendly and helpful.’",
    "‘Lost item management was flawless.’",
    "‘Online reporting system is very easy to use.’",
  ];

  return (
    <section
      className="
        py-16
        bg-gradient-to-t
        from-white
        via-gray-100
        to-[#e3e3e3]
        dark:from-gray-900
        dark:via-[#161b20]
        dark:to-[#1d232a]
        transition-colors duration-500
      "
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-gray-100">
          User Feedback & Highlights
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Stats Sidebar */}
          <div className="md:w-1/4 flex flex-col gap-10">
            <div className="flex items-center gap-4 text-gray-900 dark:text-gray-100">
              <MessageSquare size={40} className="text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{stats.totalFeedback}+</p>
                <p className="uppercase tracking-wider text-xs font-semibold">Total Feedback</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-900 dark:text-gray-100">
              <Star size={40} className="text-yellow-400" />
              <div>
                <p className="text-2xl font-bold">{stats.avgRating} / 5</p>
                <p className="uppercase tracking-wider text-xs font-semibold">Average Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-900 dark:text-gray-100">
              <Users size={40} className="text-green-600" />
              <div>
                <p className="text-2xl font-bold">{stats.bestCategory}</p>
                <p className="uppercase tracking-wider text-xs font-semibold">Best Category</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 flex flex-col gap-14">
            {/* Feedback Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {feedbacks.map(({ photo, name, rating, comment, date }, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={photo}
                      alt={name}
                      className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h4>
                      <div className="flex items-center">
                        {Array.from({ length: rating }).map((_, idx) => (
                          <Star key={idx} size={18} className="text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {new Date(date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 flex-grow">{comment}</p>
                </div>
              ))}
            </div>

            {/* Top Contributors */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Top Contributors</h3>
              <div className="flex gap-6">
                {topContributors.map(({ name, count, photo }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center cursor-pointer transition-transform hover:scale-110"
                  >
                    <img
                      src={photo}
                      alt={name}
                      className="w-16 h-16 rounded-full border-2 border-primary object-cover mb-2"
                    />
                    <p className="text-gray-900 dark:text-gray-100 font-semibold">{name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{count} feedbacks</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-900 rounded-2xl shadow-md p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Recent Highlights</h3>
              <div className="space-y-4">
                {highlights.map((quote, i) => (
                  <blockquote
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-xl p-5 italic text-gray-700 dark:text-gray-300 border-l-4 border-primary"
                  >
                    {quote}
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
