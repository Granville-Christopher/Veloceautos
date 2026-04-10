export default function FinancingSection() {
  return (
    <section id="financing" className="py-24 px-6 bg-showroom-900/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            Flexible Ownership
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-8 leading-tight">
            Elevate Your <br /> <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-chrome/60 text-lg font-light mb-12">
            We offer bespoke financial solutions tailored to your lifestyle. Owning the extraordinary
            has never been more seamless.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 bg-showroom-900 border border-white/5 rounded-sm">
              <span className="block font-display text-4xl font-bold text-accent mb-2">10%</span>
              <p className="text-xs uppercase font-bold tracking-widest text-chrome/50">
                Starting Down Payment
              </p>
            </div>
            <div className="p-8 bg-showroom-900 border border-white/5 rounded-sm">
              <span className="block font-display text-4xl font-bold text-accent mb-2">24h</span>
              <p className="text-xs uppercase font-bold tracking-widest text-chrome/50">
                Instant Approval
              </p>
            </div>
          </div>
        </div>

        <div className="bg-showroom-900 p-10 border border-white/5 rounded-sm shadow-lift relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
          <h3 className="font-display text-2xl font-bold uppercase mb-8 tracking-wide">
            Efficiency Metrics
          </h3>
          <div className="space-y-8 relative z-10">
            <MetricBar label="Hybrid Efficiency" value="94%" width="94%" />
            <MetricBar label="Engine Performance" value="98.5%" width="98.5%" />
            <MetricBar label="Aerodynamic Drag" value="0.21 Cd" width="85%" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricBar({ label, value, width }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-chrome/60">{label}</span>
        <span className="text-[10px] font-bold text-accent">{value}</span>
      </div>
      <div className="w-full h-1 bg-showroom-800 rounded-full overflow-hidden">
        <div className="h-full bg-accent" style={{ width }}></div>
      </div>
    </div>
  );
}
