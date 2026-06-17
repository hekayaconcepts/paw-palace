'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors, fonts, fontSizes, spacing, borderRadius, shadows } from '@/lib/design-tokens';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `0 ${spacing.md}`,
          backgroundColor: 'rgba(255, 247, 237, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid rgba(199, 123, 92, 0.1)`,
        }}
      >
        {/* Logo — LEFT */}
        <Link
          href="/"
          style={{
            fontFamily: fonts.heading,
            fontSize: isMobile? '20px' : '24px',
            fontWeight: 700,
            color: colors.primary,
            textDecoration: 'none',
            letterSpacing: '1px',
            flexShrink: 0,
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
          onFocus={(e) => (e.currentTarget.style.outline = 'none')}
        >
          Paw Palace
        </Link>

        {/* Desktop Nav — CENTER */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: spacing.lg }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: fonts.body,
                  fontSize: fontSizes.body,
                  color: colors.textDark,
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.textDark)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* CTA Button — RIGHT (desktop) */}
        {!isMobile && (
          <Link
            href="/booking"
            style={{
              fontFamily: fonts.body,
              fontSize: fontSizes.body,
              fontWeight: 600,
              color: colors.textDark,
              backgroundColor: colors.accent,
              padding: `${spacing.sm} ${spacing.lg}`,
              borderRadius: borderRadius.md,
              textDecoration: 'none',
              boxShadow: shadows.cta,
              transition: 'background-color 0.2s, transform 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor
