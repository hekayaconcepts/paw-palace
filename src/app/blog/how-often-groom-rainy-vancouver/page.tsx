'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Article() {
  const [likes, setLikes] = useState(14);

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
            <p>Vancouver&apos;s rain is brutal on coats. Our groomers see the same pattern every fall: dogs come in every 8 to 10 weeks and leave matted. The combination of constant moisture, mud, and trapped humidity under dense fur creates the perfect storm for skin issues, hot spots, and painful tangles that no amount of at-home brushing can fix.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>The 4-Week Rule</h2>
            <p>For most double-coated breeds and Doodles in Kitsilano, West End, and North Van, the sweet spot is a bath and brush every 3 to 4 weeks, with a full groom every 6 to 8 weeks. This isn&apos;t about vanity — it&apos;s about preventing the matting that pulls on skin and traps moisture against the body.</p>
            <p>Short-haired Labs and similar breeds can stretch to 6 weeks between full grooms if you rinse paws after every walk and do a quick brush-down at home. But even they need professional attention before the rainy season hits full swing in October.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Where Matting Starts First</h2>
            <p>The spots most owners miss are behind the ears, under the armpits, and around the tail base. These areas trap the most moisture and friction. By the time you can see matting on the back or sides, the hidden areas have been uncomfortable for weeks. Run your fingers through these spots weekly — if you feel any resistance or small tangles, it&apos;s time for a professional bath and brush.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>At-Home Routine That Actually Works</h2>
            <p>Between professional grooms, rinse your dog&apos;s paws and belly after every walk in the rain. Use a microfiber towel to blot — not rub — the coat. A quick once-over with a slicker brush every few days prevents the small tangles from becoming expensive dematting sessions. We&apos;ve seen owners save $40 to $60 per visit just by staying on top of the paw rinse.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Printable Rainy Season Schedule</h2>
            <p>At Paw Palace, we give every client a simple calendar: bath and brush in weeks 1 and 3, full groom in week 6, repeat. Adjust based on your dog&apos;s coat type and how much time they spend outside. Doodles and double-coated breeds stick to the 6-week full groom. Short-haired dogs can go 8 to 10 weeks if you&apos;re diligent with the at-home routine.</p>
            <p>Book a consultation and we&apos;ll build a custom schedule for your dog&apos;s breed, coat, and lifestyle.</p>
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
