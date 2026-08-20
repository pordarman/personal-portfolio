import { useRef, useState, useEffect } from 'react';
import { v7 as uuid } from "uuid";

export default function ArcGallery({ items }) {
  const [globalRotation, setGlobalRotation] = useState(0);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const dragInfo = useRef({ startX: 0, startRotation: 0, isDragging: false, dragDistance: 0 });

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayItems = [];
  while (displayItems.length < 24) {
    displayItems.push(...items);
  }

  const N = 24;
  const isMobile = screenWidth < 768;
  const cardWidth = isMobile ? 240 : 280;
  const cardHeight = isMobile ? 280 : 320;
  const arcPerItem = isMobile ? 250 : 350;

  const radius = (N * arcPerItem) / (2 * Math.PI);
  const theta = 360 / N;

  const handlePointerDown = (e) => {
    dragInfo.current = {
      startX: e.clientX || e.touches?.[0].clientX,
      startRotation: globalRotation,
      isDragging: true,
      dragDistance: 0
    };
  };

  const handlePointerMove = (e) => {
    if (!dragInfo.current.isDragging) return;
    const currentX = e.clientX || e.touches?.[0].clientX;
    const diff = currentX - dragInfo.current.startX;
    dragInfo.current.dragDistance = Math.abs(diff);
    setGlobalRotation(dragInfo.current.startRotation + diff * 0.08);
  };

  const handlePointerUp = () => {
    dragInfo.current.isDragging = false;
  };

  const handleClick = (e) => {
    if (dragInfo.current.dragDistance > 5) {
      e.preventDefault();
    }
  };

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden flex justify-center cursor-grab active:cursor-grabbing"
      style={{ touchAction: 'none' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {displayItems.map((item, i) => {
        const itemAngle = (i * theta) + globalRotation;
        const rad = (itemAngle - 90) * (Math.PI / 180);
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad) + radius;

        return (
          <div
            key={uuid()}
            className="absolute top-10 left-1/2"
            style={{
              transform: `translate(-50%, 0) translateX(${x}px) translateY(${y}px) rotateZ(${itemAngle}deg)`,
              transformOrigin: 'center center'
            }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              draggable={false}
              className="flex flex-col items-center justify-start shrink-0 group block transition-transform duration-300 hover:scale-105 hover:-translate-y-4"
              style={{ width: `${cardWidth}px` }}
            >
              <div
                className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-blue-500/50 group-hover:shadow-blue-500/20 transition duration-300 bg-slate-900"
                style={{ height: `${cardHeight}px` }}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-transform duration-300"
                  draggable={false}
                />
              </div>
              <h3 className="text-xl font-bold text-white mt-6 drop-shadow-md text-center transition-colors group-hover:text-blue-400">
                {item.text}
              </h3>
            </a>
          </div>
        );
      })}
    </div>
  );
}