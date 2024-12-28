import { memo } from 'react';
import { Logo } from '../brand/Logo';

export const Footer = memo(() => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Logo variant="monochrome" size="md" />
        {/* Footer content */}
      </div>
    </footer>
  );
});