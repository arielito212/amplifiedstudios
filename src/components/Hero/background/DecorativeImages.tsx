import { memo } from 'react';

export const DecorativeImages = memo(() => (
  <div className="absolute inset-0 grid grid-cols-2 gap-4">
    <div 
      className="relative overflow-hidden opacity-40 hover:opacity-50 transition-opacity duration-500"
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
      className="relative overflow-hidden opacity-40 hover:opacity-50 transition-opacity duration-500"
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