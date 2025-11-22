'use client';

import React, { useEffect, useState } from 'react';

interface NoiseOverlayProps {
  opacity?: number;
  size?: number;
  zIndex?: number;
  visible?: boolean;
  intensity?: number;
  seed?: number;
}

const NoiseOverlay: React.FC<NoiseOverlayProps> = ({ 
  opacity = 0.05, 
  size = 200, 
  zIndex = 50,
  visible = true,
  intensity = 0.5,
  seed = 1
}) => {
  const [noiseDataUrl, setNoiseDataUrl] = useState<string>('');

  useEffect(() => {
    const generateNoise = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return '';

      const imageData = ctx.createImageData(size, size);
      const data = imageData.data;

      // Simple pseudo-random number generator with seed
      let seedValue = seed;
      const random = () => {
        seedValue = (seedValue * 9301 + 49297) % 233280;
        return seedValue / 233280;
      };

      for (let i = 0; i < data.length; i += 4) {
        // Generate noise value between 0 and 255
        const noise = Math.floor(random() * 255 * intensity);
        
        // Set RGB to the noise value (grayscale noise)
        data[i] = noise;     // Red
        data[i + 1] = noise; // Green
        data[i + 2] = noise; // Blue
        data[i + 3] = 255;   // Alpha (full opacity)
      }

      ctx.putImageData(imageData, 0, 0);
      return canvas.toDataURL();
    };

    setNoiseDataUrl(generateNoise());
  }, [size, intensity, seed]);

  if (!visible) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{
        opacity,
        zIndex,
        backgroundImage: `url("${noiseDataUrl}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
};

export default NoiseOverlay;