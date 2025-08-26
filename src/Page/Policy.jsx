import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, FileText, Package, RefreshCw, Cookie } from 'lucide-react';

// Since BG_Graphics is a local import, we'll use a placeholder.
// In your project, you can use your actual import:
// import BG_Graphics from '../assets/your-graphic.png';
const BG_Graphics = "https://placehold.co/1000x1000/000000/000000?text=BG";


function Policy() {
  const [activePolicy, setActivePolicy] = useState('termsOfService');

  const policies = {
    termsOfService: {
      name: "Terms of Service",
      icon: <FileText className="w-5 h-5 mr-2" />,
      subTitle: "The ground rules for using our services and platform.",
      content: [
        {
          title: "1. Introduction & Agreement",
          description: "Welcome to [Your Agency Name]! By engaging our services, you agree to be bound by these Terms of Service. These terms govern our professional relationship and the services we provide, including web design, digital marketing, SEO, and branding solutions."
        },
        {
          title: "2. Client Responsibilities",
          description: "To ensure project success, we require your timely feedback, provision of necessary content (text, images), and clear communication. Delays in providing these may affect project timelines."
        },
        {
          title: "3. Intellectual Property",
          description: "Upon final payment, we grant you a license to the final project deliverables. We retain the right to use the project for promotional purposes in our portfolio. Any third-party assets used are subject to their own licenses."
        },
      ]
    },
    privacyPolicy: {
      name: "Privacy Policy",
      icon: <ShieldCheck className="w-5 h-5 mr-2" />,
      subTitle: "How we collect, use, and protect your personal data.",
      content: [
        {
          title: "1. Data We Collect",
          description: "We collect information you provide directly to us, such as when you fill out a contact form (e.g., name, email, phone number). We also collect anonymous data through analytics tools to understand website traffic."
        },
        {
          title: "2. How We Use Your Data",
          description: "Your data is used to communicate with you, provide our services, and improve our website experience. We are committed to not selling your personal information to third parties."
        },
        {
          title: "3. Data Security",
          description: "We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure."
        },
      ]
    },
    projectDelivery: {
      name: "Project & Delivery",
      icon: <Package className="w-5 h-5 mr-2" />,
      subTitle: "Our process from project kickoff to final handover.",
      content: [
        {
          title: "1. Project Phases",
          description: "Our projects typically follow these phases: Discovery & Strategy, Design & Prototyping, Development, and Launch. Each phase requires your approval before we proceed to the next."
        },
        {
          title: "2. Revisions & Feedback",
          description: "Each project scope includes a set number of revision rounds (usually two) per major phase. Additional revisions may be subject to extra charges, which will be communicated transparently."
        },
        {
          title: "3. Final Handover",
          description: "Upon project completion and final payment, we will deliver all agreed-upon files, assets, and provide necessary training to manage your new digital solution."
        },
      ]
    },
    refundPolicy: {
      name: "Refund Policy",
      icon: <RefreshCw className="w-5 h-5 mr-2" />,
      subTitle: "Our policy regarding refunds for services.",
      content: [
        {
          title: "1. General Policy",
          description: "Payments for custom services are generally non-refundable as they cover the resources and time allocated to your project. This includes strategy, design, and development work already completed."
        },
        {
          title: "2. Project Cancellation",
          description: "If you choose to cancel a project, any refunds will be calculated based on the work completed up to that point. The initial deposit is non-refundable as it secures your spot in our project queue."
        },
      ]
    },
    cookiePolicy: {
        name: "Cookie Policy",
        icon: <Cookie className="w-5 h-5 mr-2" />,
        subTitle: "How we use cookies to enhance your browsing experience.",
        content: [
          {
            title: "1. What are Cookies?",
            description: "Cookies are small text files stored on your device that help our website function correctly and provide a personalized experience. They help us remember your preferences and understand how you use our site."
          },
          {
            title: "2. Types of Cookies We Use",
            description: "We use essential cookies for site functionality and analytics cookies (e.g., Google Analytics) to gather anonymous data about site usage, helping us to improve our services."
          },
          {
            title: "3. Your Choices",
            description: "You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website."
          },
        ]
      },
  };

  const activeData = policies[activePolicy];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-black text-white font-sans">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <main className="mx-auto max-w-5xl px-6 pt-24 md:pt-32 pb-20">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Our Policies</h1>
            <p className="text-lg text-gray-400">Clear, transparent, and designed to protect both you and us.</p>
        </div>

        {/* Policy Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {Object.keys(policies).map((key) => (
            <button
              key={key}
              onClick={() => setActivePolicy(key)}
              className={`relative px-4 py-3 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 ease-in-out flex items-center
                ${activePolicy === key
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/80'
                }`}
            >
              {policies[key].icon}
              {policies[key].name}
            </button>
          ))}
        </div>

        {/* Policy Content */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-10 backdrop-blur-lg">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activePolicy}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-white">{activeData.name}</h2>
                        <p className="text-indigo-400 mt-1">{activeData.subTitle}</p>
                    </div>
                    <div className="space-y-6 border-t border-gray-800 pt-6">
                        {activeData.content.map((item, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-semibold text-gray-100 mb-2">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default Policy;
