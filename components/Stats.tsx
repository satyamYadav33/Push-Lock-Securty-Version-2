
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Years of Trust' },
    { value: '150+', label: 'Trained Staff' },
    { value: '1,200+', label: 'Locations Secured' },
    { value: '99.9%', label: 'Uptime Reliability' },
  ];

  return (
    <div className="bg-slate-900 py-12 relative -mt-10 z-20 container mx-auto rounded-3xl shadow-2xl px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center px-4">
            <div className="text-3xl md:text-4xl font-black text-cyan-500 mb-1">{stat.value}</div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
