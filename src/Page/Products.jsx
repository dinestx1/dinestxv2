import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Mail, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';


// --- Product Data ---
// This structure makes it easy to add more products in the future
const products = [
  {
    name: 'Form2Mail',
    version: 'v0.1',
    icon: <Mail className="w-8 h-8 text-indigo-400" />,
    description: 'Seamlessly receive form submissions via email and store them directly in Google Sheets. No backend coding required.',
    imageUrl: 'https://placehold.co/1200x800/1a1a1a/512feb?text=Form2Mail+UI',
    imageSide: 'right'
  },
//   {
//     name: 'WavesQ',
//     version: 'Coming Soon',
//     icon: <BarChart2 className="w-8 h-8 text-pink-400" />,
//     description: 'A powerful, user-friendly analytics dashboard that turns your website data into actionable insights for growth.',
//     imageUrl: 'https://placehold.co/1200x800/1a1a1a/d946ef?text=Insightify+UI',
//     imageSide: 'left'
//   }
];


const ProductsPage = () => {
  const getStart = () => {
    console.log("Get Started clicked");
  };

  return (
    <div className="relative isolate overflow-hidden bg-black text-white font-sans">
      {/* --- Background --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-72 w-full h-full bg-[#512feb80] opacity-30 blur-3xl [clip-path:ellipse(95%_60%_at_10%_80%)]" />
        
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>

      {/* --- Page Header --- */}
      <div className="text-center py-24 md:py-32">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Tools Built for Growth</h1>
        </Reveal>
        <Reveal>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto px-6">
            Explore our suite of in-house products, crafted with the same passion and precision we bring to our client projects.
          </p>
        </Reveal>
      </div>

      {/* --- Products List --- */}
      <div className="space-y-20 md:space-y-32 pb-24">
        {products.map((product, index) => (
          <section key={product.name} className="mx-auto max-w-6xl items-center gap-12 lg:gap-20 px-6 lg:flex" style={{ flexDirection: product.imageSide === 'left' ? 'row-reverse' : 'row' }}>
            {/* Text Content */}
            <div className="space-y-6 flex-1 text-center lg:text-left">
              <Reveal>
                <div className="w-full flex justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-3 border border-white/10 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2">
                    {product.icon}
                    <p className="text-white font-sans text-sm font-medium">
                      {product.name}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <h2 className="text-white font-extrabold text-4xl leading-tight sm:text-5xl">
                  {product.name} <span className="text-indigo-400 text-lg align-middle">{product.version}</span>
                </h2>
              </Reveal>

              <Reveal>
                <p className="text-gray-300 text-lg max-w-xl leading-relaxed mx-auto lg:ml-0">
                  {product.description}
                </p>
              </Reveal>

              <Reveal>
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <button onClick={getStart} className="rounded-lg bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/30">
                    Get Started for Free
                  </button>
                  <button className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-7 py-3 text-sm font-semibold text-white ring-1 ring-gray-700 transition-all hover:bg-gray-700/80">
                    Watch Demo
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Image Content */}
            <div className="relative mt-12 max-w-2xl flex-1 lg:mt-0">
              <Reveal>
                <div className="relative w-full aspect-[4/3] bg-black/20 backdrop-blur-md border border-gray-800 rounded-2xl p-4">
                  <img 
                    src={product.imageUrl} 
                    alt={`${product.name} screenshot`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

       {/* --- CTA Section --- */}
       <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Have an Idea for a Product?</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We're always exploring new possibilities. If you have a challenge you think we can solve, we'd love to hear about it.
            </p>
            <a href="/contact-us">
              <button className="mt-8 bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-500 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
                Share Your Idea <ArrowRight size={20} />
              </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;