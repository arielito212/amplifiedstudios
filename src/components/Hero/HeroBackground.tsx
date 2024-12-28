import { memo } from 'react';

const images = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000'
];

export const HeroBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 mix-blend-multiply z-10" />
      <div className="absolute inset-0 grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div
            key={src}
            className="relative overflow-hidden"
            style={{
              transform: `translate(${index % 2 ? '10%' : '-10%'}, ${index < 2 ? '-10%' : '10%'})`,
              opacity: 0.4,
              transition: 'all 0.5s ease-out'
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
});