
import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-cyan-600 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                PUSH LOCK<span className="text-cyan-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Serving our community since 2019. Providing elite protection for homes, schools, and healthcare facilities through innovation and integrity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 hover:bg-cyan-600 hover:text-white rounded-lg transition-all"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-cyan-600 hover:text-white rounded-lg transition-all"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-cyan-600 hover:text-white rounded-lg transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-cyan-600 hover:text-white rounded-lg transition-all"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-cyan-500 transition-colors">Residential Security</a></li>
              <li><a href="#services" className="hover:text-cyan-500 transition-colors">Campus Safety</a></li>
              <li><a href="#services" className="hover:text-cyan-500 transition-colors">Hospital Guarding</a></li>
              <li><a href="#services" className="hover:text-cyan-500 transition-colors">Event Security</a></li>
              <li><a href="#about" className="hover:text-cyan-500 transition-colors">About Our Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Careers at Push Lock</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Partner Program</a></li>
              <li><a href="#contact" className="hover:text-cyan-500 transition-colors">Get Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-cyan-500 shrink-0" />
                <span>123 Security Blvd, Suite 150,<br />Guardia City, GC 45678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-cyan-500 shrink-0" />
                <span>+1 (800) PUSH-LOCK</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-cyan-500 shrink-0" />
                <span>info@pushlocksecurity.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs font-bold tracking-widest text-slate-600 uppercase">
          <p>© {currentYear} PUSH LOCK SECURITY AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>License #778902-B</span>
            <span>Insured & Bonded</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
