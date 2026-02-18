import React, { useState } from 'react';
import { GYM_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-dark-900 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        <div>
           <h1 className="font-display text-6xl md:text-7xl font-bold uppercase mb-12">Start Your <br/><span className="text-pineal">Legacy</span></h1>
           
           <div className="space-y-12">
              <div>
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2">Visit</span>
                <p className="text-2xl text-white font-light max-w-xs">{GYM_DETAILS.address}</p>
              </div>
              <div>
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2">Speak</span>
                <p className="text-2xl text-white font-light hover:text-pineal transition-colors">
                  <a href={`tel:${GYM_DETAILS.phone}`}>{GYM_DETAILS.phone}</a>
                </p>
                <p className="text-lg text-gray-400 mt-1">{GYM_DETAILS.email}</p>
              </div>
              <div>
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-2">Connect</span>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-pineal hover:border-pineal hover:text-black transition-all"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-pineal hover:border-pineal hover:text-black transition-all"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-pineal hover:border-pineal hover:text-black transition-all"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
           </div>
        </div>

        <div className="bg-dark-800 p-8 md:p-12 border border-white/5">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center">
              <i className="fas fa-check text-5xl text-pineal mb-6"></i>
              <h3 className="text-3xl font-display uppercase font-bold text-white">Received</h3>
              <p className="text-gray-400 mt-4">We will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-pineal underline">Reset</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
               <div className="group">
                 <input 
                   type="text" 
                   name="name"
                   placeholder="Your Name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                   className="w-full bg-transparent border-b border-gray-700 py-4 text-xl text-white placeholder-gray-600 focus:outline-none focus:border-pineal transition-colors"
                 />
               </div>
               <div className="group">
                 <input 
                   type="email" 
                   name="email"
                   placeholder="Email Address"
                   value={formData.email}
                   onChange={handleChange}
                   required
                   className="w-full bg-transparent border-b border-gray-700 py-4 text-xl text-white placeholder-gray-600 focus:outline-none focus:border-pineal transition-colors"
                 />
               </div>
               <div className="group">
                 <input 
                   type="tel" 
                   name="phone"
                   placeholder="Phone Number"
                   value={formData.phone}
                   onChange={handleChange}
                   required
                   className="w-full bg-transparent border-b border-gray-700 py-4 text-xl text-white placeholder-gray-600 focus:outline-none focus:border-pineal transition-colors"
                 />
               </div>
               <div className="group">
                 <textarea 
                   name="message"
                   placeholder="Goals / Questions"
                   rows={3}
                   value={formData.message}
                   onChange={handleChange}
                   required
                   className="w-full bg-transparent border-b border-gray-700 py-4 text-xl text-white placeholder-gray-600 focus:outline-none focus:border-pineal transition-colors resize-none"
                 ></textarea>
               </div>
               <button 
                 type="submit" 
                 className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-pineal transition-colors mt-8"
               >
                 Send Inquiry
               </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;