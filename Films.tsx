
import React from 'react';

export const Films: React.FC = () => {
  const categories = ['All Films', 'Grand Weddings', 'Pre-Weddings', 'Celebrity', 'Cinematic Shorts'];
  
  return (
    <div className="bg-charcoal min-h-screen py-24 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="font-serif text-6xl md:text-8xl text-ivory mb-6">Wedding <span className="italic">Films</span></h1>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {categories.map(cat => (
              <button key={cat} className="text-[10px] uppercase tracking-[0.3em] text-ivory/40 hover:text-antiqueGold transition-colors border-b border-transparent hover:border-antiqueGold/30 pb-2">{cat}</button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1,2,3,4].map(i => (
            <div key={i} className="group relative cursor-pointer">
              <div className="aspect-video bg-royalGreen overflow-hidden rounded-sm">
                <img src={`https://picsum.photos/seed/film${i}/1280/720`} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" alt={`Film ${i}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                  <div className="w-16 h-16 rounded-full border border-ivory/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-antiqueGold group-hover:text-royalGreen transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <h3 className="font-serif text-3xl text-ivory text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    The {i === 1 ? 'Mehta' : i === 2 ? 'Kapoor' : 'Malhotra'} Wedding
                  </h3>
                  <p className="text-antiqueGold text-[10px] uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-all duration-700">Udaipur, Rajasthan</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-ivory/40 font-sans text-xs mb-8">Capturing soul in 4K resolution since the digital dawn.</p>
          <button className="border border-antiqueGold/40 text-antiqueGold px-12 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-antiqueGold hover:text-royalGreen transition-all">Load More Films</button>
        </div>
      </div>
    </div>
  );
};
