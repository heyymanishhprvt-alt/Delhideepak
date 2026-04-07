
import React from 'react';
import { PORTFOLIO } from '../constants';

export const PortfolioGrid: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold mb-4 font-bold">Curated Moments</h3>
            <h2 className="font-serif text-5xl md:text-7xl text-ivory leading-tight">The <span className="italic font-light">Archive</span></h2>
          </div>
          <div className="flex space-x-10 font-sans text-[10px] tracking-[0.4em] uppercase text-ivory/30 pb-4 border-b border-white/5 w-full md:w-auto overflow-x-auto no-scrollbar">
            {['All', 'Celebrity', 'Destination', 'Cinematic'].map(cat => (
              <button key={cat} className="hover:text-antiqueGold transition-all whitespace-nowrap font-bold">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[650px] overflow-hidden rounded-sm cursor-pointer shadow-2xl"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 saturate-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royalGreen via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-antiqueGold mb-3 font-bold">{item.category}</span>
                <h4 className="font-serif text-3xl text-ivory mb-6 tracking-tight">{item.title}</h4>
                <div className="w-16 h-px bg-antiqueGold group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>

              {item.isCelebrity && (
                <div className="absolute top-6 right-6 glass-dark border border-antiqueGold/30 text-antiqueGold px-4 py-2 rounded-full font-sans text-[8px] tracking-widest uppercase font-black">
                  Elite Production
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="px-16 py-6 border border-antiqueGold/20 text-antiqueGold tracking-[0.5em] uppercase text-[10px] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all duration-700">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};
