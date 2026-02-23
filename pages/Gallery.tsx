import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/800/${i % 3 === 0 ? '1000' : '600'}?random=${100 + i}`,
    title: i % 2 === 0 ? 'Heavy Lifting' : 'Cardio Zone'
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="bg-dark-900 min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-display text-9xl font-bold uppercase text-white/5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          Visuals
        </h1>
        
        <motion.div 
          className="relative z-10 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((img) => (
            <motion.div 
              key={img.id} 
              className="break-inside-avoid relative group overflow-hidden cursor-pointer bg-black"
              variants={itemVariants}
            >
               <motion.div
                 className="overflow-hidden"
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.6, ease: "easeOut" }}
               >
                 <img 
                  src={img.src} 
                  alt="Gallery" 
                  className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                 />
               </motion.div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                   <span className="text-pineal font-mono text-xs mb-2 block uppercase tracking-widest">// 0{img.id + 1}</span>
                   <span className="text-white font-display font-bold uppercase tracking-wider text-2xl">{img.title}</span>
                 </div>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;