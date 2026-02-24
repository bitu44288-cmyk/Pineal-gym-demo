import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/800/${i % 3 === 0 ? '1000' : '600'}?random=${100 + i}`,
    title: i % 2 === 0 ? 'Heavy Lifting' : 'Cardio Zone'
  }));

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-dark-900 min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        <h1 className="font-display text-9xl font-bold uppercase text-white/5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          Visuals
        </h1>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <GalleryItem key={img.id} img={img} variants={itemVariants} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryItem = ({ img, variants }: { img: any, variants: any }) => (
  <motion.div 
    className="relative group overflow-hidden cursor-pointer bg-black"
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
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
);

export default Gallery;