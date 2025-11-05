
import { useState } from 'react';
import Reveal from '../components/Reveal';
import ImageModal from '../components/ImageModel';
import { Code2, Smartphone } from 'lucide-react';
import lusi from '../assets/works/lusi.png';
import juicy from '../assets/works/Juicy.png';
import testy from '../assets/works/Testy.png';
import apppost from '../assets/works/app.png';
import tour from '../assets/works/tour.png';
import di from '../assets/works/di.png';
import beauty from '../assets/works/beauty.png';

import lusiweb from '../assets/works/lusi-web.png';
import lusiweb1 from '../assets/works/lusi-web1.png'
import lusiweb2 from '../assets/works/lusi-web2.png'
import { Helmet } from 'react-helmet-async';
import nutan from '../assets/works/nutan.png';
import nutan1 from '../assets/works/nutan1.png';
import nutan2 from '../assets/works/nutan2.png';

// import di from '../assets/works/di.png'
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModel';
const works = [
  {
    id: 1,
    title: "Corporate Logo Design",
    category: "logo",
    image: di,
  },
  {
    id: 2,
    title: "Food poster",
    category: "poster",
    image: testy,
  },
  {
    id: 3,
    title: "Brand poster",
    category: "poster",
    image: juicy,
  },
  {
    id: 4,
    title: "App advertisement",
    category: "poster",
    image: apppost,
  },
  {
    id: 5,
    title: "Brand Identity",
    category: "logo",
    image: lusi,
  },
  {
    id: 6,
    title: "Beauty Poster",
    category: "poster",
    image: beauty,
  },
  {
    id: 7,
    title: "Tour Poster",
    category: "poster",
    image: tour,
  }
];
const projects = [
  // {
  //   id: '1',
  //   title: 'Espor',
  //   description: 'A visually appealing website created for a local beauty and tailoring business. This platform showcases services, appointments, and client portfolios. The backend is currently under development to enable advanced features like real-time booking and customer management.',
  //   imageUrl: lusiweb,
  //   tags: ['React', 'Auth20', 'TailwindCSS'],
  //   screenshots: [
  //     lusiweb,
  //     lusiweb1,
  //     lusiweb2,
  //   ],
  //   // liveUrl: 'https://example.com/ecommerce',
  //   // githubUrl: 'https://github.com/example/ecommerce',
  //   type: 'web'
  // },
  // {
  //   id: '2',
  //   title: 'Fitness Tracking App',
  //   description: 'A cross-platform mobile app for tracking workouts, nutrition, and progress. Features include custom workout plans and social sharing.',

  //   tags: ['React Native', 'Firebase', 'Redux'],
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=2574",
  //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2NG58S9hfle2cONgRKqY9N&ust=1735139827815000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCNi9zZwIoDFQAAAAAdAAAAABAE",
  //     "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=2574",
  //   ],
  //   // liveUrl: 'https://example.com/fitness',
  //   // githubUrl: 'https://github.com/example/fitness',
  //   type: 'app'
  // },
  {
    id: '3',
    title: 'Real Estate Website',
    description: 'A comprehensive real-estate platform built for one of our esteemed clients. It integrates property listings, advisor logins, and user-friendly dashboards, streamlining property management and customer interactions. This website emphasizes efficiency and ease of use.',
    tags: ['React', 'Node', 'APIs', 'Tailwind', 'Google Auth'],
    // liveUrl: 'https://example.com/weather',
    imageUrl: nutan,
    screenshots: [
      nutan,
      nutan1,
      nutan2,
    ],
    // githubUrl: 'https://github.com/example/weather',
    type: 'web'
  }
]


function Works() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['all', 'logo', 'poster', 'thumbnail', 'video'];

  const filteredWorks = selectedCategory === 'all'
    ? works
    : works.filter(work => work.category === selectedCategory);

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeType, setActiveType] = useState('web');

  const filteredProjects = projects.filter(
    (project) => activeType === 'all' || project.type === activeType
  );
  return (
    <div>

      <Helmet>
        <title>Works | Dinex</title>
        <meta name="description" content="Explore our portfolio of successful projects, including a beauty and tailoring website and a real estate platform for our clients." />
        <meta name="keywords" content="Portfolio, Projects, Beauty Website, Tailoring Website, Real Estate Website, Dinestx Works" />
        <link rel="canonical" href="https://dinestx.com/works" />

      </Helmet>

   <div className="relative isolate min-h-screen w-full bg-black text-white pt-28">
      {/* The blue gradient background element */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0033ff] to-[#00c3ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
      </div>

      <Helmet>
        <title>Works | Dinestx</title>
        <meta name="description" content="Explore our portfolio of successful projects, including a beauty and tailoring website and a real estate platform for our clients." />
        <meta name="keywords" content="Portfolio, Projects, Beauty Website, Tailoring Website, Real Estate Website, Dinestx Works" />
        <link rel="canonical" href="https://dinestx.com/works" />
      </Helmet>

      <div>
        <section className="py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-3xl font-bold text-center sm:text-5xl bg-gradient-to-r from-gray-200 to-gray-400 p-2 bg-clip-text text-transparent">Our Web & App development works</h2>
            <p className="max-w-3xl mx-auto mt-4 text-md text-center text-gray-400">
              Explore our innovative web and app development projects, crafted to deliver seamless user experiences, robust functionality, and visually stunning designs that drive success.
            </p>
          </div>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
            {/* Filter Buttons: Styles updated for dark mode */}
            <div className="flex justify-center gap-4 mb-8">
              <button onClick={() => setActiveType('web')} className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${activeType === 'web' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                <Code2 size={18} /> Web Development
              </button>
              <button onClick={() => setActiveType('app')} className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${activeType === 'app' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                <Smartphone size={18} /> App Development
              </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Reveal key={project.id}>
                  <ProjectCard project={project} onOpenModal={setSelectedProject} />
                </Reveal>
              ))}
            </div>
          </main>

          {/* Project Modal */}
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>

        <section className="overflow-hidden py-12 lg:py-24 ">
          <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-center text-white mb-8">
                Our Graphics Works
              </h1>

              {/* Category Filter: Styles updated for dark mode */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(category => (
                  <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorks.map(work => (
                  <div key={work.id} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg" onClick={() => setSelectedImage(work)}>
                    <img src={work.image} alt={work.title} loading='lazy' className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <h3 className="text-white text-xl font-semibold">{work.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal */}
              <ImageModal isOpen={!!selectedImage} closeModal={() => setSelectedImage(null)} image={selectedImage?.image} title={selectedImage?.title} />
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

export default Works
