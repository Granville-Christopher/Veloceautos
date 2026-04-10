import { useState } from 'react';

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setSubmitted(true);
      setProcessing(false);
    }, 1500);
  };

  return (
    <section id="book-viewing" className="py-24 px-6 bg-showroom-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-4">
          Reservation
        </span>
        <h2 className="font-display text-[clamp(2rem,10vw,2rem)] md:text-6xl font-bold uppercase mb-12">
          Experience the <span className="text-gradient">Extraordinary</span>
        </h2>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className={`grid md:grid-cols-2 gap-6 text-left ${
              processing ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            <div className="space-y-4">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-chrome/60 ml-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="w-full bg-showroom-900/50 border border-white/10 p-4 rounded-sm focus:border-accent outline-none transition-all placeholder:text-chrome/20"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-chrome/60 ml-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="w-full bg-showroom-900/50 border border-white/10 p-4 rounded-sm focus:border-accent outline-none transition-all placeholder:text-chrome/20"
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-chrome/60 ml-2">
                Preferred Vehicle
              </label>
              <select
                required
                className="w-full bg-showroom-900/50 border border-white/10 p-4 rounded-sm focus:border-accent outline-none appearance-none transition-all text-chrome/40"
              >
                <option value="" disabled defaultValue>Select a vehicle</option>
                <option value="apex">Apex Predator</option>
                <option value="midnight">Midnight GT</option>
                <option value="silver">Silver Arrow</option>
                <option value="mercedes">Silver Star GT</option>
                <option value="bmw">Bavarian Beast</option>
              </select>
            </div>
            <div className="md:col-span-2 pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-accent hover:bg-accent-glow text-white font-bold uppercase tracking-[0.2em] text-sm rounded-sm border-glow transition-all"
              >
                {processing ? 'Processing...' : 'Request Private Viewing'}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 p-6 bg-accent/10 border border-accent/30 text-accent font-bold uppercase tracking-widest text-xs rounded-sm">
            Request received. Our concierge will contact you shortly.
          </div>
        )}
      </div>
    </section>
  );
}
