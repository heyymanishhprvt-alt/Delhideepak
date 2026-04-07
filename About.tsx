
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-charcoal min-h-screen py-32 text-ivory animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-48">
          <div className="relative group">
            <div className="absolute -top-12 -left-12 w-64 h-64 border-l border-t border-antiqueGold/20 z-0" />
            <div className="relative z-10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
              <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800" className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Founding Legacy" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-antiqueGold p-10 text-royalGreen shadow-2xl z-20">
              <span className="font-serif text-7xl leading-none">1962</span>
              <span className="block text-[9px] uppercase font-bold tracking-[0.5em] mt-3">The First Commission</span>
            </div>
          </div>
          <div className="space-y-12">
            <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold font-bold">Six Decades of Mastery</h3>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-ivory">Our History, <br/> Your <span className="italic font-light gold-gradient-text">Heritage.</span></h1>
            <p className="text-ivory/50 text-base leading-loose font-light tracking-wide">
              Founded in 1962 by Shri Dipak Bakshi, our studio emerged from a singular vision to transform Indian wedding photography into a fine art form. From our first humble darkroom in South Delhi to the multi-office powerhouse of today, our commitment has remained unchanged: to capture the unrepeatable majesty of the Indian union. Today, the second generation of Bakshis continues to push the boundaries of cinematic storytelling, merging 62 years of institutional knowledge with tomorrow's technology.
            </p>
            <div className="w-24 h-px bg-antiqueGold/40" />
            <p className="text-antiqueGold/60 text-sm leading-relaxed italic font-light">
              "We are not merely photographers; we are the custodians of your most sacred narratives."
            </p>
          </div>
        </div>

        <section className="py-32 border-t border-ivory/5">
          <h2 className="font-serif text-5xl text-center mb-24">The <span className="italic font-light">Evolution</span> of Light</h2>
          <div className="max-w-4xl mx-auto space-y-32">
            {[
              { year: '1962', text: 'Shri Dipak Bakshi establishes the flagship studio, setting a new benchmark for bridal portraiture in post-independence India.' },
              { year: '1988', text: 'The introduction of proprietary high-fidelity color processing, revolutionizing the vibrant palette of North Indian weddings.' },
              { year: '2012', text: 'The birth of our Cinematic Division, bringing Hollywood-standard equipment and narrative pacing to the Indian wedding market.' },
              { year: '2024', text: 'Pioneering AI-driven visual curation and real-time archival delivery for the global elite.' },
            ].map((milestone, i) => (
              <div key={milestone.year} className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-16`}>
                <div className="w-full md:w-1/3 text-center md:text-left">
                  <span className="font-serif text-8xl text-antiqueGold/10 block leading-none">{milestone.year}</span>
                </div>
                <div className="w-full md:w-2/3 bg-royalGreen/10 p-14 border-l border-antiqueGold/30 backdrop-blur-sm shadow-xl">
                  <p className="text-ivory/80 font-sans text-lg italic leading-relaxed font-light">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
