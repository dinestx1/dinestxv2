import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, ArrowRight } from 'lucide-react';

// --- MOCK DATA ---
// Replace with your actual team members and image URLs
// const teamMembers = [
//   {
//     name: 'Abhishek Kumar',
//     role: 'Founder & CEO',
//     imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=AJ',
//     bio: 'With a decade of experience in digital strategy, Alex leads the team with a passion for innovation and client success.'
//   },
//   {
//     name: 'Vishnu Prakash',
//     role: 'Founder ',
//     imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=MG',
//     bio: 'Maria is the architectural mastermind behind our tech, turning complex challenges into elegant, scalable solutions.'
//   },

// ];

const values = [
    {
      icon: <Target className="w-8 h-8 text-indigo-400" />,
      title: 'Innovation',
      description: 'We constantly push boundaries, exploring new technologies and strategies to keep you ahead of the curve.'
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: 'Partnership',
      description: 'Your success is our success. We work with you, not just for you, building lasting relationships based on trust.'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-400" />,
      title: 'Integrity',
      description: 'We believe in transparency and honesty. No jargon, no hidden fees—just clear communication and real results.'
    }
];


const About = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* --- Hero Section --- */}
      <div className="relative isolate min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -bottom-72 w-full h-full bg-[#512feb80] opacity-30 blur-3xl [clip-path:ellipse(95%_60%_at_10%_80%)]" />
          <div className="absolute w-full h-full bg-[#512feb80] opacity-50 blur-3xl [clip-path:ellipse(40%_25%_at_15%_85%)]" />
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-6"
        >
          <p className="text-indigo-400 font-semibold">OUR STORY</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 tracking-tight">
            We're Building the Digital Nests of Tomorrow
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            DinestX was founded on a simple idea: that every great brand deserves a digital home that not only looks beautiful but also drives growth. We are a collective of strategists, creatives, and technologists dedicated to making that happen.
          </p>
        </motion.div>
      </div>

      {/* --- Mission & Vision Section --- */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
                      className="p-8  border border-gray-800 rounded-2xl"
          >
            <div className="flex items-center gap-4">
              <Eye className="w-10 h-10 text-indigo-500" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed">
              To empower businesses by crafting bespoke digital solutions that foster growth, create meaningful connections, and deliver measurable results. We build the nest; you soar.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="p-8  border border-gray-800 rounded-2xl"
          >
            <div className="flex items-center gap-4">
              <Target className="w-10 h-10 text-pink-500" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed">
              To be the leading digital agency recognized for our creative innovation, strategic thinking, and unwavering commitment to our clients' success in an ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Our Values Section --- */}
        <div className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    The Principles That Guide Us
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-gray-400 max-w-2xl mx-auto mb-14"
                >
                    Our values are the foundation of our culture and the blueprint for our work. They define who we are and how we operate.
                </motion.p>
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-gray-900/50 border border-gray-800 p-8 rounded-xl text-center"
                    >
                        <div className="flex justify-center mb-4">{value.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-gray-400">{value.description}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
        </div>

      {/* --- Meet the Team Section --- */}
      {/* <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Innovators</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We are a team of passionate creators, thinkers, and problem-solvers, united by a love for all things digital.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-gray-800"
                />
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-indigo-400 text-sm">{member.role}</p>
                <p className="mt-2 text-gray-400 text-sm max-w-xs">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}
      
      {/* --- CTA Section --- */}

    </div>
  );
};

export default About;
