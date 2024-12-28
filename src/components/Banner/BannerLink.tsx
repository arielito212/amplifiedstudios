import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
  variant?: 'default' | 'primary';
}

export function BannerLink({ icon: Icon, label, isActive, onClick, variant = 'default' }: Props) {
  if (variant === 'primary') {
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all transform hover:scale-105 
          ${isActive 
            ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' 
            : 'bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-500/20'}`}
      >
        <Icon className="w-4 h-4" />
        <span className="font-medium">{label}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-rose-500 text-white'
          : 'text-neutral-600 hover:bg-neutral-100'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{label}</span>
    </button>
  );
}