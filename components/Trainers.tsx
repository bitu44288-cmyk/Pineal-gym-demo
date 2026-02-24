import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { TRAINERS } from '../constants';

const Trainers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  
  // Duplicate trainers to create seamless loop (x4 to ensure coverage on large screens)
  const duplicatedTrainers = [...TRAINERS, ...TRAINERS, ...TRAINERS, ...TRAINERS];

  useEffect(() => {
    if (containerRef.current) {
      // Calculate width of ONE set of trainers (Total / 4)
      setContentWidth(containerRef.current.scrollWidth / 4);
    }
    
    const handleResize = () => {
       if (containerRef.current) {
        setContentWidth(containerRef.current.scrollWidth / 4);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useAnimationFrame((t, delta) => {
    if (contentWidth > 0) {
      // Move if not paused (hovered or dragging)
      if (!isHovered && !isDragging) {
        // Adjust speed here (0.5 is slow and smooth)
        const speed = 0.5;
        x.set(x.get() - speed * (delta / 16));
      }
      
      // Seamless loop logic - only apply when NOT dragging to avoid fighting the user
      if (!isDragging) {
        const currentX = x.get();
        // If we've scrolled past one full set, wrap back
        if (currentX <= -contentWidth) {
          x.set(currentX + contentWidth);
        }
        // If we've dragged too far right (positive), wrap forward (optional, but good for robustness)
        if (currentX > 0) {
           x.set(currentX - contentWidth);
        }
      }
    }
  });

  return (
    <section className="py-32 bg-dark-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-pineal font-mono text-xs uppercase tracking-widest mb-6 block">// The Squad</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
              Elite <span className="text-pineal">Coaches</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-white/40 text-xs font-mono tracking-widest">
            <i className="fas fa-pause"></i>
            <span>HOVER TO PAUSE</span>
          </div>
        </div>

        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            ref={containerRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className="flex gap-8 w-max cursor-grab active:cursor-grabbing"
            whileTap={{ cursor: "grabbing" }}
          >
            {duplicatedTrainers.map((trainer, index) => (
              <motion.div
                key={`${trainer.id}-${index}`}
                className="min-w-[85vw] md:min-w-[400px] group relative h-[500px] overflow-hidden border border-white/5 bg-dark-800 select-none"
              >
                {/* Image */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 pointer-events-none">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-pineal font-mono text-xs uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {trainer.role}
                    </span>
                    <h3 className="font-display text-3xl font-bold uppercase text-white mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 opacity-80">
                      {trainer.specialty}
                    </p>
                    
                    <p className="text-gray-300 text-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 line-clamp-3">
                      {trainer.about}
                    </p>
                    
                    {/* Socials - Re-enable pointer events for links */}
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 translate-y-4 group-hover:translate-y-0 pointer-events-auto">
                      {trainer.socials.instagram && (
                        <a href={trainer.socials.instagram} className="btn-premium w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-pineal hover:border-pineal hover:text-black">
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                      {trainer.socials.twitter && (
                        <a href={trainer.socials.twitter} className="btn-premium w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-pineal hover:border-pineal hover:text-black">
                          <i className="fab fa-twitter"></i>
                        </a>
                      )}
                      {trainer.socials.linkedin && (
                        <a href={trainer.socials.linkedin} className="btn-premium w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-pineal hover:border-pineal hover:text-black">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
