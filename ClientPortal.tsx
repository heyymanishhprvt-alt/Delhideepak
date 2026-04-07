
import React, { useState } from 'react';

interface ArchiveAsset {
  id: string;
  label: string;
  img: string;
  size: string;
  type: 'Video' | 'Image' | 'Document';
}

export const ClientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const assets: ArchiveAsset[] = [
    { id: 'v1', label: 'Cinematic Feature Film', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', size: '4.2 GB', type: 'Video' },
    { id: 'v2', label: 'The Teaser (Social Edit)', img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800', size: '450 MB', type: 'Video' },
    { id: 'i1', label: 'Signature Master Portraits', img: 'https://images.unsplash.com/photo-1519225495810-75178319a13b?auto=format&fit=crop&q=80&w=800', size: '1.8 GB', type: 'Image' },
    { id: 'd1', label: 'Heirloom Album Proofs', img: 'https://images.unsplash.com/photo-1465495910483-0d6749838f59?auto=format&fit=crop&q=80&w=800', size: '85 MB', type: 'Document' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation: In production, this would be an API call to Firebase/Auth0/Supabase
    if (email.includes('@') && password === 'legacy1962') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid signature or archive email. Please contact your concierge.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-charcoal min-h-screen flex items-center justify-center p-6 animate-fadeIn relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Background" />
        </div>
        
        <div className="max-w-md w-full morphic-card p-12 md:p-16 text-center shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-antiqueGold/20">
          <div className="mb-12">
            <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold mb-6 font-bold">Heritage Vault</h3>
            <span className="font-serif text-4xl text-ivory block mb-2">Private Access</span>
            <div className="w-12 h-px bg-antiqueGold/30 mx-auto mt-4" />
          </div>

          <form onSubmit={handleLogin} className="space-y-6 text-left">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-ivory/40 font-bold ml-1">Archive Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-charcoal/50 border border-ivory/10 px-6 py-4 rounded-sm text-ivory text-sm focus:outline-none focus:border-antiqueGold transition-all"
                placeholder="client@heritage.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-ivory/40 font-bold ml-1">Archive Signature (PIN)</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-charcoal/50 border border-ivory/10 px-6 py-4 rounded-sm text-ivory text-sm focus:outline-none focus:border-antiqueGold transition-all tracking-[0.3em]"
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-red-400 text-[10px] uppercase tracking-wider text-center py-2">{error}</p>}

            <button 
              type="submit"
              className="w-full bg-antiqueGold text-royalGreen py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-ivory transition-all duration-700 mt-4"
            >
              Unlock Archive
            </button>
          </form>

          <p className="mt-12 text-[8px] uppercase tracking-[0.5em] text-ivory/10 font-bold leading-relaxed">
            Encrypted with 256-bit AES <br /> Dipak Studios Heritage Division
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-charcoal min-h-screen py-32 text-ivory animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-ivory/5 pb-10 gap-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Welcome Home, <br/><span className="italic font-light text-antiqueGold">Aditi & Sahil</span></h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-ivory/30 text-[9px] uppercase tracking-[0.4em] font-bold">Archive Ref: #DS-2023-DEL-1120</span>
              <span className="px-3 py-1 bg-antiqueGold/10 border border-antiqueGold/30 text-antiqueGold text-[8px] uppercase tracking-widest rounded-full">Lifetime Heritage Tier</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="text-[9px] uppercase tracking-[0.4em] text-ivory/40 hover:text-antiqueGold transition-colors font-bold px-6 py-3 border border-ivory/10 rounded-sm">Account Settings</button>
            <button 
              onClick={() => setIsLoggedIn(false)} 
              className="text-[9px] uppercase tracking-[0.5em] text-antiqueGold border border-antiqueGold/20 px-8 py-3 rounded-sm hover:bg-antiqueGold hover:text-royalGreen transition-all font-bold"
            >
              Secure Logout
            </button>
          </div>
        </div>

        {/* Lifetime Vault Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="morphic-card p-8 border border-antiqueGold/10 rounded-sm">
             <span className="block text-[9px] uppercase tracking-widest text-antiqueGold/60 font-bold mb-4">Storage Status</span>
             <p className="font-serif text-3xl mb-1">6.5 GB <span className="text-sm font-sans text-ivory/40">/ Unlimited</span></p>
             <p className="text-[10px] text-ivory/30 uppercase tracking-widest">High-Speed Global CDN Active</p>
          </div>
          <div className="morphic-card p-8 border border-antiqueGold/10 rounded-sm">
             <span className="block text-[9px] uppercase tracking-widest text-antiqueGold/60 font-bold mb-4">Archive Date</span>
             <p className="font-serif text-3xl mb-1">Nov 24, 2023</p>
             <p className="text-[10px] text-ivory/30 uppercase tracking-widest">1,245 Days Since Premiere</p>
          </div>
          <div className="morphic-card p-8 border border-antiqueGold/10 rounded-sm">
             <span className="block text-[9px] uppercase tracking-widest text-antiqueGold/60 font-bold mb-4">Heirloom Status</span>
             <p className="font-serif text-3xl mb-1 text-antiqueGold">Shipped</p>
             <p className="text-[10px] text-ivory/30 uppercase tracking-widest italic">Delivered to South Delhi HQ</p>
          </div>
        </div>

        {/* Assets Grid */}
        <h2 className="font-serif text-3xl mb-10">Your <span className="italic font-light">Heritage Collection</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {assets.map(asset => (
            <div key={asset.id} className="group relative overflow-hidden rounded-sm border border-ivory/5 glass-dark flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                <img src={asset.img} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" alt={asset.label} />
              </div>
              <div className="p-10 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] uppercase tracking-[0.3em] px-2 py-1 bg-antiqueGold/20 text-antiqueGold font-bold">{asset.type}</span>
                    <span className="text-[9px] text-ivory/20 font-bold">{asset.size}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-ivory group-hover:text-antiqueGold transition-colors">{asset.label}</h3>
                </div>
                <div className="flex space-x-4 mt-6">
                  <button className="flex-1 bg-antiqueGold/10 border border-antiqueGold/30 text-antiqueGold py-3 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all">
                    Stream 4K
                  </button>
                  <button className="flex-1 bg-ivory text-royalGreen py-3 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-antiqueGold transition-all">
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Family Sharing UI */}
        <div className="mt-32 p-16 border border-antiqueGold/10 rounded-sm bg-royalGreen/20 backdrop-blur-md">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-serif text-3xl mb-4 text-antiqueGold">Family Heritage Access</h3>
              <p className="text-sm text-ivory/50 mb-10 max-w-lg leading-loose font-light">
                Extend your legacy. Grant restricted access to parents or siblings so they can enjoy the cinematic journey from their own devices.
              </p>
              <div className="flex space-x-4">
                <input type="email" placeholder="family@email.com" className="bg-charcoal/50 border border-ivory/10 px-6 py-4 rounded-sm text-ivory text-sm focus:outline-none focus:border-antiqueGold flex-1" />
                <button className="bg-antiqueGold text-royalGreen px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-ivory transition-all">
                  Grant Access
                </button>
              </div>
            </div>
            <div className="space-y-4">
               {[
                 { name: 'Karan Bakshi (Dad)', type: 'Full View' },
                 { name: 'Priya Malhotra (Sister)', type: 'Photos Only' }
               ].map(member => (
                 <div key={member.name} className="flex justify-between items-center p-6 bg-charcoal/40 border border-ivory/5">
                   <div>
                     <p className="font-serif text-lg">{member.name}</p>
                     <p className="text-[9px] text-ivory/30 uppercase tracking-widest">{member.type}</p>
                   </div>
                   <button className="text-[9px] uppercase text-red-400/60 hover:text-red-400 font-bold tracking-widest transition-colors">Revoke</button>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
