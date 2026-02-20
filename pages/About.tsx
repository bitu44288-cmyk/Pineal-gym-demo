import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Sticky Image */}
        <div className="lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-pineal mix-blend-multiply opacity-20 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
            alt="About Iron Bar" 
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
          <div className="absolute bottom-10 left-10 z-20">
             <h1 className="font-display text-7xl font-bold uppercase leading-none">The <br/> Origin</h1>
          </div>
        </div>

        {/* Right: Scrolling Content */}
        <div className="lg:w-1/2 px-8 py-20 lg:p-32 bg-dark-900">
          <div className="space-y-24">
            <section>
              <span className="text-pineal font-mono text-xs uppercase tracking-widest mb-6 block">// 01. The Vision</span>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Iron Bar Gym was born in the chaos of Delhi, a beacon for those seeking clarity through physical exertion. We rejected the neon-lit, sterile corporate gym aesthetic for something raw, primal, and focused.
              </p>
            </section>

            <section>
              <span className="text-pineal font-mono text-xs uppercase tracking-widest mb-6 block">// 02. The Space</span>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our facility in Connaught Place is a fortress of solitude and strength. Industrial design meets cutting-edge biomechanics. Every plate, every bar, every machine is hand-selected for optimal performance.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-8">
                 <li className="border-l border-pineal pl-4 py-2">
                   <h4 className="font-bold text-white">Hammer Strength</h4>
                   <span className="text-xs text-gray-500">Official Center</span>
                 </li>
                 <li className="border-l border-pineal pl-4 py-2">
                   <h4 className="font-bold text-white">Eleiko Plates</h4>
                   <span className="text-xs text-gray-500">Competition Grade</span>
                 </li>
                 <li className="border-l border-pineal pl-4 py-2">
                   <h4 className="font-bold text-white">Recovery Zone</h4>
                   <span className="text-xs text-gray-500">Cryo & Sauna</span>
                 </li>
                 <li className="border-l border-pineal pl-4 py-2">
                   <h4 className="font-bold text-white">Pose Room</h4>
                   <span className="text-xs text-gray-500">Professional Lighting</span>
                 </li>
              </ul>
            </section>

            <section>
              <span className="text-pineal font-mono text-xs uppercase tracking-widest mb-6 block">// 03. The Community</span>
              <p className="text-gray-400 leading-relaxed">
                We are not for everyone. We are for the obsessed. The early risers. The late grinders. When you step into Iron Bar, you leave your ego at the door, but bring your ambition.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;