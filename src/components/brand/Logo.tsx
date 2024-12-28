import { memo } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

interface LogoProps {
  variant?: 'default' | 'monochrome';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo = memo(({ variant = 'default', size = 'md', className = '' }: LogoProps) => {
  const scrollProgress = useScrollProgress();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  // Calculate the color based on scroll progress
  const textColor = variant === 'monochrome' 
    ? 'text-white' 
    : `rgb(${Math.round(26 + (229 * (1 - scrollProgress)))})`;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className={`${sizeClasses[size]} ${variant === 'monochrome' ? 'text-white' : 'text-[#FF7F6A]'}`}
        aria-label="Amplified Studios Logo"
      >
        <path 
          d="M30 80 L50 20 L70 80 Z M20 80 L80 80" 
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="transition-all duration-300"
        />
      </svg>
      <span 
        className={`font-bold transition-colors duration-300 ${
          variant === 'monochrome' ? 'text-white' : ''
        } ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'}`}
        style={{ color: variant === 'default' ? textColor : undefined }}
      >
        Amplified Studios
      </span>
    </div>
  );
});