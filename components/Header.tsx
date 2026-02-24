import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GYM_DETAILS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Program' },
    { path: '/about', label: 'Studio' },
    { path: '/pricing', label: 'Invest' },
    { path: '/gallery', label: 'Visuals' },
    { path: '/contact', label: 'Connect' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-dark-900/80 backdrop-blur-md' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="relative z-50 group flex flex-col items-start leading-none">
            <span className="font-display font-extrabold text-2xl tracking-tighter text-white group-hover:text-pineal transition-colors duration-300">
              ELITE FITNESS
            </span>
            <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300 uppercase">
              Fitness Gym
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest hover:text-pineal transition-colors duration-300 relative group ${
                  location.pathname === link.path ? 'text-pineal' : 'text-gray-400'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 w-0 h-[2px] bg-pineal transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${GYM_DETAILS.phone}`} 
              className="btn-premium hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-pineal"
            >
              <span>Join Now</span>
              <i className="fas fa-arrow-right -rotate-45 text-pineal"></i>
            </a>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 text-white hover:text-pineal transition-colors"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-dark-900 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center`}>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-4xl font-bold text-white hover:text-pineal hover:scale-105 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <a 
            href={`tel:${GYM_DETAILS.phone}`} 
            className="btn-premium mt-8 px-8 py-3 bg-pineal text-black font-bold uppercase tracking-wider rounded-none hover:bg-white"
          >
            Start Membership
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;