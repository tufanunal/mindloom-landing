import React from 'react';

/**
 * MindLoom Primary Mark: Woven Interlace Hashtag
 * 
 * DESIGN SPEC: Four ribbon strands, genuine over/under weave, looped ends.
 * NOTE FOR OPERATOR: This is a placeholder geometry while you draw the final
 * vector in Illustrator. Simply paste your exported SVG path(s) into this component.
 */
export const WovenHashtagIcon: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = 'w-7 h-7 text-[#5AA7D9]', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="MindLoom Woven Mark"
    >
      {/* 
        Strand 1: Left Vertical ribbon (passes UNDER top horizontal, OVER bottom horizontal) 
      */}
      <path
        d="M17 6 C17 3.5, 19 3.5, 19 6 L19 16 M19 22 L19 42 C19 44.5, 17 44.5, 17 42 L17 6 Z"
        fill="currentColor"
        opacity="0.95"
      />
      
      {/* 
        Strand 2: Right Vertical ribbon (passes OVER top horizontal, UNDER bottom horizontal) 
      */}
      <path
        d="M29 6 C29 3.5, 31 3.5, 31 6 L31 28 M31 34 L31 42 C31 44.5, 29 44.5, 29 42 L29 6 Z"
        fill="currentColor"
        opacity="0.95"
      />

      {/* 
        Strand 3: Top Horizontal ribbon (passes OVER left vertical, UNDER right vertical) 
      */}
      <path
        d="M6 17 C3.5 17, 3.5 19, 6 19 L28 19 M34 19 L42 19 C44.5 19, 44.5 17, 42 17 L6 17 Z"
        fill="currentColor"
        opacity="0.85"
      />

      {/* 
        Strand 4: Bottom Horizontal ribbon (passes UNDER left vertical, OVER right vertical) 
      */}
      <path
        d="M6 29 C3.5 29, 3.5 31, 6 31 L16 31 M22 31 L42 31 C44.5 31, 44.5 29, 42 29 L6 29 Z"
        fill="currentColor"
        opacity="0.85"
      />

      {/* Interlace crossover junction highlights to preserve structural depth */}
      <rect x="16.5" y="16.5" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.3" />
      <rect x="28.5" y="28.5" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
};
