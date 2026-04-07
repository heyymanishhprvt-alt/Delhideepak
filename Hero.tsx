
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal">
      {/* Dynamic Cinematic Background */}
      <div className="absolute inset-0 z-0 scale-110">
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=90&w=2400" 
          className="w-full h-full object-cover brightness-[0.25] saturate-[0.8]"
          alt="Luxury Wedding Cinematography"
          // Fix: Use fetchPriority (camelCase) instead of fetchpriority to satisfy TypeScript types for img element
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royalGreen/80 via-transparent to-royalGreen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(14,42,36,0.6)_100%)]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-16">
        <div className="mb-10 overflow-hidden">
          <h2 className="font-sans text-[10px] md:text-xs tracking-[1em] uppercase text-antiqueGold mb-6 font-bold opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Visionaries of the Eternal Union
          </h2>
        </div>
        
        <h1 className="font-serif text-6xl md:text-9xl mb-12 leading-[0.85] tracking-tighter opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Legacy <span className="italic font-light">Cinema.</span><br />
          <span className="gold-gradient-text font-bold">Est. 1962.</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 opacity-0 animate-fadeIn" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <p className="max-w-[280px] font-sans text-[10px] md:text-[11px] text-ivory/60 uppercase tracking-[0.3em] leading-relaxed text-center md:text-left font-medium border-l-2 border-antiqueGold/20 pl-6">
            Preserving the silent promises of India's most celebrated families.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => window.location.href='#booking'}
              className="group relative overflow-hidden px-14 py-6 bg-antiqueGold text-royalGreen tracking-[0.4em] uppercase text-[10px] font-bold transition-all hover:bg-ivory shadow-2xl cta-glow"
            >
              Reserve Your Date
            </button>
            <button className="px-12 py-6 border border-antiqueGold/30 text-antiqueGold tracking-[0.4em] uppercase text-[10px] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all backdrop-blur-md">
              The Archive
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-antiqueGold to-transparent animate-pulse" />
      </div>
    </section>
  );
};
