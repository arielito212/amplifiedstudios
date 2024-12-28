import { memo } from 'react';

export const FallbackBackground = memo(() => (
  <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-white" />
));