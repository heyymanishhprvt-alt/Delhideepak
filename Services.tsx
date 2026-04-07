
import React from 'react';

export const Services: React.FC = () => {
  const tiers = [
    { 
      name: 'The Heritage', 
      desc: 'For the classic narrative.',
      price: 'From ₹5L', 
      features: ['Lead Cinematographer + Assistant', '10-Minute Signature Highlight', '250 Master-Graded Portraits', 'Global Archival Access'] 
    },
    { 
      name: 'The Royal', 
      desc: 'Our most requested experience.',
      price: 'From ₹12L', 
      features: ['4-Member Multi-Angle Crew', '4K Aerial Visuals (Drone)', 'Same-Day Edit Premiere', 'Hand-Bound Italian Leather Album', 'Priority Post-Production'] 
    },
    { 
      name: 'The Grandeur', 
      desc: 'Uncompromising global scale.',
      price: 'Bespoke', 
      features: ['Executive Creative Direction', 'Feature-Length Documentary', 'Stylized Pre-Wedding Cinematic', '24-Hour Social Concierge', 'Legacy Film for Posterity'] 
    },
  ];

  return (
    <div className="bg-royalGreen min-h-screen py-32 text-ivory animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-24">
          <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold mb-6 font-bold">Services</h3>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">The <span className="italic font-light">Curated</span> <br /><span className="gold-gradient-text font-bold">Collections</span></h1>
          <p className="text-ivory/40 font-sans text-xs tracking-[0.3em] uppercase max-w-xl mx-auto leading-relaxed">
            Tailored visual narratives designed for the world's most discerning families.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tiers.map((tier, idx) => (
            <div key={tier.name} className={`morphic-card p-14 rounded-sm border ${idx === 1 ? 'border-antiqueGold/60 shadow-[0_0_50px_rgba(201,164,76,0.1)] scale-105 z-10' : 'border-antiqueGold/10'} flex flex-col group transition-all duration-500`}>
              <h3 className="font-serif text-4xl mb-2 group-hover:text-antiqueGold transition-colors">{tier.name}</h3>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ivory/40 mb-4">{tier.desc}</p>
              <p className="text-antiqueGold font-serif text-2xl mb-12 tracking-wider">{tier.price}</p>
              <ul className="space-y-6 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start space-x-4 text-xs text-ivory/70 leading-relaxed tracking-wide">
                    <div className="w-1.5 h-1.5 rounded-full bg-antiqueGold mt-1 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-14 w-full py-5 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${idx === 1 ? 'bg-antiqueGold text-royalGreen hover:bg-ivory' : 'border border-antiqueGold/30 text-antiqueGold hover:bg-antiqueGold hover:text-royalGreen'}`}>
                Commission This Story
              </button>
            </div>
          ))}
        </div>

        <section className="mt-40 border-t border-antiqueGold/10 pt-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute inset-0 border border-antiqueGold/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1544161515-4ad6ce6ca896?auto=format&fit=crop&q=80&w=1200" className="relative z-10 rounded-sm grayscale hover:grayscale-0 transition-all duration-1000" alt="Process Mastery" />
            </div>
            <div className="space-y-10">
              <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold">The Process</h3>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.1]">Beyond the <br/><span className="italic font-light text-antiqueGold">Captured Frame</span></h2>
              <p className="text-ivory/60 text-sm leading-loose font-light tracking-wide">
                Our commitment begins long before the first shutter click. We provide artistic consultancy on venue lighting, color palette coordination, and heritage preservation. Every frame is treated as a masterwork, ensuring your legacy remains vibrant for the next sixty years and beyond.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-8 bg-charcoal/40 border border-antiqueGold/5">
                  <span className="block text-antiqueGold font-serif text-3xl mb-2">RAW</span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-ivory/30 font-bold">Cinematic Mastery</span>
                </div>
                <div className="p-8 bg-charcoal/40 border border-antiqueGold/5">
                  <span className="block text-antiqueGold font-serif text-3xl mb-2">HDR</span>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-ivory/30 font-bold">Bespoke Color Grading</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
