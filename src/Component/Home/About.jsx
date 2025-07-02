import { MdPeople, MdTrendingUp, MdCheckCircle, MdLocationOn } from "react-icons/md"

export default function AboutUs() {
  const stats = [
    { label: "Active Users", value: "25K+", icon: <MdPeople className="w-6 h-6" /> },
    { label: "Years Operating", value: "8+", icon: <MdTrendingUp className="w-6 h-6" /> },
    { label: "Items Reunited", value: "15K+", icon: <MdCheckCircle className="w-6 h-6" /> },
    { label: "Cities Covered", value: "120+", icon: <MdLocationOn className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50 mb-24">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-[#ff6900]">WhereIsIt</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connecting people with their lost belongings through a trusted community-driven platform that brings hope
              and reunites what matters most.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200">
              <div className="flex justify-center mb-3 text-[#ff6900]">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            To create a safe and efficient platform where people can report lost items and help others find what they've
            lost. We believe in the power of community and the joy that comes from reuniting people with their cherished
            belongings.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Report</h3>
            <p className="text-gray-600">
              Post details about your lost or found item with photos and location information.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect</h3>
            <p className="text-gray-600">
              Our system matches lost and found items, and notifies relevant users automatically.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Reunite</h3>
            <p className="text-gray-600">Coordinate safely with the other party to return or retrieve your item.</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}
