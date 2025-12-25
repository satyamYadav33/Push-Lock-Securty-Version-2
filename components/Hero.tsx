
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2000" 
          alt="Security Guard" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">5 Years of Excellence</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Trusted Security for Your <span className="text-cyan-500 italic">Peace of Mind.</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Protecting homes, schools, and hospitals with a team of 150+ professionals. Modern technology meets reliable protection at costs that make sense.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a 
              href="#contact" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-xl shadow-cyan-900/40 group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all"
            >
              Explore Services
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
              <span className="text-sm font-medium">150+ Vetted Professionals</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
              <span className="text-sm font-medium">Affordable Flat Rates</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
              <span className="text-sm font-medium">24/7 Active Monitoring</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-cyan-500" />
              <span className="text-sm font-medium">Fast Emergency Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
