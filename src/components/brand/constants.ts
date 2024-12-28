export const BRAND_COLORS = {
  coral: '#FF7F6A',
  purple: '#4A0D4A',
  white: '#FFFFFF',
  black: '#1A1A1A'
} as const;

export const BRAND_SPECS = {
  minLogoSize: {
    width: 32,
    height: 32
  },
  clearSpace: 16, // pixels
  socialMedia: {
    profileImage: {
      width: 400,
      height: 400
    },
    coverImage: {
      twitter: { width: 1500, height: 500 },
      facebook: { width: 1640, height: 624 },
      linkedin: { width: 1584, height: 396 }
    }
  }
} as const;