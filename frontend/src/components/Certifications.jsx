import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, ExternalLink, ChevronRight } from 'lucide-react';
import { certifications } from '../data/mock';
import { Button } from './ui/button';

const Certifications = () => {
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
      id="certifications"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-50/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-pink-500 font-medium mb-4">
            MY ACHIEVEMENTS
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Certifications
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 max-w-2xl mx-auto">
            Continuous learning is key to growth. Here are some of the certifications I've earned along my journey.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                onClick={() => navigate(`/certification/${cert.id}`)}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-pink-200"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Certificate Image */}
                  <div className="relative w-full md:w-48 h-48 md:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50 md:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent md:hidden" />
                  </div>

                  {/* Certificate Info */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-pink-500" />
                        <span className="text-sm text-gray-500 font-medium">{cert.issuer}</span>
                      </div>
                      <span className="text-xs text-gray-400">{cert.issueDate}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-md text-xs font-medium">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-pink-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      View Certificate
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-700 text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-gray-200 hover:border-pink-300 text-gray-700 hover:text-pink-600 px-8 py-6 rounded-full text-base font-medium transition-all hover:shadow-lg group"
          >
            View All Certificates
            <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
