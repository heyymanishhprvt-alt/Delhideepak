
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { 
    name: "Aditi & Sahil", 
    loc: "The Taj Palace, Delhi", 
    year: "2023", 
    quote: "Dipak Studios didn't just document our wedding; they archived the soul of our union. Looking at the frames, we don't just see photos—we feel the atmosphere of that day." 
  },
  { 
    name: "The Kapoor Family", 
    loc: "Udaipur City Palace", 
    year: "2022", 
    quote: "A legacy of 60 years shows in every frame. Their ability to handle high-profile ceremonies with such grace and cinematic precision is why they are the only choice for our family." 
  },
  { 
    name: "Riya & Varun", 
    loc: "Destination Tuscany", 
    year: "2023", 
    quote: "Bespoke service from the first meeting. They understood our global aesthetic perfectly and delivered a cinematic highlight that rivals the silver screen." 
  }
];

export const TestimonialsSlider: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 6000);
  }, [nextSlide, isPaused]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  return (
    <section 
      className="py-32 bg-ivory text-royalGreen relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35rem] font-serif text-royalGreen/[0.03] select-none pointer-events-none leading-none">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-20">
          <div className="inline-block mb-6">
            <Quote className="w-8 h-8 text-antiqueGold/40 mx-auto mb-4" />
            <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold font-bold">Featured Narratives</h3>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-charcoal leading-tight">Voices of the <span className="italic font-light">Legacy</span></h2>
        </header>

        <div className="relative group/slider max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 p-4 rounded-full border border-antiqueGold/20 text-antiqueGold hover:bg-antiqueGold hover:text-white transition-all duration-500 opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0 hidden md:flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 p-4 rounded-full border border-antiqueGold/20 text-antiqueGold hover:bg-antiqueGold hover:text-white transition-all duration-500 opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0 hidden md:flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)" 
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className={`min-w-full px-4 md:px-12 text-center transition-opacity duration-1000 ${active === i ? 'opacity-100' : 'opacity-0'}`}
                >
                  <p className="font-serif text-2xl md:text-4xl text-charcoal/80 italic leading-relaxed mb-12 max-w-3xl mx-auto">
                    "{t.quote}"
                  </p>
                  <div className="space-y-3">
                    <div className="w-8 h-px bg-antiqueGold/40 mx-auto mb-4" />
                    <p className="font-serif text-2xl text-charcoal tracking-wide">{t.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-antiqueGold font-bold flex items-center justify-center gap-2">
                      <span>{t.loc}</span>
                      <span className="w-1 h-1 rounded-full bg-antiqueGold/30" />
                      <span>{t.year}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots & Progress */}
          <div className="flex justify-center items-center space-x-4 mt-16">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)}
                className="relative group p-2"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div className={`h-1 rounded-full transition-all duration-700 ${active === i ? 'w-10 bg-antiqueGold' : 'w-4 bg-antiqueGold/20 group-hover:bg-antiqueGold/40'}`} />
                {active === i && !isPaused && (
                  <div className="absolute inset-0 h-1 bg-antiqueGold/10 animate-progress origin-left" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Autoplay status hint for mobile/accessibility */}
        <div className="mt-8 text-center md:hidden">
          <div className="flex items-center justify-center gap-4">
             <button onClick={prevSlide} className="p-3 border border-antiqueGold/20 rounded-full"><ChevronLeft className="w-5 h-5 text-antiqueGold" /></button>
             <button onClick={nextSlide} className="p-3 border border-antiqueGold/20 rounded-full"><ChevronRight className="w-5 h-5 text-antiqueGold" /></button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-progress {
          animation: progress 6s linear infinite;
        }
      `}</style>
    </section>
  );
};
