import React from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const ProjectDetail = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden">
      <div className="relative h-80 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      <div className="p-8 md:p-12">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium mb-4">
            {project.category}
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {project.title}
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">About the Project</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
              >
                <ChevronRight size={18} className="text-pink-500 dark:text-pink-400 mt-1 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-500/30 hover:bg-purple-200 dark:hover:bg-purple-500/30 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => window.open(project.github, '_blank')}
            className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-6 rounded-xl text-base font-medium transition-all"
          >
            <Github size={20} className="mr-2" />
            View Code
          </Button>
          <Button
            onClick={() => window.open(project.live, '_blank')}
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-6 rounded-xl text-base font-medium transition-all"
          >
            <ExternalLink size={20} className="mr-2" />
            View Live
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
