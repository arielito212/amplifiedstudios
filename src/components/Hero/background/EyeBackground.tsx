import { memo } from 'react';

export const EyeBackground = memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Main eye image */}
    <div className="absolute inset-0">
      <img
        src="/src/eyes.jpg"
        alt=""
        className="w-full h-full object-cover object-center filter grayscale"
        loading="eager"
      />
    </div>
    
    {/* Gradient overlays for depth and text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
    
    {/* Artistic overlay effect */}
    <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-rose-900/20 via-purple-900/20 to-blue-900/20" />
  </div>
));