import React, { useEffect, useRef } from 'react';
import { Code2, Palette, Zap, Heart } from 'lucide-react';
import { aboutContent, skills, softSkills, personalInfo } from '../data/mock';
import { Progress } from './ui/progress';

const About = () => {
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

  const highlights = [
    { icon: Code2, label: 'Clean Code', description: 'Writing maintainable, scalable solutions' },
    { icon: Palette, label: 'Creative Design', description: 'Crafting beautiful user interfaces' },
    { icon: Zap, label: 'Fast Learner', description: 'Adapting to new technologies quickly' },
    { icon: Heart, label: 'Passionate', description: 'Loving every line of code I write' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-muted to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-brand font-medium mb-4">
            GET TO KNOW ME
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Story */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {aboutContent.intro}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {aboutContent.story}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {aboutContent.passion}
            </p>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="p-5 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-2xl hover:bg-brand-muted hover:border-brand/30 transition-all duration-300 group cursor-default"
              >
                <item.icon className="w-8 h-8 text-brand mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.label}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Width Skills Section */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 pt-16 border-t border-gray-100 dark:border-gray-800/50">
          <div className="mb-12">
            <p className="text-brand font-medium tracking-widest text-sm mb-4 uppercase">
              WHAT I WORK WITH
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Skills & Technologies
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {skills.technical.map((skill, index) => (
              <div
                key={index}
                className="reveal opacity-0 translate-y-4 group p-4 bg-brand-muted/10 dark:bg-brand-muted/5 border border-gray-100 dark:border-gray-800/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-brand/40 hover:bg-brand/10 hover:translate-y-[-4px] hover:shadow-xl dark:hover:shadow-brand/10 cursor-default"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm md:text-base group-hover:text-brand transition-colors text-center">
                  {skill}
                </span>
              </div>
            ))}
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

export default About;
