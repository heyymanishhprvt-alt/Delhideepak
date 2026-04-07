
import React from 'react';

export const Blog: React.FC = () => {
  const posts = [
    { title: "Top 10 Farmhouses in South Delhi for a Winter Wedding", cat: "Locations", date: "Jan 12, 2024" },
    { title: "How to Choose Your Bridal Colors for Cinematic Photography", cat: "Style Tips", date: "Jan 05, 2024" },
    { title: "The Legacy of Dipak: 60 Years of Changing Frames", cat: "History", date: "Dec 20, 2023" },
  ];

  return (
    <div className="bg-ivory min-h-screen py-24 text-royalGreen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="font-serif text-6xl md:text-7xl mb-4">The <span className="italic underline decoration-antiqueGold">Journal</span></h1>
          <p className="font-sans text-xs tracking-widest uppercase opacity-60">Insights, Trends & Legacy Stories</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {posts.map(post => (
            <article key={post.title} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-charcoal mb-8 overflow-hidden rounded-sm">
                <img src={`https://picsum.photos/seed/${post.title}/800/600`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={post.title} />
              </div>
              <span className="text-antiqueGold text-[9px] uppercase tracking-[0.3em] font-bold mb-4 block">{post.cat} • {post.date}</span>
              <h3 className="font-serif text-2xl group-hover:text-antiqueGold transition-colors leading-snug">{post.title}</h3>
              <p className="text-royalGreen/60 text-sm mt-4 leading-relaxed">Discover the nuances of planning a perfect wedding in the heart of Delhi NCR with our expert guides...</p>
            </article>
          ))}
        </div>

        <div className="mt-24 p-12 bg-royalGreen text-ivory rounded-sm flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="font-serif text-3xl mb-2">Join the Inner Circle</h4>
            <p className="text-ivory/50 text-xs uppercase tracking-widest">Get exclusive planning tips once a month</p>
          </div>
          <div className="mt-8 md:mt-0 flex w-full md:w-auto">
            <input type="email" placeholder="Your Email" className="bg-charcoal/50 border border-antiqueGold/20 px-6 py-4 text-sm focus:outline-none w-full md:w-80" />
            <button className="bg-antiqueGold text-royalGreen px-8 py-4 text-[10px] uppercase font-bold tracking-widest">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
