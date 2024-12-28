import { memo } from 'react';
import { HeroImage } from './HeroImage';
import { Overlay } from './Overlay';

export const Background = memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    <HeroImage />
    <Overlay />
  </div>
));