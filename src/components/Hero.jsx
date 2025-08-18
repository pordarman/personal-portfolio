import React from "react";
import { Link } from "react-router-dom";

import me from "../assets/me.webp";

function Hero() {
  return (
    <section className="text-slate-800 dark:text-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 md:pr-16 w-5/6">
          <img 
            className="object-cover object-center rounded-full mx-auto shadow-lg shadow-cyan-500/20" 
            alt="hero" 
            src={me}
          />
        </div>

        <div className="lg:flex-grow md:w-1-2 lg:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-900 dark:text-white">
            Hello, I'm Ali İhsan Çelik
            <br className="hidden lg:inline-block" />
            I am a Computer Engineering Student.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
            I'm a developer driven by a profound passion for turning complex problems into elegant and intuitive software. <br className="hidden sm:block" />
            For me, the thrill lies not just in writing code, but in the creative process of building new worlds and crafting seamless user experiences. 
            I leverage modern technologies like React, Node.js, Python, C# and many more to bring ideas to life, constantly seeking new challenges in a field that's always evolving
          </p>
          <div className="flex justify-center">
            <Link 
              to="/projects" 
              className="inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg transition-colors duration-300"
            >
              View My Projects
            </Link>
            <Link 
              to="/contact" 
              className="ml-4 inline-flex text-gray-700 bg-gray-200 dark:text-gray-400 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-slate-900 dark:hover:text-white rounded text-lg transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
