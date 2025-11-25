import React from 'react';
import { Instagram, Twitter, Dribbble, Facebook, Linkedin, Youtube, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20 border-b border-slate-900 pb-16">
            
            {/* Column 1: Brand & Socials (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
                <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-4">
                        Shuvo<span className="text-primary">.</span>
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Graphic Designer & Visual Problem Solver. Creating impactful designs for brands worldwide with a focus on clarity and aesthetics.
                    </p>
                </div>
                <div>
                    <p className="text-white font-bold mb-4">Follow Me</p>
                    <div className="flex gap-3 flex-wrap">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" aria-label="Facebook">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" aria-label="Instagram">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" aria-label="Dribbble">
                            <Dribbble size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                         <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" aria-label="YouTube">
                            <Youtube size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Column 2: Quick Summary (5 cols) */}
            <div className="lg:col-span-5">
                <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/5 h-full">
                    <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span> Quick Summary
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                        <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Name</p>
                            <p className="text-white font-medium">Shuvo Aaryen</p>
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Role</p>
                            <p className="text-white font-medium">Graphic Designer</p>
                        </div>
                        <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Experience</p>
                            <p className="text-white font-medium">4 Years</p>
                        </div>
                         <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Email</p>
                            <p className="text-white font-medium break-all">arave9151@gmail.com</p>
                        </div>
                        <div className="sm:col-span-2 pt-2 border-t border-white/5">
                            <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-2">Key Skills</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Logo Design</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Branding</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">UI/UX</span>
                                <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Packaging</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Column 3: Services List (3 cols) */}
             <div className="lg:col-span-3">
                <h3 className="text-white font-bold text-lg mb-6">Services</h3>
                <ul className="space-y-4">
                    {['Logo Creation', 'Brand Identity Packages', 'Poster Design', 'UI/UX Design', 'Packaging Design'].map((item) => (
                        <li key={item} className="flex items-start gap-3 group cursor-pointer">
                            <CheckCircle2 size={16} className="text-primary mt-1 group-hover:scale-110 transition-transform" />
                            <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
             </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Shuvo Aaryen — All Rights Reserved
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                 <p className="text-slate-500 text-sm">
                    Designed by <span className="text-white font-bold">Shuvo Aaryen</span>
                 </p>
                 <div className="hidden md:block w-px h-4 bg-slate-800"></div>
                 <a href="mailto:arave9151@gmail.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors">
                    Contact: <span className="text-white font-medium">arave9151@gmail.com</span>
                 </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;