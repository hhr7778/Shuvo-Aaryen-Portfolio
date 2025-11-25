import React from 'react';
import { Instagram, Twitter, Dribbble, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Shuvo<span className="text-primary">.</span>
          </h2>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shuvo Aaryen. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Dribbble size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={18} />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
