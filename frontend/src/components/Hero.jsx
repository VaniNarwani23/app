import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import Typed from 'typed.js';

const Hero = () => {
  const heroRef = useRef(null);
  const typedRef = useRef(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    // Typed.js animation
    const options = {
      strings: [personalInfo.title, 'A Frontend Developer', 'A Backend Developer','MERN Stack Developer','A Creative Problem-Solver'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: '|',
    };

    typedRef.current = new Typed('#element', options);

    return () => {
      observer.disconnect();
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 dark:bg-sky-900/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 dark:bg-cyan-900/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-sky-100/20 to-cyan-100/20 dark:from-sky-900/20 dark:to-cyan-900/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100/60 dark:bg-sky-900/60 rounded-full text-white-600 dark:text-white-300 text-sm font-medium mb-6">
                <Sparkles size={16} />
                <span>Available for opportunities</span>
              </div>
            </div>

            <h1
              className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Hello, I'm{' '}
              <span className="relative">
                <span className="text-pink bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                  {personalInfo.firstName}
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    className="stroke-pink-500 dark:stroke-blue-500"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <div
              className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              style={{ fontFamily: 'Figtree, sans-serif' }}
            >
              <span id="element"></span>
            </div>

            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 text-white px-8 py-6 rounded-full text-base font-medium transition-all hover:shadow-xl hover:-translate-y-1"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-6 rounded-full text-base font-medium transition-all hover:shadow-lg hover:-translate-y-1 bg-white/50 dark:bg-gray-900/50 dark:hover:bg-gray-800/50"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-pink-400  rounded-full blur-2xl opacity-30 dark:bg-gradient-to-r from-sky-400 opacity-20 animate-pulse" />
              
              {/* Main avatar container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-pink-200  dark:bg-sky-500  rounded-full" />
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative w-full h-full object-cover rounded-full p-2"
                />
              </div>

         
           
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>

      <style jsx>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .typed-cursor {
          font-size: 2rem;
          color: #9ca3af;
        }
      `}</style>
    </section>
  );
};

export default Hero;
