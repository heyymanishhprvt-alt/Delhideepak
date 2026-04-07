import React, { useState, useEffect } from 'react';
import { X, Camera, Calendar, Phone, Mail, User } from 'lucide-react';

export const LeadPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds of being on the site
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('dipak_lead_popup_seen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('dipak_lead_popup_seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md overflow-hidden bg-royalGreen border border-antiqueGold/30 rounded-2xl shadow-2xl shadow-black/50 animate-in zoom-in-95 duration-300">
        
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-antiqueGold/20 via-antiqueGold to-antiqueGold/20" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-antiqueGold/10 rounded-full blur-3xl" />
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-ivory/60 hover:text-antiqueGold transition-colors rounded-full hover:bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {!hasSubmitted ? (
            <>
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-antiqueGold/10 flex items-center justify-center border border-antiqueGold/20">
                  <Camera className="w-6 h-6 text-antiqueGold" />
                </div>
              </div>
              
              <h2 className="text-2xl font-serif text-center text-ivory mb-2">
                Capture Your Legacy
              </h2>
              <p className="text-sm text-center text-ivory/70 mb-8">
                Share your wedding details and let's craft a cinematic masterpiece together.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/40" />
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name" 
                    className="w-full bg-black/20 border border-ivory/10 rounded-lg py-3 pl-10 pr-4 text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-antiqueGold/50 transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/40" />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address" 
                    className="w-full bg-black/20 border border-ivory/10 rounded-lg py-3 pl-10 pr-4 text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-antiqueGold/50 transition-colors"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/40" />
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone Number" 
                    className="w-full bg-black/20 border border-ivory/10 rounded-lg py-3 pl-10 pr-4 text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-antiqueGold/50 transition-colors"
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/40" />
                  <input 
                    type="date" 
                    required
                    className="w-full bg-black/20 border border-ivory/10 rounded-lg py-3 pl-10 pr-4 text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-antiqueGold/50 transition-colors [color-scheme:dark]"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-antiqueGold text-royalGreen font-medium py-3 rounded-lg hover:bg-ivory transition-colors mt-2"
                >
                  Request Consultation
                </button>
              </form>
            </>
          ) : (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-ivory mb-2">Thank You</h3>
              <p className="text-ivory/70">
                We've received your details. Our team will contact you shortly to discuss your vision.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
