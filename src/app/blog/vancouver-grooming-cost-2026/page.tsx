'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SLUG = 'vancouver-grooming-cost-2026';

export default function Article() {
  const [helpful, setHelpful] = useState(0);
  const [notHelpful, setNotHelpful] = useState(0);
  const [voted, setVoted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch counts from Supabase
    fetch(`/api/likes?slug=${SLUG}`)
      .then((r) => r.json())
      .then((data) => {
        setHelpful(data.helpful || 0);
        setNotHelpful(data.not_helpful || 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Check if user already voted (localStorage only for UI lock)
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
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600"
            style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
            alt="Dog in rain"
          />
          <h1 style={{ fontSize: '30px', color: '#5C3D2E', fontFamily: 'Georgia, serif' }}>
            How Much Does Dog Grooming Cost in Vancouver in 2026?
          </h1>
          <div style={{ lineHeight: '1.7', color: '#333', marginTop: '16px' }}>
            <p>Wondering what you&apos;ll actually pay for dog grooming in Vancouver this year? We&apos;ve tracked real prices from Kitsilano to North Vancouver across 12 studios, including our own Paw Palace.</p>
            <p>In 2026, a basic bath and tidy for small breeds starts around $65 to $75. Labs and Golden Retrievers average $95 to $110. Standard Doodles range $125 to $150 for a full groom. Japanese scissor finishes add $20 to $35. Mobile groomers charge a $25 to $40 convenience fee.</p>
            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>What Moves the Price</h2>
            <p>Factors that affect cost include coat condition, matting severity, breed size, and add-ons like Nagayu CO2 spa, teeth brushing, and de-shedding treatments. Dogs that haven&apos;t been groomed in 6+ months often need dematting, which adds $15 to $40 depending on severity.</p>
            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Neighbourhood Breakdown</h2>
            <p>Kitsilano and West End studios tend to be 10-15% higher than East Van. North Vancouver sits in the middle. Mobile groomers cover all areas but charge the convenience fee. Paw Palace pricing is competitive with Kitsilano studios while offering the same premium products and Japanese scissor finishes.</p>
            <p>This guide breaks down exactly what&apos;s included at each price point so you can compare apples to apples when choosing a groomer.</p>
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
