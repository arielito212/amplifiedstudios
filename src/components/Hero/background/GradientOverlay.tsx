import { memo } from 'react';

export const GradientOverlay = memo(() => (
  <div className="absolute inset-0 z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-rose-900/30" />
  </div>
));