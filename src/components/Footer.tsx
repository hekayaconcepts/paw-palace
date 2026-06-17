'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors, fonts, fontSizes, spacing } from '@/lib/design-tokens';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services', label: 'Full Grooming' },
  { href: '/services', label: 'Spa Package' },
  { href: '/services', label: 'Puppy First Visit' },
  { href: '/services', label: 'Nail Trimming' },
  { href: '/services', label: 'Teeth Cleaning' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/cookies', label: 'Cookie Policy' },
  { href: '/accessibility', label: 'Accessibility' },
];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.sm,
    ...(isMobile ? { alignItems: 'center', textAlign: 'center' as const } : {}),
  };

  return (
    <footer
      style={{
        backgroundColor: colors.textDark,
        color: colors.background,
        padding: `${spacing.xxl} ${spacing.md} ${spacing.lg}`,
      }}
    >
      {/* 4-Column Grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr 1fr',
          gap: isMobile ? spacing.xl : spacing.xxl,
        }}
      >
        {/* Column 1: Logo + Tagline + Social */}
        <div style={sectionStyle}>
          <Link
            href="/"
            style={{
              fontFamily: fonts.heading,
              fontSize: isMobile ? '24px' : '28px',
              fontWeight: 700,
              color: colors.accent,
              textDecoration: 'none',
              letterSpacing: '1px',
            }}
          >
            Paw Palace
          </Link>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: fontSizes.small,
              color: 'rgba(255, 247, 237, 0.7)',
              lineHeight: 1.6,
              maxWidth: '260px',
            }}
          >
            Vancouver&apos;s premier pet grooming experience. Natural products. Happy dogs.
          </p>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: spacing.md, marginTop: spacing.sm }}>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 247, 237, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.background,
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 247, 237, 0.1)')}
            >
              📷
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 247, 237, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.background,
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 247, 237, 0.1)')}
            >
              📘
            </a>
            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 247, 237, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.background,
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 247, 237, 0.1)')}
            >
              🎵
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={sectionStyle}>
          <h3
            style={{
              fontFamily: fonts.heading,
              fontSize: fontSizes.h3,
              color: colors.accent,
              marginBottom: spacing.xs,
            }}
          >
            Quick Links
          </h3>
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: fonts.body,
                fontSize: fontSizes.body,
                color: 'rgba(255, 247, 237, 0.8)',
                textDecoration: 'none',
                padding: '4px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 247, 237, 0.8)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Column 3: Services */}
        <div style={sectionStyle}>
          <h3
            style={{
              fontFamily: fonts.heading,
              fontSize: fontSizes.h3,
              color: colors.accent,
              marginBottom: spacing.xs,
            }}
          >
            Services
          </h3>
          {serviceLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: fonts.body,
                fontSize: fontSizes.body,
                color: 'rgba(255, 247, 237, 0.8)',
                textDecoration: 'none',
                padding: '4px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 247, 237, 0.8)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Column 4: Contact Info */}
        <div style={sectionStyle}>
          <h3
            style={{
              fontFamily: fonts.heading,
              fontSize: fontSizes.h3,
              color: colors.accent,
              marginBottom: spacing.xs,
            }}
          >
            Contact Us
          </h3>
          <p style={{ fontFamily: fonts.body, fontSize: fontSizes.body, color: 'rgba(255, 247, 237, 0.8)', margin: 0 }}>
            📞 +1 (604) 722-2070
          </p>
          <p style={{ fontFamily: fonts.body, fontSize: fontSizes.body, color: 'rgba(255, 247, 237, 0.8)', margin: 0 }}>
            📍 Vancouver, BC, Canada
          </p>
          <p style={{ fontFamily: fonts.body, fontSize: fontSizes.body, color: 'rgba(255, 247, 237, 0.8)', margin: 0 }}>
            🕐 Tue–Sat: 8:00am – 5:30pm
          </p>
          <p style={{ fontFamily: fonts.body, fontSize: fontSizes.body, color: 'rgba(255, 247, 237, 0.8)', margin: 0 }}>
            🕐 Sun–Mon: Closed
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: fonts.body,
              fontSize: fontSizes.small,
              color: colors.accent,
              textDecoration: 'none',
              marginTop: spacing.sm,
              fontWeight: 600,
            }}
          >
            Get Directions →
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: `${spacing.xl} auto 0`,
          paddingTop: spacing.lg,
          borderTop: '1px solid rgba(255, 247, 237, 0.1)',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: spacing.md,
        }}
      >
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: fontSizes.small,
            color: 'rgba(255, 247, 237, 0.5)',
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Paw Palace Pet Grooming. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-end' }}>
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: fonts.body,
                fontSize: fontSizes.small,
                color: 'rgba(255, 247, 237, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 247, 237, 0.5)')}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
