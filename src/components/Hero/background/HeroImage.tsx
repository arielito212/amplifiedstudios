import { memo } from 'react';

export const HeroImage = memo(() => (
  <div className="absolute inset-0">
    <img
      src="/src/rafaella.png"
      alt=""
      className="w-full h-full object-cover object-center"
      loading="eager"
    />
  </div>
));