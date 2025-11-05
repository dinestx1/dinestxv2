import { motion } from "framer-motion";
import { Briefcase, Heart, Clock, GraduationCap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Apply from "../components/Apply";
export default function Career() {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-indigo-400" />,
      title: "A Team That Cares",
      description:
        "We’re more than colleagues — we’re a crew that has each other’s back, celebrates wins, and supports through challenges."
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      title: "Work Your Way",
      description:
        "Early bird or night owl? Office or home? We trust you to work when and where you do your best."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-indigo-400" />,
      title: "Grow With Us",
      description:
        "From learning stipends to mentorship, we invest in your growth because your success is ours too."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-400" />,
      title: "Meaningful Work",
      description:
        "Your skills will shape products and experiences that truly make a difference."
    }
  ];

  const jobs = [
    { title: "Frontend Developer", location: "Remote", type: "Full-time" },
    { title: "Backend Developer", location: "New York, NY", type: "Full-time" },
    { title: "UI/UX Designer", location: "Remote", type: "Contract" },
    { title: "Marketing Specialist", location: "San Francisco, CA", type: "Part-time" }
  ];

  return (
    <div>
  <Helmet>
        <title>Career | Dinex</title>
        {/* <meta name="description" content="Discover our top-notch digital services, including web & app development, graphic design, and social media management to grow your brand." /> */}
        <link rel="canonical" href="https://dinestx.com/services" />
        <meta name="keywords" content="Web Development, App Development, Graphic Design, Social Media Management, Digital Solutions" />
      </Helmet>
  
    <div className=" text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Indigo Gradient */}
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-700/50 rounded-full blur-3xl" />
          {/* Black to Indigo Gradient */}
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-black to-indigo-700/50 rounded-full blur-3xl" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white"
        >
          Your Next Chapter Starts Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          We’re building more than just products — we’re building a place where
          you can do your best work, feel supported, and make a real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#jobs"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-indigo-500/50 hover:bg-indigo-700 transition-all"
          >
           Apply Now
          </a>
          <a
            href="mailto:dinestx@gmail.com"
            className="border border-indigo-500 text-indigo-400 px-6 py-3 rounded-lg font-medium hover:bg-indigo-500/10 transition-all"
          >
            Send Your Resume
          </a>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Why You’ll Love Working Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto mb-14"
          >
            We believe happy teams create the best work — and we’ve built a culture to match.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 border border-indigo-900/40 p-8 rounded-xl shadow-lg  hover:border-indigo-900 transition text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="py-20 bg-gradient-to-b from-black via-indigo-900/30 to-black">
       <Apply/>
      </section>
    </div>
      </div>
  );
}