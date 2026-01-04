import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, ChevronRight, X } from 'lucide-react';
import { certifications } from '../data/mock';
import { Button } from './ui/button';

const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto border border-gray-200 dark:border-gray-700/50 relative" onClick={(e) => e.stopPropagation()}>
         <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
        >
          <X size={20} />
        </button>
        <div className="overflow-y-auto max-h-[90vh] p-4 md:p-8">
          <div className="mb-6">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-black dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>{certificate.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{certificate.longDescription || certificate.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all">
              <a href={certificate.verifyUrl} target="_blank" rel="noopener noreferrer">
                View Certificate <ExternalLink size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const sectionRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

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
      className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/20 via-transparent to-pink-50/20 dark:from-purple-950/20 dark:to-pink-950/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-pink-500 dark:text-pink-400 font-medium mb-4">
            MY ACHIEVEMENTS
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Certifications
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning is key to growth. Here are some of the certifications I've earned along my journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                onClick={() => setSelectedCert(cert)}
                className="group bg-white dark:bg-gray-900/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-pink-900/20 transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-800/50 h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/80 dark:text-gray-200 text-gray-900 rounded-full text-sm font-medium">
                      {cert.issuer}
                    </span>
                    <div className="flex gap-2">
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white/90 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors">
                            <ExternalLink size={18} className="text-gray-700 dark:text-gray-300" />
                        </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-300 rounded-full text-xs font-medium">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
                    <div className="flex items-center text-pink-500 dark:text-pink-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                        View Details
                        <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500 text-center mt-12">
          <a href="https://drive.google.com/file/d/1fFcw-HZBKYwsrDs0rx7raIgpoGT6o0Wf/view" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-2 border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-400 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 px-8 py-6 rounded-full text-base font-medium transition-all hover:shadow-lg group bg-white/30 dark:bg-gray-900/30"
            >
              View All Certificates
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>

      <CertificateModal certificate={selectedCert} onClose={() => setSelectedCert(null)} />

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
