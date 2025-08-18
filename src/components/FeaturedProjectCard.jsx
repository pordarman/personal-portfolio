import React from "react";

function FeaturedProjectCard({ project }) {
  const { title, description, imageUrl, projectUrl, startDate, status } = project;

  return (
    // 1. Genişliği artırdık: md:w-[400px] -> md:w-[500px]
    <div className="bf-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col w-full sm:w-5/6 md:w-[600px]">

      {/* 2. Resim kapsayıcısına en-boy oranı verdik ve taşmayı engelledik */}
      <div className="relative w-full aspect-video overflow-hidden">
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img
            // 3. Resmin sabit yüksekliğini kaldırıp kapsayıcıyı doldurmasını sağladık
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={`${title} projesinin ekran görüntüsü`}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1e2b3c/ffffff?text=Gorsel+Yok"; }}
          />
        </a>
        {/* Eğer proje durumu "ongoing" ise kurdeleyi göster */}
        {status === "ongoing" && (
          <div className="absolute top-0 right-0 w-32 h-32">
            <div className="absolute transform rotate-45 dark:bg-red-600 text-center text-white font-semibold py-1 right-[-40px] top-[32px] w-[170px]">
              <span className="block">On Going</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow item-center justify-center text-center">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {
            projectUrl ? (
              <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-600 underline">{title}</a>
            ) : (
              <span>{title}</span>
            )
          }
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="mt-auto pt-4 border-t border-slate-700">
          <p className="text-xs text-gray-500">
            Start Date: {startDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;