
import React from 'react';
import { DollarSign, Users, Cpu, ShieldCheck } from 'lucide-react';

const BenefitItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-slate-900 text-white p-3 rounded-xl shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600">{desc}</p>
    </div>
  </div>
);

const ValueProp: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1541888941295-1bc3919e1b5c?auto=format&fit=crop&q=80&w=1000" 
            alt="Security Control" 
            className="rounded-3xl shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-10 -right-10 bg-cyan-600 p-8 rounded-3xl text-white shadow-xl z-20 hidden md:block max-w-xs">
            <div className="text-4xl font-black mb-2">100%</div>
            <p className="font-bold opacity-90">Customer satisfaction rate across 1000+ properties last year.</p>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-3">Why Choose Us?</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">High-Quality Security Doesn't Have to Break the Bank.</h3>
          <p className="text-lg text-slate-600 mb-10">
            Push Lock Security was founded on the principle that safety is a right, not a luxury. We've optimized our operations over 5 years to deliver elite protection at reasonable costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitItem 
              icon={<DollarSign className="w-6 h-6" />}
              title="Reasonable Cost"
              desc="No hidden fees. Just clear, affordable protection plans for every budget."
            />
            <BenefitItem 
              icon={<Users className="w-6 h-6" />}
              title="Expert Team"
              desc="150+ background-checked, highly trained professionals at your service."
            />
            <BenefitItem 
              icon={<Cpu className="w-6 h-6" />}
              title="Modern Tech"
              desc="Integrating AI and thermal monitoring for superior detection and response."
            />
            <BenefitItem 
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Custom Plans"
              desc="We don't believe in one-size-fits-all. Every solution is tailored."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProp;
