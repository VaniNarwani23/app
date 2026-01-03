import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-pink-500 hover:bg-pink-600">
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Close button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <span className="text-2xl">&times;</span>
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Project Card */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50">
          {/* Project Image */}
          <div className="relative h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </div>

          {/* Project Info */}
          <div className="p-8 md:p-12">
            {/* Title & Category */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {project.title}
              </h1>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">About the Project</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <ChevronRight size={18} className="text-pink-400 mt-1 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.open(project.github, '_blank')}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-6 rounded-xl text-base font-medium transition-all"
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
      </div>
    </div>
  );
};

export default ProjectDetail;
