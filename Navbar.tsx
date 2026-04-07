
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { label: string; id: Page }[] = [
    { label: 'Films', id: 'films' },
    { label: 'Services', id: 'services' },
    { label: 'Legacy', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Portal', id: 'portal' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-royalGreen/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-4 transition-transform hover:scale-105"
        >
          <Logo className="h-10 md:h-12" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex items-center space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-sans text-[10px] tracking-[0.3em] uppercase transition-all duration-300 relative group py-2 ${currentPage === item.id ? 'text-antiqueGold' : 'text-ivory/70 hover:text-ivory'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-px bg-antiqueGold transition-all duration-300 ${currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6 pl-10 border-l border-white/10">
            <button 
              onClick={() => onNavigate('booking')}
              className="bg-antiqueGold text-royalGreen px-8 py-3 rounded-sm text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-ivory transition-all cta-glow"
            >
              Check Availability
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button 
            onClick={() => onNavigate('booking')}
            className="bg-antiqueGold text-royalGreen px-4 py-2 rounded-sm text-[9px] tracking-widest uppercase font-bold"
          >
            Check
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-antiqueGold p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-0 z-[90] bg-royalGreen transition-all duration-700 ease-in-out ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} lg:hidden`}>
        <div className="h-full flex flex-col justify-center items-center p-12 space-y-8">
          <Logo className="h-12 mb-12" />
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMobileMenuOpen(false); }}
              className="font-serif text-4xl text-ivory/80 hover:text-antiqueGold transition-colors tracking-tight"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { onNavigate('booking'); setMobileMenuOpen(false); }}
            className="mt-12 w-full bg-antiqueGold text-royalGreen py-5 rounded-sm font-sans text-xs tracking-[0.5em] uppercase font-bold"
          >
            Check Availability
          </button>
        </div>
      </div>
    </nav>
  );
};
