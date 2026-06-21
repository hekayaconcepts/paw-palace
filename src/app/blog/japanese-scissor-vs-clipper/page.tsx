'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SLUG = 'japanese-scissor-vs-clipper';

export default function Article() {
  const [helpful, setHelpful] = useState(0);
  const [notHelpful, setNotHelpful] = useState(0);
  const [voted, setVoted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/likes?slug=${SLUG}`)
      .then((r) => r.json())
      .then((data) => {
        setHelpful(data.helpful || 0);
        setNotHelpful(data.not_helpful || 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    if (localStorage.getItem(`voted-${SLUG}`)) setVoted(true);
  }, []);

  const handleVote = async (type: 'helpful' | 'not-helpful') => {
    if (voted || loading) return;
    try {
      const res = await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: SLUG, type }),
      });
      if (res.ok) {
        const data = await res.json();
        setHelpful(data.helpful);
        setNotHelpful(data.not_helpful);
        setVoted(true);
        localStorage.setItem(`voted-${SLUG}`, 'true');
      }
    } catch {
      // silently fail
    }
  };

  const btnBase: React.CSSProperties = {
    background: '#5C3D2E',
    color: 'white',
    padding: '10px 20px',
    border: '2px solid #D4A855',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '14px',
    cursor: voted || loading ? 'not-allowed' : 'pointer',
    opacity: voted ? 0.6 : 1,
    transition: 'opacity 0.2s',
  };

  return (
    <div style={{ background: '#FFF9F0', minHeight: '100vh', padding: '20px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
        <Link href="/blog" style={{ color: '#8B7355' }}>← Back</Link>

        <article style={{ background: 'white', borderRadius: '16px', marginTop: '20px', padding: '32px 24px', border: '2px solid #E8DCC6' }}>
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1600"
            style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
            alt="Doodle being groomed with scissors"
          />
          <h1 style={{ fontSize: '30px', color: '#5C3D2E', fontFamily: 'Georgia, serif' }}>
            Japanese Scissor vs Clipper Cut: Best for Vancouver Doodles
          </h1>
          <div style={{ lineHeight: '1.7', color: '#333', marginTop: '16px' }}>
            <p>Which finish actually lasts in our wet climate? We tested both on 18 Doodles over 3 months at Paw Palace.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>The Clipper Cut ($125)</h2>
            <p>Fast, even, and affordable. But clippers leave a blunt edge that traps moisture. In Vancouver&apos;s rain, this means more blow-drying and faster matting.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>The Japanese Scissor Finish ($145–$160)</h2>
            <p>Hand-shaped, strand by strand. The coat repels light rain and holds shape 2 weeks longer. Cost per wear is actually lower than clipper cuts over a year.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Which Face Style Prevents Eye Gunk?</h2>
            <p>A rounded scissor face cut keeps hair out of eyes without harsh clipper lines. It&apos;s what we recommend for all Doodle clients.</p>
          </div>
        </article>

        <div style={{ background: 'white', padding: '20px', marginTop: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #E8DCC6' }}>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => handleVote('helpful')} style={btnBase} disabled={voted || loading}>
              👍 Helpful ({loading ? '...' : helpful})
            </button>
            <button onClick={() => handleVote('not-helpful')} style={btnBase} disabled={voted || loading}>
              👎 Not Helpful ({loading ? '...' : notHelpful})
            </button>
          </div>
          {voted && <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#8B7355' }}>Thanks for your feedback!</p>}
        </div>
      </div>
    </div>
  );
}
