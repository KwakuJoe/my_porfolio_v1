import React, { type ReactNode } from 'react';

/**
 * Usage:
 * <TexturedBackground>
 *   <YourContent />
 * </TexturedBackground>
 */

interface TexturedBackgroundProps {
  children?: ReactNode;
}


export default function TexturedBackground({ children } : TexturedBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#f4f4f5] overflow-hidden">
      {/* 
         THE TEXTURE LAYER 
         - baseFrequency=".8" : Makes it very fine/smooth (lower like .5 = chunkier)
         - opacity="0.05" : Subtlety control (0.03 is very faint, 0.1 is strong)
      */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content sits here */}
      <div className="relative z-20">
        {children || (
          <div className="flex items-center justify-center h-screen text-gray-500 font-sans">
            <p>Your content goes here</p>
          </div>
        )}
      </div>
    </div>
  );
}