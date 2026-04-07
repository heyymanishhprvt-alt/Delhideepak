
import React from 'react';
import { BRANCHES } from '../constants';
import { Page } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const SOCIAL_LINKS = [
  { 
    id: 'insta', 
    url: 'https://instagram.com/dipak_studios', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ) 
  },
  { 
    id: 'yt', 
    url: 'https://youtube.com/dipakstudios', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
      </svg>
    ) 
  },
  { 
    id: 'fb', 
    url: 'https://facebook.com/dipakstudios', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    ) 
  }
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-charcoal text-ivory/60 py-24 px-6 border-t border-antiqueGold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Support & Brand */}
          <div className="col-span-1">
            <button 
              onClick={() => onNavigate('home')}
              className="flex flex-col mb-8 text-left group"
            >
              <Logo className="h-10 mb-2" />
              <span className="font-sans text-[8px] tracking-[0.4em] uppercase mt-1">Legacy Est. 1962</span>
            </button>
            
            <div className="space-y-6">
              <h5 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold">Support</h5>
              <div className="space-y-6">
                <div className="space-y-2">
                  <a 
                    href="mailto:wedding.dipak@gmail.com" 
                    className="block font-serif text-xl text-ivory hover:text-antiqueGold transition-colors border-b border-transparent hover:border-antiqueGold w-fit"
                  >
                    wedding.dipak@gmail.com
                  </a>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-ivory/40">
                    For appointments & enquiries only
                  </p>
                </div>

                <div className="space-y-2">
                  <a 
                    href="mailto:info@dipakstudios.com" 
                    className="block font-serif text-xl text-ivory hover:text-antiqueGold transition-colors border-b border-transparent hover:border-antiqueGold w-fit"
                  >
                    info@dipakstudios.com
                  </a>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-ivory/40">
                    Business & Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h5 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold mb-8 font-bold">Locations</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BRANCHES.map((branch) => (
                <a 
                  key={branch.city} 
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-y-4 group block p-4 border border-transparent hover:border-antiqueGold/10 hover:bg-royalGreen/5 transition-all duration-500 rounded-sm"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full border border-antiqueGold/20 flex items-center justify-center text-antiqueGold group-hover:bg-antiqueGold group-hover:text-royalGreen transition-all duration-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-serif text-2xl text-ivory group-hover:text-antiqueGold transition-colors">
                      {branch.city}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="font-sans text-[9px] leading-relaxed uppercase group-hover:text-ivory transition-colors">
                      {branch.address} {branch.isHeadOffice && <span className="text-antiqueGold font-bold ml-1 tracking-widest">(HQ)</span>}
                    </p>
                    <p className="font-sans text-[10px] text-antiqueGold/40 font-bold">{branch.phone}</p>
                  </div>

                  <div className="pt-2 border-t border-ivory/5">
                    <div className="flex items-center space-x-2 text-[8px] tracking-[0.3em] uppercase text-antiqueGold/60 group-hover:text-antiqueGold transition-all font-bold">
                      <span className="border-b border-transparent group-hover:border-antiqueGold/40 pb-0.5">Tap to get guide or route</span>
                      <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Studio Navigation & Social */}
          <div className="flex flex-col space-y-12">
            <div className="space-y-6">
              <h5 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold">The Studio</h5>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  { label: 'Films', id: 'films' },
                  { label: 'Experiences', id: 'services' },
                  { label: 'Heritage', id: 'about' },
                  { label: 'Journal', id: 'blog' },
                  { label: 'Booking', id: 'booking' }
                ].map(item => (
                  <li key={item.id}>
                    <button 
                      onClick={() => onNavigate(item.id as Page)}
                      className="font-sans text-[10px] uppercase tracking-[0.2em] hover:text-ivory transition-colors text-ivory/50"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold">Social</h5>
              <div className="flex space-x-6 items-center">
                {SOCIAL_LINKS.map(link => (
                  <a 
                    key={link.id} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ivory/40 hover:text-antiqueGold transition-all transform hover:scale-110"
                    aria-label={`Follow us on ${link.id}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-12 border-t border-ivory/5 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 text-[8px] tracking-[0.3em] uppercase font-bold relative">
          <div className="flex flex-col space-y-2 text-center lg:text-left z-10">
            <p className="text-ivory/30">
              &copy; {new Date().getFullYear()} Dipak Studios. Preservation through the Golden Hour.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 z-10">
            <button onClick={() => onNavigate('support')} className="hover:text-antiqueGold transition-colors">Terms & Conditions</button>
            <button onClick={() => onNavigate('support')} className="hover:text-antiqueGold transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('support')} className="hover:text-antiqueGold transition-colors">Disclaimer</button>
          </div>
          
          <p className="text-antiqueGold/40 text-right hidden lg:block z-10">
            Crafted for the Eternal Frame
          </p>

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03]">
            <span className="font-serif text-[8vw] whitespace-nowrap text-ivory font-bold tracking-tighter select-none">
              LIVVGROW STUDIO
            </span>
          </div>
        </div>
        
        {/* Developer Credit (Visible but subtle) */}
        <div className="mt-8 text-center">
            <p className="text-ivory/20 text-[8px] tracking-[0.4em] uppercase font-sans">
              Designed & Developed by <a href="#" className="text-antiqueGold/40 hover:text-antiqueGold transition-colors">Livvgrow Studio</a>
            </p>
        </div>
      </div>
    </footer>
  );
};
