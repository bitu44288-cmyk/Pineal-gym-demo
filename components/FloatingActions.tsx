import React from 'react';
import { GYM_DETAILS } from '../constants';

const FloatingActions: React.FC = () => {
  const message = "My name -\nI am from -\nI wanna join your gym";
  const whatsappUrl = `https://wa.me/${GYM_DETAILS.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 left-8 z-40 flex flex-col space-y-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-premium w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-green-500 hover:text-white shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
      <a
        href={`tel:${GYM_DETAILS.phone}`}
        className="btn-premium w-12 h-12 bg-pineal text-black flex items-center justify-center hover:bg-white shadow-lg"
        aria-label="Call Now"
      >
        <i className="fas fa-phone-alt text-xl"></i>
      </a>
    </div>
  );
};

export default FloatingActions;