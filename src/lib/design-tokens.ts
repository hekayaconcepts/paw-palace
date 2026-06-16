// Design Tokens — Paw Palace Pet Grooming
// Source: Masterpiece Build Plan v1.0, Section 3 — "Warm Organic Luxury"

export const colors = {
  primary: '#C67B5C',       // Warm Terracotta
  secondary: '#D4C4A8',     // Sand Beige
  accent: '#D4A855',        // Warm Gold
  background: '#FFF7ED',    // Soft Cream
  textDark: '#3D2B1F',      // Rich Brown
  textMuted: '#8B7355',     // Warm Grey
  success: '#6B8F71',       // Sage Green
  ctaHover: '#A85C3F',      // Deep Terracotta
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const fonts = {
  heading: "'Playfair Display', serif",
  body: "'DM Sans', sans-serif",
  accent: "'Nunito', sans-serif",
} as const;

export const fontSizes = {
  h1: '3rem',      // 48px
  h2: '2.25rem',   // 36px
  h3: '1.5rem',    // 24px
  body: '1rem',    // 16px
  small: '0.875rem', // 14px
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
} as const;

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.08)',
  md: '0 4px 20px rgba(0,0,0,0.08)',
  lg: '0 8px 30px rgba(0,0,0,0.12)',
  cta: '0 2px 8px rgba(212,168,85,0.3)',
} as const;

export const breakpoints = {
  mobile: '639px',
  tablet: '640px',
  desktop: '1024px',
} as const;
