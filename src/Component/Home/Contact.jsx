import { MdEmail, MdPhone, MdLocationOn, MdPerson, MdMessage } from "react-icons/md"
import { toast } from "react-toastify";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MdEmail className="w-5 h-5" />,
      title: "Email Us",
      details: "support@whereisit.com",
    },
    {
      icon: <MdPhone className="w-5 h-5" />,
      title: "Call Us",
      details: "+880 1234-567890",
    },
    {
      icon: <MdLocationOn className="w-5 h-5" />,
      title: "Visit Us",
      details: "Dhanmondi, Dhaka",
    },
  ];

  const handle = () => {
    toast.success("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 mb-24 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Need help finding something or have questions about our service? We're here to assist you!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-[#ff6900]">
                {info.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{info.details}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdPerson className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff6900] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdEmail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff6900] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                <MdMessage className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                rows="4"
                placeholder="Describe your lost item, ask a question, or share feedback..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff6900] focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              ></textarea>
            </div>

            <button
              onClick={handle}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-500 transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "How quickly should I report a lost item?",
                a: "Report your lost item as soon as possible. The sooner you post, the better chance someone who found it can contact you.",
              },
              {
                q: "Is there a fee to use FindItBack?",
                a: "No, our basic service is completely free. We believe in helping people reunite with their belongings without barriers.",
              },
              {
                q: "How do I safely meet someone to return/retrieve an item?",
                a: "Always meet in public places during daylight hours. Consider meeting at police stations or other safe public locations.",
              },
              {
                q: "What if I can't find my item after 30 days?",
                a: "Don't give up! Items are sometimes found weeks or months later. Keep your listing active and check back regularly.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-6">
          <h3 className="font-semibold text-red-800 dark:text-red-400 mb-2">
            Lost Something Valuable or Important?
          </h3>
          <p className="text-red-700 dark:text-red-300 mb-3">
            For high-value items, important documents, or urgent situations, contact us immediately:
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-medium">
              Emergency: +1 (555) 911-FIND
            </span>
            <span className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-medium">
              urgent@whereisit.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
