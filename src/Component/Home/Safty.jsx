import React from "react";
import { ShieldCheck, AlertTriangle, Eye, Lock, Phone } from "lucide-react";

const safetyTips = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: "Verify Before Claiming",
    description: "Always verify the details of the lost item before claiming to avoid scams.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
    title: "Report Immediately",
    description: "Report lost or found items as soon as possible to increase chances of recovery.",
  },
  {
    icon: <Eye className="w-8 h-8 text-blue-500" />,
    title: "Stay Alert",
    description: "Keep an eye on community alerts and updates related to lost or found items.",
  },
  {
    icon: <Lock className="w-8 h-8 text-purple-500" />,
    title: "Protect Personal Information",
    description: "Never share sensitive personal information publicly when reporting or claiming items.",
  },
  {
    icon: <Phone className="w-8 h-8 text-indigo-500" />,
    title: "Communicate Safely",
    description: "Use secure messaging through the platform to arrange item returns safely.",
  },
];

const SafetyTipsSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto  py-20 flex flex-col lg:flex-row items-center gap-12  ">
      {/* Left side image */}
      <div className="flex-1 w-full max-w-lg">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Safety Guidelines"
          className="rounded-3xl shadow-lg object-cover w-full h-full"
        />
      </div>

      {/* Right side text content */}
      <div className="flex-1 text-gray-900 dark:text-gray-100">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Safety Tips & Guidelines</h2>
        <p className="mb-10 max-w-xl text-lg font-light">
          Follow these essential safety tips to protect yourself and ensure a smooth, secure experience when reporting or claiming lost and found items.
        </p>

        <ul className="space-y-8">
          {safetyTips.map(({ icon, title, description }, idx) => (
            <li key={idx} className="flex items-start gap-5">
              <div className="flex-shrink-0 mt-1">{icon}</div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-base font-normal">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SafetyTipsSection;
