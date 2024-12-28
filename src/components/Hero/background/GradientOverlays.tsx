import { memo } from 'react';

export const GradientOverlays = memo(() => (
  <>
    {/* Subtle gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
    
    {/* Light side gradients for depth */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
    
    {/* Artistic color overlay */}
    <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-rose-900/10 via-purple-900/10 to-blue-900/10" />
  </>
));