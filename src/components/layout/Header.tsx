import { memo } from 'react';
import { Logo } from '../brand/Logo';

export const Header = memo(() => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Logo size="sm" />
        {/* Navigation components */}
      </div>
    </header>
  );
});