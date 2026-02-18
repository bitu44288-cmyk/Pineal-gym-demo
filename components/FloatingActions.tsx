import React from 'react';
import { GYM_DETAILS } from '../constants';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-8 left-8 z-40 flex flex-col space-y-3">
      <a
        href={`https://wa.me/${GYM_DETAILS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
      <a
        href={`tel:${GYM_DETAILS.phone}`}
        className="w-12 h-12 bg-pineal text-black flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
        aria-label="Call Now"
      >
        <i className="fas fa-phone-alt text-xl"></i>
      </a>
    </div>
  );
};

export default FloatingActions;