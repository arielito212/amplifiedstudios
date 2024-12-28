import { memo } from 'react';

export const ImageBackground = memo(() => (
  <div className="absolute inset-0">
    <img
      src="/src/eyes.jpg"
      alt=""
      className="w-full h-full object-cover object-center"
      loading="eager"
    />
  </div>
));