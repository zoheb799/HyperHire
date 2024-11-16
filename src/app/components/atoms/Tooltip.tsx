import React from 'react';

interface TooltipProps {
  bgColor: string;
  textColor: string;
  pointerPosition: number; 
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ bgColor, textColor, pointerPosition, children }) => {
  return (
    <div
      className={`relative font-black text-lg leading-7 inline-block px-4 py-2 rounded-lg h-10 w-[10rem] ${bgColor} ${textColor}`}
      style={{ '--pointer-position': `${pointerPosition}%` } as React.CSSProperties}
    >
      {children}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-inherit"
        style={{
          bottom: '-8px', 
          left: `calc(var(--pointer-position, 50%) - 8px)`, 
          clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
        }}
      />
    </div>
  );
};

export default Tooltip;
