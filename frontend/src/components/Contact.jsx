import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
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
      className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-pink-500 font-medium mb-4">
            GET IN TOUCH
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's Work Together
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-pink-100 rounded-xl">
                      <info.icon className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-900 font-medium hover:text-pink-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-gray-900 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500 hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-20" />
                <div className="relative bg-white rounded-3xl p-8 shadow-sm">
                  <p className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Open to Opportunities
                  </p>
                  <p className="text-gray-600">
                    I'm currently looking for internship and full-time opportunities. Let's create something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-pink-300 focus:ring-pink-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-pink-300 focus:ring-pink-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-pink-300 focus:ring-pink-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-full text-base font-medium transition-all hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
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
