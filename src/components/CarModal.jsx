import { useEffect, useRef } from 'react';
import { CAR_DATA } from '../data/carData';

export default function CarModal({ carId, onClose }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const car = carId ? CAR_DATA[carId] : null;

  useEffect(() => {
    if (car) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [car]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (car) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [car, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-6 transition-all duration-500 ${
        car ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-showroom-950/95 backdrop-blur-xl"></div>
      <div
        ref={contentRef}
        className={`relative w-full max-w-5xl bg-showroom-900 border border-white/10 rounded-sm shadow-2xl p-4 md:p-10 transition-transform duration-500 ${
          car ? 'scale-100' : 'scale-95'
        }`}
      >
        <button
          className="absolute top-6 right-6 p-2 hover:text-accent transition-colors"
          onClick={onClose}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {car && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-showroom-800 rounded-sm overflow-hidden border border-white/5">
              <img src={car.image} alt={car.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">
                {car.badge}
              </span>
              <h2 className="font-display text-4xl font-bold uppercase mb-4 tracking-wide">
                {car.title}
              </h2>
              <p className="text-2xl font-bold text-gradient mb-6">{car.price}</p>
              <p className="text-chrome/60 text-sm font-light mb-8 leading-relaxed">{car.desc}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-showroom-950 border border-white/5 rounded-sm">
                  <span className="block font-bold text-chrome-bright">{car.spec1}</span>
                  <span className="text-[8px] uppercase tracking-widest text-chrome/40">Performance</span>
                </div>
                <div className="p-4 bg-showroom-950 border border-white/5 rounded-sm">
                  <span className="block font-bold text-chrome-bright">{car.spec2}</span>
                  <span className="text-[8px] uppercase tracking-widest text-chrome/40">Acceleration</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-accent hover:bg-accent-glow text-white font-bold uppercase tracking-widest text-xs rounded-sm transition-all">
                  Enquire Now
                </button>
                <button className="px-6 py-4 border border-white/10 hover:border-white/30 text-xs font-bold uppercase tracking-widest rounded-sm transition-all">
                  Specs
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
