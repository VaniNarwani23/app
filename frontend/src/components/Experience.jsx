import React, { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { experience, education } from '../data/mock';

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-brand font-medium mb-4">
            MY JOURNEY
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Experience & Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Column */}
          <div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 flex items-center gap-3 mb-8">
              <div className="p-3 bg-brand-muted rounded-xl">
                <Briefcase className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="relative pl-8 pb-8 border-l-2 border-brand-muted last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-brand rounded-full border-4 border-white dark:border-gray-900 shadow" />
                    
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-brand/20 transition-shadow duration-300">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h4>
                      <p className="text-brand font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                      
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 flex items-center gap-3 mb-8">
              <div className="p-3 bg-brand-muted rounded-xl">
                <GraduationCap className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="relative pl-8 pb-8 border-l-2 border-brand-muted last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-brand rounded-full border-4 border-white dark:border-gray-900 shadow" />
                    
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-brand/20 transition-shadow duration-300">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} />
                          {edu.duration}
                        </span>
                        {edu.status && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                            {edu.status}
                          </span>
                        )}
                        {edu.score && (
                          <span className="px-2 py-1 bg-brand-muted text-brand rounded-full text-xs font-medium">
                            {edu.score}
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                      <p className="text-brand font-medium flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

export default Experience;
