'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import ProjectCard from '@/src/components/ProjectCard';
import MethodologyColumn from '@/src/components/MethodologyColumn';
import Typewriter from '@/src/components/Typewriter';
import CustomCursor from '@/src/components/CustomCursor';
import { PROJECTS, METHODOLOGY } from '@/src/constants';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col relative z-10 font-sans selection:bg-accent selection:text-white ${isTouchDevice ? '' : 'cursor-none md:cursor-none'}`}>
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full border-b border-charcoal bg-cream/90 backdrop-blur-sm z-40 flex justify-between items-center px-6 py-4 md:px-12">
        <div className="text-xl font-bold tracking-tighter hover:text-accent transition-colors cursor-pointer">
          ALEX.DEV
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-mono text-sm">
          <a href="#work" className="hover:text-accent hover:underline decoration-2 underline-offset-4 transition-all cursor-pointer">WORK</a>
          <a href="#methodology" className="hover:text-accent hover:underline decoration-2 underline-offset-4 transition-all cursor-pointer">METHODOLOGY</a>
          <a href="#about" className="hover:text-accent hover:underline decoration-2 underline-offset-4 transition-all cursor-pointer">ABOUT</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 border border-charcoal active:bg-accent active:text-white transition-colors cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[73px] bg-cream z-30 p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-accent cursor-pointer">WORK</a>
            <a href="#methodology" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-accent cursor-pointer">METHODOLOGY</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:text-accent cursor-pointer">ABOUT</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24 px-4 md:px-12 pb-24 max-w-[1600px] mx-auto w-full">
        
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center border-b border-charcoal pb-12 mb-12 relative">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="font-mono text-accent mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              AVAILABLE FOR HIRE
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
              PRODUCT <br />
              <motion.span 
                className="text-outline-charcoal cursor-pointer inline-block hover:text-accent"
                whileHover={{ 
                  scale: 1.02
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                MAKER
              </motion.span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
              <p className="text-lg md:text-xl max-w-lg font-mono leading-relaxed text-charcoal/90">
                Bridging the gap between technical engineering, product strategy, and design sensitivity.
              </p>

              {/* Typewriter Component */}
              <div className="flex items-center">
                <Typewriter words={["Developer", "Product Manager", "Discovery"]} />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-12 right-0 hidden md:flex items-center gap-2 font-mono text-xs text-charcoal/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            SCROLL <ArrowDown size={14} />
          </motion.div>
        </section>

        {/* WORK SECTION (BENTO GRID) */}
        <section id="work" className="mb-32 scroll-mt-32">
          <div className="flex items-end justify-between mb-8 border-b border-charcoal pb-4">
            <h2 className="text-4xl md:text-6xl font-bold">SELECTED WORK</h2>
            <span className="font-mono text-sm hidden md:block">[ 2023 - 2025 ]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
             <ProjectCard project={PROJECTS[0]} />
             
             <div className="contents md:flex flex-col gap-6 md:col-span-1 md:row-span-2">
                <ProjectCard project={PROJECTS[2]} className="h-full" />
             </div>
             
             {PROJECTS.slice(1).map(p => (
               <ProjectCard key={p.id} project={p} />
             ))}
          </div>
        </section>

        {/* METHODOLOGY SECTION */}
        <section id="methodology" className="mb-32 scroll-mt-32">
          <div className="flex items-end justify-between mb-8 border-b border-charcoal pb-4">
            <h2 className="text-4xl md:text-6xl font-bold">METHODOLOGY</h2>
            <span className="font-mono text-sm hidden md:block">PROCESS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-r border-charcoal bg-white">
            {METHODOLOGY.map((item, index) => (
              <MethodologyColumn key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* ABOUT / FOOTER */}
        <section id="about" className="border-t border-charcoal pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">LET&apos;S CONNECT</h2>
              <p className="font-mono text-lg leading-relaxed mb-8 max-w-md">
                I&apos;m currently looking for new opportunities in creative development and product engineering.
              </p>
              <div className="flex gap-4">
                 <motion.a 
                    href="#" 
                    {...(isTouchDevice ? {
                      whileTap: { scale: 0.98, backgroundColor: "#2952FF", color: "#fff", borderColor: "#2952FF" }
                    } : {
                      whileHover: { y: -2, backgroundColor: "#2952FF", color: "#fff", borderColor: "#2952FF" }
                    })}
                    className="flex items-center gap-2 px-6 py-3 border border-charcoal font-mono text-sm uppercase transition-colors cursor-pointer"
                  >
                    <Mail size={16} /> Email Me
                 </motion.a>
                 <motion.a 
                    href="#" 
                    {...(isTouchDevice ? {
                      whileTap: { scale: 0.98, backgroundColor: "#1A1A1A", color: "#fff" }
                    } : {
                      whileHover: { y: -2, backgroundColor: "#1A1A1A", color: "#fff" }
                    })}
                    className="flex items-center gap-2 px-6 py-3 border border-charcoal font-mono text-sm uppercase transition-colors cursor-pointer"
                  >
                    <Github size={16} /> Github
                 </motion.a>
                 <motion.a 
                    href="#" 
                    {...(isTouchDevice ? {
                      whileTap: { scale: 0.98, backgroundColor: "#0077b5", color: "#fff", borderColor: "#0077b5" }
                    } : {
                      whileHover: { y: -2, backgroundColor: "#0077b5", color: "#fff", borderColor: "#0077b5" }
                    })}
                    className="flex items-center gap-2 px-6 py-3 border border-charcoal font-mono text-sm uppercase transition-colors cursor-pointer"
                  >
                    <Linkedin size={16} /> LinkedIn
                 </motion.a>
              </div>
            </div>
            
            <div className="flex flex-col justify-end items-start md:items-end text-left md:text-right font-mono text-xs text-charcoal/60 gap-2">
              <p>DESIGNED IN FIGMA</p>
              <p>BUILT WITH NEXT.JS & TAILWIND</p>
              <p>© 2025 PORTFOLIO V3</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}