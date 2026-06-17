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
          zIndex: 9999,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `0 ${spacing.md}`,
          backgroundColor: 'rgba(255, 247, 237, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(199, 123, 92, 0.1)',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: fonts.heading,
            fontSize: isMobile? '20px' : '24px',
            fontWeight: 700,
            color: colors.primary,
            textDecoration: 'none',
            letterSpacing: '1px',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
          onFocus={(e) => (e.currentTarget.style.outline = 'none')}
        >
          Paw Palace
        </Link>

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
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.textDark)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

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
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.ctaHover;
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Book Now
          </Link>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              WebkitTapHighlightColor: 'transparent',
              cursor: 'pointer',
              width: '44px',
              height: '44px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ width: '22px', height: '2px', backgroundColor: colors.textDark, transition: 'all 0.3s', transform: menuOpen? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
            <span style={{ width: '22px', height: '2px', backgroundColor: colors.textDark, opacity: menuOpen? 0 : 1, transition: 'opacity 0.3s' }} />
            <span style={{ width: '22px', height: '2px', backgroundColor: colors.textDark, transition: 'all 0.3s', transform: menuOpen? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
          </button>
        )}
      </header>

      {menuOpen && isMobile && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(255, 247, 237, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: spacing.xl,
            zIndex: 9998,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: spacing.md,
              right: spacing.md,
              background: 'none',
              border: 'none',
              fontSize: '28px',
              width: '44px',
              height: '44px',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: fonts.heading,
                fontSize: '28px',
                color: colors.textDark,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: fonts.body,
              fontWeight: 600,
              backgroundColor: colors.accent,
              color: colors.textDark,
              padding: `${spacing.md} ${spacing.xxl}`,
              borderRadius: borderRadius.md,
              textDecoration: 'none',
              marginTop: spacing.md,
            }}
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
                }
