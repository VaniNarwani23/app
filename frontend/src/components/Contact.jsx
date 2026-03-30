import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Linkedin, Phone, Instagram, Github, ArrowRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import Cal, { getCalApi } from "@calcom/embed-react";

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

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("floatingButton", {
        "calLink": "vani-narwani-x2ksxt/30min",
        "buttonText": "Book a Call",
        "label": "Book a Call",
        "config": { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }
      });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  const handleBookACall = async () => {
    const cal = await getCalApi({ "namespace": "30min" });
    cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    cal("openModal", {
      calLink: "vani-narwani-x2ksxt/30min",
      config: { "layout": "month_view" }
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'EMAIL', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: MapPin, label: 'LOCATION', value: personalInfo.location, href: null },
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: socialLinks.linkedin },
    { icon: Github, label: 'GitHub', href: socialLinks.github },
    { icon: Instagram, label: 'Instagram', href: "#" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-muted rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="mb-16 text-center">
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 text-brand font-medium mb-4">
            GET IN TOUCH
          </p>
          <h2
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's Work Together
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Contact Info */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="p-6 md:p-10 h-full bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm space-y-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-5">
                    <div className="p-3.5 bg-brand-muted rounded-2xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-brand" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-1 uppercase ">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-gray-100 font-extrabold hover:text-brand transition-colors text-xl tracking-tight"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-gray-100 font-extrabold text-xl tracking-tight">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Socials & Booking */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500">
            <div className="p-6 md:p-10 h-full bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8">Follow Me</h3>
                <div className="flex gap-5 mb-12">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105"
                    >
                      <social.icon className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>

              <button
                data-cal-link="vani-narwani-x2ksxt/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                className="w-full py-5 bg-brand hover:bg-brand-accent text-brand-foreground font-bold rounded-[1.25rem] flex items-center justify-center gap-3 transition-all hover:gap-5 text-xl group shadow-lg shadow-brand/20"
              >
                Book a Call <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
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
