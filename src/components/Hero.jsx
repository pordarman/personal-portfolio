import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import spiritfallImg from '../assets/spiritfall_preview.webp';
import teknofestImg from '../assets/teknofest_preview.webp';
import portfolioImg from '../assets/personal-portfolio.webp';
import alisaImg from '../assets/alisa_preview.webp';
import sudokuImg from '../assets/sudoku-web_400x600.webp';
import ultimateStatsImg from '../assets/ultimate-stat-bot.webp';

const slides = [
    {
        id: 1,
        title: "Spiritfall - 2D Pixel Game",
        description: "Face a corrupted wilderness in this top-down action roguelite. A vile spirit has twisted animals into monsters, and you must survive their hordes. Your goal: purify, don't kill.",
        image: spiritfallImg,
        link: "/projects/spiritfall-2d-pixel-game"
    },
    {
        id: 2,
        title: "Alisa",
        description: "A discord bot that can handle various tasks, including moderation, register users, fun commands, custom messages and many more. Built with Node.js and Discord.js.",
        image: alisaImg,
        link: "/projects/alisa"
    },
    {
        id: 3,
        title: "Personal Portfolio Website",
        description: "My personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience in a sleek, modern design.",
        image: portfolioImg,
        link: "/projects/personal-portfolio"
    },
    {
        id: 4,
        title: "TEKNOFEST 2025 - UAV Competition Finalist",
        description: "Led a team to the finals in the TEKNOFEST 2025 UAV competition, developing an autonomous drone system using Python and ROS for complex flight missions.",
        image: teknofestImg,
        link: "/projects/teknofest-2025-uav-competition"
    },
    {
        id: 5,
        title: "Sudoku PDF Generator",
        description: "My first web project, a Sudoku PDF generator that creates printable Sudoku puzzles with varying difficulty levels. Built with React and Tailwind CSS, it allows users to generate and download Sudoku puzzles in PDF format for offline play.",
        image: sudokuImg,
        link: "/projects/sudoku-pdf-generator"
    },
    {
        id: 6,
        title: "Ultimate Stats - Discord Bot",
        description: "A Discord bot that provides detailed statistics and analytics for Discord servers, including member activity, message counts, and more. Built with Node.js and Discord.js.",
        image: ultimateStatsImg,
        link: "/projects/ultimate-stat-bot"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    let timer;

    useEffect(() => {
        timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[85vh] overflow-hidden bg-slate-50 dark:bg-slate-900 group transition-colors duration-300">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Link to={slides[currentSlide].link} className="block w-full h-full relative p-4 md:p-8 lg:p-12">

                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-full object-contain drop-shadow-lg"
                        />

                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50/95 via-slate-50/50 to-transparent dark:from-slate-900/95 dark:via-slate-900/50 dark:to-transparent transition-colors duration-300 pointer-events-none rounded-b-xl"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-4 text-center">
                            <div className="max-w-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">

                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-md dark:drop-shadow-lg transition-colors duration-300">
                                    {slides[currentSlide].title}
                                </h2>

                                <p className="text-base md:text-xl text-slate-700 dark:text-slate-200 mb-6 drop-shadow-sm max-w-2xl line-clamp-3 transition-colors duration-300">
                                    {slides[currentSlide].description}
                                </p>

                                <span className="inline-block px-6 py-3 text-sm bg-slate-900/10 hover:bg-slate-900/20 text-slate-900 border border-slate-900/20 dark:bg-white/20 dark:hover:bg-white/30 dark:border-white/30 backdrop-blur-md dark:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                                    View Project
                                </span>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => { setCurrentSlide(index); clearInterval(timer); }}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index
                                ? 'w-8 h-2 bg-slate-800 dark:bg-white'
                                : 'w-2 h-2 bg-slate-400 hover:bg-slate-600 dark:bg-white/50 dark:hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;