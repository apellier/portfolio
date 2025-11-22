import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/src/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Determine grid span based on size prop
  const getSpanClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2'; // Tall
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1';
    }
  };

  // Define motion props based on device type
  const motionProps = isTouchDevice ? {
    // Touch device: Use whileTap instead of whileHover, add static shadow
    whileTap: { 
      scale: 0.98
    },
    transition: { duration: 0.1, ease: "easeOut" },
    className: `
      relative flex flex-col justify-between p-6 
      bg-cream border border-charcoal 
      cursor-pointer group overflow-hidden
      shadow-[2px_2px_0px_rgba(0,0,0,1)]
      active:shadow-[1px_1px_0px_rgba(0,0,0,1)]
      ${getSpanClass(project.size)}
      ${className}
    `,
  } : {
    // Desktop: Use whileHover
    whileHover: { 
      x: -4, 
      y: -4, 
      boxShadow: "6px 6px 0px 0px #2952FF"
    },
    transition: { duration: 0.2, ease: "circOut" },
    className: `
      relative flex flex-col justify-between p-6 
      bg-cream border border-charcoal 
      cursor-pointer group overflow-hidden
      ${getSpanClass(project.size)}
      ${className}
    `,
  };

  return (
    <motion.div
      {...motionProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Section: Title & Icon */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold uppercase tracking-tight leading-none max-w-[80%]">
          {project.title}
        </h3>
        <motion.div
          {...(isTouchDevice ? {
            whileTap: { rotate: 45, scale: 0.9 }
          } : {
            whileHover: { rotate: 45 }
          })}
          className={`p-1 rounded-full border border-transparent transition-colors ${
            isTouchDevice 
              ? 'active:border-accent active:text-accent' 
              : 'group-hover:border-accent group-hover:text-accent'
          }`}
        >
          <ArrowUpRight size={24} />
        </motion.div>
      </div>

      {/* Middle/Bottom: Description & Tags */}
      <div className="mt-auto">
        <p className="font-mono text-sm text-charcoal/80 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className={`px-3 py-1 text-xs font-mono border border-charcoal rounded-full bg-white transition-colors ${
                isTouchDevice 
                  ? 'active:border-accent active:text-accent' 
                  : 'group-hover:border-accent group-hover:text-accent'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;