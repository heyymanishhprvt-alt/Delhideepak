
import React, { useEffect, useState, useCallback } from 'react';
import { Logo } from './Logo';

interface ShutterLoaderProps {
  onComplete?: () => void;
  isManualTrigger?: boolean;
}

export const ShutterLoader: React.FC<ShutterLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [focusState, setFocusState] = useState<'hunting' | 'locked'>('hunting');

  const playFocusSound = useCallback((type: 'hunt' | 'lock') => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      if (ctx.state === 'suspended') ctx.resume();

      if (type === 'lock') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    // Stage 1: Focus Hunting (Blur shift)
    const lockTimer = setTimeout(() => {
      setFocusState('locked');
      playFocusSound('lock');
    }, 1200);

    // Stage 2: Final Transition
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(lockTimer);
      clearTimeout(fadeTimer);
    };
  }, [onComplete, playFocusSound]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[1000] flex items-center justify-center bg-royalGreen overflow-hidden transition-opacity duration-700 ${focusState === 'locked' ? 'opacity-100' : 'opacity-100'}`}>
      
      {/* 1. Viewfinder UI Overlays */}
      <div className="absolute inset-0 z-20 pointer-events-none p-12 flex flex-col justify-between">
        <div className="flex justify-between items-start opacity-30">
          <div className="w-12 h-12 border-l-2 border-t-2 border-ivory" />
          <div className="text-[10px] tracking-[0.4em] uppercase text-ivory font-bold flex flex-col items-end">
            <span>4K | 60FPS</span>
            <span className="text-antiqueGold mt-2">REC ●</span>
          </div>
          <div className="w-12 h-12 border-r-2 border-t-2 border-ivory" />
        </div>
        
        {/* Exposure / Settings Meter */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 h-32 flex flex-col justify-between items-center opacity-20">
          {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-px bg-ivory" />)}
          <div className="w-8 h-px bg-antiqueGold scale-x-150" />
          {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-px bg-ivory" />)}
        </div>

        <div className="flex justify-between items-end opacity-30">
          <div className="w-12 h-12 border-l-2 border-b-2 border-ivory" />
          <div className="text-[8px] tracking-[0.5em] uppercase text-ivory/50 font-bold">
            ISO 400 | f/1.2 | 1/250s
          </div>
          <div className="w-12 h-12 border-r-2 border-b-2 border-ivory" />
        </div>
      </div>

      {/* 2. The Lens Barrel Rings */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Outer Barrel */}
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-antiqueGold/10 rounded-full" />
        <div className="absolute w-[280px] h-[280px] md:w-[460px] md:h-[460px] border-2 border-antiqueGold/5 rounded-full" />
        
        {/* Focal Markings Ring */}
        <div className="absolute w-[320px] h-[320px] md:w-[540px] md:h-[540px] rounded-full opacity-20 animate-spin-slow">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[8px] font-sans text-antiqueGold uppercase tracking-widest">DIPAK OPTICS</div>
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] font-sans text-antiqueGold uppercase tracking-widest">EST. 1962</div>
           <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] font-sans text-antiqueGold uppercase tracking-widest">50mm PRIME</div>
           <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[8px] font-sans text-antiqueGold uppercase tracking-widest">NANO COATING</div>
        </div>

        {/* 3. The Focus Hunting Element */}
        <div className="relative w-[220px] h-[220px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] flex items-center justify-center">
          {/* Internal Reflections */}
          <div className="absolute inset-0 bg-gradient-to-tr from-antiqueGold/5 via-transparent to-ivory/5" />
          
          {/* The Content being Focused */}
          <div className={`transition-all duration-1000 ease-out flex flex-col items-center ${
            focusState === 'hunting' 
              ? 'blur-[20px] scale-90' 
              : 'blur-0 scale-110'
          }`}>
            <Logo className="h-10 md:h-14 mb-4 drop-shadow-[0_0_20px_rgba(201,164,76,0.3)]" />
            <div className={`h-px bg-antiqueGold/30 transition-all duration-1000 ${focusState === 'hunting' ? 'w-0' : 'w-24'}`} />
          </div>

          {/* AF Brackets UI */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${focusState === 'hunting' ? 'opacity-40 animate-pulse' : 'opacity-100'}`}>
            <div className={`w-32 h-32 md:w-48 md:h-48 border-2 transition-colors duration-300 ${focusState === 'hunting' ? 'border-ivory/20' : 'border-green-400/60'}`}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2">
                <span className={`text-[8px] tracking-[0.2em] font-bold ${focusState === 'hunting' ? 'text-ivory/30' : 'text-green-400'}`}>
                  {focusState === 'hunting' ? 'AF HUNTING...' : 'AF LOCK [●]'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Background Shifting Blur (Atmospheric) */}
      <div className={`absolute inset-0 z-0 transition-all duration-[2000ms] ${focusState === 'hunting' ? 'scale-110 blur-xl opacity-20' : 'scale-100 blur-sm opacity-10'}`}>
         <img 
           src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920" 
           className="w-full h-full object-cover"
           alt="Background bokeh"
         />
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
