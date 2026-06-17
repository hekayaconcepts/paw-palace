'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors, fonts } from '@/lib/design-tokens';

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const coreServices = [
    {
      num: '01',
      title: 'bATH & tIDY',
      price: 'From $65',
      includes: ['Premium shampoo', 'Blow dry & brush', 'Nail trim & grind', 'Ear cleaning', 'Paw & sanitary trim'],
      desc: 'The essential refresh. Perfect for maintenance between full grooms.',
      image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800'
    },
    {
      num: '02',
      title: 'fULL gROOMING',
      price: 'From $95',
      includes: ['Everything in Bath', 'Full breed-standard haircut', 'Anal gland expression', 'Teeth brushing', 'Blueberry facial'],
      desc: 'The royal treatment. Haircut, style, and spa day in one.',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800'
    },
    {
      num: '03',
      title: 'nAIL cARE',
      price: '$25',
      includes: ['Nail trim', 'Nail grinding', 'Paw pad trim', 'Paw balm treatment'],
      desc: 'Quick comfort fix. Walk-in welcome.',
      image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=800'
    }
  ];

  const addOns = [
    { name: 'Oatmeal Shampoo' }, { name: 'Hypoallergenic' }, { name: 'Whitening' },
    { name: 'Flea & Tick' }, { name: 'Aloe' }, { name: 'Tar & Sulfur' },
    { name: 'Cream Rinse' }, { name: 'Leave-in Moisturizer' },
    { name: 'Toothbrushing' }, { name: 'Breath Spray' }, { name: 'Nail Painting' },
    { name: 'Works Package', featured: true },
  ];

  const wobble = (e: React.MouseEvent | React.TouchEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.animation = 'none';
    setTimeout(() => { el.style.animation = 'wobble 0.5s ease'; }, 10);
    setTimeout(() => { el.style.animation = ''; }, 500);
  };

  return (
    <main style={{ backgroundColor: colors.background, minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(-3deg) scale(1.05); }
          30% { transform: rotate(3deg) scale(1.05); }
          45% { transform: rotate(-2deg); }
          60% { transform: rotate(2deg); }
          75% { transform: rotate(-1deg); }
        }
      `}} />

      <section style={{ padding: '120px 24px 60px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: fonts.heading, fontSize: 'clamp(48px, 10vw, 96px)', fontWeight: 700, color: colors.textDark, lineHeight: 0.9, letterSpacing: '-2px', marginBottom: '24px' }}>
          ALL<br/>SERVICES
        </h1>
        <p style={{ fontFamily: fonts.body, fontSize: '18px', color: colors.textLight, maxWidth: '500px', margin: '0 auto' }}>
          Pick what your dog needs. No packages forced. Add what you want.
        </p>
      </section>

      <section style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '40px' }}>
          {coreServices.map((service, i) => (
            <div key={i} style={{
                backgroundColor: 'white',
                border: `3px solid ${colors.textDark}`,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: `8px 8px 0px ${colors.textDark}`,
                transform: !isMobile && (i % 2 === 1 ? 'translateX(20px)' : 'translateX(-20px)'),
                transition: 'transform 0.3s',
              }}
              onMouseEnter={e => !isMobile && (e.currentTarget.style.transform = 'translateX(0) rotate(0.5deg)')}
              onMouseLeave={e => !isMobile && (e.currentTarget.style.transform = i % 2 === 1 ? 'translateX(20px)' : 'translateX(-20px)')}
            >
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', minHeight: isMobile ? 'auto' : '380px' }}>
                <div style={{ position: 'relative', backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: isMobile ? '240px' : 'auto' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: colors.primary, mixBlendMode: 'multiply', opacity: 0.2 }} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', fontFamily: fonts.heading, fontSize: isMobile ? '80px' : '120px', fontWeight: 700, color: 'white', opacity: 0.25, lineHeight: 1 }}>{service.num}</div>
                </div>
                <div style={{ padding: isMobile ? '24px' : '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                    <h2 style={{ fontFamily: fonts.heading, fontSize: isMobile ? '28px' : '32px', color: colors.textDark, textTransform: 'lowercase', margin: 0, lineHeight: 1.1 }}>{service.title}</h2>
                    <span style={{ fontFamily: fonts.body, fontSize: '18px', fontWeight: 700, color: colors.primary, whiteSpace: 'nowrap' }}>{service.price}</span>
                  </div>
                  <p style={{ fontFamily: fonts.body, color: colors.textLight, marginBottom: '20px', lineHeight: 1.5, fontSize: isMobile ? '15px' : '16px' }}>{service.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                    {service.includes.map((item, idx) => (
                      <li key={idx} style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.textDark, padding: '3px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '5px', height: '5px', backgroundColor: colors.accent, borderRadius: '50%', flexShrink: 0 }} />{item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking" style={{ backgroundColor: colors.accent, color: colors.textDark, padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: 600, textAlign: 'center', border: `2px solid ${colors.textDark}`, boxShadow: `4px 4px 0px ${colors.textDark}`, alignSelf: isMobile ? 'stretch' : 'flex-start', display: 'block' }}>Book This</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: colors.primary, padding: '80px 24px', marginTop: '40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: fonts.heading, fontSize: '48px', color: 'white', textAlign: 'center', marginBottom: '48px', textTransform: 'lowercase' }}>add-ons</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {addOns.map((addon, i) => (
              <div
                key={i}
                onMouseEnter={wobble}
                onTouchStart={wobble}
                style={{
                  backgroundColor: addon.featured ? colors.accent : 'white',
                  color: colors.textDark,
                  padding: '12px 20px',
                  borderRadius: '100px',
                  border: `2px solid ${colors.textDark}`,
                  fontFamily: fonts.body,
                  fontWeight: 600,
                  fontSize: '14px',
                  boxShadow: addon.featured ? `3px 3px 0px
