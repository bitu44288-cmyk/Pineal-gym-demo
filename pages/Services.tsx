import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <h1 className="font-display text-6xl md:text-8xl font-bold uppercase mb-4">Programs</h1>
          <p className="text-pineal font-mono uppercase tracking-widest text-sm">// Curated for Performance</p>
        </div>

        <div className="space-y-1">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="group relative border-t border-white/10 hover:border-pineal transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between py-12 px-4 relative z-10 bg-dark-900 hover:bg-dark-800 transition-colors duration-300">
                <div className="flex items-baseline gap-8 md:w-1/3">
                   <span className="font-mono text-gray-600 text-sm">0{index + 1}</span>
                   <h2 className="font-display text-3xl md:text-4xl font-bold uppercase group-hover:text-white text-gray-300 transition-colors">{service.title}</h2>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0">
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors">{service.description}</p>
                </div>
                <div className="md:w-1/6 flex justify-end mt-6 md:mt-0">
                   <Link to="/contact" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pineal group-hover:border-pineal group-hover:text-black transition-all hover:-translate-y-1 duration-300">
                     <i className="fas fa-arrow-right -rotate-45"></i>
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;