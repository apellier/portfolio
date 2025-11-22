import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, LayoutTemplate } from 'lucide-react';
import { MethodologyItem } from '@/src/types';

interface MethodologyColumnProps {
  item: MethodologyItem;
  index: number;
}

const MethodologyColumn: React.FC<MethodologyColumnProps> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (iconName: string, isHovered: boolean) => {
    const iconProps = {
      className: `w-8 h-8 mb-4 stroke-[1.5] transition-colors duration-300 ${isHovered ? 'text-white' : 'text-charcoal'}`
    };
    
    switch (iconName) {
      case 'discovery': return <Search {...iconProps} />;
      case 'prototyping': return <LayoutTemplate {...iconProps} />;
      case 'craft': return <PenTool {...iconProps} />;
      default: return null;
    }
  };

  return (
    <motion.div
      data-methodology-card
      className={`flex flex-col border-l border-charcoal p-8 first:border-l-0 md:first:border-l cursor-pointer transition-all duration-300 ${
        isHovered ? 'bg-accent' : 'bg-white hover:bg-white'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`mb-2 font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
        isHovered ? 'text-white' : 'text-accent'
      }`}>
        Step 0{index + 1}
      </div>
      {getIcon(item.icon, isHovered)}
      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
        isHovered ? 'text-white' : 'text-charcoal'
      }`}>
        {item.title}
      </h3>
      <p className={`font-mono text-sm leading-relaxed transition-colors duration-300 ${
        isHovered ? 'text-white/90' : 'text-charcoal/70'
      }`}>
        {item.description}
      </p>
    </motion.div>
  );
};

export default MethodologyColumn;
