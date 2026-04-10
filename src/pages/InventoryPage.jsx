import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import VehicleCard from '../components/VehicleCard';
import { CAR_DATA, ALL_CAR_IDS, CATEGORIES } from '../data/carData';

export default function InventoryPage({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const gridRef = useRef(null);

  const filteredCars = activeCategory === 'all'
    ? ALL_CAR_IDS
    : ALL_CAR_IDS.filter((id) => CAR_DATA[id].category === activeCategory);

  // Animate cards when filter changes
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.car-card');
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05 }
      );
    }
  }, [activeCategory]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header Section */}
      <header className="pb-16 pt-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            The Collection
          </span>
          <h1 className="font-display text-[clamp(2rem,10vw,8rem)] md:text-7xl font-bold uppercase mb-12">
            Full <span className="text-gradient">Inventory</span>
          </h1>

          {/* Category Toggles */}
          <div className="flex flex-wrap gap-4 justify-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`cat-btn px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all ${
                  activeCategory === cat.key
                    ? 'bg-white text-black'
                    : 'border border-white/10 hover:border-white/30'
                }`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Inventory Grid */}
      <main className="pb-24 px-6">
        <div ref={gridRef} className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((carId) => (
            <VehicleCard
              key={carId}
              carId={carId}
              onOpenModal={onOpenModal}
              variant="inventory"
            />
          ))}
        </div>
      </main>
    </>
  );
}
