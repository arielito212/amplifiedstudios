import { Logo } from '../brand/Logo';

export const BannerLogo = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Logo size="sm" />
    </div>
  );
};