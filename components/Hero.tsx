import React from 'react';
import { ArrowRight, Download, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-dark">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content: Text */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <FadeIn delay={0.1}>
               <div className="flex items-center gap-3 mb-6">
                  <span className="h-[2px] w-12 bg-primary"></span>
                  <span className="text-primary font-bold tracking-widest text-sm uppercase">
                    Graphic Designer
                  </span>
               </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Hi! I'm <br />
                <span className="">Shuvo</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md font-medium">
                Designing user-friendly interfaces and seamless visual experiences. I blend creativity with a problem-solving mindset.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-white font-bold rounded-full hover:bg-white hover:text-dark hover:border-white transition-all duration-300"
              >
                Download CV <Download className="ml-2 w-5 h-5" />
              </a>
            </FadeIn>

            <FadeIn delay={0.5}>
                <div className="flex items-center gap-6">
                    <div className="flex gap-5">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><Facebook size={22} /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><Twitter size={22} /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><Instagram size={22} /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><Linkedin size={22} /></a>
                    </div>
                </div>
            </FadeIn>
          </div>

          {/* Center Content: Image */}
          <div className="lg:col-span-4 order-1 lg:order-2 relative flex justify-center lg:justify-center items-center h-full">
             <FadeIn delay={0.3} direction="up" className="w-full flex justify-center">
                <div className="relative z-10 group">
                    {/* Glow behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl transform rotate-6 scale-95 group-hover:rotate-12 transition-transform duration-700"></div>
                    
                    {/* Image Frame */}
                    <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-card">
                        <img 
                            src="https://i.postimg.cc/JhNh6ZNX/1736234956029.jpg" 
                            alt="Shuvo Aaryen" 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 animate-bounce duration-[4000ms] z-20">
                        <div className="bg-green-500/20 p-2 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</p>
                            <p className="text-sm font-bold text-white">Available</p>
                        </div>
                    </div>
                </div>
             </FadeIn>
          </div>

          {/* Right Content: Stats */}
          <div className="lg:col-span-3 order-3 flex flex-col gap-10 justify-center lg:items-end lg:text-right">
            <FadeIn delay={0.4} direction="left">
                <div>
                    <h3 className="text-5xl font-extrabold text-white mb-2">04<span className="text-primary">+</span></h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Years of <br/>Experience</p>
                </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="left">
                 <div>
                    <h3 className="text-5xl font-extrabold text-white mb-2">150<span className="text-secondary">+</span></h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Projects <br/>Delivered</p>
                </div>
            </FadeIn>

            <FadeIn delay={0.6} direction="left">
                 <div>
                    <h3 className="text-5xl font-extrabold text-white mb-2">07<span className="text-primary">+</span></h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Countries <br/>Served</p>
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;