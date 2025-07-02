import {
  MdSearch,
  MdQuestionAnswer,
  MdBuild,
  MdSettings,
  MdExpandMore,
  MdExpandLess,
  MdChat,
  MdEmail,
  MdPhone,
} from "react-icons/md"
import { useState } from "react"

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  

  const faqs = [
    {
      question: "How do I report a lost item?",
      answer:
        "Click 'Report Lost Item' on the homepage, fill in the details with photos and location information, and submit your report. You'll receive notifications when potential matches are found.",
    },
    {
      question: "What should I do if I find someone's lost item?",
      answer:
        "Click 'Report Found Item' and provide as much detail as possible. Our system will automatically match it with lost item reports and notify the owner.",
    },
    {
      question: "How do I safely meet someone to return an item?",
      answer:
        "Always meet in public places during daylight hours. We recommend police stations, shopping centers, or other well-lit public areas. Never meet at private residences.",
    },
    {
      question: "Is there a time limit for keeping items posted?",
      answer:
        "Lost item reports stay active for 90 days by default, but you can extend or remove them anytime. Found item reports remain active until the item is claimed.",
    },
    {
      question: "What if someone claims my found item but I'm not sure it's theirs?",
      answer:
        "Ask them to describe specific details about the item that weren't mentioned in your post. Trust your instincts and don't hand over items if you have doubts.",
    },
  ]

  const supportOptions = [
    {
      icon: <MdChat className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
    },
    {
      icon: <MdEmail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us your questions or concerns",
    },
    {
      icon: <MdPhone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Call our dedicated support line",
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50 mb-24">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              WhereIsIt <span className="text-[#ff6900]">Support</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Get help with reporting items, account management, and making successful connections.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MdSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6900] focus:border-transparent"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 text-center border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-[#ff6900]">
                {option.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>

        

        {/* Safety Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">🛡️ Safety First</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
            <div>
              <p className="mb-2">• Always meet in public, well-lit areas</p>
              <p className="mb-2">• Bring a friend when possible</p>
              <p>• Trust your instincts about people and situations</p>
            </div>
            <div>
              <p className="mb-2">• Verify item details before meeting</p>
              <p className="mb-2">• Don't share personal information unnecessarily</p>
              <p>• Report suspicious behavior to our team</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Find answers to common questions about using FindItBack</p>
          </div>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <MdExpandLess className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <MdExpandMore className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>

                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}
