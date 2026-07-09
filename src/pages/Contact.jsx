import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import BorderGlow from '../components/BorderGlow';
import { Mail, Send, Loader2 } from 'lucide-react';
import SideRays from '../components/SideRays';

const Github = () => (
    <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
);
const Linkedin = () => (
    <svg xmlns="http://w3.org" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export default function Contact() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            }
        )
            .then(
                () => {
                    setIsSubmitting(false);
                    setSubmitStatus('success');
                    formRef.current.reset();

                    setTimeout(() => setSubmitStatus(null), 3000);
                },
                (error) => {
                    setIsSubmitting(false);
                    setSubmitStatus('error');
                    console.error('Email gönderim hatası:', error.text);
                }
            );
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-16 lg:px-24 bg-transparent flex items-center justify-center relative overflow-hidden">

            <div className="fixed inset-0 z-0 pointer-events-none">
                <SideRays
                    speed={2.5}
                    rayColor1="#EAB308"
                    rayColor2="#96c8ff"
                    intensity={2.6}
                    spread={1.9}
                    origin="top-right"
                    tilt={17}
                    saturation={0.95}
                    blend={0.75}
                    falloff={1.4}
                    opacity={0.75}
                />
            </div>

            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Let's <span className="text-blue-500">Connect</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-6">
                        <a
                            href="mailto:ali.taha.celik@gmail.com"
                            className="flex items-center gap-4 text-gray-300 hover:text-white hover:translate-x-2 transition-all group w-fit"
                        >
                            <div className="p-3 bg-slate-800/50 rounded-xl border border-white/5 group-hover:border-blue-500/50 transition-colors">
                                <Mail className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="font-medium text-lg">ali.taha.celik@gmail.com</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ali-ihsan-celik-thk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-gray-300 hover:text-white hover:translate-x-2 transition-all group w-fit"
                        >
                            <div className="p-3 bg-slate-800/50 rounded-xl border border-white/5 group-hover:border-blue-500/50 transition-colors">
                                <Linkedin className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="font-medium text-lg">LinkedIn Profile</span>
                        </a>

                        <a
                            href="https://github.com/pordarman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-gray-300 hover:text-white hover:translate-x-2 transition-all group w-fit"
                        >
                            <div className="p-3 bg-slate-800/50 rounded-xl border border-white/5 group-hover:border-blue-500/50 transition-colors">
                                <Github className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="font-medium text-lg">GitHub (@pordarman)</span>
                        </a>
                    </div>
                </div>

                <div className="w-full h-full flex items-center justify-center">
                    <BorderGlow
                        className="w-full max-w-md p-8 bg-slate-900/80 backdrop-blur-xl"
                        glowColor="210 100% 60%"
                        borderRadius={24}
                    >
                        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
                            <h2 className="text-2xl font-bold text-white mb-2">Send me a message</h2>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="user_name" className="text-sm font-medium text-gray-400">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="user_email" className="text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows="4"
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm text-center">
                                    Message sent successfully!
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm text-center">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </form>
                    </BorderGlow>
                </div>

            </div>
        </div>
    );
}