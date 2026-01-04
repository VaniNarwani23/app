import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';
import ProjectDetail from './ProjectDetail';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 dark:bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto border border-gray-200 dark:border-gray-700/50 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
        >
          <X size={20} />
        </button>
        <div className="overflow-y-auto max-h-[90vh] p-4 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-72 h-72 bg-sky-100/50 dark:bg-sky-900/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-100/30 dark:bg-cyan-900/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className=" text-pink-500 reveal opacity-0 translate-y-8 transition-all duration-700  dark:text-pink-500 dark:text-sky-400 font-medium mb-4">
            MY PORTFOLIO
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Featured Projects
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dive into my latest works where creativity meets craftsmanship, designed to captivate and inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={project.id}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                className="group bg-white dark:bg-gray-900/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-sky-900/20 transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-800/50"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/80 dark:text-gray-200 text-gray-900 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <button
                        className="w-10 h-10 bg-white/90 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github size={18} className="text-gray-700 dark:text-gray-300" />
                      </button>
                      <button
                        className="w-10 h-10 bg-white/90 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.live, '_blank');
                        }}
                      >
                        <ExternalLink size={18} className="text-gray-700 dark:text-gray-300" />
                      </button>
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300 rounded-full text-xs font-medium">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sky-500 dark:text-sky-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500 text-center mt-12">
          <Link to="https://github.com/VaniNarwani23">
            <Button
              variant="outline"
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-sky-400 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-sky-400 px-8 py-6 rounded-full text-base font-medium transition-all hover:shadow-lg group bg-white/30 dark:bg-gray-900/30"
            >
              View All Projects
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>

      <style jsx>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Projects;
