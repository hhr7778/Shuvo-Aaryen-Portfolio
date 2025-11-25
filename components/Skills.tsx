import React from 'react';
import { SKILLS } from '../constants';
import FadeIn from './FadeIn';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <FadeIn>
                <h2 className="text-4xl font-display font-bold text-white mb-4">Professional Skills</h2>
                <p className="text-slate-400 max-w-xl mx-auto">My technical toolkit and creative capabilities refined over 4 years of practice.</p>
            </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {SKILLS.map((skill, index) => (
                <FadeIn key={skill.name} delay={index * 0.1} className="group">
                    <div className="mb-2 flex justify-between items-end">
                        <div className="flex items-center gap-3">
                            {skill.icon && <skill.icon size={20} className="text-primary group-hover:scale-110 transition-transform" />}
                            <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-slate-500 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                        ></div>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
