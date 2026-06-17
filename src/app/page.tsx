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
          minHeight: 'calc(100svh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: `0 ${spacing.md}`,
          position: 'relative',
          backgroundImage: 'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
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

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '0 24px',
            maxWidth: '600px',
            margin: '0 auto',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
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

          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: spacing.md,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '56px',
            }}
          >
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
                width: '100%',
                maxWidth: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                transition: 'all 0.2s',
              }}
            >
              Book Now
            </Link>

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
                width: '100%',
                maxWidth: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                transition: 'all 0.2s',
              }}
            >
              View Services
            </Link>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: spacing.xs,
          }}
        >
          <span style={{ fontFamily: fonts.body, fontSize: fontSizes.small, color: 'rgba(255, 255, 255, 0.6)' }}>
            Scroll
          </span>
          <div style={{ width: '24px', height: '40px', border: '2px solid rgba(255, 255, 255, 0.4)', borderRadius: '12px', position: 'relative' }}>
            <div style={{ width: '4px', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '2px', position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', animation: 'scrollBounce 2s infinite' }} />
          </div>
        </div>

        <style>{`@keyframes scrollBounce { 0%,100%{transform:translateX(-50%) translateY(0);opacity:1} 50%{transform:translateX(-50%) translateY(12px);opacity:0.3} }`}</style>
      </section>

      <ServicesSection isMobile={isMobile} />
    </main>
  );
}

function ServicesSection({ isMobile }: { isMobile: boolean }) {
  const services = [
    { title: 'Dog Full Service Grooming', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80' },
    { title: 'Cat Grooming & Styling', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&q=80' },
    { title: 'Dog Bathing & Blow Dry', image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&q=80' },
  ];

  return (
    <section style={{ backgroundColor: colors.background, padding: `${spacing.xxl} ${spacing.md}` }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: fonts.heading, fontSize: isMobile ? '32px' : '40px', fontWeight: 700, color: colors.textDark, textAlign: 'center', marginBottom: spacing.xl }}>
          Our Signature Services
        </h2>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: spacing.lg, justifyContent: 'center', alignItems: 'center' }}>
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                width: '100%',
                maxWidth: isMobile ? '360px' : '340px',
                height: '420px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(61,43,31,0.12)',
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.3s ease',
              }}
              onTouchStart={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
              onTouchEnd={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: spacing.lg, textAlign: 'center' }}>
                <h3 style={{ fontFamily: fonts.heading, fontSize: '22px', color: colors.white, marginBottom: spacing.md }}>{service.title}</h3>
                <Link href="/booking" style={{ fontFamily: fonts.body, fontSize: '14px', fontWeight: 600, color: colors.textDark, backgroundColor: colors.accent, padding: `${spacing.sm} ${spacing.lg}`, borderRadius: borderRadius.md, textDecoration: 'none', display: 'inline-block' }}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                }
