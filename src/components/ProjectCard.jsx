import React from "react";
import { ExternalLink, Github, Maximize2 } from "lucide-react";

export function ProjectCard({ project, onOpenModal }) {
  return (
   <div
  className="bg-gray-800/60 border border-gray-700 rounded-xl overflow-hidden shadow-lg 
  hover:shadow-blue-500/30 transition-all duration-300 flex flex-col
  w-auto" // instead of w-80
>
      {/* Image Section */}
      <div className="h-44 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white line-clamp-1">
            {project.title}
          </h3>
          <p className="text-gray-400 mt-2 text-sm line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-600/20 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => onOpenModal(project)}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
