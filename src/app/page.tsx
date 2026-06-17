'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors, fonts, fontSizes, spacing, borderRadius, shadows } from '@/lib/design-tokens';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <main>
      {/* HERO - keep as is */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', backgroundImage: 'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(61,43,31,0.4)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 24px', maxWidth: '600px' }}>
          <h1 style={{ fontFamily: fonts.heading, fontSize: isMobile ? '36px' : '48px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>Your Dog Deserves the Royal Treatment</h1>
          <p style={{ fontFamily: fonts.body, fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '32px' }}>Premium pet grooming in Vancouver. Natural products. Happy dogs.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <Link href="/booking" style={{ backgroundColor: colors.accent, color: colors.textDark, padding: '14px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: 600 }}>Book Now</Link>
            <Link href="/services" style={{ border: '2px solid white', color: 'white', padding: '14px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: 600 }}>View Services</Link>
          </div>
        </div>
      </section>

      {/* SERVICES - FIXED */}
      <section style={{ backgroundColor: colors.background, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: fonts.heading, fontSize: isMobile ? '32px' : '40px', color: colors.textDark, marginBottom: '48px' }}>Our Signature Services</h2>
          
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', marginBottom: '40px' }}>
            {[
              { title: 'Bath & Tidy', desc: 'Shampoo, dry, nails, ears', img: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800' },
              { title: 'Full Grooming', desc: 'Bath plus haircut & glands', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800' },
              { title: 'Nail Care', desc: 'Trim, grind & paw tidy', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800' },
            ].map((s, i) => (
              <div key={i} style={{ width: '100%', maxWidth: '340px', height: isMobile ? '420px' : '460px', borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backgroundImage: `url(${s.img})`, backgroundSize: 'cover', transition: 'transform 0.3s' }}
                onMouseEnter={e => !isMobile && (e.currentTarget.style.transform = 'translateY(-8px)')}
                onMouseLeave={e => !isMobile && (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', color: 'white' }}>
                  <h3 style={{ fontFamily: fonts.heading, fontSize: '22px', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '16px' }}>{s.desc}</p>
                  <Link href="/booking" style={{ backgroundColor: colors.accent, color: colors.textDark, padding: '10px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Book Now</Link>
                </div>
              </div>
            ))}
          </div>

          <Link href="/services" style={{ display: 'inline-block', border: `2px solid ${colors.primary}`, color: colors.primary, padding: '14px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: 600 }}>
            See All Services & Add-Ons →
          </Link>
        </div>
      </section>
    </main>
  );
                      }
