import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
// import { Helmet } from 'react-helmet-async'; // Assuming you have this set up

// --- MOCK COMPONENTS for demonstration ---
// Replace these with your actual component imports
const BG_Graphics = "https://placehold.co/1000x1000/000000/000000?text=BG";

const HoverButton = ({ label, onClick, width, height, className }) => (
  <button onClick={onClick} className={`${width} ${height} ${className} text-white font-semibold rounded-lg transition-all hover:bg-indigo-500`}>
    {label}
  </button>
);

const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
// --- END MOCK COMPONENTS ---


const ContactUs = () => (
  <div className='select-none font-sans'>
    {/* <Helmet>
      <title>Contact Us - Dinestx</title>
      <link rel="canonical" href="https://dinestx.com/contact-us" />
      <meta name="description" content="Get in touch with Dinestx. We're ready to discuss your project and explore how we can help you build your digital vision." />
    </Helmet> */}

    <div className='w-full relative bg-black'>
      <div className="relative isolate min-h-screen flex items-center justify-center py-16">
        {/* Blurred Background Images */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -bottom-72 w-full h-full bg-[#512feb80] opacity-30 blur-3xl [clip-path:ellipse(95%_60%_at_10%_80%)]" />
          <div className="absolute w-full h-full bg-[#512feb80] opacity-50 blur-3xl [clip-path:ellipse(40%_25%_at_15%_85%)]" />
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
        </div>
        
        <Reveal>
          <section className="w-full max-w-[100vw] mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              
              {/* Left: Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
                <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-gray-300 text-sm">
                    Let’s Connect — We’re Ready to Talk
                  </p>
                </div>
                
                <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight">
                  Have a Vision? <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Let’s Build It Together.
                  </span>
                </h1>
                
                <p className="text-gray-400 text-base max-w-md leading-relaxed">
                  Whether you're ready to start your project or just exploring ideas, we're here to help. Drop us a message and we'll get back to you quickly.
                </p>

                {/* --- WHATSAPP CONTACT SECTION --- */}
                <div className="mt-4 pt-6 border-t border-white/10 w-full max-w-md">
                    <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-3 justify-center lg:justify-start">
                        <Phone className="w-5 h-5 text-indigo-400" />
                        Or reach us directly on WhatsApp:
                    </h3>
                    <div className="mt-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="https://wa.me/918409031739" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">+91 84090 31739</a>
                        <a href="https://wa.me/917370845528" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">+91 73708 45528</a>
                    </div>
                </div>

              </div>
              
              {/* Right: Contact Form */}
              <form className="w-full lg:w-1/2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col gap-6 text-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="fullName" className="block mb-2 text-sm text-gray-300">Full Name <span className='text-red-500'>*</span></label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="contactNumber" className="block mb-2 text-sm text-gray-300">Contact Number <span className='text-red-500'>*</span></label>
                    <input
                      id="contactNumber"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-300">Email <span className='text-red-500'>*</span></label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block mb-2 text-sm text-gray-300">Description <span className='text-red-500'>*</span></label>
                  <textarea
                    id="description"
                    rows="4"
                    placeholder="Tell us about your project or message"
                    className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end mt-2">
                  <HoverButton
                    label="Send Message"
                    onClick={() => {
                      // Handle form submission
                    }}
                    width="w-44"
                    height="h-12"
                    className="bg-indigo-600"
                  />
                </div>
              </form>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  </div>
);

export default ContactUs;
