import React from 'react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
            <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">About Me</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">The Creative Designer</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Hi, I'm <span className="text-white font-medium">Shuvo Aaryen</span>, a passionate graphic designer with 4 years of professional experience. 
                        I believe design blends creativity with problem‑solving, helping brands communicate with clarity and impact.
                    </p>
                    <div className="p-6 bg-slate-900/50 rounded-2xl border border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12 blur-xl"></div>
                        <h4 className="flex items-center gap-2 text-primary font-bold mb-3">
                            <Heart size={20} className="fill-primary" /> 
                            A Creative Perspective
                        </h4>
                        <p className="text-slate-300 text-sm italic">
                            "Alongside my creative journey, I am enhancing my skills at a private designer college, graduating in 2027. This gives me a unique blend of discipline, creativity, and insight that translates into user-centric designs."
                        </p>
                    </div>
                </div>
            </FadeIn>

            <FadeIn direction="left">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <Briefcase className="text-primary" /> Experience
                        </h3>
                        <div className="border-l-2 border-slate-800 pl-8 space-y-8">
                            <div className="relative">
                                <span className="absolute -left-[41px] w-5 h-5 rounded-full bg-slate-800 border-4 border-dark"></span>
                                <h4 className="text-white font-bold">Graphic Designer</h4>
                                <p className="text-primary text-sm mb-2">2020 - Present</p>
                                <p className="text-slate-400 text-sm">Working with diverse clients in fashion, food, and tech industries to build strong visual identities.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <GraduationCap className="text-secondary" /> Education
                        </h3>
                        <div className="border-l-2 border-slate-800 pl-8 space-y-8">
                            <div className="relative">
                                <span className="absolute -left-[41px] w-5 h-5 rounded-full bg-slate-800 border-4 border-dark"></span>
                                <h4 className="text-white font-bold">Graphic Designer</h4>
                                <p className="text-secondary text-sm mb-2">Expected Graduation: 2027</p>
                                <p className="text-slate-400 text-sm">Private Designer College</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;