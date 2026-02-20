import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-dark-900 text-white overflow-hidden">
      {/* Hero Section - Overlap Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image Area - Shifts right on desktop */}
        <div className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Athlete" 
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
        </div>

        {/* Content Area */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-20 pt-20">
          <div className="max-w-4xl">
             <span className="inline-block text-pineal text-xs font-bold uppercase tracking-[0.3em] border border-pineal/30 px-3 py-1 rounded-full mb-6 animate-fade-in">
               Delhi, India
             </span>
             <h1 className="font-display text-7xl md:text-9xl font-extrabold leading-[0.85] tracking-tighter uppercase mb-8 drop-shadow-2xl">
               Defy <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                 Limits
               </span>
             </h1>
             <p className="text-gray-300 max-w-md mb-10 text-base md:text-lg leading-relaxed border-l-2 border-pineal pl-6 backdrop-blur-sm">
               Hercules Fitness Gym isn't just a gym. It's a sanctuary for the driven. 
               Elite equipment, raw atmosphere, and science-backed training.
             </p>
             <div className="flex items-center gap-6">
                <Link to="/contact" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm overflow-hidden hover:scale-105 transition-transform">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Join The Cult</span>
                  <div className="absolute inset-0 bg-pineal transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                </Link>
                <Link to="/gallery" className="text-sm font-bold uppercase tracking-wider text-white hover:text-pineal transition-colors flex items-center gap-3 group">
                  <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-pineal group-hover:text-pineal transition-all">
                    <i className="fas fa-play text-xs"></i>
                  </span>
                  Watch Film
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="border-y border-white/10 bg-dark-800 py-6 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-16">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-display font-black text-transparent stroke-text uppercase opacity-30">
              Strength • Discipline • Power • Hercules •
            </span>
          ))}
        </div>
      </div>

      {/* The Philosophy - Offset Grid */}
      <section className="py-32 px-6 md:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
           <div className="md:col-span-5 relative">
              <img 
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" 
                alt="Weights" 
                className="w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pineal rounded-full flex items-center justify-center animate-spin-slow hidden md:flex">
                <svg viewBox="0 0 100 100" width="140" height="140">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text fontSize="13" fontWeight="bold" fill="#000">
                    <textPath xlinkHref="#circlePath">EST. 2012 • DELHI • ELITE FITNESS •</textPath>
                  </text>
                </svg>
                <i className="fas fa-bolt text-2xl text-black absolute"></i>
              </div>
           </div>
           <div className="md:col-span-1"></div>
           <div className="md:col-span-6">
              <span className="text-pineal font-bold tracking-widest uppercase text-sm mb-4 block">The Philosophy</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-none">
                Constructing the <br/>
                <span className="italic font-light text-gray-400">Perfect Machine.</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                Your body is the only place you have to live. We don't believe in quick fixes. We believe in the grind, the sweat, and the science of sculpting the human form.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-8">
                <div>
                   <h3 className="text-4xl font-display font-bold text-white mb-2">24/7</h3>
                   <p className="text-xs uppercase tracking-widest text-gray-500">Access Control</p>
                </div>
                <div>
                   <h3 className="text-4xl font-display font-bold text-white mb-2">15+</h3>
                   <p className="text-xs uppercase tracking-widest text-gray-500">Expert Coaches</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services List - Brutalist Style */}
      <section className="bg-dark-850 py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-6">
            <h2 className="font-display text-4xl font-bold uppercase">Training <span className="text-pineal">Modules</span></h2>
            <Link to="/services" className="hidden md:block text-xs font-bold uppercase tracking-widest hover:text-pineal transition-colors">
              View All Programs <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
             {SERVICES.slice(0, 3).map((service, idx) => (
               <div key={service.id} className="group relative bg-dark-900 h-[400px] md:h-[500px] overflow-hidden border border-white/5 hover:border-pineal/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-dark-900/80 group-hover:bg-dark-900/40 transition-all duration-500 z-10 flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                      <span className="text-5xl font-display font-bold text-white/10 group-hover:text-pineal transition-colors">0{idx + 1}</span>
                      <i className={`fas ${service.icon} text-2xl text-white group-hover:text-pineal transition-colors`}></i>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{service.title}</h3>
                      <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <img 
                    src={`https://picsum.photos/600/800?random=${30 + idx}`} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-700"
                  />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" 
            alt="Gym bg" 
            className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
           <h2 className="font-display text-5xl md:text-8xl font-black uppercase mb-8 leading-none">
             Ready to <br/> <span className="text-stroke text-transparent">Dominate?</span>
           </h2>
           <p className="text-gray-400 mb-10 max-w-lg mx-auto">
             Your potential is waiting. The iron doesn't lie. Join Hercules Fitness Gym today and start your legacy.
           </p>
           <Link to="/contact" className="inline-block bg-pineal text-black font-display font-bold text-xl px-12 py-5 uppercase hover:bg-white transition-colors">
             Start Membership
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;