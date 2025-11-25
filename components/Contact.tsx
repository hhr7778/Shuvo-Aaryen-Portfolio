import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        alert("Thanks for your message! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      {/* Footer-like decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn direction="right">
                <div>
                    <h2 className="text-4xl font-display font-bold text-white mb-6">Let's Work Together</h2>
                    <p className="text-slate-400 mb-12 text-lg">
                        Have a project in mind? I'm currently available for freelance projects. Let's create something impactful together.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-primary transition-colors">
                                <Mail className="text-white group-hover:text-primary transition-colors" size={20} />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">Email Me</p>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-medium hover:text-primary transition-colors">
                                    {CONTACT_INFO.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                             <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-primary transition-colors">
                                <MapPin className="text-white group-hover:text-primary transition-colors" size={20} />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">Location</p>
                                <p className="text-white font-medium">
                                    {CONTACT_INFO.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            <FadeIn direction="left">
                <form onSubmit={handleSubmit} className="bg-slate-900/80 p-8 rounded-3xl border border-white/5 shadow-xl backdrop-blur-sm">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-dark border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-red-500 transition-colors flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </div>
                </form>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
