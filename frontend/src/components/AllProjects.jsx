import React from 'react';
import { projects } from '../data/mock';
import { Github, ExternalLink, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const AllProjects = () => {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Link to="/" className="inline-block mb-8">
            <Button variant="outline" className="border-2 border-gray-200 dark:border-gray-700 hover:border-sky-300 dark:hover:border-sky-400 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 px-6 py-3 rounded-full text-base font-medium transition-all hover:shadow-lg group bg-white/30 dark:bg-gray-900/30">
              <ChevronLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            All Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse through a comprehensive list of my projects, showcasing a variety of skills and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-gray-900/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-sky-900/20 transition-all duration-500 border border-gray-100 dark:border-gray-800/50">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/80 dark:text-gray-200 text-gray-900 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/90 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors">
                      <Github size={18} className="text-gray-700 dark:text-gray-300" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/90 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors">
                      <ExternalLink size={18} className="text-gray-700 dark:text-gray-300" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
