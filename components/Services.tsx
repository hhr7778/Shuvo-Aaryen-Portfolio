import React from 'react';
import { SERVICES } from '../constants';
import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
            <h2 className="text-4xl font-display font-bold text-white mb-4">My Services</h2>
            <p className="text-slate-400 max-w-xl mb-16">High-quality design solutions tailored to your specific needs.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
                <FadeIn key={service.title} delay={index * 0.1}>
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-slate-900 transition-all duration-300 group h-full flex flex-col">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                            <service.icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                            {service.description}
                        </p>
                        <a href="#contact" className="inline-flex items-center text-sm font-bold text-white/50 group-hover:text-primary transition-colors">
                            GET QUOTE <ArrowUpRight size={16} className="ml-1" />
                        </a>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
