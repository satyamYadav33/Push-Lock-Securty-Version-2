
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-50 p-10 rounded-3xl text-center flex flex-col items-center justify-center min-h-[500px]">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
        <p className="text-slate-600 text-lg">One of our security consultants will call you within 15 minutes.</p>
        <button onClick={() => setStatus('idle')} className="mt-8 text-cyan-600 font-bold hover:underline">Send another request</button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full px-5 py-4 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
            <input 
              required
              type="tel" 
              className="w-full px-5 py-4 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all"
              placeholder="(555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
          <input 
            required
            type="email" 
            className="w-full px-5 py-4 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
          <select className="w-full px-5 py-4 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all bg-white">
            <option>Home Security</option>
            <option>School/Educational Security</option>
            <option>Hospital/Medical Security</option>
            <option>Commercial/Business Security</option>
            <option>Special Event Security</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Additional Notes (Optional)</label>
          <textarea 
            rows={4}
            className="w-full px-5 py-4 rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all resize-none"
            placeholder="Tell us about your specific security concerns..."
          ></textarea>
        </div>

        <button 
          disabled={status === 'sending'}
          type="submit" 
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 rounded-xl transition-all shadow-lg text-lg flex items-center justify-center space-x-2"
        >
          {status === 'sending' ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              <span>GET FREE QUOTE NOW</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </>
          )}
        </button>
        <p className="text-center text-sm text-slate-500 font-medium">No obligation. Completely free consultation.</p>
      </form>
    </div>
  );
};

export default ContactForm;
