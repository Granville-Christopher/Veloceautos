export default function PerformanceSection() {
  return (
    <section className="py-24 px-6 bg-showroom-950 relative min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-showroom-950">
        <img src="/performance.png" alt="Performance" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-showroom-950 via-showroom-950/80 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            Engineering
          </span>
          <h2 className="font-display text-[clamp(2rem,10vw,8rem)] md:text-7xl font-bold uppercase mb-8 leading-tight">
            Mastering <br /> <span className="text-gradient">Physics</span>
          </h2>
          <p className="text-chrome/70 text-lg font-light mb-12">
            Every vehicle in our collection is a masterpiece of precision engineering, designed to push
            the boundaries of what is possible.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="block font-display text-3xl font-bold text-accent mb-1">0.1ms</span>
              <p className="text-[10px] uppercase font-bold tracking-widest text-chrome/40">
                Response Time
              </p>
            </div>
            <div>
              <span className="block font-display text-3xl font-bold text-accent mb-1">100%</span>
              <p className="text-[10px] uppercase font-bold tracking-widest text-chrome/40">
                Carbon Fiber
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
