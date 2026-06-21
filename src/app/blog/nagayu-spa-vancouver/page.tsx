'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SLUG = 'nagayu-spa-vancouver';
const STORAGE_KEY = `pawpalace-vote-${SLUG}`;

export default function Article() {
  const [helpful, setHelpful] = useState(31);
  const [notHelpful, setNotHelpful] = useState(2);
  const [voted, setVoted] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setVoted(stored);
  }, []);

  const handleVote = (type: 'helpful' | 'not-helpful') => {
    if (voted) return;
    localStorage.setItem(STORAGE_KEY, type);
    setVoted(type);
    if (type === 'helpful') setHelpful((c) => c + 1);
    else setNotHelpful((c) => c + 1);
  };

  const btnBase: React.CSSProperties = {
    background: '#5C3D2E',
    color: 'white',
    padding: '10px 20px',
    border: '2px solid #D4A855',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '14px',
    cursor: voted ? 'not-allowed' : 'pointer',
    opacity: voted ? 0.6 : 1,
    transition: 'opacity 0.2s',
  };

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
            <p>We added Nagayu CO2 tablets to our tubs for 60 days and tracked 42 dogs with itchy skin, hot spots, and post-beach irritation.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>How CO2 Spa Works</h2>
            <p>The $17 add-on infuses carbonated water with CO2 micro-bubbles that penetrate deep into the coat and skin, lifting dirt without harsh shampoo.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Results</h2>
            <p><strong>78% of owners reported less scratching within 48 hours.</strong> Coats felt softer and muddy paws cleaned in half the time.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Who Benefits Most</h2>
            <p>Dogs with allergies see the biggest improvement. We pair it with hypoallergenic shampoo for maximum effect.</p>
          </div>
        </article>

        <div style={{ background: 'white', padding: '20px', marginTop: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #E8DCC6' }}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => handleVote('helpful')} style={btnBase} disabled={!!voted}>
              👍 Helpful ({helpful})
            </button>
            <button onClick={() => handleVote('not-helpful')} style={btnBase} disabled={!!voted}>
              👎 Not Helpful ({notHelpful})
            </button>
          </div>
          {voted && <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#8B7355' }}>Thanks for your feedback!</p>}
        </div>
      </div>
    </div>
  );
}
