export default function HeritageSection() {
  return (
    <section id="heritage" className="py-24 px-6 bg-showroom-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            Our Legacy
          </span>
          <h2 className="font-display text-[clamp(2rem,10vw,8rem)] md:text-5xl lg:text-6xl font-bold uppercase mb-8 leading-tight">
            A Quarter Century of <br /> <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-chrome/60 text-sm font-light mb-8 leading-relaxed">
            Founded in 1998, Veloce Motors has evolved from a boutique showroom to a global authority
            in hypercar curation.
          </p>
          <div className="space-y-6">
            <FeatureItem
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              }
              title="Tailored Concierge"
              description="Worldwide delivery and personal maintenance managers for your fleet."
            />
            <FeatureItem
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              }
              title="Exclusive Warranties"
              description="Industry-leading protection packages that cover you on the road and the track."
            />
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="aspect-video bg-showroom-800 rounded-sm overflow-hidden border-glow">
            <img src="/heritage.png" alt="Showroom Heritage" className="w-full h-full object-cover block" />
            <div className="absolute inset-0 bg-gradient-to-t from-showroom-950/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 p-10 bg-showroom-950 border border-white/10 hidden md:block">
            <p className="font-display text-4xl font-black italic">EST. 1998</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-accent/20 border border-accent/30 rounded-sm">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div>
        <h4 className="font-bold uppercase mb-1">{title}</h4>
        <p className="text-chrome/50 text-sm font-light">{description}</p>
      </div>
    </div>
  );
}
