import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export default function HeroSection() {
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
    )
      .fromTo(
        subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=1'
      )
      .fromTo(
        btnsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero_bg.png" alt="Hero Supercar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-showroom-950/20 via-showroom-950/60 to-showroom-950"></div>
      </div>

      <div className="max-w-6xl w-full text-center relative z-10 mx-auto">
        <h1
          ref={textRef}
          className="font-display text-[clamp(2rem,10vw,8rem)] md:text-8xl lg:text-[clamp(6rem,10vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-normal md:tracking-tighter mb-8 opacity-0"
        >
          Defining <br /> <span className="text-gradient">Fast</span>
        </h1>
        <p
          ref={subtextRef}
          className="max-w-2xl mx-auto text-chrome/80 text-lg md:text-xl font-light mb-12 opacity-0"
        >
          The ultimate destination for those who seek more than just a drive. Veloce Motors brings you
          the most exclusive performance vehicles in the world.
        </p>
        <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
          <Link
            to="/inventory"
            className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-chrome transition-all rounded-sm"
          >
            Explore Inventory
          </Link>
          <a
            href="#heritage"
            className="px-10 py-4 border border-white/10 hover:border-white/30 transition-all font-bold uppercase tracking-widest text-sm rounded-sm"
          >
            Our Philosophy
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float-soft">
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
}
