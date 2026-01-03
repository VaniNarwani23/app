import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Hero = () => {
  const heroRef = useRef(null);

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

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-pink-50/30 to-purple-50/20"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-100/20 to-purple-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100/60 rounded-full text-pink-600 text-sm font-medium mb-6">
                <Sparkles size={16} />
                <span>Available for opportunities</span>
              </div>
            </div>

            <h1
              className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Hi, I'm{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  {personalInfo.firstName}
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="#F9A8D4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-xl md:text-2xl text-gray-600 font-medium"
              style={{ fontFamily: 'Figtree, sans-serif' }}
            >
              {personalInfo.title}
            </p>

            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 text-gray-500 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full text-base font-medium transition-all hover:shadow-xl hover:-translate-y-1"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-6 rounded-full text-base font-medium transition-all hover:shadow-lg hover:-translate-y-1 bg-white/50"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Main avatar container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full" />
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative w-full h-full object-cover rounded-full p-2"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce-slow">
                <div className="text-2xl">💻</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce-slow delay-500">
                <div className="text-2xl">✨</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
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
      `}</style>
    </section>
  );
};

export default Hero;
