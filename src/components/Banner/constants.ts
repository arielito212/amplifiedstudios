import { LayoutGrid, Trophy, MessageSquare } from 'lucide-react';
import { Language } from '../../types';

export const sections = {
  en: [
    { id: 'services', label: 'Services', icon: LayoutGrid },
    { id: 'benefits', label: 'Benefits', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ],
  es: [
    { id: 'services', label: 'Servicios', icon: LayoutGrid },
    { id: 'benefits', label: 'Beneficios', icon: Trophy },
    { id: 'contact', label: 'Contacto', icon: MessageSquare },
  ],
} as const;