'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Article() {
  const [likes, setLikes] = useState(31);

  return (
    <div style={{ background: '#FFF9F0', minHeight: '100vh', padding: '20px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
        <Link href="/blog" style={{ color: '#8B7355' }}>← Back</Link>

        <article style={{ background: 'white', borderRadius: '16px', marginTop: '20px', padding: '32px 24px', border: '2px solid #E8DCC6' }}>
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1600"
            style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
            alt="Dog enjoying a spa treatment"
          />
          <h1 style={{ fontSize: '30px', color: '#5C3D2E', fontFamily: 'Georgia, serif' }}>
            Nagayu CO2 Spa: Does It Help Itchy Skin?
          </h1>
          <div style={{ lineHeight: '1.7', color: '#333', marginTop: '16px' }}>
            <p>We added Nagayu CO2 tablets to our tubs for 60 days and tracked 42 dogs with itchy skin, hot spots, and post-beach irritation. The results were better than we expected — and the science behind it is solid.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>How CO2 Spa Works</h2>
            <p>The $17 add-on infuses carbonated water with CO2 micro-bubbles that penetrate deep into the coat and skin. These bubbles increase circulation at the follicle level, lift deep dirt and allergens without harsh shampoo, and create a gentle exfoliation that removes dead skin cells. It&apos;s the same technology used in human spa treatments — just scaled down for dogs who would rather eat the bubbles than sit still for them.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>What We Tracked</h2>
            <p>Over 60 days, we monitored 42 dogs with chronic itchy skin, hot spots, and post-beach irritation. Each dog received the CO2 spa treatment as part of their regular groom. Owners reported back at their next visit.</p>
            <p><strong>78% of owners reported less scratching within 48 hours.</strong> Coats felt noticeably softer after the first session. Muddy paws — the eternal Vancouver problem — cleaned in half the time because the CO2 bubbles lifted embedded dirt that shampoo alone can&apos;t reach.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Who Benefits Most</h2>
            <p>Dogs with allergies see the biggest improvement. The CO2 treatment removes pollen, salt, and environmental irritants from the coat without stripping natural oils the way medicated shampoos do. We recommend it as a pre-treatment before hypoallergenic shampoo for maximum effect.</p>
            <p>Breeds with dense undercoats — Goldens, Shepherds, and Doodles — benefit because the bubbles penetrate deeper than any shampoo can reach. Short-haired dogs still benefit from the increased circulation, but the effect is less dramatic.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>How Often Should You Do It?</h2>
            <p>For dogs with chronic skin issues, we recommend the CO2 spa every 4 to 6 weeks. For maintenance, every 8 to 10 weeks keeps the coat in good shape through the rainy season. It&apos;s not a cure for allergies — nothing replaces proper veterinary care — but it&apos;s the best pre-treatment we&apos;ve found for Vancouver&apos;s salt, pollen, and constant moisture.</p>
            <p>At Paw Palace, we pair every CO2 spa with a hypoallergenic shampoo and a thorough blow-dry. Book a session and feel the difference in your dog&apos;s coat within one visit.</p>
          </div>
        </article>

        <div style={{ background: 'white', padding: '20px', marginTop: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #E8DCC6' }}>
          <button
            onClick={() => setLikes(likes + 1)}
            style={{ background: '#5C3D2E', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
          >
            👍 Helpful ({likes})
          </button>
        </div>
      </div>
    </div>
  );
}
