import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/HeroSection';
import TrustBanner from '../components/TrustBanner';
import VehicleCard from '../components/VehicleCard';
import FinancingSection from '../components/FinancingSection';
import PerformanceSection from '../components/PerformanceSection';
import HeritageSection from '../components/HeritageSection';
import BookingSection from '../components/BookingSection';
import { FEATURED_CAR_IDS } from '../data/carData';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage({ onOpenModal }) {
  // Scroll animations for vehicle cards
  useEffect(() => {
    const cards = document.querySelectorAll('.vehicle-card');
    const triggers = [];

    cards.forEach((card) => {
      const trigger = ScrollTrigger.create({
        trigger: card,
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse',
        onEnter: () => gsap.fromTo(card, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }),
        onLeaveBack: () => gsap.to(card, { y: 50, opacity: 0, duration: 0.5 }),
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <HeroSection />
      <TrustBanner />

      {/* Featured Inventory */}
      <section id="inventory" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 px-4">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] block mb-2">
                Exclusive
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">Featured Fleet</h2>
            </div>
            <Link
              to="/inventory"
              className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-accent transition-all whitespace-nowrap"
            >
              View All
            </Link>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto overflow-y-hidden md:overflow-hidden snap-x snap-mandatory scrollbar-hide pb-8 md:pb-0">
            {FEATURED_CAR_IDS.map((carId, index) => (
              <VehicleCard
                key={carId}
                carId={carId}
                onOpenModal={onOpenModal}
                variant="featured"
                className={`min-w-[70vw] md:min-w-0 ${index >= 3 ? 'md:hidden' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      <FinancingSection />
      <PerformanceSection />
      <HeritageSection />
      <BookingSection />
    </>
  );
}
