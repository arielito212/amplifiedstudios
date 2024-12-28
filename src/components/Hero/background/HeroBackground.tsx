import { memo } from 'react';
import { ImageBackground } from './ImageBackground';
import { GradientOverlays } from './GradientOverlays';
import { FallbackBackground } from './FallbackBackground';
import { DecorativeImages } from './DecorativeImages';

export const HeroBackground = memo(() => (
  <div className="absolute inset-0 overflow-hidden">
    <ImageBackground />
    <DecorativeImages />
    <GradientOverlays />
    <FallbackBackground />
  </div>
));