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
      className="py-24 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-50/50 to-transparent dark:from-pink-950/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-pink-500 dark:text-pink-400 font-medium mb-4">
            GET TO KNOW ME
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
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

            {/* Highlights Grid */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="p-5 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-all duration-300 group cursor-default"
                >
                  <item.icon className="w-8 h-8 text-pink-500 dark:text-pink-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.label}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Frontend Skills</h3>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-100 dark:bg-gray-700" />
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Backend Skills</h3>
              <div className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-100 dark:bg-gray-700" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Soft Skills */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-pink-100 dark:hover:bg-pink-900/50 hover:text-pink-700 dark:hover:text-pink-300 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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

export default About;
