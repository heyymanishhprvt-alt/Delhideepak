
import React, { useState } from 'react';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  commissionType: string;
  venue: string;
  weddingDate: string;
  guestCount: string;
  vision: string;
}

export const Booking: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    commissionType: '',
    venue: '',
    weddingDate: '',
    guestCount: '',
    vision: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to CRM/Email Service
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const generateEmailBody = () => {
    const tableHeader = "DIPAK STUDIOS - NEW COMMISSION REQUEST\n" + "=".repeat(40) + "\n\n";
    const tableContent = [
      ["Client Name", formData.fullName],
      ["Email Address", formData.email],
      ["Contact Number", formData.phone],
      ["Commission Type", formData.commissionType],
      ["Primary Venue", formData.venue || "TBD"],
      ["Wedding Date", formData.weddingDate],
      ["Guest Count", formData.guestCount || "N/A"],
      ["Specific Vision", formData.vision || "None provided"]
    ].map(([label, value]) => `${label.padEnd(20)}: ${value}`).join("\n");
    
    return encodeURIComponent(tableHeader + tableContent + "\n\n" + "=".repeat(40) + "\nSent via DipakStudios.com");
  };

  if (isSuccess) {
    return (
      <div className="bg-ivory min-h-screen py-32 flex items-center justify-center animate-fadeIn">
        <div className="max-w-3xl w-full px-6 text-center space-y-12">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-royalGreen rounded-full flex items-center justify-center mx-auto text-antiqueGold shadow-xl">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-5xl text-charcoal leading-tight">Commission <br/><span className="italic font-light">Received.</span></h1>
          </div>

          <div className="bg-white border border-antiqueGold/20 shadow-2xl p-8 md:p-12 text-left">
            <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-antiqueGold font-bold mb-8 border-b border-royalGreen/5 pb-4 text-center">Commission Summary Table</h3>
            
            <table className="w-full border-collapse font-sans text-xs">
              <tbody>
                {[
                  { label: "Full Name", value: formData.fullName },
                  { label: "Email Address", value: formData.email },
                  { label: "Contact No", value: formData.phone },
                  { label: "Commission Type", value: formData.commissionType },
                  { label: "Primary Venue", value: formData.venue || "TBD" },
                  { label: "Wedding Date", value: formData.weddingDate },
                  { label: "Guest Count", value: formData.guestCount || "N/A" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-royalGreen/5">
                    <td className="py-4 font-bold uppercase tracking-widest text-royalGreen/40 w-1/3">{row.label}</td>
                    <td className="py-4 text-charcoal">{row.value}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 font-bold uppercase tracking-widest text-royalGreen/40 align-top pt-6">Vision</td>
                  <td className="py-4 text-charcoal leading-relaxed pt-6 italic">"{formData.vision || 'No specific vision provided.'}"</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-12 flex flex-col md:flex-row gap-4">
              <a 
                href={`mailto:wedding.dipak@gmail.com?subject=Commission Request: ${formData.fullName}&body=${generateEmailBody()}`}
                className="flex-1 bg-royalGreen text-antiqueGold text-center py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all duration-500 shadow-lg"
              >
                Dispatch to Concierge
              </a>
              <button 
                onClick={() => setIsSuccess(false)}
                className="flex-1 border border-royalGreen/10 text-royalGreen/40 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:text-royalGreen hover:border-royalGreen transition-all"
              >
                Modify Request
              </button>
            </div>
          </div>

          <p className="text-charcoal/40 font-sans text-[10px] tracking-widest uppercase leading-loose">
            A confirmation has been logged. Our Senior Creative Director will review the architectural details of your vision within 4 business hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen py-32 text-royalGreen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
          <div className="lg:sticky lg:top-32 space-y-12">
            <div>
              <h3 className="font-sans text-[10px] tracking-[0.6em] uppercase text-antiqueGold mb-6 font-bold">Commission</h3>
              <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight text-charcoal text-balance">Reserve the <br/><span className="italic font-light">Narrative</span></h1>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-md font-light">
                Secure your date for a cinematic legacy. Each commission is handled personally by our creative directors to ensure the Dipak standard.
              </p>
            </div>
            
            <div className="space-y-6">
               <div className="p-8 glass-dark bg-royalGreen/5 rounded-sm border border-antiqueGold/20">
                  <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-antiqueGold font-bold mb-4">Availability Notice</p>
                  <p className="text-charcoal/70 text-sm leading-relaxed">Currently accepting high-profile commissions for the 2024-25 season. Destination weddings require minimum 6 months lead time.</p>
               </div>
               
               <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full bg-royalGreen flex items-center justify-center text-antiqueGold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  </div>
                  <div>
                    <p className="font-serif text-xl text-charcoal">Global Concierge</p>
                    <p className="text-[10px] uppercase tracking-widest text-antiqueGold font-bold">+91 85272 74260</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 shadow-2xl rounded-sm border border-royalGreen/5 relative overflow-hidden">
            {isSubmitting && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 border-4 border-antiqueGold border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-antiqueGold font-bold">Encrypting Request...</p>
                </div>
              </div>
            )}
            
            <h4 className="font-serif text-3xl mb-10 text-charcoal">Event Intelligence</h4>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-royalGreen/40 font-bold">Full Name</label>
                  <input 
                    name="fullName"
                    type="text" 
                    required 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-royalGreen/10 py-3 focus:outline-none focus:border-antiqueGold text-sm transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-royalGreen/40 font-bold">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-royalGreen/10 py-3 focus:outline-none focus:border-antiqueGold text-sm transition-colors" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-royalGreen/40 font-bold">Contact Number</label>
                  <input 
                    name="phone"
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXX-XXX-XXX"
                    className="w-full bg-transparent border-b border-royalGreen/10 py-3 focus:outline-none focus:border-antiqueGold text-sm transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-royalGreen/40 font-bold">Commission Type</label>
                  <select 
                    name="commissionType"
                    required 
                    value={formData.commissionType}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-royalGreen/10 py-3 focus:outline-none focus:border-antiqueGold text-sm transition-colors cursor-pointer"
                  >
                    <option value="">Select Experience</option>
                    <option>Heritage Wedding (Single Venue)</option>
                    <option>Grand Destination Union</option>
                    <option>Cinematic Pre-Wedding Film</option>
                    <option>Portrait Masterclass Session</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-royalGreen/40 font-bold">Primary Venue</label>
                  <input 
                    name="venue"
                    type="text" 
                    placeholder="e.g. Taj Mansingh, Delhi" 
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-royalGreen/10 py-3 focus:outline-none focus:border-antiqueGold text-sm transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-royalGreen/40 font-bold">Wedding Date</label>
                  <input 
                    name="weddingDate"
                    type="date" 
                    required 
                    value={formData.weddingDate}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-royalGreen/10 py-3 focus:outline-none focus:border-antiqueGold text-sm transition-colors" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-royalGreen/40 font-bold">Estimated Guest Count</label>
                  <input 
                    name="guestCount"
                    type="number" 
                    placeholder="200 - 2000+" 
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-royalGreen/10 py-3 focus:outline-none focus:border-antiqueGold text-sm transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-royalGreen/40 font-bold">Specific Vision or Requirements</label>
                <textarea 
                  name="vision"
                  rows={4} 
                  value={formData.vision}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-royalGreen/10 p-4 focus:outline-none focus:border-antiqueGold text-sm transition-colors resize-none" 
                  placeholder="Tell us about the mood, the heritage, or any specific cultural nuances you wish to highlight..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-royalGreen text-antiqueGold py-6 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-antiqueGold hover:text-royalGreen transition-all duration-700 shadow-xl disabled:opacity-50"
              >
                Send Commission Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
