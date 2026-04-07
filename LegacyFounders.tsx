
import React from 'react';

export const LegacyFounders: React.FC = () => {
  return (
    <section className="bg-charcoal text-ivory overflow-hidden border-y border-antiqueGold/10">
      {/* 1. Legacy Statement */}
      <div className="py-24 px-6 text-center bg-royalGreen/20 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-antiqueGold whitespace-nowrap">Heritage</span>
        </div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h3 className="font-sans text-[10px] tracking-[0.8em] uppercase text-antiqueGold font-bold animate-fadeIn">The Visual Institution</h3>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight">
            Capturing stories that <br />
            <span className="italic font-light gold-gradient-text">generations return to.</span>
          </h2>
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-ivory/40">Preserving the silent promises of India's most celebrated unions since 1962.</p>
          <div className="w-24 h-px bg-antiqueGold/30 mx-auto mt-10" />
        </div>
      </div>

      {/* 2. Founder Origin Story (Mr. Sunder Dipak) */}
      <div className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-antiqueGold/10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" 
                className="w-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                alt="Founder Sunder Dipak Era" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-charcoal to-transparent">
                <span className="font-serif text-2xl italic text-antiqueGold">Mr. Sunder Dipak</span>
                <p className="text-[8px] uppercase tracking-[0.3em] text-ivory/50 mt-1">Founder, Est. 1962</p>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold">The Foundation</h3>
            <h2 className="font-serif text-5xl leading-tight">A Vision <br/><span className="italic font-light">Etched in Light</span></h2>
            <div className="space-y-6 text-ivory/60 font-sans text-sm leading-loose font-light tracking-wide max-w-lg">
              <p>
                The journey began in 1962, when Mr. Sunder Dipak founded what would become an institution of Indian wedding photography. Driven by a relentless pursuit of craftsmanship and a deep respect for the sanctity of the wedding ritual, he established a foundation built on trust, elegance, and the mastery of the "Golden Hour."
              </p>
              <p>
                His vision was never just to record an event, but to preserve the cultural fabric of a nation's celebrations. He treated every frame as a foundation stone for a family's legacy, a philosophy that remains the heartbeat of Dipak Studios today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Second-Generation Vision */}
      <div className="py-32 px-6 bg-ivory text-royalGreen">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold">The Torchbearers</h3>
            <h2 className="font-serif text-5xl leading-tight text-charcoal">Legacy <br/><span className="italic font-light text-royalGreen">Meets Innovation</span></h2>
            <div className="space-y-6 text-charcoal/70 font-sans text-sm leading-loose font-light tracking-wide max-w-lg">
              <p>
                Today, that foundation is elevated by Mohan, Raman, and Gautam Dipak. As torchbearers of their father’s legacy, they have evolved the studio without losing its soul. 
              </p>
              <p>
                Raman Dipak, integrating his background in Computer Science, has pioneered the technical evolution of the studio—ensuring that while the technology transforms, the emotional purity of the narrative remains untouched. It is a marriage of institutional knowledge and tomorrow's possibilities.
              </p>
            </div>
            <div className="pt-8 flex space-x-12 border-t border-royalGreen/10">
               <div>
                 <span className="block font-serif text-3xl text-charcoal">Mohan Dipak</span>
                 <span className="text-[9px] uppercase tracking-widest text-antiqueGold">Creative Director</span>
               </div>
               <div>
                 <span className="block font-serif text-3xl text-charcoal">Raman Dipak</span>
                 <span className="text-[9px] uppercase tracking-widest text-antiqueGold">Technical Visionary</span>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 border border-royalGreen/5 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" 
              className="relative z-10 w-full shadow-2xl rounded-sm grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Second Generation Visionaries" 
            />
          </div>
        </div>
      </div>

      {/* 4. Modern Era & Philosophy */}
      <div className="py-32 px-6 border-t border-white/5 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold font-bold">Creative Philosophy</h3>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight">The Art of the <br/><span className="italic font-light gold-gradient-text">Unscripted Moment</span></h2>
          <p className="text-ivory/50 text-base leading-loose font-light tracking-wide max-w-2xl mx-auto">
            In the last decade, we have led a paradigm shift toward candid, raw storytelling. Our creative directors don't just lead a crew; they curate an experience. We focus on cinematic pacing and emotional gravity, creating films and albums that do not just age—they mature into heirlooms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              { title: "Candid Grace", desc: "Finding beauty in the silent, unseen moments." },
              { title: "Cinematic Pacing", desc: "Films structured with the rhythm of grand cinema." },
              { title: "Heirloom Grade", desc: "Materials and grading designed to last generations." }
            ].map(item => (
              <div key={item.title} className="p-8 glass-dark border border-white/5 space-y-4">
                <h4 className="font-serif text-xl text-antiqueGold italic">{item.title}</h4>
                <p className="text-[10px] uppercase tracking-widest text-ivory/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Authority & Social Proof */}
      <div className="py-24 px-6 bg-royalGreen/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <span className="block font-serif text-5xl text-antiqueGold mb-2">8L+</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/30 font-bold">Genuine Followers</span>
            </div>
            <div>
              <span className="block font-serif text-5xl text-antiqueGold mb-2">60+</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/30 font-bold">Years of Trust</span>
            </div>
            <div>
              <span className="block font-serif text-5xl text-antiqueGold mb-2">Global</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/30 font-bold">Destination Mastery</span>
            </div>
            <div>
              <span className="block font-serif text-5xl text-antiqueGold mb-2">Iconic</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/30 font-bold">Celebrity Portfolio</span>
            </div>
          </div>
          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-20 grayscale filter brightness-200">
            {['Vogue', 'Harpers', 'WedMeGood', 'Filmfare'].map(brand => (
              <span key={brand} className="font-serif text-2xl tracking-[0.3em] uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Subtle Trust Disclaimer */}
      <div className="py-16 px-6 bg-black/40 border-t border-antiqueGold/10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex-shrink-0">
            <svg className="w-12 h-12 text-antiqueGold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold mb-2">Heritage Integrity Notice</h4>
            <p className="text-[10px] text-ivory/30 leading-relaxed uppercase tracking-wider">
              Dipak Studios operates exclusively via our authorized offices in Delhi, Gurgaon, and Faridabad. To ensure the authenticity of your commission, please verify all bookings through our official concierge. We maintain no affiliation with unauthorized entities using our name.
            </p>
          </div>
        </div>
      </div>

      {/* 7. Soft CTA */}
      <div className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="font-serif text-4xl md:text-5xl italic font-light">Begin your story with the custodians of legacy.</h2>
          <a 
            href="https://calendly.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-6 px-12 py-6 bg-antiqueGold text-royalGreen font-sans text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-ivory transition-all duration-700 shadow-2xl"
          >
            <span>Schedule a Private Consultation</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
