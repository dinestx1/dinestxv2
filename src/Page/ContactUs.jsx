"use client"
import { motion } from "framer-motion"
import { Mail, MessageCircle, Sparkles } from "lucide-react"
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs"

// --- MOCK COMPONENTS for demonstration ---
const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

const FloatingCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group"
  >
    {children}
  </motion.div>
)
// --- END MOCK COMPONENTS ---

const ContactUs = () => (
  <div className="select-none font-sans">
    <div className="w-full relative bg-black overflow-hidden">
      <div className="relative isolate min-h-screen flex items-center justify-center py-24">
        {/* Enhanced Background with more layers */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -bottom-72 w-full h-full bg-[#512feb80] opacity-30 blur-3xl [clip-path:ellipse(95%_60%_at_10%_80%)]" />
          <div className="absolute w-full h-full bg-[#512feb80] opacity-50 blur-3xl [clip-path:ellipse(40%_25%_at_15%_85%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
        </div>

        <Reveal>
          <section className="w-full max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center text-center space-y-16">
              {/* Hero Section */}
              <div className="max-w-4xl space-y-8">
                {/* Animated tagline */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full mt-16 px-6 py-3"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <p className="text-gray-300 text-sm font-medium">Let's Connect — We're Ready to Talk</p>
                </motion.div>

                {/* Main heading with enhanced typography */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white font-extrabold text-5xl md:text-7xl leading-tight"
                >
                  Have a Vision?{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Let's Build It Together.
                  </span>
                </motion.h1>

                {/* Enhanced subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                  Whether you're ready to start your project or just exploring ideas, we're here to help. Choose your
                  preferred way to connect with us.
                </motion.p>
              </div>

              {/* Contact Options Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                {/* WhatsApp Card */}
                <FloatingCard delay={0.1}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col items-center space-y-6">
                      <div className="p-4 rounded-full bg-green-500/20 border border-green-500/30">
                        <BsWhatsapp className="w-8 h-8 text-green-400" />
                      </div>
                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-semibold text-white">WhatsApp Direct</h3>
                        <p className="text-gray-400 text-sm">Get instant responses on WhatsApp</p>
                      </div>
                      <div className="space-y-3 w-full">
                        <a
                          href="https://wa.me/message/AEMTGH2KK5QMC1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-3 rounded-xl border border-green-400/30 bg-green-400/10 text-gray-200 hover:bg-green-400/20 hover:text-white transition-all text-center font-medium"
                        >
                          +91 1169272559
                        </a>
                      
                      </div>
                    </div>
                  </div>
                </FloatingCard>

                {/* Social Media Card */}
                <FloatingCard delay={0.2}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col items-center space-y-6">
                      <div className="p-4 rounded-full bg-purple-500/20 border border-purple-500/30">
                        <MessageCircle className="w-8 h-8 text-purple-400" />
                      </div>
                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-semibold text-white">Social Connect</h3>
                        <p className="text-gray-400 text-sm">Follow us and stay updated</p>
                      </div>
                      <div className="flex gap-4 justify-center">
                        <a
                          href="https://instagram.com/di.nestx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-full bg-pink-500/10 border border-pink-500/30 text-gray-300 hover:text-pink-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all"
                        >
                          <BsInstagram className="w-6 h-6" />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/dinestx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-gray-300 hover:text-blue-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
                        >
                          <BsLinkedin className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </FloatingCard>

                {/* Email Card */}
                <FloatingCard delay={0.3}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
                    <div className="flex flex-col items-center space-y-6">
                      <div className="p-4 rounded-full bg-indigo-500/20 border border-indigo-500/30">
                        <Mail className="w-8 h-8 text-indigo-400" />
                      </div>
                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-semibold text-white">Email Us</h3>
                        <p className="text-gray-400 text-sm">Send us a detailed message</p>
                      </div>
                      <a
                        href="mailto:hello@dinestx.com"
                        className="w-full px-6 py-4 rounded-xl border border-indigo-400/30 bg-indigo-400/10 text-gray-200 hover:bg-indigo-400/20 hover:text-white transition-all text-center font-medium"
                      >
                        dinestx@gmail.com
                      </a>
                    </div>
                  </div>
                </FloatingCard>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center space-y-4 max-w-2xl"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Start Your Project?</h2>
                <p className="text-gray-400">
                  We typically respond within 2-4 hours during business days. Let's discuss how we can bring your vision
                  to life.
                </p>
              </motion.div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  </div>
)

export default ContactUs
