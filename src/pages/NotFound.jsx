import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Galaxy from '../components/Galaxy';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative overflow-hidden bg-[#0f172a] flex items-center justify-center text-white selection:bg-blue-500/30">
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={0.5}
          glowIntensity={0.4}
          saturation={0.7}
          hueShift={130}
          twinkleIntensity={0.2}
          rotationSpeed={0.05}
          repulsionStrength={0}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={0.4}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 drop-shadow-2xl mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Lost in Space
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
          The page you are looking for has drifted into the vast emptiness of the digital universe. Let's get you back to familiar territory.
        </p>

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95"
        >
          <Home className="w-5 h-5" />
          Return Home
        </button>
      </div>
    </div>
  );
}