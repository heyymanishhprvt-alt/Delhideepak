
import React from 'react';

const REVIEWS = [
  { 
    name: "Ishita & Rahul", 
    location: "The Leela, Delhi", 
    rating: 5,
    quote: "The way Dipak Studios handles lighting is pure magic. They found beauty in the most unexpected corners of our venue.",
    date: "Dec 2023"
  },
  { 
    name: "Arjun Malhotra", 
    location: "Suryagarh Jaisalmer", 
    rating: 5,
    quote: "Punctual, professional, and poetic. Their films are not just videos; they are emotional experiences we relive every week.",
    date: "Jan 2024"
  },
  { 
    name: "Priya Varma", 
    location: "Amaara Farms", 
    rating: 5,
    quote: "Six decades of experience really shows. They managed a crowd of 2000 guests without once feeling intrusive.",
    date: "Nov 2023"
  },
  { 
    name: "The Oberoi Wedding", 
    location: "Udaipur", 
    rating: 5,
    quote: "Bespoke service at its finest. From the pre-wedding mood boards to the final leather-bound album, every detail was royal.",
    date: "Feb 2024"
  },
  { 
    name: "Sanya & Kabir", 
    location: "Roseate House", 
    rating: 5,
    quote: "The candid shots captured expressions we didn't even know we made. Truly the custodians of our most sacred moments.",
    date: "Oct 2023"
  },
  { 
    name: "Deepak Khurana", 
    location: "ITC Maurya", 
    rating: 5,
    quote: "A heritage brand that understands modern aesthetics. The color grading on our cinematic highlight was world-class.",
    date: "Mar 2024"
  }
];

export const ReviewWall: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-royalGreen border-t border-antiqueGold/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="font-sans text-[10px] tracking-[0.5em] uppercase text-antiqueGold font-bold mb-4">The Review Wall</h3>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory">Community <span className="italic font-light">Gratitude</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="morphic-card p-10 rounded-sm hover:-translate-y-2 transition-all duration-500 group border border-antiqueGold/5"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-antiqueGold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="font-serif text-xl text-ivory/80 leading-relaxed italic mb-10 group-hover:text-ivory transition-colors">
                "{review.quote}"
              </p>

              <div className="pt-6 border-t border-antiqueGold/10 flex justify-between items-end">
                <div>
                  <h4 className="font-serif text-2xl text-antiqueGold">{review.name}</h4>
                  <p className="text-[9px] uppercase tracking-widest text-ivory/30 mt-1">{review.location}</p>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-antiqueGold/40 font-bold">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
