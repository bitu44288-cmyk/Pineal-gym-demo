import React from 'react';
import { PRICING } from '../constants';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase mb-4">Invest In <span className="text-pineal">You</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto">Simple, transparent pricing. No hidden fees. Just access.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative p-8 flex flex-col justify-between min-h-[500px] border transition-all duration-300 ${
                tier.recommended 
                  ? 'bg-dark-800 border-pineal shadow-[0_0_30px_rgba(212,255,0,0.1)]' 
                  : 'bg-dark-900 border-white/10 hover:border-white/30'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 right-0 bg-pineal text-black text-xs font-bold uppercase px-4 py-1">
                  Selected
                </div>
              )}
              
              <div>
                <h3 className="font-display text-3xl font-bold uppercase mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-mono text-gray-200">{tier.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/ month</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <i className={`fas fa-check mr-3 ${tier.recommended ? 'text-pineal' : 'text-gray-600'}`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to="/contact" 
                className={`btn-premium w-full py-4 text-center font-bold uppercase tracking-wider text-sm border ${
                  tier.recommended
                    ? 'bg-pineal text-black border-pineal hover:bg-white'
                    : 'bg-transparent text-white border-white/20 hover:border-white hover:text-pineal'
                }`}
              >
                Select Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;