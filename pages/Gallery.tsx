import React from 'react';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/800/${i % 3 === 0 ? '1000' : '600'}?random=${100 + i}`,
    title: i % 2 === 0 ? 'Heavy Lifting' : 'Cardio Zone'
  }));

  return (
    <div className="bg-dark-900 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-display text-9xl font-bold uppercase text-white/5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          Visuals
        </h1>
        
        <div className="relative z-10 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img) => (
            <div key={img.id} className="break-inside-avoid relative group overflow-hidden">
               <img 
                src={img.src} 
                alt="Gallery" 
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                 <span className="text-pineal font-display font-bold uppercase tracking-wider">{img.title}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;