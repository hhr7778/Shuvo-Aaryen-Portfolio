import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import FadeIn from './FadeIn';
import { Project } from '../types';
import { X, Download, Maximize2 } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const downloadWithWatermark = async (project: Project) => {
    setIsDownloading(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      // Enable CORS to allow canvas export of external images
      img.crossOrigin = "anonymous"; 
      img.src = project.imageUrl;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      canvas.width = img.width;
      canvas.height = img.height;

      if (ctx) {
        // Draw the original image
        ctx.drawImage(img, 0, 0);

        // Configure Watermark Text
        const fontSize = Math.max(24, img.width * 0.04);
        ctx.font = `bold ${fontSize}px Montserrat, sans-serif`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Semi-transparent white
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        
        // Add shadow/outline to text for readability on any background
        ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        // Draw text
        const text = "Designed by Shuvo Aaryen";
        const padding = Math.max(20, img.width * 0.03);
        ctx.fillText(text, canvas.width - padding, canvas.height - padding);

        // Trigger Download
        const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
        const link = document.createElement('a');
        link.download = `${project.title.replace(/\s+/g, '_')}_Watermarked.jpg`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Failed to download image:", error);
      alert("Could not generate watermark due to browser security restrictions on this image.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <FadeIn>
                <h2 className="text-4xl font-display font-bold text-white mb-6">Featured Projects</h2>
                <div className="p-6 bg-slate-900 border-l-4 border-primary rounded-r-xl max-w-3xl">
                    <p className="text-slate-300 italic">
                    "A collection of professional logo and poster designs created for various clients and creative projects, showcasing modern, minimalist, and brand‑focused visuals."
                    </p>
                </div>
            </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, visibleProjects).map((project, index) => (
                <FadeIn key={project.id} delay={index * 0.1}>
                    <div 
                        onClick={() => setSelectedProject(project)}
                        className="group relative overflow-hidden rounded-xl cursor-pointer h-full border border-white/5 hover:border-primary/50 transition-all"
                    >
                        {/* Image Container */}
                        <div className="aspect-[4/3] overflow-hidden bg-slate-800 relative">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                            />
                            {/* Zoom Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                                <div className="bg-primary/90 text-white p-3 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                    <Maximize2 size={24} />
                                </div>
                            </div>
                        </div>
                        
                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                {project.category}
                            </span>
                            <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>

        {visibleProjects < PROJECTS.length && (
            <FadeIn delay={0.4} className="mt-16 text-center">
                <button 
                    onClick={loadMore}
                    className="px-8 py-3 border border-slate-700 text-white rounded-full hover:bg-white hover:text-black transition-all font-medium"
                >
                    Load More Projects
                </button>
            </FadeIn>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
            {/* Close button */}
            <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all z-[110]"
            >
                <X size={32} />
            </button>

            <div className="max-w-6xl w-full max-h-[90vh] flex flex-col bg-dark/50 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Image Area */}
                <div className="flex-grow relative flex items-center justify-center bg-black/40 overflow-hidden group p-2">
                     <img 
                        src={selectedProject.imageUrl} 
                        alt={selectedProject.title}
                        className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
                     />
                     
                     {/* Visual Watermark (Display Only) */}
                     <div className="absolute bottom-6 right-6 text-white/20 font-display font-black text-2xl md:text-4xl uppercase pointer-events-none select-none tracking-widest">
                        Shuvo Aaryen
                     </div>
                </div>

                {/* Footer / Controls */}
                <div className="p-6 bg-surface/90 backdrop-blur-sm border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-center sm:text-left">
                        <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                        <p className="text-primary font-bold text-sm uppercase tracking-wider mt-1">{selectedProject.category}</p>
                    </div>
                    
                    <button 
                        onClick={() => downloadWithWatermark(selectedProject)}
                        disabled={isDownloading}
                        className="flex items-center gap-3 bg-primary hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 active:scale-95"
                    >
                        {isDownloading ? (
                            <span className="animate-pulse">Adding Watermark...</span>
                        ) : (
                            <>
                                <Download size={20} />
                                Download Image
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;