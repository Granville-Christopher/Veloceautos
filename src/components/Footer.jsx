import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-showroom-950 border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <span className="font-display text-3xl font-bold uppercase tracking-tighter text-gradient block mb-6">
            Veloce
          </span>
          <p className="max-w-xs text-chrome/40 text-sm font-light">
            Curating the finest automotive engineering since 1998. Experience the next level of luxury and performance.
          </p>
        </div>
        <div>
          <h5 className="font-bold uppercase text-xs tracking-widest mb-6">Navigation</h5>
          <ul className="space-y-4 text-chrome/60 text-sm">
            <li>
              <Link to="/inventory" className="hover:text-accent transition-all">Inventory</Link>
            </li>
            <li>
              <a href="/#heritage" className="hover:text-accent transition-all">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-all">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold uppercase text-xs tracking-widest mb-6">Connect</h5>
          <ul className="space-y-4 text-chrome/60 text-sm">
            <li><a href="#" className="hover:text-accent transition-all">Instagram</a></li>
            <li><a href="#" className="hover:text-accent transition-all">Twitter</a></li>
            <li><a href="#" className="hover:text-accent transition-all">Facebook</a></li>
            <li><a href="#" className="hover:text-accent transition-all">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
        <p className="text-[10px] uppercase font-bold tracking-widest text-chrome/30">
          © 2024 Veloce Motors International. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
