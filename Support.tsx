
import React from 'react';

export const Support: React.FC = () => {
  return (
    <div className="bg-charcoal min-h-screen py-32 text-ivory animate-fadeIn">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-24">
          <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold mb-6 font-bold">Support</h3>
          <h1 className="font-serif text-6xl mb-4">Client <span className="italic">Advocacy</span></h1>
          <p className="text-ivory/40 text-[10px] uppercase tracking-[0.4em] font-bold">Ensuring your legacy is protected</p>
        </header>

        <section className="space-y-16">
          <div className="morphic-card p-12 rounded-sm border border-antiqueGold/10">
            <h3 className="font-serif text-3xl mb-10 text-antiqueGold">Terms of Service</h3>
            <div className="space-y-8 text-sm text-ivory/60 leading-loose font-light tracking-wide">
              <p>
                <strong>1. Commissions:</strong> All bookings are considered confirmed only upon receipt of the non-refundable archival retainer. Dates are secured on a first-come, first-served basis.
              </p>
              <p>
                <strong>2. Usage Rights:</strong> Dipak Studios retains moral and artistic rights to all captured frames. Clients are granted a lifetime personal usage license for digital and physical display. Commercial use requires separate licensing.
              </p>
              <p>
                <strong>3. Archival Guarantee:</strong> We guarantee the storage of your master files for a period of 10 years from the date of the event in our temperature-controlled digital vault.
              </p>
            </div>
          </div>

          <div className="morphic-card p-12 rounded-sm border border-antiqueGold/10">
            <h3 className="font-serif text-3xl mb-10 text-antiqueGold">Privacy Policy</h3>
            <div className="space-y-8 text-sm text-ivory/60 leading-loose font-light tracking-wide">
              <p>
                Your privacy is paramount. High-profile and celebrity commissions include an automatic Non-Disclosure Agreement (NDA) for pre-event planning.
              </p>
              <p>
                We do not sell client data. All contact information is used strictly for event coordination and delivery of cinematic assets.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 border border-antiqueGold/10 bg-royalGreen/30 text-center">
              <h4 className="font-serif text-xl mb-4 text-antiqueGold">Copyright Inquiry</h4>
              <p className="text-[10px] text-ivory/40 mb-6 uppercase tracking-widest">For media or publication requests</p>
              <a href="mailto:media@dipakstudios.com" className="text-[10px] uppercase tracking-widest border-b border-antiqueGold text-antiqueGold pb-1 hover:text-ivory hover:border-ivory transition-colors font-bold">Email Legal Team</a>
            </div>
            <div className="p-10 border border-antiqueGold/10 bg-royalGreen/30 text-center">
              <h4 className="font-serif text-xl mb-4 text-antiqueGold">Technical Help</h4>
              <p className="text-[10px] text-ivory/40 mb-6 uppercase tracking-widest">Portal access or download issues</p>
              <button className="text-[10px] uppercase tracking-widest border-b border-antiqueGold text-antiqueGold pb-1 hover:text-ivory hover:border-ivory transition-colors font-bold">Open Support Ticket</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
