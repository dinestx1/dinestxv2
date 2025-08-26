import { useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import ImageModal from "./ImageModel";

export function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        
        {/* Close Button */}
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Screenshot Gallery */}
          <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(screenshot)}
              >
                <img
                  src={screenshot}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6 text-gray-200">
          <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:scale-105"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all hover:scale-105"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        closeModal={() => setSelectedImage(null)}
        image={selectedImage}
        title={selectedImage?.title}
      />
    </div>
  );
}
