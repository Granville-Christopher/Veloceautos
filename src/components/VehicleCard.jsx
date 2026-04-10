import { CAR_DATA } from '../data/carData';

export default function VehicleCard({ carId, onOpenModal, variant = 'featured', className = '' }) {
  const car = CAR_DATA[carId];
  if (!car) return null;

  if (variant === 'inventory') {
    return (
      <div
        className={`group relative bg-showroom-900 border border-white/5 rounded-sm overflow-hidden hover:border-accent/30 transition-all shadow-card hover:shadow-lift car-card ${className}`}
        data-category={car.category}
      >
        <div className="aspect-[16/10] bg-showroom-800 overflow-hidden">
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide">{car.title}</h3>
            <span className="text-accent font-bold">{car.price}</span>
          </div>
          <p className="text-xs text-chrome/40 uppercase tracking-widest mb-6">
            {car.subtitle} • {car.spec1} • {car.spec3}
          </p>
          <button
            className="view-details-btn w-full py-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all font-bold uppercase tracking-widest text-[10px]"
            onClick={() => onOpenModal(carId)}
          >
            View Details
          </button>
        </div>
      </div>
    );
  }

  // Featured variant (homepage)
  return (
    <div
      className={`snap-center group relative bg-showroom-900 border border-white/5 rounded-sm overflow-hidden hover:border-accent/30 transition-all vehicle-card shadow-card hover:shadow-lift ${className}`}
      data-car={carId}
    >
      <div className="aspect-[16/10] bg-showroom-800 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-showroom-900/80 to-transparent"></div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-display text-xl font-bold uppercase tracking-wide">{car.title}</h3>
            <p className="text-xs text-chrome/40 uppercase tracking-widest">{car.subtitle}</p>
          </div>
          <span className="text-accent font-bold">{car.price}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 mb-6 text-[10px] font-bold uppercase text-chrome/50">
          <div className="text-center">{car.spec1}</div>
          <div className="text-center border-x border-white/5">{car.spec2} 0-60</div>
          <div className="text-center">{car.spec3}</div>
        </div>
        <button
          className="view-details-btn w-full py-3 border border-white/10 group-hover:bg-white group-hover:text-black transition-all font-bold uppercase tracking-widest text-[10px]"
          onClick={() => onOpenModal(carId)}
        >
          Details
        </button>
      </div>
    </div>
  );
}
