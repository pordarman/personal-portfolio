import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492 .997 .108-.775 .418-.997 .762-1.225-2.665-.3-5.467-1.332-5.467-5.93 0-1.31 .468-2.38 1.236-3.22-.124-.303-.536-1.523 .117-3.176 0 0 1.008-.322 3.301 1.23 .957-.266 1.983-.399 3.003-.404 1.02 .005 2.047 .138 3.006 .404 2.291-1.552 3.297-1.23 3.297-1.23 .655 1.653 .243 2.873 .12 3.176 .77 .84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921 .43 .372 .823 1.102 .823 2.222v3.293c0 .319 .218 .694 .825 .576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.609c0-3.368-4-3.113-4 0v5.609h-3v-11h3v1.765c1.396-2.586 7-2.778 7 2.476v6.88z" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.645.069-4.849.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.368 2.163 12s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.31-3.608C0 .975-.248-.248-.31-1c-.058-1 .069-4 .069s3 .012 4 .07c1 .062 2 .334 3 .31C8 .175 8 .163 12 .163zM12 .163C8 .163 7 .175 6 .237c-1 .062-2 .334-3 .31C2 .175 2 .163 12 .163zm0 5a6 6 0 100 12A6 6 0 0012 5zm0 10a4 4 0 110-8A4 4 0 0112 15zm6-11a1 1 0 11-2 .001A1 1 0 0118 .001z" />
  </svg>
);

const contactLinks = [
  {
    name: "GitHub",
    icon: <Github size={32} />,
    url: "https://github.com/pordarman",
    handle: "pordarman"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={32} />,
    url: "https://linkedin.com/in/ali-ihsan-celik-thk/",
    handle: "Ali İhsan Çelik"
  },
  {
    name: "Instagram",
    icon: <Instagram size={32} />,
    url: "https://instagram.com/ali.celk",
    handle: "ali.celk"
  },
  {
    name: "Email",
    icon: <Mail size={32} />,
    url: "mailto:ali.taha.celik@gmail.com",
    handle: "ali.taha.celik@gmail.com"
  },
];

const ContactSection = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' }); 
  const [cooldown, setCooldown] = useState(0); 

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ status: 'loading', message: '' });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      }
    )
      .then(() => {
        setFormStatus({ status: 'success', message: 'Your message has been sent successfully!' });
        setCooldown(60);
        e.target.reset(); 
      }, () => {
        setFormStatus({ status: 'error', message: 'Failed to send message. Please try again.' });
      });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            To exchange ideas, talk about a project, or just say hello, you can reach me through the channels below. I'm currently based in Ankara, Türkiye.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-4 bg-white dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 shadow-sm mb-6">
                {link.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{link.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors break-all text-center">
                {link.handle}
              </p>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mb-16 opacity-50">
          <div className="h-px bg-slate-300 dark:bg-slate-700 w-full max-w-[200px]"></div>
          <span className="text-sm font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Or send a message</span>
          <div className="h-px bg-slate-300 dark:bg-slate-700 w-full max-w-[200px]"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="from_name" 
                  name="from_name" 
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-slate-900 dark:text-white transition-all outline-none"
                  placeholder="John Doe" 
                />
              </div>
              
              <div>
                <label htmlFor="reply_email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email for Reply <span className="text-slate-400 dark:text-slate-500 font-normal">(Optional)</span>
                </label>
                <input 
                  type="email" 
                  id="reply_email" 
                  name="reply_email"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-slate-900 dark:text-white transition-all outline-none"
                  placeholder="john.doe@example.com" 
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-slate-900 dark:text-white transition-all outline-none"
                placeholder="Let's talk about..." 
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-slate-900 dark:text-white transition-all outline-none resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <AnimatePresence>
              {formStatus.status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className={`px-4 py-3 rounded-xl flex items-center justify-center font-medium ${
                    formStatus.status === 'success' 
                      ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20' 
                      : formStatus.status === 'error' 
                        ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20' 
                        : 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20'
                  }`}
                >
                  {formStatus.status === 'loading' ? 'Sending message...' : formStatus.message}
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit" 
              disabled={formStatus.status === 'loading' || cooldown > 0}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-cyan-600 hover:bg-slate-800 dark:hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/25"
            >
              {formStatus.status === 'loading' ? (
                'Sending...'
              ) : cooldown > 0 ? (
                `Wait ${cooldown}s`
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;