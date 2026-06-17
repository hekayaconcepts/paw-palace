'use client';

import Link from 'next/link';
import { colors, fonts, fontSizes, spacing, borderRadius } from '@/lib/design-tokens';

export default function ServicesPage() {
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
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800'
    }
  ];

  const addOns = [
    { name: 'Oatmeal Shampoo', cat: 'shampoo' },
    { name: 'Hypoallergenic', cat: 'shampoo' },
    { name: 'Whitening', cat: 'shampoo' },
    { name: 'Flea & Tick', cat: 'shampoo' },
    { name: 'Aloe', cat: 'shampoo' },
    { name: 'Tar & Sulfur', cat: 'shampoo' },
    { name: 'Cream Rinse', cat: 'conditioner' },
    { name: 'Leave-in Moisturizer', cat: 'conditioner' },
    { name: 'Toothbrushing', cat: 'teeth' },
    { name: 'Breath Spray', cat: 'teeth' },
    { name: 'Nail Painting', cat: 'nails' },
    { name: 'Works Package', cat: 'package', featured: true },
  ];

  return (
    <main style={{ backgroundColor: colors.background, minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ padding: '120px 24px 60px', textAlign: 'center' }}>
        <h1 style={{ 
          fontFamily: fonts.heading, 
          fontSize: 'clamp(48px, 10vw, 96px)', 
          fontWeight: 700, 
          color: colors.textDark,
          lineHeight: 0.9,
          letterSpacing: '-2px',
          marginBottom: '24px'
        }}>
          ALL<br/>SERVICES
        </h1>
        <p style={{ fontFamily: fonts.body, fontSize: '18px', color: colors.textLight, maxWidth: '500px', margin: '0 auto' }}>
          Pick what your dog needs. No packages forced. Add what you want.
        </p>
      </section>

      {/* CORE SERVICES */}
      <section style={{ padding: '0 24px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '40px' }}>
          {coreServices.map((service, i) => (
            <div 
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0',
                backgroundColor: 'white',
                border: `3px solid ${colors.textDark}`,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: `8px 8px 0px ${colors.textDark}`,
                transform: i % 2 === 1 ? 'translateX(20px)' : 'translateX(-20px)',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateX(0) rotate(0.5deg)'}
              onMouseLeave={e => e.currentTarget.style.transform = i % 2 === 1 ? 'translateX(20px)' : 'translateX(-20px)'}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '380px' }}>
                {/* Image */}
                <div style={{ 
                  position: 'relative', 
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: colors.primary, mixBlendMode: 'multiply', opacity: 0.2 }} />
                  <div style={{ 
                    position: 'absolute', 
                    top: '24px', 
                    left: '24px', 
                    fontFamily: fonts.heading,
                    fontSize: '120px',
                    fontWeight: 700,
                    color: 'white',
                    opacity: 0.15,
                    lineHeight: 1,
                  }}>
                    {service.num}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <h2 style={{ fontFamily: fonts.heading, fontSize: '32px', color: colors.textDark, textTransform: 'lowercase', margin: 0 }}>
                      {service.title}
                    </h2>
                    <span style={{ fontFamily: fonts.body, fontSize: '20px', fontWeight: 700, color: colors.primary }}>{service.price}</span>
                  </div>
                  
                  <p style={{ fontFamily: fonts.body, color: colors.textLight, marginBottom: '24px', lineHeight: 1.6 }}>{service.desc}</p>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                    {service.includes.map((item, idx) => (
                      <li key={idx} style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.textDark, padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '6px', height: '6px', backgroundColor: colors.accent, borderRadius: '50%' }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="/booking" style={{ 
                    backgroundColor: colors.accent, 
                    color: colors.textDark, 
                    padding: '12px 24px', 
                    borderRadius: '12px', 
                    textDecoration: 'none', 
                    fontWeight: 600,
                    textAlign: 'center',
                    border: `2px solid ${colors.textDark}`,
                    boxShadow: `4px 4px 0px ${colors.textDark}`,
                    alignSelf: 'flex-start'
                  }}>
                    Book This
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section style={{ backgroundColor: colors.primary, padding: '80px 24px', marginTop: '40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: fonts.heading, fontSize: '48px', color: 'white', textAlign: 'center', marginBottom: '48px', textTransform: 'lowercase' }}>
            add-ons
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {addOns.map((addon, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: addon.featured ? colors.accent : 'white',
                  color: colors.textDark,
                  padding: '14px 24px',
                  borderRadius: '100px',
                  border: `2px solid ${colors.textDark}`,
                  fontFamily: fonts.body,
                  fontWeight: 600,
                  fontSize: '15px',
                  boxShadow: addon.featured ? `4px 4px 0px ${colors.textDark}` : 'none',
                  transform: addon.featured ? 'rotate(-2deg)' : 'none',
                }}
              >
                {addon.name} {addon.featured && '✨'}
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', marginTop: '32px', fontFamily: fonts.body }}>
            Add any to your bath or grooming • $8-15 each
          </p>
        </div>
      </section>
    </main>
  );
                }
