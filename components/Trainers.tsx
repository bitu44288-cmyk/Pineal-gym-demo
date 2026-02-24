import React from 'react';
import { motion } from 'framer-motion';
import { TRAINERS } from '../constants';

const Trainers: React.FC = () => {
  return (
    <section className="py-32 bg-dark-900">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <span className="text-pineal font-mono text-xs uppercase tracking-widest mb-6 block">// The Squad</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
            Elite <span className="text-pineal">Coaches</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-[500px] overflow-hidden border border-white/5 bg-dark-800"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-pineal font-mono text-xs uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {trainer.role}
                  </span>
                  <h3 className="font-display text-3xl font-bold uppercase text-white mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 opacity-80">
                    {trainer.specialty}
                  </p>
                  
                  {/* Socials */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                    {trainer.socials.instagram && (
                      <a href={trainer.socials.instagram} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-pineal hover:border-pineal hover:text-black transition-all hover:-translate-y-1 duration-300">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {trainer.socials.twitter && (
                      <a href={trainer.socials.twitter} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-pineal hover:border-pineal hover:text-black transition-all hover:-translate-y-1 duration-300">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {trainer.socials.linkedin && (
                      <a href={trainer.socials.linkedin} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-pineal hover:border-pineal hover:text-black transition-all hover:-translate-y-1 duration-300">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
