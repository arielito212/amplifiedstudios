import { memo } from 'react';

interface Props {
  className?: string;
}

export const DecorativeImages = memo(({ className = '' }: Props) => (
  <div className={`absolute inset-0 grid grid-cols-2 gap-4 ${className}`}>
    <div 
      className="relative overflow-hidden opacity-75 hover:opacity-85 transition-opacity duration-500"
      style={{ transform: 'translate(-5%, -5%)' }}
    >
      <img
        src="/src/rafaella.png"
        alt=""
        className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-700"
        loading="eager"
      />
    </div>
    <div 
      className="relative overflow-hidden opacity-75 hover:opacity-85 transition-opacity duration-500"
      style={{ transform: 'translate(5%, 5%)' }}
    >
      <img
        src="/src/anastasia.png"
        alt=""
        className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-700"
        loading="eager"
      />
    </div>
  </div>
));