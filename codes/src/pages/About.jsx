import React from "react";

// İkonlar için basit SVG bileşenleri
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const GamepadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.21 6.29L17.58 7.5M4.22 12.58l2.37 1.21m6.78-3.97l2.37-1.21m-2.37 7.94L6.59 15m12.37-6.42L15 10.08M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
  </svg>
);

const DumbbellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 6.75l-4.25 4.25m0 0l-4.25 4.25M16.75 11l4.25 4.25m-8.5-8.5L12.5 2.5m0 0L8.25 6.75M12.5 2.5v19.5m-4.25-4.25L3.25 11m0 0L7.5 6.75M3.25 11h19.5" />
    </svg>
);


function About() {
  return (
    <section id="about" className="text-white">
      <div className="container mx-auto px-4 py-10">
        
        {/* Üst Başlık ve Tanıtım */}
        <div className="text-center mb-20">
          <img 
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg shadow-cyan-500/30"
            src="https://placehold.co/400x400/1e293b/ffffff?text=Profil+Foto" 
            alt="Profil Fotoğrafı"
          />
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">Ali İhsan Çelik</h2>
          <p className="text-lg text-cyan-400">Bilgisayar Mühendisliği Öğrencisi & Yazılım Geliştirici</p>
        </div>

        {/* Hikayem Bölümü */}
        <div className="max-w-3xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-8 border-b-2 border-cyan-500 pb-2">Yolculuğum</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Merhaba! Ben Ali İhsan. 22 yaşında, Türk Hava Kurumu Üniversitesi"nde 2. sınıf Bilgisayar Mühendisliği öğrencisiyim. 
            Yaklaşık 4 yıl önce başlayan yazılım serüvenim, bugün benim için bir tutkuya dönüştü. Problem çözmenin ve kodlarla 
            yeni dünyalar yaratmanın heyecanı, beni her gün daha fazlasını öğrenmeye itiyor. Özellikle JavaScript"teki ustalığımı, 
            React ve Node.js gibi modern teknolojilerle birleştirerek kullanıcı odaklı ve verimli uygulamalar geliştirmeyi hedefliyorum.
          </p>
        </div>

        {/* Kodun Ötesinde Bölümü */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 border-b-2 border-cyan-500 pb-2">Kodun Ötesinde</h3>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex justify-center mb-4"><CodeIcon /></div>
              <h4 className="text-xl font-semibold mb-2">Teknoloji Tutkusu</h4>
              <p className="text-gray-400">
                Sürekli yeni teknolojileri araştırır, öğrenir ve projelerimde denerim. Öğrenme süreci benim için hiç bitmeyen bir macera.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex justify-center mb-4"><GamepadIcon /></div>
              <h4 className="text-xl font-semibold mb-2">Oyun Geliştirme</h4>
              <p className="text-gray-400">
                Boş zamanlarımda C# ve Unity kullanarak kendi 2D pixel oyunlarımı geliştiriyorum. Bu, yaratıcılığımı ve kodlama becerilerimi birleştirdiğim harika bir alan.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex justify-center mb-4"><DumbbellIcon /></div>
              <h4 className="text-xl font-semibold mb-2">Spor ve Disiplin</h4>
              <p className="text-gray-400">
                Spor salonunda vakit geçirmek, zihnimi dinlendiriyor ve disiplinimi artırıyor. L-Sit ve ters takla gibi calisthenics hareketleriyle sınırlarımı zorlamayı seviyorum.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
