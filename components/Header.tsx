
import React from 'react';
import { Shield, Menu } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-cyan-600 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            PUSH LOCK<span className="text-cyan-500">.</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {['Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-semibold uppercase tracking-wider hover:text-cyan-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-100'}`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-cyan-500/30"
          >
            FREE QUOTE
          </a>
        </nav>

        <button className="md:hidden text-white">
          <Menu className={`w-8 h-8 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
        </button>
      </div>
    </header>
  );
};

export default Header;
