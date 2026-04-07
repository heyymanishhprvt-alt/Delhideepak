
import React from 'react';
import { Hero } from '../components/Hero';
import { LegacyFounders } from '../components/LegacyFounders';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import { ReviewWall } from '../components/ReviewWall';
import { Newsletter } from '../components/Newsletter';
import { EnquirySection } from '../components/EnquirySection';
// Fix: Page type is exported from types.ts, not App.tsx
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const SOCIAL_HUB_LINKS = [
  { 
    name: 'Instagram', 
    url: 'https://instagram.com/dipak_studios',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  { 
    name: 'YouTube', 
    url: 'https://youtube.com/dipakstudios',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
      </svg>
    )
  },
  { 
    name: 'Facebook', 
    url: 'https://facebook.com/dipakstudios',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    )
  }
];

const INSTAGRAM_FEATURED = [
  { id: '1', url: 'https://www.instagram.com/p/CyqDSGzSzNf/', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800', label: 'Amareen & Nikhil' },
  { id: '2', url: 'https://www.instagram.com/p/CqCu2vbSY2y/', img: 'https://images.unsplash.com/photo-1595152230661-00f33923e9a7?auto=format&fit=crop&q=80&w=800', label: 'Palace Balcony' },
  { id: '3', url: 'https://www.instagram.com/p/DTsbV3yj-8l/', img: 'https://images.unsplash.com/photo-1544161515-4ad6ce6ca896?auto=format&fit=crop&q=80&w=800', label: 'The Floral Arch' },
  { id: '4', url: 'https://www.instagram.com/p/CyTJbSls1nM/', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', label: 'The Ethereal Gaze' },
  { id: '5', url: 'https://www.instagram.com/p/DUDs3NODx7S/', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', label: 'Doorway Silhouette' },
  { id: '6', url: 'https://www.instagram.com/p/DUQB2n4D9wQ/', img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800', label: 'Utsav & Khushi' },
  { id: '7', url: 'https://www.instagram.com/p/CpuofL1vBmF/', img: 'https://images.unsplash.com/photo-1546032996-6dfacbacbd3f?auto=format&fit=crop&q=80&w=800', label: 'Palace Nightwalk' },
  { id: '8', url: 'https://www.instagram.com/p/DNqFy0qP4ko/', img: 'https://images.unsplash.com/photo-1465495910483-0d6749838f59?auto=format&fit=crop&q=80&w=800', label: 'Heritage Details' },
  { id: '9', url: 'https://www.instagram.com/p/DO8d9pdj97_/', img: 'https://images.unsplash.com/photo-1519225495810-75178319a13b?auto=format&fit=crop&q=80&w=800', label: 'Grand Celebration' },
  { id: '10', url: 'https://www.instagram.com/p/DOyLYVzD6-d/', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', label: 'The Final Frame' },
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <article className="animate-fadeIn">
      <h1 className="sr-only">Dipak Studios - Luxury Wedding Photography & Cinematic Films since 1962</h1>
      
      <Hero />
      
      <LegacyFounders />
      
      {/* Dynamic Image Carousel / Narrative Slider */}
      <section className="py-24 bg-charcoal overflow-hidden">
        <div className="flex space-x-8 animate-logo-shine no-scrollbar overflow-x-auto px-6 py-10">
          {[
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1546032996-6dfacbacbd3f?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1519225495810-75178319a13b?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1465495910483-0d6749838f59?auto=format&fit=crop&q=80&w=600'
          ].map((src, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[450px] aspect-[3/4] overflow-hidden rounded-sm relative group">
              <img src={src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Legacy Frame" />
              <div className="absolute inset-0 bg-royalGreen/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </section>

      <PortfolioGrid />

      {/* Featured Production Spotlight */}
      <section className="py-32 bg-royalGreen relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100"><circle cx="100" cy="50" r="50" fill="currentColor"/></svg>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h3 className="text-antiqueGold uppercase tracking-[0.5em] text-[10px] font-bold">Premiere Release</h3>
              <h2 className="font-serif text-5xl md:text-7xl text-ivory leading-tight">The <span className="italic font-light">Symphony</span> of Vows</h2>
              <p className="text-ivory/50 text-sm leading-loose max-w-md font-light tracking-wide">
                Witness our latest cinematic masterpiece. Filmed in the heart of Udaipur, this production captures a journey of ethereal beauty and timeless tradition.
              </p>
              <button 
                onClick={() => onNavigate('films')}
                className="group flex items-center space-x-6 text-antiqueGold"
              >
                <div className="w-20 h-20 rounded-full border border-antiqueGold/30 flex items-center justify-center group-hover:bg-antiqueGold group-hover:text-royalGreen transition-all duration-700">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold block">View Full Film</span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-ivory/30 block">Duration: 12:45 • 4K HDR</span>
                </div>
              </button>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-sm shadow-2xl glass-dark p-2">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1280" className="w-full aspect-video object-cover brightness-75 group-hover:scale-105 transition-all duration-1000" alt="Symphony of Vows Film Cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/40 backdrop-blur-sm">
                <span className="font-serif text-3xl italic text-antiqueGold">Play Trailer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSlider />
      
      {/* High Conversion Enquiry Section */}
      <EnquirySection />

      <ReviewWall />

      {/* Social Hub - Integrated with Specific Archive Imagery */}
      <section className="py-24 bg-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
            <h3 className="font-sans text-[10px] tracking-[0.8em] uppercase text-antiqueGold font-bold mb-4">Digital Archive</h3>
            <h2 className="font-serif text-4xl md:text-6xl text-ivory italic">Social Hub</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 mb-20 items-center">
            {SOCIAL_HUB_LINKS.map(s => (
              <a 
                key={s.name} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 font-sans text-[10px] uppercase tracking-[0.5em] text-ivory/40 hover:text-antiqueGold transition-all font-bold group relative"
              >
                <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                <span className="hidden sm:inline">{s.name}</span>
                <div className="h-px w-0 group-hover:w-full bg-antiqueGold transition-all duration-500 mt-2 absolute bottom-[-8px] left-0" />
              </a>
            ))}
          </div>

          {/* Mosaic Instagram Grid - Reflecting Provided Archive Screenshots */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {INSTAGRAM_FEATURED.map((post) => (
                <a 
                  key={post.id} 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square bg-royalGreen/40 overflow-hidden relative group rounded-sm block"
                >
                   <img src={post.img} alt={post.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-antiqueGold block mb-2">{post.label}</span>
                        <span className="text-ivory text-[9px] uppercase tracking-widest border-b border-antiqueGold pb-1">View Post</span>
                      </div>
                   </div>
                </a>
             ))}
             {/* Final call to action square */}
             <a 
               href="https://www.instagram.com/dipak_studios"
               target="_blank"
               rel="noopener noreferrer"
               className="aspect-square bg-antiqueGold flex flex-col items-center justify-center text-royalGreen space-y-4 group hover:bg-ivory transition-colors duration-700 p-8 rounded-sm"
             >
                <svg className="w-10 h-10 animate-float" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div className="text-center">
                  <span className="font-sans text-[10px] tracking-[0.3em] font-black uppercase">Follow The Story</span>
                  <p className="text-[8px] tracking-[0.1em] opacity-60 mt-1">@dipak_studios</p>
                </div>
             </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </article>
  );
};
