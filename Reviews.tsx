
import React from 'react';

export const Reviews: React.FC = () => {
  return (
    <div className="bg-ivory min-h-screen py-32 text-royalGreen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-32">
          <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold mb-6 font-bold">Testimonials</h3>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight text-charcoal">Voices <span className="italic font-light">of the</span> <br/><span className="gold-gradient-text font-bold">Legacy</span></h1>
          <p className="text-charcoal/40 text-[10px] uppercase tracking-[0.4em] max-w-lg mx-auto font-bold">A shared history with India's most celebrated families.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {[
            { name: "Aditi & Sahil", loc: "The Taj Palace, Delhi", year: "2023", quote: "Dipak Studios didn't just document our wedding; they archived the soul of our union. Looking at the frames, we don't just see photos—we feel the atmosphere of that day." },
            { name: "The Kapoor Family", loc: "Udaipur City Palace", year: "2022", quote: "A legacy of 60 years shows in every frame. Their ability to handle high-profile ceremonies with such grace and cinematic precision is why they are the only choice for our family." },
            { name: "Riya & Varun", loc: "Destination Tuscany", year: "2023", quote: "Bespoke service from the first meeting. They understood our global aesthetic perfectly and delivered a cinematic highlight that rivals the silver screen." },
            { name: "Meera & Ishaan", loc: "Suryagarh Jaisalmer", year: "2021", quote: "The lighting, the angles, the silent moments... Dipak Studios are masters of the emotional narrative. We are proud to have our memories preserved in their archive." },
            { name: "The Singhania Union", loc: "South Delhi Farmhouse", year: "2024", quote: "Timeless artistry. They have a unique way of making every guest feel like part of a grand cinematic production while remaining entirely unobtrusive." },
            { name: "Ananya Malhotra", loc: "The Oberoi, Gurgaon", year: "2023", quote: "They captured my mother's wedding in 1992, and now mine. The technology has changed, but the magic of the Dipak eye remains timeless and unrivaled." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col space-y-8 p-12 border border-royalGreen/5 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-700 group">
              <div className="flex space-x-1 text-antiqueGold">
                {[...Array(5)].map((_, s) => <svg key={s} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <p className="text-charcoal/80 text-sm italic leading-loose font-light">
                "{item.quote}"
              </p>
              <div className="flex items-center space-x-6 pt-8 border-t border-royalGreen/5">
                <div className="w-12 h-12 rounded-full bg-royalGreen/5 flex items-center justify-center font-serif text-antiqueGold italic text-xl">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-serif text-xl leading-none text-charcoal">{item.name}</p>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-royalGreen/40 mt-2 font-bold">{item.loc} • {item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center bg-royalGreen py-32 px-10 text-ivory relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-antiqueGold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-serif text-4xl md:text-5xl mb-12 relative z-10 leading-snug">The Choice of <span className="italic font-light text-antiqueGold">Icons</span> & <span className="italic font-light text-antiqueGold">Visionaries</span></h2>
          <div className="flex flex-wrap justify-center gap-16 opacity-40 relative z-10">
            {['Vogue India', 'Filmfare', 'WedMeGood', 'Brides Today', 'Harpers Bazaar'].map(p => (
              <span key={p} className="font-serif text-xl md:text-2xl uppercase tracking-[0.3em] font-light">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
