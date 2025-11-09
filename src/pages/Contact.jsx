import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

// İkonlar için SVG bileşenleri
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const FileUploadIcon = () => (
  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
  </svg>
);
const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

const contactLinks = [
  {
    name: "GitHub",
    icon: <GithubIcon />,
    url: "https://github.com/pordarman",
    handle: "pordarman"
  },
  {
    name: "LinkedIn",
    icon: <LinkedinIcon />,
    url: "https://linkedin.com/in/ali-ihsan-celik-thk/",
    handle: "Ali İhsan Çelik"
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    url: "https://instagram.com/ali.celk",
    handle: "ali.celk"
  },
  {
    name: "Email",
    icon: <MailIcon />,
    url: "mailto:ali.taha.celik@gmail.com",
    handle: "ali.taha.celik@gmail.com"
  },
];

function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' }); // idle, loading, success, error
  const [cooldown, setCooldown] = useState(0); // Geri sayım sayacını tutacak state

  // Geri sayım sayacını yönetecek olan useEffect hook'u
  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      // Cooldown 0'dan büyük olduğu sürece her saniye 1 azalt
      timer = setInterval(() => {
        setCooldown((prevCooldown) => prevCooldown - 1);
      }, 1000);
    }

    // Component'ten çıkıldığında veya sayaç bittiğinde interval'ı temizle
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
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setFormStatus({ status: 'success', message: 'Your message has been sent successfully!' });
        setCooldown(60);
        e.target.reset(); // Formu temizle
      }, (error) => {
        console.log("FAILED...", error);
        setFormStatus({ status: 'error', message: 'Failed to send message. Please try again.' });
      });
  };

  return (
    <section id="contact" className="dark:text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">Get in Touch</h2>
          <p className="text-lg text-gray-400">
            To exchange ideas, talk about a project, or just say hello, <br className="hidden sm:block" />
            you can reach me through the channels below.
          </p>
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-200 dark:bg-slate-800 p-6 sm:p-8 rounded-lg text-center group hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {link.icon}
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-2">{link.name}</h3>
              <p className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-300 break-all">{link.handle}</p>
            </a>
          ))}
        </div>

        <div className="max-w-4xl mx-auto my-12 flex items-center">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="mx-4 flex-shrink text-lg text-gray-500 dark:text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-200 dark:bg-slate-800 p-8 rounded-lg shadow-lg">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* İsim Alanı */}
              <div>
                <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                <input type="text" id="from_name" name="from_name" required
                  className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="John Doe" />
              </div>
              {/* Cevap Maili Alanı (Opsiyonel) */}
              <div>
                <label htmlFor="reply_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email for Reply <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <input type="email" id="reply_email" name="reply_email"
                  className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="john.doe@example.com" />
              </div>
            </div>

            {/* Konu Alanı */}
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name="subject" required
                className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Let's talk about..." />
            </div>

            {/* Mesaj İçeriği Alanı */}
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Message</label>
              <textarea id="message" name="message" rows="6" required
                className="w-full p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Your message here..."></textarea>
            </div>
            <AnimatePresence>
              {formStatus.status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-center p-3 rounded-lg ${formStatus.status === 'success' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300' :
                    formStatus.status === 'error' ? 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300' :
                      'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300'
                    }`}
                >

                  {formStatus.status === 'loading' ? 'Sending...' : formStatus.message}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="text-center">
              <button type="submit" disabled={formStatus.status === 'loading' || cooldown > 0}
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg w-full sm:w-auto px-10 py-3 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                {formStatus.status === 'loading'
                  ? 'Sending...'
                  : cooldown > 0
                    ? `Please wait ${cooldown}s` // Bekleme süresi varken sayacı göster
                    : 'Send Message' // Normal durum
                }
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
