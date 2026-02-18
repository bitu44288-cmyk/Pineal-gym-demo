import React from 'react';
import { Link } from 'react-router-dom';
import { GYM_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl font-bold uppercase mb-8">Pineal<span className="text-pineal">.</span>Fit</h2>
            <p className="text-gray-500 max-w-sm mb-8">
              Forging elite physiques and unshakeable mindsets in the heart of Delhi. 
              Join the movement.
            </p>
            <div className="flex gap-4">
              <input type="email" placeholder="ENTER EMAIL" className="bg-dark-800 border-none px-4 py-3 text-sm w-full focus:ring-1 focus:ring-pineal outline-none text-white" />
              <button className="bg-pineal text-black px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors">Subscribe</button>
            </div>
          </div>
          
          <div className="md:col-span-2"></div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Sitemap</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-pineal transition-colors text-sm">Index</Link></li>
                <li><Link to="/about" className="hover:text-pineal transition-colors text-sm">Philosophy</Link></li>
                <li><Link to="/services" className="hover:text-pineal transition-colors text-sm">Training</Link></li>
                <li><Link to="/gallery" className="hover:text-pineal transition-colors text-sm">Visuals</Link></li>
              </ul>
            </div>
            <div>
               <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Legal</h3>
               <ul className="space-y-3">
                <li><a href="#" className="hover:text-pineal transition-colors text-sm">Privacy</a></li>
                <li><a href="#" className="hover:text-pineal transition-colors text-sm">Terms</a></li>
                <li><a href="#" className="hover:text-pineal transition-colors text-sm">Waiver</a></li>
               </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>&copy; {new Date().getFullYear()} PINEAL FITNESS. DELHI.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>INSTAGRAM</span>
             <span>TWITTER</span>
             <span>LINKEDIN</span>
          </div>
        </div>
        
        {/* Massive Footer Text */}
        <div className="mt-20 overflow-hidden select-none opacity-20">
          <h1 className="text-[12vw] leading-none font-display font-black text-center text-transparent stroke-text-white">
            UNLEASH
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;