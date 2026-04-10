import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isInventory = location.pathname === '/inventory';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 transition-all duration-300 ${
        scrolled ? 'py-2 bg-showroom-950/95' : 'py-4 bg-showroom-950/80'
      }`}
    >
      <Link to="/" className="flex items-center gap-2">
        <span className="font-display text-2xl font-bold tracking-tighter text-gradient uppercase">
          Veloce
        </span>
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
        {isInventory ? (
          <>
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/inventory" className="text-accent underline underline-offset-8">Inventory</Link>
            <a href="/#heritage" className="hover:text-accent transition-colors">Heritage</a>
            <a href="/#contact" className="hover:text-accent transition-colors">Contact</a>
          </>
        ) : (
          <>
            <a href="#inventory" className="hover:text-accent transition-colors">Inventory</a>
            <a href="#financing" className="hover:text-accent transition-colors">Financing</a>
            <a href="#heritage" className="hover:text-accent transition-colors">Heritage</a>
            <a href="#book-viewing" className="hover:text-accent transition-colors">Book</a>
          </>
        )}
      </div>

      <a
        href={isInventory ? '/#book-viewing' : '#book-viewing'}
        className="px-6 py-2 bg-accent hover:bg-accent-glow text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm border-glow"
      >
        Book Viewing
      </a>

      {/* Mobile menu button */}
      <button
        className="md:hidden ml-4 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-showroom-950/95 backdrop-blur-xl border-b border-white/5 md:hidden">
          <div className="flex flex-col gap-4 p-6 text-sm font-medium tracking-wide uppercase">
            {isInventory ? (
              <>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                <Link to="/inventory" className="text-accent">Inventory</Link>
                <a href="/#heritage" className="hover:text-accent transition-colors">Heritage</a>
                <a href="/#contact" className="hover:text-accent transition-colors">Contact</a>
              </>
            ) : (
              <>
                <a href="#inventory" className="hover:text-accent transition-colors">Inventory</a>
                <a href="#financing" className="hover:text-accent transition-colors">Financing</a>
                <a href="#heritage" className="hover:text-accent transition-colors">Heritage</a>
                <a href="#book-viewing" className="hover:text-accent transition-colors">Book</a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
