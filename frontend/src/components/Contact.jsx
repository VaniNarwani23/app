import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';

const Contact = () => {
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

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: socialLinks.linkedin },
    { icon: Github, label: 'GitHub', href: socialLinks.github },
    { icon: Mail, label: 'Email', href: socialLinks.email },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-pink-100/50 dark:bg-pink-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-pink-500 dark:text-pink-400 font-medium mb-4">
            GET IN TOUCH
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's Work Together
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow dark:shadow-gray-900/50"
                  >
                    <div className="p-3 bg-pink-100 dark:bg-pink-900/50 rounded-xl">
                      <info.icon className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800/50 rounded-full shadow-sm hover:shadow-md dark:shadow-gray-900/50 hover:bg-gray-900 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Google Form */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500">
            <div className="h-[428px] w-full bg-white/50 dark:bg-gray-800/50 rounded-3xl shadow-lg dark:shadow-gray-900/50 overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdR8uDq1SKJ5Np3ziW1vEvx-D-PIrWEkLp1gotXlfQt5fJVgQ/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                className="-my-2"
              >
                Loading…
              </iframe>
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

export default Contact;
