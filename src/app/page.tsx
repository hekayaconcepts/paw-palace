'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors, fonts, fontSizes, spacing, borderRadius, shadows } from '@/lib/design-tokens';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: `0 ${spacing.md}`,
          position: 'relative',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(61,43,31,0.5) 0%, rgba(61,43,31,0.3) 100%)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', padding: `0 ${spacing.md}` }}>
          {/* Headline */}
          <h1
            style={{
              fontFamily: fonts.heading,
              fontSize: isMobile ? '32px' : fontSizes.h1,
              fontWeight: 700,
              color: colors.white,
              lineHeight: 1.2,
              marginBottom: spacing.md,
            }}
          >
            Your Dog Deserves the Royal Treatment
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: isMobile ? fontSizes.body : '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.6,
              marginBottom: spacing.xl,
              maxWidth: '500px',
              margin: `0 auto ${spacing.xl}`,
            }}
          >
            Premium pet grooming in Vancouver. Natural products. Happy dogs.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: spacing.md,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Primary CTA */}
            <Link
              href="/booking"
              style={{
                fontFamily: fonts.body,
                fontSize: fontSizes.body,
                fontWeight: 600,
                color: colors.textDark,
                backgroundColor: colors.accent,
                padding: `${spacing.md} ${spacing.xl}`,
                borderRadius: borderRadius.md,
                textDecoration: 'none',
                boxShadow: shadows.cta,
                minHeight: '44px',
                minWidth: isMobile ? '100%' : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s, transform 0.2s',
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

            {/* Secondary CTA */}
            <Link
              href="/services"
              style={{
                fontFamily: fonts.body,
                fontSize: fontSizes.body,
                fontWeight: 600,
                color: colors.white,
                backgroundColor: 'transparent',
                border: `2px solid ${colors.white}`,
                padding: `${spacing.md} ${spacing.xl}`,
                borderRadius: borderRadius.md,
                textDecoration: 'none',
                minHeight: '44px',
                minWidth: isMobile ? '100%' : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.white;
                e.currentTarget.style.color = colors.textDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = colors.white;
              }}
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: spacing.xl,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.xs,
          }}
        >
          <span
            style={{
              fontFamily: fonts.body,
              fontSize: fontSizes.small,
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '24px',
              height: '40px',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '12px',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '2px',
                position: 'absolute',
                top: '6px',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'scrollBounce 2s infinite',
              }}
            />
          </div>
        </div>

        {/* Keyframe animation via style tag */}
        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
            50% { transform: translateX(-50%) translateY(12px); opacity: 0.3; }
          }
        `}</style>
      </section>
    </main>
  );
}
