import React, { useState } from 'react';
import { getFitnessAdvice } from '../services/geminiService';

const AIModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');
    try {
      const result = await getFitnessAdvice(query);
      setResponse(result);
    } catch (err) {
      setResponse("Connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-pineal transition-colors shadow-xl flex items-center gap-2"
        aria-label="Ask AI Coach"
      >
        <i className="fas fa-microchip"></i> AI Coach
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-dark-900 w-full max-w-lg border border-white/10 shadow-2xl relative">
            <button 
               onClick={() => setIsOpen(false)}
               className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            
            <div className="p-8">
              <div className="mb-6">
                <span className="text-pineal font-mono text-xs uppercase tracking-widest">System Online</span>
                <h3 className="text-3xl font-display font-bold text-white uppercase mt-1">
                  Pineal Intelligence
                </h3>
              </div>
            
              {!response ? (
                <>
                  <p className="text-gray-400 mb-6 text-sm font-light">
                    Access our neural network for training protocols and nutritional data.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <textarea
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Input command (e.g., 'Hypertrophy leg routine')"
                      className="w-full bg-dark-800 text-white border border-gray-700 p-4 text-sm focus:border-pineal focus:ring-0 outline-none h-32 resize-none mb-6 font-mono"
                    />
                    <button
                      type="submit"
                      disabled={loading || !query.trim()}
                      className="w-full bg-white hover:bg-pineal text-black font-bold py-4 uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <><i className="fas fa-circle-notch fa-spin"></i> Processing</>
                      ) : (
                        'Execute'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="animate-fade-in">
                  <div className="bg-dark-800 p-6 mb-6 border-l-2 border-pineal max-h-[60vh] overflow-y-auto">
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap font-mono">{response}</p>
                  </div>
                  <button
                    onClick={() => { setResponse(''); setQuery(''); }}
                    className="w-full border border-white/20 text-white hover:border-pineal hover:text-pineal py-3 uppercase text-xs font-bold tracking-widest transition-colors"
                  >
                    New Query
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIModal;