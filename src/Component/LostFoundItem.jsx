import { Newspaper, AlertTriangle, MapPin, Users, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function LostFoundSections() {
  const newsItems = [
    {
      icon: <Newspaper className="inline w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />,
      title: "New Search Filters Available",
      description:
        "Find lost items faster with our enhanced category and location filters.",
    },
    {
      icon: <AlertTriangle className="inline w-6 h-6 text-yellow-500 dark:text-yellow-400 mr-3" />,
      title: "Missing Pet Alert System",
      description:
        "Instant notifications when pets matching your description are reported found.",
    },
    {
      icon: <MapPin className="inline w-6 h-6 text-green-500 dark:text-green-400 mr-3" />,
      title: "Expanded Coverage Areas",
      description: "LostFinder now covers 50+ new cities across the region.",
    },
    {
      icon: <Users className="inline w-6 h-6 text-pink-500 dark:text-pink-400 mr-3" />,
      title: "Community Success Stories",
      description:
        "Over 10,000 items successfully reunited with their owners this month.",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const newsletterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.8, ease: "easeOut" } },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-16 bg-gradient-to-t dark:bg-background dark:text-gray-300">
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-14"
      >
        Latest News & Stories
      </motion.h2>

      {/* Text List */}
      <ul className="space-y-10">
        {newsItems.map((item, i) => (
          <motion.li
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={itemVariants}
            className="flex items-start cursor-pointer"
          >
            <div className="flex-shrink-0 mt-1">{item.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>

      
      <motion.section
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={newsletterVariants}
        className="mt-24 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl py-16 px-10 text-center shadow-lg cursor-pointer"
      >
        <Mail className="w-16 h-16 mx-auto mb-6 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Stay Updated with LostFinder
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          Get notified instantly about lost or found items near your area.
        </p>

        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full max-w-md rounded-full border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-600 focus:border-indigo-500 transition"
          readOnly
        />

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Join 25,000+ users who never miss an update. Unsubscribe anytime.
        </p>
      </motion.section>
    </div>
  );
}
