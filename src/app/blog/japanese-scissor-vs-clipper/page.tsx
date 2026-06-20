'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Article() {
  const [likes, setLikes] = useState(22);

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
            <p>Which finish actually lasts in our wet climate? We tested both on 18 Doodles over 3 months at Paw Palace. The results were clear — and the right choice depends on your dog&apos;s lifestyle, your tolerance for maintenance, and how much you care about that teddy-bear look surviving a Kits beach walk.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>The Clipper Cut ($125)</h2>
            <p>The standard clipper cut is fast, even, and affordable. A skilled groomer can finish a Doodle in 90 minutes. The result is uniform and clean — great for active dogs who don&apos;t care about looking fancy. But there are trade-offs. Clippers leave a blunt edge on the hair, which means the coat grows out looking choppy rather than natural. In Vancouver&apos;s rain, that blunt edge traps moisture against the skin more than a scissor-cut coat does.</p>
            <p>We also see more &quot;clipper tracks&quot; — visible lines where the blade passed — on coats that aren&apos;t perfectly even to begin with. If your Doodle has any matting or uneven growth from a missed groom, the clipper will highlight it.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>The Japanese Scissor Finish ($145–$160)</h2>
            <p>This is hand-shaped, strand by strand, using Japanese steel scissors that cost more than some grooming sessions. The result is a softer, airy coat that repels light rain and holds its shape 2 weeks longer than a clipper cut. Each hair is cut at a slightly different angle, which means water beads and rolls off rather than soaking in.</p>
            <p>For Vancouver&apos;s climate, this matters. A scissor-finished Doodle stays drier after a walk in the rain, which means less blow-drying time, less skin irritation, and a coat that looks good longer between grooms.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Cost Per Wear Breakdown</h2>
            <p>At $125 every 6 weeks, the clipper cut costs about $1,080 per year. At $150 every 8 weeks (because it holds longer), the scissor finish costs about $975 per year. The scissor finish actually saves you money over time — and your dog looks better doing it.</p>

            <h2 style={{ color: '#5C3D2E', marginTop: '24px' }}>Which Face Style Prevents Eye Gunk?</h2>
            <p>In winter, long hair around the eyes collects discharge and creates crusty buildup. We recommend a rounded face cut with the scissor finish — it keeps hair out of the eyes without the harsh lines of a clipper. The Japanese scissors let us taper the hair naturally around the eyes rather than cutting a hard line.</p>
            <p>If you want that teddy-bear look that survives a Kits beach walk, ask your groomer for a Japanese scissor finish with a rounded face. It&apos;s what we do for most of our Doodle clients at Paw Palace, and the results speak for themselves.</p>
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
