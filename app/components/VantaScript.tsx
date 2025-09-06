'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    VANTA: any;
  }
}

interface VantaScriptProps {
  targetElementId: string;
}

export default function VantaScript({ targetElementId }: VantaScriptProps) {
  useEffect(() => {
    // Load Three.js
    const threeScript = document.createElement('script');
    threeScript.src =
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
    threeScript.async = true;

    threeScript.onload = () => {
      // Load Vanta after Three.js is loaded
      const vantaScript = document.createElement('script');
      vantaScript.src =
        'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js';
      vantaScript.async = true;

      vantaScript.onload = () => {
        // Initialize Vanta effect
        if (window.VANTA) {
          // Check if target element exists
          const targetElement = document.getElementById(targetElementId);
          if (targetElement) {
            window.VANTA.CELLS({
              el: `#${targetElementId}`,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              color1: 0x0,
              color2: 0x282828,
            });
          } else {
            console.warn(
              `Target element with id "${targetElementId}" not found`
            );
          }
        }
      };

      document.head.appendChild(vantaScript);
    };

    document.head.appendChild(threeScript);

    // Cleanup function
    return () => {
      // Remove scripts if component unmounts
      const scripts = document.querySelectorAll(
        'script[src*="three.js"], script[src*="vanta"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return null; // This component doesn't render anything
}
