import { memo } from 'react';
import { Logo } from './Logo';

export const LoadingLogo = memo(() => {
  return (
    <div className="animate-pulse">
      <Logo size="lg" />
    </div>
  );
});