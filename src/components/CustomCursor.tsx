import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isOnMethodologyCard, setIsOnMethodologyCard] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Mouse position state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for the cursor
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }; // Slightly tighter for better control
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();

    // Don't set up mouse events on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if we're over a methodology card
      const methodologyCard = target.closest('[data-methodology-card]');
      setIsOnMethodologyCard(!!methodologyCard);
      
      // Check if the element is interactive
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        !!methodologyCard;
        
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Variants for the cursor states
  const variants = {
    default: {
      height: 12,
      width: 12,
      backgroundColor: "#2952FF", // Solid Electric Blue
      borderColor: "rgba(255, 255, 255, 0.8)", // Keep subtler white border for contrast on dark backgrounds
      borderWidth: 1,
      opacity: 1,
      backdropFilter: "none",
    },
    hover: {
      height: 40, // Reduced from 64px to 40px
      width: 40,
      backgroundColor: "rgba(41, 82, 255, 0.3)", // Very transparent, no blur
      borderColor: "#2952FF", // Solid Electric Blue
      borderWidth: 2, // Thicker border for neo-brut feel
      opacity: 1,
      backdropFilter: "blur(1px)", // Removed blur for readability
    },
    methodologyCard: {
      height: 40,
      width: 40,
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Black background for inverted look
      borderColor: "#000000", // Black border
      borderWidth: 2,
      opacity: 1,
      backdropFilter: "blur(1px)",
    }
  };

  // Don't render on touch devices or mobile screens
  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      variants={variants}
      animate={isOnMethodologyCard ? "methodologyCard" : (isHovering ? "hover" : "default")}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    />
  );
};

export default CustomCursor;