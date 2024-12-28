export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  title: string;
  description: string;
  stat: string;
  icon: string;
}

export type Language = 'en' | 'es';

export interface ContactForm {
  name: string;
  email: string;
  followers: string;
  message: string;
}