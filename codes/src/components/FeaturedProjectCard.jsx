import React from "react";

function FeaturedProjectCard({ project }) {
  const { title, description, imageUrl, startDate, status } = project;

  return (
    // Kartın genişliğini ve esnek büyüme davranışını ayarlıyoruz
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col w-full sm:w-5/6 md:w-[400px]">
      
      {/* Resim ve "Devam Ediyor" kurdelesi için container */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src={imageUrl}
          alt={`${title} projesinin ekran görüntüsü`}
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/1e2b3c/ffffff?text=Gorsel+Yok"; }}
        />
        {/* Eğer proje durumu "ongoing" ise kurdeleyi göster */}
        {status === "ongoing" && (
          <div className="absolute top-0 right-0 w-32 h-32">
            <div className="absolute transform rotate-45 bg-red-600 text-center text-white font-semibold py-1 right-[-40px] top-[32px] w-[170px]">
              Devam Ediyor
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow item-center justify-center text-center">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="mt-auto pt-4 border-t border-slate-700">
          <p className="text-xs text-gray-500">
            Başlangıç Tarihi: {startDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
