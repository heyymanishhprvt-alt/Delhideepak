
import React from 'react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-antiqueGold rounded-full blur-[160px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold">The Archive Journal</h3>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory">Join our <span className="italic font-light">Inner Circle</span></h2>
          <p className="text-ivory/50 text-sm leading-relaxed font-light tracking-wide">
            Receive exclusive wedding planning narratives, cinematic trends, and early access to our limited commission dates. No noise, just heritage.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 mt-10" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-royalGreen/30 border border-antiqueGold/20 px-8 py-5 text-ivory text-sm focus:outline-none focus:border-antiqueGold transition-all rounded-sm"
              required
            />
            <button className="bg-antiqueGold text-royalGreen px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-ivory transition-all shadow-xl">
              Subscribe
            </button>
          </form>
          <p className="text-[8px] uppercase tracking-widest text-ivory/20 mt-4">Protected by our Legacy Privacy Standards</p>
        </div>
      </div>
    </section>
  );
};
