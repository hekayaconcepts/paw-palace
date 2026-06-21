'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SLUG = 'how-often-groom-rainy-vancouver';
const STORAGE_KEY = `pawpalace-vote-${SLUG}`;

export default function Article() {
  const [helpful, setHelpful] = useState(14);
  const [notHelpful, setNotHelpful] = useState(1);
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
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600"
            style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
            alt="Dog walking in Vancouver rain"
          />
          <h1 style={{ fontSize: '30px', color: '#5C3D2E', fontFamily: 'Georgia, serif' }}>
            How Often Should You Groom Your Dog in Vancouver&apos;s Rain?
          </h1>
          <div style={{ lineHeight: '1.7', color: '#333', marginTop: '16px' }}>
            <p>Vancouver&apos;s rain is brutal on coats. Our groomers see the same pattern every fall: dogs come in every 8 to 10 weeks and leave matted. The combination of constant moisture, mud, and trapped humidity under dense fur creates the perfect storm for skin issues, hot spots, and painful tangles.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>The 4-Week Rule</h2>
            <p>For most double-coated breeds and Doodles in Kitsilano, West End, and North Van, the sweet spot is a bath and brush every 3 to 4 weeks, with a full groom every 6 to 8 weeks. Short-haired Labs can stretch to 6 weeks if you rinse paws after every walk.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Where Matting Starts First</h2>
            <p>The spots most owners miss are behind the ears, under the armpits, and around the tail base. Run your fingers through these spots weekly — if you feel any resistance, it&apos;s time for a professional bath and brush.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>At-Home Routine That Works</h2>
            <p>Rinse paws and belly after every walk. Use a microfiber towel to blot — not rub. A slicker brush every few days prevents small tangles from becoming $40 dematting sessions.</p>
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
