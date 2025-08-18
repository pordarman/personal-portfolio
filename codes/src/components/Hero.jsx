import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Merhaba, ben Ali İhsan Çelik
            <br className="hidden lg:inline-block" />
            Ben bir Bilgisayar Mühendisliği Öğrencisiyim.
          </h1>
          <p className="mb-8 leading-relaxed">
            Teknolojiye ve yazılım geliştirmeye tutkuyla bağlı, sürekli yeni şeyler öğrenmeyi seven bir geliştiriciyim. React, Node.js ve C# gibi teknolojilerle modern ve kullanıcı dostu uygulamalar geliştiriyorum.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/projects" 
              className="inline-flex text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg transition-colors duration-300"
            >
              Projelerimi İncele
            </Link>
            <Link 
              to="/contact" 
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transition-colors duration-300"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img 
            className="object-cover object-center rounded-full mx-auto shadow-lg shadow-cyan-500/20" 
            alt="hero" 
            src="https://placehold.co/400x400/1e293b/ffffff?text=Profil+Foto" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
