import { MdPeople, MdTrendingUp, MdCheckCircle, MdLocationOn } from "react-icons/md";

export default function AboutUs() {
  const stats = [
    { label: "Active Users", value: "25K+", icon: <MdPeople className="w-6 h-6" /> },
    { label: "Years Operating", value: "8+", icon: <MdTrendingUp className="w-6 h-6" /> },
    { label: "Items Reunited", value: "15K+", icon: <MdCheckCircle className="w-6 h-6" /> },
    { label: "Cities Covered", value: "120+", icon: <MdLocationOn className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 text-gray-800 dark:text-gray-300 mb-24 transition-colors duration-500">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
              About <span className="text-primary">WhereIsIt</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-500">
              Connecting people with their lost belongings through a trusted community-driven platform that brings hope
              and reunites what matters most.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-200 to-white dark:from-gray-800 dark:to-gray-900 
                         rounded-lg shadow-md p-6 text-center border border-gray-300 dark:border-gray-700 
                         hover:scale-105 hover:shadow-lg hover:border-primary 
                         transform transition duration-300 ease-out"
            >
              <div className="flex justify-center mb-3 text-primary">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-700 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-800 
                        hover:scale-105 hover:border-primary transform transition duration-300 ease-out">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-center text-lg leading-relaxed">
            To create a safe and efficient platform where people can report lost items and help others find what they've
            lost. We believe in the power of community and the joy that comes from reuniting people with their cherished
            belongings.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Report", "Connect", "Reunite"].map((title, idx) => (
            <div
              key={idx}
              className="text-center hover:scale-105 transform transition duration-300 ease-out"
            >
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">{idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-gray-700 dark:text-gray-400">
                {idx === 0 &&
                  "Post details about your lost or found item with photos and location information."}
                {idx === 1 &&
                  "Our system matches lost and found items, and notifies relevant users automatically."}
                {idx === 2 &&
                  "Coordinate safely with the other party to return or retrieve your item."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
