import { Newspaper, AlertTriangle, MapPin, Users, Mail } from "lucide-react"

export default function LostFoundSections() {
  const newsItems = [
    {
      icon: <Newspaper className="w-5 h-5" />,
      title: "New Search Filters Available",
      description: "Find lost items faster with our enhanced category and location filters.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Missing Pet Alert System",
      description: "Instant notifications when pets matching your description are reported found.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Expanded Coverage Areas",
      description: "LostFinder now covers 50+ new cities across the region.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Community Success Stories",
      description: "Over 10,000 items successfully reunited with their owners this month.",
    },
  ]

  return (
    <div className="w-full mb-24">
      {/* Blog/Updates Section */}
      <section className="py-16 px-4 bg-white ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">Latest News & Stories</h2>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="group border-l-4 border-gray-400 pl-4 py-4 transition-all duration-300 hover:scale-[1.02] hover:pl-6 hover:border-gray-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300 mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Info Section */}
      <section className="py-16 px-4 bg-[#d1fae55e] rounded-2xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="w-12 h-12 mx-auto mb-4 text-[#ff5835]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Stay Updated with LostFinder</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Get notified about lost or found items near you.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 focus:border-gray-400 transition-all duration-300"
                readOnly
              />
            </div>

            <p className="text-gray-500 text-sm mt-4">
              Join 25,000+ users who never miss an update. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
