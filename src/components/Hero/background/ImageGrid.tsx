import { memo } from 'react';
import { BackgroundImage } from './types';

const images: BackgroundImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=2000',
    position: { x: -10, y: -10 },
    scale: 1.1
  },
  {
    url: 'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?auto=format&fit=crop&q=80&w=2000',
    position: { x: 10, y: -10 },
    scale: 1.15
  },
  {
    url: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=2000',
    position: { x: -10, y: 10 },
    scale: 1.2
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000',
    position: { x: 10, y: 10 },
    scale: 1.1
  }
];

export const ImageGrid = memo(() => (
  <div className="absolute inset-0 grid grid-cols-2 gap-4">
    {images.map((image, index) => (
      <div
        key={image.url}
        className="relative overflow-hidden"
        style={{
          transform: `translate(${image.position.x}%, ${image.position.y}%)`,
          opacity: 0.35,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <img
          src={image.url}
          alt=""
          className="w-full h-full object-cover transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(${image.scale})`
          }}
          loading="eager"
        />
      </div>
    ))}
  </div>
));