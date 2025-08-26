import { Logo, model } from '.'
import { ArrowUpRight} from "lucide-react";
import { Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { 
    name: 'Instagram', 
    icon: <Instagram className="w-5 h-5" />, 
    url: 'https://www.instagram.com/di.nestx/' 
  },
  { 
    name: 'LinkedIn', 
    icon: <Linkedin className="w-5 h-5" />, 
    url: 'https://www.linkedin.com/company/dinestx' 
  },
];

function Footer() {
  return (
    <div className="relative isolate bottom-0 bg-black select-none font-outfit">
      <div className='flex md:flex h-auto md:h-56 justify-center pt-10'>
        <div className='w-[100%] h-[60px] bg-red-400'>
          <div className="relative isolate bottom-0 bg-black select-none">


            <footer className="relative z-10 pb-10 pt-20 lg:pb-20 lg:pt-[60px] bg-black">
              {/* Contact Card */}
           <div className="flex justify-center px-4">
  <div className="w-full max-w-7xl relative overflow-hidden flex flex-col md:flex-row items-center sm:px-12 py-6 md:py-4 gap-8 
                  bg-gradient-to-br from-indigo-800/30 to-[#0d0d15]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">


    {/* Text Content */}
    <div className="flex flex-col flex-1 px-5 z-10 text-center md:text-left">
      <h3 className="text-white font-outfit text-3xl sm:text-3xl md:text-4xl font-bold leading-tight">
        Let’s Build Something Amazing Together
      </h3>
      <p className="text-white/70 text-base sm:text-lg font-outfit mt-3 max-w-lg mx-auto md:mx-0">
        Whether it’s a project, partnership, or career opportunity — we’re just one click away.
      </p>

      {/* Buttons */}
      <div className="flex flex-row flex-wrap justify-center md:justify-start mt-8 gap-4">
        <a href="/contact-us">
          <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-outfit text-sm sm:text-base py-3 px-6 rounded-xl 
                             hover:shadow-[0_0_20px_rgba(139,92,246,0.7)] transition-all duration-300">
            Contact Us
          </button>
        </a>
        <a href="/career">
          <button className="group text-white text-sm sm:text-base py-3 px-6 rounded-xl border border-white/20 hover:border-white/50 transition-all duration-300">
            <span className="flex items-center gap-2 font-outfit">
              Career
              <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </a>
      </div>
    </div>

    {/* Model Image - Hidden on mobile */}
    <div className="hidden md:block relative w-72 h-72 z-10">
      <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 transition-transform duration-500 hover:scale-105 hover:rotate-2">
        <img src={model} alt="Model" className="h-[21rem] object-contain drop-shadow-xl" />
      </div>
    </div>
  </div>
</div>


              {/* Main Footer Content */}
    <footer className="bg-black text-gray-300 pt-16 pb-10">
  <div className="container mx-auto w-[90%]">
    <div className="flex flex-wrap justify-between gap-y-12">

      {/* Brand Column */}
      <div className="w-full lg:w-3/12 px-4">
        <a
          href="/"
          className="text-2xl font-semibold font-museo flex items-center gap-3 text-white mb-6"
        >
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl">dinestx</span>
        </a>
        <p className="text-gray-400 text-sm leading-relaxed pr-6">
          Building Digital Nests for Limitless Growth.
        </p>
      </div>

      {/* Resources & Company Links */}
      <div className="w-full sm:w-1/2 lg:w-2/12 px-4">
        <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
        <ul className="space-y-2">
          <li>
            <a href="/services" className="hover:text-primary transition-colors">
              Web Development
            </a>
          </li>
          <li>
            <a href='/products' className="hover:text-primary transition-colors">
              Our Products
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full sm:w-1/2 lg:w-2/12 px-4">
        <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
        <ul className="space-y-2">
          <li>
            <a href="/about" className="hover:text-primary transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a
              href="/contact-us"
              className="hover:text-primary transition-colors"
            >
              Contact & Support
            </a>
          </li>
          <li>
            <a href="/career" className="hover:text-primary transition-colors">
              Careers
            </a>
          </li>
          <li>
            <a href="/policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full sm:w-1/2 lg:w-2/12 px-4">
        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <span className="text-gray-500 cursor-not-allowed">
              Premium Support
            </span>
          </li>
          <li>
            <span className="text-gray-500 cursor-not-allowed">Our Work</span>
          </li>
          <li>
            <span className="text-gray-500 cursor-not-allowed">
              Meet the Team
            </span>
          </li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="w-full lg:w-3/12 px-4">
        <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
        <div className="flex gap-4 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Dinestx. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>


              {/* Decorative Elements */}
              <div>
                <span className="absolute bottom-0 left-0 z-[-1]">
                  <svg
                    width={217}
                    height={229}
                    viewBox="0 0 217 229"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                      fill="url(#paint0_linear_1179_5)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1179_5"
                        x1="76.5"
                        y1={281}
                        x2="76.5"
                        y2="1.22829e-05"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.08" />
                        <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-10 top-10 z-[-1]">
                  <svg
                    width={75}
                    height={75}
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                      fill="url(#paint0_linear_1179_4)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1179_4"
                        x1="-1.63917e-06"
                        y1="37.5"
                        x2={75}
                        y2="37.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#13C296" stopOpacity="0.31" />
                        <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>

    </div>
  );

}

export default Footer;

