
import React, { useState } from 'react';
import { Send, Calendar, MapPin, User, Phone } from 'lucide-react';

export const EnquirySection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="enquiry" className="py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-sm overflow-hidden bg-white border border-antiqueGold/10">
          
          {/* Left Side: Visual Inspiration */}
          <div className="relative hidden lg:block h-full min-h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1000" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
              alt="Cinematic Wedding Moment"
            />
            <div className="absolute inset-0 bg-royalGreen/20" />
            <div className="absolute inset-0 flex items-center justify-center p-20 text-center">
              <div className="border border-white/30 backdrop-blur-md p-10">
                <h3 className="font-serif text-4xl text-white mb-4 italic">The Heritage Frame</h3>
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/70 font-bold">Your legacy begins with a single frame.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Enquiry Form */}
          <div className="p-12 md:p-20 flex flex-col justify-center bg-white">
            {status === 'success' ? (
              <div className="text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-royalGreen text-antiqueGold rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8" />
                </div>
                <h2 className="font-serif text-4xl text-charcoal">Invitation Sent.</h2>
                <p className="text-charcoal/50 font-sans text-xs uppercase tracking-widest leading-loose">
                  Our Senior Creative Lead will contact you shortly to discuss your vision.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-antiqueGold font-bold text-[10px] uppercase tracking-[0.3em] border-b border-antiqueGold pb-1"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <div className="space-y-10 animate-fadeIn">
                <div className="space-y-4">
                  <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold font-bold">The Consultation</h3>
                  <h2 className="font-serif text-5xl text-charcoal leading-tight">Request a <br/><span className="italic font-light">Custom Quote</span></h2>
                  <p className="text-charcoal/40 text-[10px] uppercase tracking-widest font-bold">Secure your date in our 2024-25 Archive.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <User className="absolute left-0 bottom-3 w-4 h-4 text-antiqueGold/40 group-focus-within:text-antiqueGold transition-colors" />
                      <input 
                        required
                        placeholder="Full Name"
                        className="w-full bg-transparent border-b border-charcoal/10 pl-8 py-3 text-sm focus:outline-none focus:border-antiqueGold transition-all placeholder:text-charcoal/20"
                      />
                    </div>
                    <div className="relative group">
                      <Phone className="absolute left-0 bottom-3 w-4 h-4 text-antiqueGold/40 group-focus-within:text-antiqueGold transition-colors" />
                      <input 
                        required
                        type="tel"
                        placeholder="Contact Number"
                        className="w-full bg-transparent border-b border-charcoal/10 pl-8 py-3 text-sm focus:outline-none focus:border-antiqueGold transition-all placeholder:text-charcoal/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <Calendar className="absolute left-0 bottom-3 w-4 h-4 text-antiqueGold/40 group-focus-within:text-antiqueGold transition-colors" />
                      <input 
                        required
                        type="text"
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => e.target.type = 'text'}
                        placeholder="Celebration Date"
                        className="w-full bg-transparent border-b border-charcoal/10 pl-8 py-3 text-sm focus:outline-none focus:border-antiqueGold transition-all placeholder:text-charcoal/20"
                      />
                    </div>
                    <div className="relative group">
                      <MapPin className="absolute left-0 bottom-3 w-4 h-4 text-antiqueGold/40 group-focus-within:text-antiqueGold transition-colors" />
                      <input 
                        required
                        placeholder="Primary Venue (e.g. Taj Delhi)"
                        className="w-full bg-transparent border-b border-charcoal/10 pl-8 py-3 text-sm focus:outline-none focus:border-antiqueGold transition-all placeholder:text-charcoal/20"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-6 bg-royalGreen text-antiqueGold text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all duration-700 shadow-xl disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Encrypting...' : 'Request Private Quote'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
