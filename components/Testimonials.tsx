
import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "School Administrator",
    content: "Push Lock Security transformed our campus safety protocols. Their staff is professional, courteous, and incredibly reliable. We've seen a massive improvement in visitor management.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Miller",
    role: "Hospital Operations",
    content: "The level of expertise Push Lock brings to medical facility security is unmatched. They handle sensitive situations with grace and provide our staff with immense peace of mind.",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Elena Rodriguez",
    role: "Homeowner",
    content: "I finally feel safe in my own home. Their response time to an accidental alarm trip was less than 3 minutes. Truly professional service at a price I can actually afford.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div>
          <h2 className="text-cyan-500 font-bold uppercase tracking-widest mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Trusted by the Community</h3>
        </div>
        <div className="flex space-x-4 mt-8 md:mt-0">
          <button onClick={prev} className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={next} className="p-4 rounded-full bg-cyan-600 hover:bg-cyan-500 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden h-[400px]">
        {testimonials.map((t, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-all duration-700 flex flex-col justify-center ${idx === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Quote className="w-16 h-16 text-cyan-500/20 mb-6" />
              <div className="flex space-x-1 mb-6 text-cyan-500">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 max-w-4xl italic">
                "{t.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-cyan-500" />
                <div>
                  <h4 className="text-xl font-bold">{t.name}</h4>
                  <p className="text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
