import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo, navItems } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-pink-300 dark:bg-gray-900 text-gray-800 dark:text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8"> 
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold tracking-tight mb-4 block hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {personalInfo.firstName} {personalInfo.lastName}
              <span className="text-pink-500 dark:text-pink-400">.</span>
            </button>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-pink-500" /> by {personalInfo.name}
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 p-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
