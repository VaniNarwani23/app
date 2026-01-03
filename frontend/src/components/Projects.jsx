import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';

const Projects = () => {
  const navigate = useNavigate();
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
      className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-pink-500 font-medium mb-4">
            MY PORTFOLIO
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Featured Projects
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 max-w-2xl mx-auto">
            Dive into my latest works where creativity meets craftsmanship, designed to captivate and inspire.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <button
                        className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github size={18} className="text-gray-700" />
                      </button>
                      <button
                        className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.live, '_blank');
                        }}
                      >
                        <ExternalLink size={18} className="text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-medium">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* View Details Link */}
                  <div className="flex items-center text-pink-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500 text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-gray-200 hover:border-pink-300 text-gray-700 hover:text-pink-600 px-8 py-6 rounded-full text-base font-medium transition-all hover:shadow-lg group"
          >
            View All Projects
            <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

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
