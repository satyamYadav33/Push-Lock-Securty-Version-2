
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import ValueProp from './components/ValueProp';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SecurityAdvisor from './components/SecurityAdvisor';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <Stats />
        
        <section id="services" className="py-24 bg-slate-50">
          <Services />
        </section>

        <section id="about" className="py-24 bg-white">
          <ValueProp />
        </section>

        <section id="testimonials" className="py-24 bg-slate-900 text-white">
          <Testimonials />
        </section>

        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Lock Down Your Security?</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our team of 150+ professionals is standing by to provide you with a tailored security solution that fits your budget.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Direct Hotline</p>
                    <p className="text-xl font-bold text-slate-900">+1 (800) PUSH-LOCK</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Monitoring Station</p>
                    <p className="text-xl font-bold text-slate-900">Active 24/7/365</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                 <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800" alt="Control Center" className="w-full h-64 object-cover" />
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Interactive AI Security Advisor Component */}
      <SecurityAdvisor />
    </div>
  );
};

export default App;
