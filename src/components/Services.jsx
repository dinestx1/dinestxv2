
import * as THREE from 'three'
import {Suspense, useEffect, useState,useRef } from 'react'
import Reveal from './Reveal';
import { Canvas, useFrame } from '@react-three/fiber';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Environment, useGLTF, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'



import { Rocket, BookmarkPlus, Smartphone, CodeSquare, Code2, Paintbrush, Image, Video, Share2, School, MessageSquareMore, GraduationCap, Sparkles, Workflow } from 'lucide-react';


import { app, graphics, graphics1, seo, social, } from '.';
import { Link } from 'react-router-dom';

// 3D Shape Component
function Model({ open, hinge, ...props }) {
  const group = useRef()
  // Load model
  const { nodes, materials } = useGLTF('/scene.glb')
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
  })

  return (
   <group
    ref={group}
    scale={[1.2,1.2,1.2]} // ⬅️ Bigger size here
    {...props}
    onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
    onPointerOut={(e) => setHovered(false)}
    dispose={null}
  >
    <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
      <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
        <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
        <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />
      </group>
    </three.group>
    <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
    <group position={[0, -0.1, 3.39]}>
      <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
      <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
    </group>
    <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
  </group>
  )
}

function Services() {

  const [state, setState] = useState(false)

  const [open, setOpen] = useState(true)
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) })
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, [])
  const images = [
    { src: graphics, alt: "Image 1" },
    { src: web, alt: "Image 2" },
    { src: social, alt: "Image 3" },
    { src: seo, alt: "Image 4" },
    { src: app, alt: "Image 5" }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(slideInterval);
  }, []);


  function getStart() {
    window.open('https://form2mail.dinestx.com', '_blank', 'noopener,noreferrer');
  }


  const features = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Poster, Banner and Thumbnails",
      description: "Eye-catching designs that capture attention"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Custom, Impactful Logos",
      description: "Unique brand identities that leave a lasting impression"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "High-Quality Photo & Video Editing",
      description: "Professional editing that enhances your content"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Media-Optimized Content",
      description: "Engaging content designed for maximum impact"
    }
  ];


 


  return (

    <div >
      <Helmet>
        <title>Services | Dinestx</title>
        <meta name="description" content="Discover our top-notch digital services, including web & app development, graphic design, and social media management to grow your brand." />
        <link rel="canonical" href="https://dinestx.com/services" />
        <meta name="keywords" content="Web Development, App Development, Graphic Design, Social Media Management, Digital Solutions" />
      </Helmet>

      <div className='select-none font-outfit'>
        {/* Firset */}

        <div className='relative isolate min-h-[100vh] lg:min-h-[100vh] md:min-h-[100vh] overflow-hidden bg-black'>
          {/* Blurred Background Images */}
          <div className="absolute inset-0 -z-10 overflow-hidden">

            <div className="absolute -bottom-72 w-[100%] h-[100%] bg-[#512feb80] opacity-40 pointer-events-none z-0 blur-3xl [clip-path:ellipse(95%_60%_at_10%_80%)]" />
            <div className="absolute  w-full h-full bg-[#512feb80] opacity-70 pointer-events-none z-0 blur-3xl [clip-path:ellipse(40%_25%_at_15%_85%)]" />



            {/* Dark Overlay */}
            <div className="absolute inset-0 backdrop-blur-3xl pointer-events-none "></div>
          </div>

         <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-6xl min-h-screen items-center justify-center mx-auto px-4">
      {/* Left Column */}
      <motion.div
        className="flex flex-col w-full lg:w-1/2 h-full justify-center items-center lg:items-start text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block border border-white/10 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 mb-4"
        >
          <p className="text-gray-200 font-outfit text-sm">
            Version 2.0 is here!
          </p>
        </motion.div>

        <motion.h1
          className="text-white font-bold text-5xl md:text-7xl relative z-10 font-outfit leading-tight"
        >
          Pathway to{" "}
          <span className="bg-gradient-to-br from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Productivity
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg max-w-lg mt-6 relative z-10 font-outfit"
        >
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </motion.p>
 <Link to="/products">
        <motion.button
          className="mt-8 flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-500 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
        >
          View Our Products
          <ArrowRight size={20} />
        </motion.button>
        </Link>
      </motion.div>

      {/* Right Column - Interactive 3D */}
      <div className="lg:flex hidden w-full lg:ml-16   h-screen flex-col justify-center items-center ">
<web.main style={{ background: "transparent", width: "100%", height: "100%" }}>
  <Canvas
      style={{ background: "transparent", width: "100%", height: "100%" }}

    dpr={[1, 2]}
    camera={{ position: [0, 0, -40], fov: 35 }}
  >
    <three.pointLight
      position={[10, 10, 10]}
      intensity={1.5}
      color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
    />
    <Suspense fallback={null}>
     <group
  rotation={[0, Math.PI, 0]}

  onClick={(e) => (e.stopPropagation(), setOpen(!open))}
>
  <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
</group>

      <Environment preset="city" />
    </Suspense>
    <ContactShadows
      position={[0, -4.5, 0]}
      opacity={0.4}
      scale={30}
      blur={1.75}
      far={4.5}
    />
  </Canvas>
</web.main>

      </div>
    </div>


   


        </div>


        {/* 2nd Section */}


        {/* 3rd Section */}
        <section className="relative overflow-hidden  from-indigo-900  to-black py-24">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -left-20 -top-20 h-96 w-96 animate-float rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 blur-[100px]"></div>
            <div className="absolute -right-20 bottom-1/3 h-80 w-80 animate-float-delay rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 blur-[90px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header with animated gradient */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <span className="inline-flex items-center rounded-full bg-indigo-900/50 px-4 py-1.5 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-700/40 mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                Digital Excellence
              </span>
              <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
                <span className=" text-white animate-gradient">
                  Transformative Solutions
                </span>
              </h2>
              <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We architect digital experiences that <span className="text-indigo-300">propel businesses forward</span> through <span className="text-cyan-300">innovation</span> and <span className="text-purple-300">technical precision</span>.
              </p>
            </div>

            {/* 3D grid with floating cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Customization Service */}
              <div className="group perspective-1000 h-full">
                <div className="relative h-full transform transition-all duration-700 group-hover:rotate-x-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="h-full p-8 bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-gray-700 hover:border-indigo-400/50 transition-all duration-300 shadow-xl hover:shadow-indigo-500/10">
                    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-500/20 text-indigo-300 shadow-lg shadow-indigo-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-indigo-600/30 group-hover:to-purple-500/30">
                      <Sparkles className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Customization Service</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Bespoke digital solutions crafted to your exact specifications, blending innovation with your unique business DNA.
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-700/50 group-hover:border-indigo-400/30 transition-colors duration-300">
                      <span className="inline-flex items-center text-sm font-medium text-indigo-300 group-hover:text-indigo-200">
                        Explore possibilities
                        {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-indigo-600/20" />
                </div>
              </div>

              {/* Web & App Development */}
              <div className="group perspective-1000 h-full">
                <div className="relative h-full transform transition-all duration-700 group-hover:rotate-x-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="h-full p-8 bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/10">
                    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 text-blue-300 shadow-lg shadow-blue-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-blue-600/30 group-hover:to-cyan-500/30">
                      <Code2 className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Web & App Development</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Cutting-edge digital experiences built with modern architectures, designed to captivate and convert your audience.
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-700/50 group-hover:border-blue-400/30 transition-colors duration-300">
                      <span className="inline-flex items-center text-sm font-medium text-blue-300 group-hover:text-blue-200">
                        See our work
                        {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-600/20" />
                </div>
              </div>

              {/* Supply Chain Optimization */}
              <div className="group perspective-1000 h-full">
                <div className="relative h-full transform transition-all duration-700 group-hover:rotate-x-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="h-full p-8 bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10">
                    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-500/20 text-emerald-300 shadow-lg shadow-emerald-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-emerald-600/30 group-hover:to-teal-500/30">
                      <Workflow className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Supply Chain Optimization</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Intelligent systems that streamline your logistics, reduce bottlenecks, and maximize operational efficiency.
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-700/50 group-hover:border-emerald-400/30 transition-colors duration-300">
                      <span className="inline-flex items-center text-sm font-medium text-emerald-300 group-hover:text-emerald-200">
                        Optimize now
                        {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-emerald-600/20" />
                </div>
              </div>

              {/* Campus Intelligence */}
              <div className="group perspective-1000 h-full">
                <div className="relative h-full transform transition-all duration-700 group-hover:rotate-x-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="h-full p-8 bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300 shadow-xl hover:shadow-amber-500/10">
                    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-xl bg-gradient-to-br from-amber-600/20 to-orange-500/20 text-amber-300 shadow-lg shadow-amber-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-amber-600/30 group-hover:to-orange-500/30">
                      <School className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Campus Intelligence</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Next-generation education management systems that unify administration, learning, and campus operations.
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-700/50 group-hover:border-amber-400/30 transition-colors duration-300">
                      <span className="inline-flex items-center text-sm font-medium text-amber-300 group-hover:text-amber-200">
                        Learn more
                        {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-600/20" />
                </div>
              </div>

              {/* Engagement CRM */}
              <div className="group perspective-1000 h-full">
                <div className="relative h-full transform transition-all duration-700 group-hover:rotate-x-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="h-full p-8 bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-gray-700 hover:border-pink-400/50 transition-all duration-300 shadow-xl hover:shadow-pink-500/10">
                    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-xl bg-gradient-to-br from-pink-600/20 to-rose-500/20 text-pink-300 shadow-lg shadow-pink-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-pink-600/30 group-hover:to-rose-500/30">
                      <MessageSquareMore className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Engagement CRM</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Relationship platforms that transform customer interactions into meaningful, data-driven engagements.
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-700/50 group-hover:border-pink-400/30 transition-colors duration-300">
                      <span className="inline-flex items-center text-sm font-medium text-pink-300 group-hover:text-pink-200">
                        Connect better
                        {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-pink-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-pink-600/20" />
                </div>
              </div>

              {/* Immersive Learning */}
              <div className="group perspective-1000 h-full">
                <div className="relative h-full transform transition-all duration-700 group-hover:rotate-x-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="h-full p-8 bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-gray-700 hover:border-violet-400/50 transition-all duration-300 shadow-xl hover:shadow-violet-500/10">
                    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-xl bg-gradient-to-br from-violet-600/20 to-fuchsia-500/20 text-violet-300 shadow-lg shadow-violet-500/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-violet-600/30 group-hover:to-fuchsia-500/30">
                      <GraduationCap className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Immersive Learning</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Dynamic eLearning ecosystems that inspire, engage, and accelerate knowledge acquisition.
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-700/50 group-hover:border-violet-400/30 transition-colors duration-300">
                      <span className="inline-flex items-center text-sm font-medium text-violet-300 group-hover:text-violet-200">
                        Start learning
                        {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-violet-600/20" />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 4th Section */}
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black py-24">
          {/* Background elements (simplified) */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-600/20 to-indigo-600/20 blur-[120px]"></div>
          </div>

          <div className="container relative mx-auto px-4">
            {/* Header (unchanged) */}
            <div className="mb-20 text-center">
              <span className="mb-5 inline-flex items-center rounded-full bg-gray-800/50 px-5 py-2 text-sm font-medium text-indigo-300 shadow-lg shadow-blue-500/10 ring-1 ring-indigo-500/30">
                <Rocket className="mr-2 h-4 w-4" />
                Digital Transformation
              </span>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                <span className="text-white animate-gradient">
                  Website & App Development
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
                We engineer <span className="text-blue-300">high-performance</span> digital experiences that convert visitors with <span className="text-purple-300">blazing speed</span>.
              </p>
            </div>

            {/* Refined card grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {/* Custom Designs */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8 backdrop-blur-sm transition-all hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-900/30 text-blue-400 transition-all group-hover:bg-blue-500/20 group-hover:text-blue-300">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">Custom & Responsive Designs</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Tailored designs crafted to match your brand identity, ensuring flawless responsiveness across all devices.
                </p>
                <div className="inline-flex items-center text-sm font-medium text-blue-400 transition-all group-hover:text-blue-300">
                  Explore designs
                  {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                </div>
              </div>

              {/* SEO Optimization */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8 backdrop-blur-sm transition-all hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-900/30 text-purple-400 transition-all group-hover:bg-purple-500/20 group-hover:text-purple-300">
                  <BookmarkPlus className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">SEO Optimization</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Optimized architecture and content for maximum visibility and engagement.
                </p>
                <div className="inline-flex items-center text-sm font-medium text-purple-400 transition-all group-hover:text-purple-300">
                  Boost rankings
                  {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                </div>
              </div>

              {/* Native Apps */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-900/30 text-cyan-400 transition-all group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">Native & Cross-Platform Apps</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Premium mobile experiences with intuitive interfaces for iOS and Android.
                </p>
                <div className="inline-flex items-center text-sm font-medium text-cyan-400 transition-all group-hover:text-cyan-300">
                  View apps
                  {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8 backdrop-blur-sm transition-all hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-900/30 text-indigo-400 transition-all group-hover:bg-indigo-500/20 group-hover:text-indigo-300">
                  <CodeSquare className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">Modern Tech Stack</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Cutting-edge technologies powering robust, scalable digital solutions.
                </p>
                <div className="inline-flex items-center text-sm font-medium text-indigo-400 transition-all group-hover:text-indigo-300">
                  Our technologies
                  {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                </div>
              </div>
            </div>

            {/* Tech badges (simplified) */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {['React', 'Next.js', 'Flutter', 'Node.js', 'TypeScript', 'Tailwind', 'Python', 'AWS'].map((tech) => (
                <div
                  key={tech}
                  className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-gray-700/50 hover:text-white"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black py-24">
          {/* Subtle texture background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] opacity-[0.02]" />

          {/* Floating dot pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] bg-[length:20px_20px]" />

          <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mx-auto max-w-3xl text-center">
             <div className="w-full  flex justify-center">
              <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-[14px] py-[6px]">
                <p className="text-gray-300 font-outfit text-sm text-center whitespace-nowrap">
                 Visual Excellence
                </p>
              </div>
            </div>
            
              <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl mt-4">
                Graphic Design & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Creative Editing</span>
              </h2>
              <p className="mt-5 text-lg leading-7 text-gray-200">
                Elevate your brand's visual appeal with our expert design services that blend creativity with strategy for maximum impact.
              </p>
            </div>

            {/* Content grid */}
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {/* Main feature card */}
                <div className="group relative overflow-hidden rounded-3xl  p-8 shadow-xl  ring-1 ring-indigo-900/30 transition-all duration-300 hover:ring-indigo-700/30">
                  <div className="absolute -inset-1 -z-10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30">
                    <div className="absolute inset-0 h-full w-full bg-[conic-gradient(from_90deg_at_50%_50%,#4F46E5_0%,#9333EA_50%,#4F46E5_100%)]"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-200">Transform Your Vision</h3>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    From concept to creation, we bring your ideas to life with precision and creativity. Our designs are crafted to resonate with your audience and elevate your brand presence.
                  </p>
                  <div className="mt-8 overflow-hidden rounded-xl">
                    <img
                      src={graphics}
                      alt="Design Process"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl  p-6 shadow-sm ring-1 ring-indigo-900/30 transition-all duration-300 hover:shadow-md hover:ring-indigo-700/30"
                    >
                      <div className="absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full bg-blue-100/30 transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-200/30"></div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-900 shadow-inner transition-all duration-300 group-hover:bg-white group-hover:shadow-sm">
                        {feature.icon}
                      </div>
                      <h4 className="mt-5 text-lg font-semibold text-gray-100">{feature.title}</h4>
                      <p className="mt-2 text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech/software badges */}
            <div className="mt-20 flex flex-wrap justify-center gap-4">
              {['Photoshop', 'Illustrator', 'Figma', 'After Effects', 'Premiere Pro', 'Blender', 'Canva', 'Procreate'].map((tool) => (
                <div
                  key={tool}
                  className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-gray-700/50 hover:text-white"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-16 sm:py-24 lg:py-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Header section */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-full  flex justify-center">
              <div className="inline-block border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg px-[14px] py-[6px]">
                <p className="text-gray-300 font-outfit text-sm text-center whitespace-nowrap">
                 Effective Social Media Solutions
                </p>
              </div>
            </div>
           
              <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-100 sm:text-5xl lg:text-6xl">
                Amplify Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brand's Reach</span>
              </h2>
              <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your social presence with data-driven strategies that drive engagement and growth.
              </p>
            </div>

            {/* Content grid */}
            <div className="grid items-center grid-cols-1 mt-16 gap-y-12 lg:grid-cols-5 sm:mt-24 gap-x-8">
              {/* Features list */}
              <div className="space-y-10 lg:pr-12 xl:pr-20 lg:col-span-2">
                {/* Feature 1 */}
                <div className="group flex items-start p-4 rounded-xl transition-all  hover:shadow-lg hover:ring-1 hover:ring-gray-200/50">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-green-50 text-green-600 group-hover:bg-green-100 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-gray-200">Targeted Content Strategy</h3>
                    <p className="mt-2 text-gray-300">
                      Custom content plans designed to resonate with your audience and maximize brand awareness.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group flex items-start p-4 rounded-xl transition-all  hover:shadow-lg hover:ring-1 hover:ring-gray-200/50">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-gray-200">Enhanced Engagement</h3>
                    <p className="mt-2 text-gray-300">
                      Meaningful interactions that build brand loyalty and encourage audience action.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group flex items-start p-4 rounded-xl transition-all  hover:shadow-lg hover:ring-1 hover:ring-gray-200/50">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-100 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-gray-200">Data-Driven Insights</h3>
                    <p className="mt-2 text-gray-300">
                      Performance tracking and optimization with comprehensive analytics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image showcase */}
              <div className="relative lg:col-span-3">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-50 blur-lg"></div>
                <img
                  className="relative w-full rounded-xl shadow-xl ring-1 ring-gray-200/50"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
                  alt="Social media management dashboard preview"
                />
              </div>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-20">
              {['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'YouTube', 'Pinterest'].map((platform) => (
                <div key={platform} className="rounded-full bg-gray-800/50 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-gray-700/50 hover:text-white">
                  <span className="text-sm font-medium">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </div>


  )
}

export default Services
