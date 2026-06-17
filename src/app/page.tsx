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

        {/* Content wrapper */}
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
              marginBottom: '56px',
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
                width: '100%',
                maxWidth: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
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
                width: '100%',
                maxWidth: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
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

        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
            50% { transform: translateX(-50%) translateY(12px); opacity: 0.3; }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <ServicesSection isMobile={isMobile} />
    </main>
  );
}

function ServicesSection({ isMobile }: { isMobile: boolean }) {
  const [rotations, setRotations] = useState({ pod0: [0, 0], pod1: [0, 0], pod2: [0, 0] });
  const [blobPhases, setBlobPhases] = useState({ pod0: 0, pod1: 0, pod2: 0 });

  // 3D tilt on mousemove
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, podIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = -((y / rect.height) - 0.5) * 10;

    setRotations((prev) => ({
      ...prev,
      [podIndex]: [rotateX, rotateY],
    }));
  };

  const handleMouseLeave = (podIndex: number) => {
    setRotations((prev) => ({
      ...prev,
      [podIndex]: [0, 0],
    }));
  };

  // Blob morphing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBlobPhases((prev) => ({
        pod0: (prev.pod0 + 1) % 2,
        pod1: (prev.pod1 + 1) % 2,
        pod2: (prev.pod2 + 1) % 2,
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 'pod0',
      title: 'Dog Full Service Grooming',
      image: 'https://images.unsplash.com/photo-1576129227bcc1f7c67c19eb01f1b0b6?w=500&h=600&fit=crop',
    },
    {
      id: 'pod1',
      title: 'Cat Grooming & Styling',
      image: 'https://images.unsplash.com/photo-1573865526014-f3550df95088?w=500&h=600&fit=crop',
    },
    {
      id: 'pod2',
      title: 'Dog Bathing & Blow Dry',
      image: 'https://images.unsplash.com/photo-1601758228606-3da9b156639b?w=500&h=600&fit=crop',
    },
  ];

  const getPodId = (index: number): keyof typeof rotations => {
    return `pod${index}` as keyof typeof rotations;
  };

  const getBlobClipPath = (phase: number): string => {
    return phase === 0
      ? 'ellipse(80% 70% at 50% 50%)'
      : 'ellipse(72% 78% at 52% 48%)';
  };

  return (
    <section
      style={{
        backgroundColor: colors.background,
        padding: `${spacing.xxl} ${spacing.md}`,
        minHeight: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Section Heading */}
        <h2
          style={{
            fontFamily: fonts.heading,
            fontSize: isMobile ? '28px' : fontSizes.h2,
            fontWeight: 700,
            color: colors.textDark,
            textAlign: 'center',
            marginBottom: `${spacing.xxl}`,
            lineHeight: 1.2,
          }}
        >
          Our Signature Services
        </h2>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: spacing.xl,
            justifyItems: 'center',
          }}
        >
          {services.map((service, index) => {
            const podId = getPodId(index);
            const [rotateX, rotateY] = rotations[podId];
            const blobPhase = blobPhases[podId];

            return (
              <div
                key={service.id}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onTouchStart={(e) => {
                  const element = e.currentTarget;
                  element.style.transform = 'scale(0.94)';
                }}
                onTouchEnd={(e) => {
                  const element = e.currentTarget;
                  element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
                style={{
                  width: isMobile ? '100%' : '340px',
                  height: '440px',
                  position: 'relative',
                  borderRadius: borderRadius.lg,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  perspective: '1000px',
                  transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`,
                  transition: rotateX === 0 && rotateY === 0 ? 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)' : 'none',
                }}
              >
                {/* Background Image with Blob Shape */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url('${service.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    clipPath: getBlobClipPath(blobPhase),
                    transition: 'clip-path 4s ease-in-out, transform 0.3s ease-out',
                    transform: 'scale(1.08)',
                  }}
                />

                {/* Liquid Glass Overlay at Bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(61, 43, 31, 0.8) 100%)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: spacing.lg,
                    zIndex: 2,
                    textAlign: 'center',
                  }}
                >
                  {/* Service Title */}
                  <h3
                    style={{
                      fontFamily: fonts.heading,
                      fontSize: isMobile ? fontSizes.body : '20px',
                      fontWeight: 600,
                      color: colors.white,
                      margin: 0,
                      marginBottom: spacing.md,
                      lineHeight: 1.4,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* CTA Link */}
                  <Link
                    href="/booking"
                    style={{
                      fontFamily: fonts.body,
                      fontSize: fontSizes.small,
                      fontWeight: 600,
                      color: colors.textDark,
                      backgroundColor: colors.accent,
                      padding: `${spacing.sm} ${spacing.md}`,
                      borderRadius: borderRadius.md,
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.ctaHover;
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accent;
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 639px) {
          div[style*="perspective"] {
            perspective: none !important;
          }
        }
      `}</style>
    </section>
  );
}
