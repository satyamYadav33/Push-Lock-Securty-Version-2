
import React from 'react';
import { Home, School, Hospital, Building2 } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="bg-cyan-50 text-cyan-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">
      {description}
    </p>
    <button className="text-cyan-600 font-bold text-sm flex items-center hover:underline">
      LEARN MORE
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
    </button>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-3">What We Secure</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tailored Protection for Every Environment</h3>
        <p className="text-lg text-slate-600">
          Our specialized divisions understand the unique security requirements of different sectors, ensuring you get exactly the protection you need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard 
          icon={<Home className="w-8 h-8" />}
          title="Residential"
          description="Smart alarm systems, armed response, and gated community security to keep your family safe 24/7."
        />
        <ServiceCard 
          icon={<School className="w-8 h-8" />}
          title="Educational"
          description="Access control, campus patrolling, and visitor management systems designed specifically for safe learning."
        />
        <ServiceCard 
          icon={<Hospital className="w-8 h-8" />}
          title="Healthcare"
          description="Sensitive facility protection, crowd management, and emergency ward security around the clock."
        />
        <ServiceCard 
          icon={<Building2 className="w-8 h-8" />}
          title="Commercial"
          description="Retail protection, corporate surveillance, and specialized loss prevention strategies for businesses."
        />
      </div>
    </div>
  );
};

export default Services;
