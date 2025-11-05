import { useState } from "react";
import { BG_Graphics, Logo2, Team, bg_Groups, HoverButton, Integration } from '../components'
import Reveal from '../components/Reveal';
import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket, TrendingUp, TrendingDown, Sparkle, Lightbulb, SquareCode, Workflow, Wrench, Smile, Frown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import TimelineComponent from "./component/timeline";

import { Linkedin } from 'lucide-react';
// Make sure to import your Team image, e.g.:
// import Team from '../assets/team-photo.jpg';

// --- Component Starts Here ---

// 1. Create a data array for your team members for easier management
const teamMembers = [
  {
    name: 'Abhishek Kumar',
    role: 'Founder & CEO',
    linkedinUrl: 'https://www.linkedin.com/in/meaviishek/' // Replace with actual LinkedIn URL
  },
  {
    name: 'Vishnu Prakash',
    role: 'Founder',
    linkedinUrl: 'https://www.linkedin.com/in/vishnupraksh/' // Replace with actual LinkedIn URL
  }
];


function Home() {

  // const [isHovered1, setIsHovered1] = useState(false);
  const [activeCategory, setActiveCategory] = useState('webDevelopment');


  const navigate = useNavigate();
  const handleInternalRedirect = () => {
    navigate("/contact-us"); // Replace with your route
  };


  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery",
      description: "We start by understanding your goals, target audience, and project requirements."
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Creating beautiful, functional designs that align with your brand identity."
    },
    {
      icon: Code2,
      title: "Development",
      description: "Building your solution using the latest technologies and best practices."
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Thorough testing and deployment to ensure everything works perfectly."
    }
  ];

  const features = [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: 0,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: 0,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: 0,
    },
  ];

  const planCategories = {
    webDevelopment: {
      name: "Web Development",
      plans: [
        {
          title: "Basic Starter Plan",
          price: "₹ 3,999",
          sub: "Upto",
          text: "Perfect for small businesses or personal brands needing a simple, fast, and budget-friendly online presence.",
          tag: "Essentials",
          benefits: [
            "1-3 Pages (Home, Services, Contact)",
            "Mobile-Optimized Design",
            "Basic On-Page SEO",
            "Contact Form + Google Maps",
            "1-2 Design Revisions",
            "1-Month Free Technical Support"

          ],
          disAdv: [
            "No CMS",
            "No Free Domain/Hosting",
            "No Future Upgrades",
            "Static content only"
          ],
          note: "Ideal for: Brochure websites, portfolios, or temporary landing pages."
        },
        {
          title: "Professional Growth Plan",
          price: "₹ 15,999",
          sub: "Starting From",
          text: "Scalable solutions for growing businesses. Includes CMS, advanced SEO, and custom design for long-term success.",
          tag: "Growth",
          benefits: [
            "5-7 Custom Pages",
            "1 Year Free Domain",
            "Admin Panel with limited features",
            "Advanced SEO Optimization",
            "Custom UI/UX Design (2 Initial Mockups)",
            "Google Analytics + Search Console Setup",
            "3-5 Design Revisions",
            "3-Month Free Technical Support"
          ],
          disAdv: [
            "Limited E-commerce",
            "No Custom Web Apps",
            "No Free Hosting"
          ],
          note: [
            "Best for: Agencies, scaling startups, and service-based businesses needing content control."
          ]
        },
        {
          title: "Premium Enterprise Plan",
          price: "Let's Talk",
          sub: " ",
          text: "End-to-end premium development with ongoing optimization, security, and priority support for mission-critical sites.",
          tag: "Elite",
          benefits: [
            "40+ Pages + Custom Features",
            "Admin Panel",
            "1 Year Free Domain + Hosting",
            "High-End Design + Animations",
            "Full E-commerce Solutions",
            "CRM/ERP Integrations",
            "Enterprise Security (SSL, DDoS Protection, Backups)",
            "6-Month Priority Support (24h response time)",
          ],
          disAdv: [
            "Higher initial investment",
            "Longer development time"
          ],
          notes: [
            "Ideal for: Corporations, SaaS platforms, and high-traffic e-commerce stores."
          ]
        }
      ]
    },
    mobileDevelopment: {
      name: "Mobile Development",
      plans: [
        {
          title: "Basic MVP Plan",
          price: "₹ 15,999",
          sub: "Starting From",
          text: "Perfect for validating your app idea with core functionality and a simple UI for early adopters.",
          tag: "Startup",
          benefits: [
            "1 Platform (Android OR iOS)",
            "3-7 Core Screens",
            "Basic UI Kit (Pre-designed components)",
            "Backend Integration",
            "1 Round of Revisions",
            "Play Store/App Store Submission Assistance",
            "1-Month Bug Fix Support"
          ],
          disAdv: [
            "No Admin Panel",
            "No Custom Animations/Transitions",
            "Limited to 3rd Party APIs (No custom backend)",
            "No Cross-Platform Support"
          ],
          note: "Ideal for: Proof-of-concept apps, startup MVPs, or internal test builds."
        },
        {
          title: "Professional Business Plan",
          price: "₹ 30,999",
          sub: "Starting From",
          text: "Feature-rich native apps with custom UI/UX, analytics, and cross-platform compatibility for growing businesses.",
          tag: "Pro",
          benefits: [
            "Cross-Platform (Flutter/React Native)",
            "8-10 Custom Screens",
            "Custom UI/UX Design (Figma Prototypes)",
            "Admin Dashboard + CMS",
            "API Integration (Payment Gateways, Social Auth)",
            "Analytics (Mixpanel/Firebase)",
            "Push Notifications",
            "3 Rounds of Revisions",
            "3-Month Support & Maintenance"
          ],
          disAdv: [
            "No Complex Backend Logic",
            "Limited Offline Functionality",
            "No Enterprise Security Features"
          ],
          note: "Best for: E-commerce apps, service booking platforms, and community apps."
        },
        {
          title: "Premium Enterprise Plan",
          price: "Let's Talk",
          sub: " ",
          text: "High-performance apps with custom native code, advanced security, and scalable architecture for mission-critical solutions.",
          tag: "Enterprise",
          benefits: [
            "Native Android & iOS (Kotlin/Swift)",
            "Unlimited Screens + Dynamic Content",
            "Custom Backend (Node.js/Django)",
            "Real-time Features (WebSockets, Live Chat)",
            "Biometric Authentication",
            "Advanced Animations & Micro-interactions",
            "White-label Solution",
            "App Store Optimization (ASO)",
            "6-Month Priority Support + SLA",
            "Dedicated QA Team",
            "Monthly Performance Reports"
          ],
          disAdv: [
            "Higher Development Cost",
            "Longer Timeline (12-20 weeks)",
            "Ongoing Server Costs"
          ],
          note: "Ideal for: Banking apps, healthcare solutions, on-demand marketplaces, and IoT applications."
        }
      ]
    },
    fullStackPlans: {
      name: "Fullstack Dev",
      plans: [
        {
          title: "Dual Platform Starter",
          price: "₹ 35,999",
          sub: "Upto",
          text: "A synchronized web + mobile MVP with basic features to launch your digital presence quickly.",
          tag: "Foundation",
          benefits: [
            "Web: 5-Page Responsive Site (Hard-coded)",
            "Mobile: 1 Platform (Android/iOS) with 5 Core Screens",
            "Shared Backend (Auth, Database)",
            "Basic SEO + App Store Submission",
            "Contact Forms + Social Media Links",
            "1 Design Revision per Platform",
            "3-Month Support"
          ],
          disAdv: [
            "No CMS/Admin Panel",
            "Static Content Only",
            "No Cross-Platform Mobile App",
            "Limited to 3rd-Party APIs"
          ],
          note: "For: Startups testing ideas or small businesses needing a simple web + app combo."
        },
        {
          title: "Growth Accelerator",
          price: "₹ 59,999",
          sub: "Starting",
          text: "A scalable web + mobile ecosystem with CMS, analytics, and cross-platform compatibility.",
          tag: "Scale",
          benefits: [
            "Web: 15+ Pages",
            "Mobile: Cross-Platform App (Flutter/React Native)",
            "Custom UI/UX (Figma Prototypes for Both)",
            "Admin Dashboard (Content + User Management)",
            "Payment Gateway Integration (Stripe/Razorpay/FreeCash)",
            "SEO + ASO (App Store Optimization)",
            "Google Analytics",
            "Push Notifications + Email Alerts",
            "3 Design Revisions",
            "3-Month Support"
          ],
          disAdv: [
            "No Complex Backend Logic",
            "Limited Custom Animations",
            "No Enterprise-Grade Security"
          ],
          note: "For: E-commerce stores, SaaS platforms, or service businesses scaling digitally."
        },
        {
          title: "Enterprise Suite",
          price: "Let's Talk",
          sub: " ",
          text: "End-to-end premium development with white-label solutions, real-time features, and dedicated teams.",
          tag: "Enterprise",
          benefits: [
            "**Web**: Custom Stack (React/Next.js + Node/Django)",
            "**Mobile**: Native Android/iOS (Kotlin/Swift)",
            "Unified Backend (Microservices/Cloud)",
            "Real-Time Features (Chat, Live Updates)",
            "Multi-Language Support (i18n)",
            "Advanced Security (Pen Testing, Encryption)",
            "CRM/ERP Integrations (Salesforce, Zapier)",
            "Automated Testing + CI/CD Pipeline",
            "Dedicated PM + Weekly Syncs",
            "6-Month SLA & Priority Support"
          ],
          disAdv: [
            "Higher Initial Investment",
            "Longer Timeline (4-6 Months)",
            "Ongoing Maintenance Costs"
          ],
          note: "For: Fintech, healthcare, or large-scale marketplaces needing robust digital ecosystems."
        }
      ]
    }
  };


  const handleRedirect = () => {
    console.log("Redirect triggered!");
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const comparisionData = {
    props: {
      icon: <Smile className="text-black fill-green-600 w-[28px] h-[28px]" />,
      items: [
        {
          title: "Expert Developer and Designer",
          des: "Experience and expertise at your fingertips, ensuring exceptional design quality."
        },
        {
          title: "Custom Solutions",
          des: "Tailored features to meet your business needs and audience expectations."
        },
        {
          title: "Ongoing Support",
          des: "We’re here post-launch for updates, maintenance, and growth."
        }
      ]
    },
    cons: {
      icon: <Frown className="text-black fill-red-600 w-[28px] h-[28px]" />,
      items: [
        {
          title: "Inconsistent Design",
          des: "Lack of design expertise leads to poor user experience."
        },
        {
          title: "Limited Features",
          des: "Generic templates that don’t fit specific business needs."
        },
        {
          title: "No Post-Launch Help",
          des: "Once delivered, you're on your own for updates and fixes."
        }
      ]
    }
  };


  return (
    <div className='select-none'>
      <Helmet>
        <title>Dinex</title>
        <link rel="canonical" href="https://dinestx.com/home" />
        <meta name="description" content="Welcome to Dinestx. Explore our digital solutions for web & app development, graphic design, and more." />
      </Helmet>


      {/* 1ST SECTION */}
      <div className="relative isolate min-h-[50vh] lg:min-h-[50vh] md:min-h-[50vh] overflow-hidden bg-black">
        {/* Blurred Background Images */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Top Background Image */}
          <img
            src={BG_Graphics}
            className="absolute top-24 left-0 w-[30vw] md:w-[30vw] lg:w-[35vw] blur-3xl scale-125 z-20 backdrop-blur-3xl"
          />

          {/* Bottom Background Image */}
          <img
            src={BG_Graphics}
            alt="Bottom background"
            className="absolute rotate-y-180 rotate-180 bottom-24 right-2 w-[30vw] md:w-[40vw] lg:w-[30vw] blur-3xl scale-125 z-20 backdrop-blur-3xl"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black backdrop-blur-3xl"></div>
        </div>

        <Reveal>
          <section className="mx-auto h-full max-w-[100vw] animate-fadeIn flex justify-center">
            <div className="w-full max-w-screen-xl px-4 flex flex-col items-center justify-center gap-9 py-52">

              {/* Tagline Section */}
              <div className="w-full max-w-md flex justify-center">
                <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-[14px] py-[6px]">
                  <p className="text-gray-300 font-outfit text-sm text-center whitespace-nowrap">
                    Dinestx by 8bitDevs – Your Website Partner
                  </p>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full px-4 text-center space-y-5 flex flex-col items-center">

                <p className="text-white font-outfit font-medium text-3xl md:text-4xl xl:text-5xl leading-tight">
                  We Don't Just Build Websites We Weaponize <br />
                  <span className="text-indigo-600 text-3xl font-outfit font-medium md:text-4xl xl:text-5xl">
                    Brands For Domination.
                  </span>
                </p>


                <p className="text-gray-400 font-outfit text-base max-w-md mx-auto leading-relaxed">
                  We don't build websites. We design digital status symbols — rare, powerful, and built to convert.
                </p>

                {/* Contact Button */}
                <HoverButton
                  label="Build Your Own"
                  onClick={handleInternalRedirect}
                  width="w-36"
                  height="h-10"
                  className="bg-blue-700 px-4 py-2 "
                />
              </div>

            </div>
          </section>
        </Reveal>
      </div>



      {/* SERVICES */}
      <div className="relative isolate overflow-hidden bg-black items-center justify-center flex ">
        <Reveal>
          <section className="mx-auto h-full max-w-[100vw] animate-fadeIn flex justify-center">
            <div className="w-full max-w-screen-xl px-4 flex flex-col items-center justify-center ">

              {/* Tagline Section */}
              <div className="w-full max-w-md flex justify-center">
                <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-[14px] py-[6px]">
                  <p className="text-gray-300 font-outfit text-sm text-center whitespace-nowrap">
                    Why Us ?
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div className="w-full flex justify-center px-4 py-10">
                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">

                  {[
                    {
                      title: "End-to-End Service",
                      text: "From ideation to launch, we handle every step of your website’s journey, ensuring a seamless process.",
                      icon: <TrendingUp className="text-white" />,
                    },
                    {
                      title: "Budget-Friendly Packages",
                      text: "No hidden fees. We offer clear and upfront pricing, so you know exactly what you’re investing in.",
                      icon: <TrendingDown className="text-white" />
                    },
                    {
                      title: "Long-Term Partnership",
                      text: "Our work doesn't stop at launch. We continually optimize your website to keep it ahead of the competition.",
                      icon: <Sparkle className="text-white" />
                    }
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="relative bg-white/5 rounded-3xl border border-white/10 p-6 overflow-hidden text-white backdrop-blur-md shadow-lg"
                    >

                      {/* Blurred pink/purple circle */}
                      <div className="absolute top-0 right-0 w-28 h-28 bg-[#512feb80] blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0"></div>

                      {/* Icon + Text Section */}
                      <div className="flex flex-col gap-[10px] z-10 relative">
                        {/* Icon */}
                        <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                          {card.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold">{card.title}</h3>

                        {/* Description */}
                        <p className="text-sm text-gray-300">{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>




      {/* Integration */}
      <div className="relative isolate min-h-[60vh] px-[10%] bg-black items-center justify-center flex flex-col lg:flex-row pt-10 pb-10 gap-8 lg:pt-28 lg:justify-start ">

        <div className="w-full h-auto lg:flex flex-col items-start">

          <div className="w-full flex justify-center lg:justify-start md:justify-center">
            <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-[14px] py-[6px]">
              <p className="text-gray-300 font-outfit text-sm text-center whitespace-nowrap">Integration</p>
            </div>
          </div>
          {/* 2Nd COl */}
          <div className="w-[100%] md:w-[100%] lg:w-[70%] pt-4 flex flex-col gap-4 justify-center items-center lg:items-start lg:justify-start">
            <p className="text-white font-outfit font-medium text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1] text-center lg:text-start">
              Unified Integrations for <span className="text-indigo-600">Your Website</span>
            </p>
            <p className="text-white font-outfit text-[16px] lg:text-[18px] font-thin text-center lg:text-start">
              We bring all your essential tools together - CRM, Analytics, Chat, Payment, and more - into one seamless website experience. Explore our docs to see how simple integration can be.
            </p>
          </div>

          <HoverButton
            label="API Documentation"
           onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    // Disabled for now
  }}
            width="w-44"
            height="h-12"
            className="hidden bg-blue-700 mt-4 lg:flex opacity-70 cursor-not-allowed"
          />

        </div>


        <div className="w-full lg:flex items-center justify-items-center lg:justify-center">
          <img src={Integration} alt="Dinestx Logo" className="w-[400px] h-auto object-contain" />
        </div>

        <HoverButton
          label="API Documentation"
           onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    // Disabled for now
  }}
          width="w-44"
          height="h-12"
          className="bg-blue-700 mt-4 lg:hidden opacity-70 cursor-not-allowed"
        />
      </div>



      {/* Plan*/}
      <div className="relative isolate overflow-hidden bg-black items-center justify-center flex lg:pt-24 md:pt-24 font-outfit">
        <div className="absolute top-20 w-[80%] h-[50%] bg-[#512feb80] opacity-20 blur-3xl rounded-full pointer-events-none z-0"></div>
        <Reveal>
          <section className="mx-auto h-full max-w-[100vw] animate-fadeIn flex justify-center">
            <div className="w-full max-w-screen-xl px-4 flex flex-col items-center justify-center gap-5 ">


              {/* Tagline Section */}
              <div className="w-full max-w-md flex justify-center">
                <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-[14px] py-[6px]">
                  <p className="text-gray-300 font-outfit text-sm text-center whitespace-nowrap">
                    Plan
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-[16px] lg:text-[18px] ">
                <p className="text-white font-outfit text-[20px] lg:text-[38px] pb-2">Choose Your Right Plan</p>
                <p className="text-white font-outfit text-center text-sm lg:text-lg">Select from best plans, ensuring a perfect match.</p>
                <p className="text-white font-outfit text-sm lg:text-lg">Customize your subscription for a seamless fit!</p>
              </div>


              {/* Toggle for MUltiple Plan */}
              <div className="w-[95%] md:w-[85%] lg:w-[60%] h-[50px] border border-white/5 rounded-full bg-white/5 flex items-center justify-evenly">
                <div className="flex flex-row justify-evenly w-full">
                  {Object.keys(planCategories).map((key) => (
                    <button
                      key={key}
                      className={` px-[10px] md:px-[60px] lg:px-[59px] py-2 md:py-3 lg:py-2 rounded-full transition-colors ${activeCategory === key
                        ? 'bg-indigo-600 text-white text-[12px] md:text-[12px] lg:text-[16px]'
                        : 'text-gray-300 text-[12px] md:text-[12px] lg:text-[16px] hover:text-white'
                        }`}
                      onClick={() => {
                        setActiveCategory(key);
                      }}
                    >
                      {planCategories[key].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* CARD */}
              <div className="w-full flex justify-center py-5">
                <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
                  {planCategories[activeCategory].plans.map((card, index) => (
                    <div
                      key={index}
                      className="relative bg-white/5 rounded-3xl border border-white/10 p-6 overflow-hidden text-white backdrop-blur-md shadow-lg"
                    >
                      {/* Blurred circle background */}
                      <div className="absolute top-0 right-0 w-28 h-28 bg-[#512feb80] blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0" />

                      <div className="flex flex-col gap-[10px] z-10 relative">
                        {/* Tag */}
                        <div className={`px-[8px] py-[2px] rounded-md w-fit flex items-center justify-center ${card.tag === "Essentials" || card.tag === "Growth" || card.tag === "Startup" || card.tag === "Scale" ? "bg-indigo-600" : "bg-white"
                          }`}>
                          <p className={`font-outfit ${card.tag === "Essentials" || card.tag === "Growth" || card.tag === "Startup" || card.tag === "Scale" ? "text-white font-medium" : "text-indigo-600 font-medium"
                            } text-[15px]`}>
                            {card.tag}
                          </p>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold">{card.title}</h3>

                        {/* Description */}
                        <div className="space-y-1.5">
                          <p className="text-sm text-gray-300 font-outfit">{card.text}</p>
                        </div>


                        {/* Price */}
                        <div className="pt-3 pb-3 flex flex-col self-center items-center">
                          <p className="text-[32px] text-gray-300 font-outfit font-bold">{card.price}</p>
                          <p>
                            {card.sub}
                          </p>
                        </div>


                        <div className="w-[90%] h-[1px] self-center"
                          style={{
                            background: "linear-gradient(90deg, rgba(99,102,241,0) 0%, rgba(99,102,241,1) 50%, rgba(99,102,241,0) 100%)"
                          }}
                        />

                        {/* Benefits list */}
                        <ul className="space-y-3 pt-5">
                          {card.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-[16px] text-gray-300 font-outfit">
                              <span className="mr-2 text-indigo-400">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>



                        {card.disAdv && (
                          <div className="animate-fadeIn">

                            <ul className="space-y-3">
                              {card.disAdv.map((item, i) => (
                                <li key={i} className="flex text-[16px] text-gray-400 font-outfit">
                                  <span className="mr-2 text-rose-400">
                                    {card.tag === "Custom" ? "⚠️" : "✗"}
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>


                    </div>

                  ))}
                </div>
              </div>



            </div>
          </section>
        </Reveal>
      </div>


      {/* SECURITY */}
      <div className="relative isolate min-h-[50vh] overflow-hidden bg-black items-center justify-center flex flex-col lg:flex-row pt-10 lg:pt-28 lg:justify-start ">


        <div className="hidden w-[50%] max-w-screen-xl lg:flex flex-col items-start -translate-x-4 justify-center">
          <img src={bg_Groups} className="h-[48vh]" />
        </div>

        <div className="hidden w-[50%] max-w-screen-xl lg:flex items-center justify-center lg:justify-start">
          <div className="relative w h-[200px] flex items-center justify-center">
            <div className="absolute w-[150px] h-[150px] rounded-full bg-indigo-600 blur-2xl z-0" />
            <div className="relative w-[100px] h-[100px] rounded-[36px] border-[16px] border-indigo-600 bg-indigo-600 z-10 flex items-center justify-center">
              <img
                src={Logo2}
                alt="Staked"
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          </div>
        </div>




        <div className="w-full max-w-screen-xl flex flex-col gap-6 lg:gap-1  items-center justify-center lg:items-start lg:justify-start">
          <div className="w-full max-w-md flex justify-center lg:justify-start">
            <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-[14px] py-[6px]">
              <p className="text-gray-300 font-outfit text-sm text-center whitespace-nowrap">
                Security
              </p>
            </div>
          </div>

          {/* Logo for Small and Midum Screen */}
          <div className="flex w-[50%] max-w-screen-xl lg:hidden items-center justify-center lg:justify-start">
            <div className="relative w h-[200px] flex items-center justify-center">
              <div className="absolute w-[150px] h-[150px] rounded-full bg-indigo-600 blur-2xl z-0" />
              <div className="relative w-[100px] h-[100px] rounded-[36px] border-[16px] border-indigo-600 bg-indigo-600 z-10 flex items-center justify-center">
                <img
                  src={Logo2}
                  alt="Staked Image"
                  className="w-[100px] h-[100px] object-contain z-20 bor"
                />
              </div>
            </div>
          </div>

          <div className="w-[100%] lg:w-[70%] md:px-[10%] px-[10%] lg:px-0 pt-4 flex flex-col gap-4 justify-center items-center lg:items-start lg:justify-start">
            <p className="text-white font-outfit font-medium text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1] text-center lg:text-start">
              Built for Scale and Enterprise <span className="text-indigo-600">Level Security</span>
            </p>

            <p className="text-white font-outfit text-[16px] lg:text-[18px] font-thin text-center lg:text-start">SOC-2 Type II certification, penetration tested, and regular vulnerability scans. Hosted behind a VPC. Data encryption at rest and transit.</p>
            <div className="pt-1">
              <HoverButton
                label="Read More"
                onClick={handleRedirect}
                width="w-32"
                height="h-10"
                className="bg-blue-700 cursor-not-allowed opacity-70"
              />
            </div>
          </div>
        </div>
      </div>




      {/* Our Process */}
    <div className="relative isolate overflow-hidden bg-black items-center justify-center flex min-h-screen pt-24">
      <Reveal>
        <section className="mx-auto h-full max-w-[100vw] animate-fadeIn flex justify-center">
          <div className="w-full max-w-screen-xl px-4 flex flex-col items-center justify-center ">

            {/* Tagline Section */}
            <div className="w-full max-w-md flex justify-center">
              <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-[14px] py-[6px]">
                <p className="text-gray-300 font-outfit text-sm text-center whitespace-nowrap">
                  Our Process
                </p>
              </div>
            </div>

            {/* CARD CONTAINER */}
            <div className="w-full flex justify-center px-4 py-11">
              {/* This is the grid that was updated.
                  - `grid-cols-1`: Default to a single column on small screens.
                  - `lg:grid-cols-2`: Switch to a two-column layout on large screens (1024px and up).
                  - `max-w-4xl`: Increased max-width to accommodate the two-column layout comfortably.
              */}
              <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12">
                {[
                  {
                    title: "Planning & Design",
                    text: "From ideation to launch, we handle every step of your website’s journey, ensuring a seamless process.",
                    icon: <Lightbulb className="text-white" />,
                    color: `#FED8AA`
                  },
                  {
                    title: "Development",
                    text: "No hidden fees. We offer clear and upfront pricing, so you know exactly what you’re investing in.",
                    icon: <SquareCode className="text-white" />,
                    color: `#a5f2fb`
                  },
                  {
                    title: "Optimization & SEO",
                    text: "Our work doesn't stop at launch. We continually optimize your website to keep it ahead of the competition.",
                    icon: <Workflow className="text-white" />,
                    color: `#DCD5FB`
                  },
                  {
                    title: "Launch & Support",
                    text: "Our work doesn't stop at launch. We continually optimize your website to keep it ahead of the competition.",
                    icon: <Wrench className="text-white" />,
                    color: `#F4C7FB`
                  }
                ].map((card, idx) => (
                  <div
                    key={idx}
                    style={{ borderColor: card.color }}
                    className="relative bg-white/5 rounded-3xl border p-8 overflow-hidden text-white backdrop-blur-md shadow-lg"
                  >

                    {/* Blurred decorative circle */}
                    <div style={{ background: card.color }}
                      className="absolute w-36 h-36 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl opacity-30" />

                    {/* Icon + Text Section */}
                    <div className="flex flex-row gap-[15px] z-10 relative">
                      {/* Icon */}
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                        {card.icon}
                      </div>

                      <div className='flex-col space-y-2'>
                        {/* Title */}
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        {/* Description */}
                        <p className="text-sm text-gray-300">{card.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </section>
      </Reveal>
    </div>



      {/* Comparison */}
      <div className="relative isolate overflow-hidden bg-black items-center justify-center pt-24 flex md:flex">
        <Reveal>
          <section className="mx-auto h-full max-w-[90vw] animate-fadeIn flex justify-center">
            <div className="w-full max-w-screen-xl px-4 flex flex-col items-center justify-center ">

              {/* Tagline Section */}
              <div className="w-full max-w-md flex justify-center">
                <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-[14px] py-[6px]">
                  <p className="text-gray-400 font-outfit text-sm text-center whitespace-nowrap">
                    Comparison
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div className="w-full flex flex-col  py-11 gap-8">
                {/* Comparison Header */}
         
             <div className="flex flex-row w-full lg:max-w-[980px] px-1 md:px-10 gap-4 md:gap-10">

    {/* With Dinestx - Use w-full on mobile, md:w-1/2 for larger screens */}
    <div className="w-full md:w-1/2 flex items-center gap-2">
        <Smile className="text-black fill-green-600 w-[28px] h-[28px]" />
        <p className="text-green-600 font-outfit text-sm md:text-lg">With Dinestx</p>
    </div>

    {/* Without Dinestx - Use w-full on mobile, md:w-1/2 for larger screens */}
    <div className="w-full md:w-1/2 flex items-center gap-2">
        <Frown className="text-black fill-red-600 w-[28px] h-[28px]" />
        <p className="text-red-600 font-outfit text-sm md:text-lg">Without Dinestx</p>
    </div>

</div>

                {/* Comparison Cards */}
               {comparisionData.props.items.map((item, idx) => (
    <div
        key={idx}
        className="w-full max-w-[980px] bg-white/5 rounded-3xl border border-white/10 p-6 md:p-8 text-white backdrop-blur-md shadow-lg relative"
    >
        {/* Background circle blur */}
        <div className="absolute w-36 h-5 bg-purple-400 top-1/2 right-10 blur-2xl" />

        {/* --- MODIFIED LINE --- */}
        {/* Content Flex: Make it a column on mobile and a row on desktop. Add a gap for mobile stacking. */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-0">
            {/* With Dinestx */}
            {/* --- MODIFIED LINE --- */}
            {/* Make width responsive and remove right-padding on mobile */}
            <div className="w-full md:w-1/2 md:pr-8 flex flex-col gap-2">
                <div className="flex items-center gap-2 pb-3">
                    {comparisionData.props.icon}
                </div>
                <p className="text-[20px] font-outfit text-gray-300 font-medium">{item.title}</p>
                <p className="text-[15px] font-outfit text-gray-400">{item.des}</p>
            </div>

            {/* Vertical Divider */}
            {/* --- MODIFIED LINE --- */}
            {/* Hide the divider on mobile screens */}
            <div className="hidden md:block w-[1px] bg-white/20" />

            {/* Without Dinestx */}
            {/* --- MODIFIED LINE --- */}
            {/* Make width responsive and remove left-padding on mobile */}
            <div className="w-full md:w-1/2 md:pl-8 flex flex-col gap-2">
                <div className="flex items-center gap-2 pb-3">
                    {comparisionData.cons.icon}
                </div>
                <p className="text-[20px] font-outfit text-gray-300 font-medium">
                    {comparisionData.cons.items[idx]?.title}
                </p>
                <p className="text-[15px] font-outfit text-gray-400">
                    {comparisionData.cons.items[idx]?.des}
                </p>
            </div>
        </div>
    </div>
))}
              </div>



            </div>
          </section>
        </Reveal>
      </div>


 




      {/* Team */}
 <div className="relative isolate mx-auto max-w-7xl overflow-hidden bg-black flex flex-col lg:flex-row py-24 lg:py-28 items-center justify-center ">
      
      {/* Left Column - Image */}
      <motion.div
        className="hidden w-[50%] lg:flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-[70%] relative group"
      

        >
          <img
            src={Team} // Your team image
            alt="The founding team"
            className="rounded-xl "
          />
        </motion.div>
      </motion.div>

      {/* Right Column - Text */}
      <motion.div
        className="w-full lg:w-[50%] max-w-xl flex flex-col gap-6 items-center justify-center lg:items-start px-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Tag */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-gray-300 font-sans text-sm text-center">
              Our Teams
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="w-full text-center lg:text-start">
          <p className="text-white font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1]">
            Meet the Minds Behind{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Streetwise
            </span>
          </p>
        </div>
        
        {/* Description */}
        <p className="text-gray-400 text-center lg:text-start max-w-md">
            We are a duo of passionate innovators dedicated to building solutions that make a difference. Get to know the leaders guiding our vision.
        </p>

        {/* Team Member Details */}
 <div className="w-full flex flex-col lg:flex-row   gap-4  justify-center lg:justify-start items-center">
  {teamMembers.map((member) => (
    <div
      key={member.name}
      className="group relative bg-white/5 flex gap-4 backdrop-blur-lg border border-white/10 p-6 rounded-2xl "
    >
  

      {/* Name + Role */}
      <div className="text-left ">
        <h3 className="font-semibold text-white text-sm lg:text-lg">{member.name}</h3>
        <p className="text-xs lg:text-sm text-indigo-400">{member.role}</p>
      </div>

      {/* Social Link */}
      <div className="flex justify-center ">
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name}'s LinkedIn Profile`}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Glow Effect on Hover */}
    </div>
  ))}
</div>


        {/* Image for Small and Medium Screens */}
        <motion.div
          className="flex w-[80%] max-w-md mt-8 lg:hidden items-center justify-center"
       
        >
          <img src={Team} alt="Team" className="rounded-xl " />
        </motion.div>
      </motion.div>
    </div>


    </div>
  )
}

export default Home;
