const BRANDS = ['PORSCHE', 'FERRARI', 'LAMBORGHINI', 'MCLAREN', 'MERCEDES-BENZ', 'BMW', 'BUGATTI'];

export default function TrustBanner() {
  return (
    <section className="py-12 border-y border-white/5 bg-showroom-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className={`font-display font-black italic tracking-widest uppercase ${
                brand === 'MERCEDES-BENZ' ? 'text-xs md:text-xl' : 'text-xl'
              }`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
