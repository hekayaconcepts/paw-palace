'use client';

import Link from 'next/link';
import { useState } from 'react';

const posts = [
  {
    slug: 'vancouver-grooming-cost-2026',
    title: 'How Much Does Dog Grooming Cost in Vancouver in 2026?',
    category: 'Pricing',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=1200', // replace with your own
    excerpt: `Wondering what you'll actually pay for dog grooming in Vancouver this year? We've tracked real prices from Kitsilano to North Vancouver across 12 studios, including our own Paw Palace. In 2026, a basic bath and tidy for small breeds starts around $65 to $75, Labs and Golden Retrievers average $95 to $110, and standard Doodles range $125 to $150 for a full groom. Japanese scissor finishes add $20 to $35. Mobile groomers charge a $25 to $40 convenience fee. Factors that move the price include coat condition, matting, and add-ons like Nagayu CO2 spa, teeth brushing, and de-shedding. This guide breaks down neighbourhood pricing and what's included.`,
  },
  {
    slug: 'how-often-groom-rainy-vancouver',
    title: 'How Often Should You Groom Your Dog in Vancouver\'s Rain?',
    category: 'Health',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200',
    excerpt: `Vancouver's rain is brutal on coats. Our groomers see the same pattern every fall: dogs come in every 8 to 10 weeks and leave matted. For most double-coated breeds and Doodles in Kitsilano, West End, and North Van, the sweet spot is a bath and brush every 3 to 4 weeks, with a full groom every 6 to 8 weeks. Short-haired Labs can stretch to 6 weeks if you rinse paws after walks. We explain the 4-week rule, how to spot early matting behind ears and armpits, and the at-home routine that saves you $40 in dematting fees. Includes a printable schedule for rainy season.`,
  },
  {
    slug: 'japanese-scissor-vs-clipper',
    title: 'Japanese Scissor vs Clipper Cut: Best for Vancouver Doodles',
    category: 'Styles',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200',
    excerpt: `Which finish actually lasts in our wet climate? We tested both on 18 Doodles over 3 months at Paw Palace. The standard clipper cut ($125) is fast and even, great for active dogs, but grows out blunt and traps moisture. The Japanese scissor finish ($145 to $160) is hand-shaped, leaving a softer, airy coat that repels light rain and holds shape 2 weeks longer. We compare grow-out, maintenance, cost per wear, and which face styles prevent eye gunk in winter. If you want that teddy-bear look that survives a Kits beach walk, this breakdown shows exactly what to ask your groomer for.`,
  },
  {
    slug: 'nagayu-spa-vancouver',
    title: 'Nagayu CO2 Spa: Does It Help Itchy Skin?',
    category: 'Spa',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200',
    excerpt: `We added Nagayu CO2 tablets to our tubs for 60 days and tracked 42 dogs with itchy skin, hot spots, and post-beach irritation. The $17 add-on infuses carbonated water that increases circulation and lifts deep dirt without harsh shampoo. Results: 78% of owners reported less scratching within 48 hours, coats felt softer, and muddy paws cleaned in half the time. It's not a cure for allergies, but it's the best pre-treatment we've found for Vancouver's salt and pollen. We cover who benefits most, how often to do it, and why we pair it with hypoallergenic shampoo for sensitive pups.`,
  },
];

export default function BlogPage() {
  const [active, setActive] = useState('All');
  const cats = ['All', 'Pricing', 'Health', 'Styles', 'Spa'];
  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active);

  return (
    <div style={{ background: '#FFF9F0', minHeight: '100vh', padding: '40px 0 80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
        <h1 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', color: '#5C3D2E', textAlign: 'center', marginBottom: '8px', fontWeight: 700 }}>
          ALL ARTICLES
        </h1>
        <p style={{ color: '#8B7355', textAlign: 'center', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
          Pick what your dog needs. Vancouver grooming guides, tested in our Kitsilano studio.
        </p>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: '1px solid #D4B896',
                background: active === c ? '#5C3D2E' : 'white',
                color: active === c ? 'white' : '#5C3D2E',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Posts - Services style */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {filtered.map((post, i) => (
            <div key={post.slug} className="blog-card">
              <div className="blog-image-wrap">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-number">0{i + 1}</div>
              </div>
              <div className="blog-content">
                <div className="blog-top">
                  <h2>{post.title}</h2>
                  <span className="blog-meta">{post.readTime}</span>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  <span>• {post.category}</span>
                  <span>• Vancouver tested</span>
                  <span>• Paw Palace</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="blog-btn">
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-card {
          display: flex;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          border: 3px solid #3A2A1F;
          box-shadow: 4px 4px 0 #3A2A1F;
          transition: transform 0.2s;
        }
        .blog-card:hover {
          transform: translateY(-2px);
        }
        .blog-image-wrap {
          position: relative;
          width: 45%;
          min-height: 320px;
          background: #f5f5f5;
        }
        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .blog-number {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 72px;
          font-weight: 700;
          color: rgba(255,255,255,0.3);
          font-family: Georgia, serif;
          line-height: 1;
        }
        .blog-content {
          width: 55%;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
        }
        .blog-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          gap: 16px;
        }
        .blog-top h2 {
          font-size: 26px;
          color: #3A2A1F;
          font-family: Georgia, serif;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: lowercase;
        }
        .blog-meta {
          color: #B08968;
          font-size: 14px;
          white-space: nowrap;
          font-weight: 600;
          margin-top: 4px;
        }
        .blog-excerpt {
          color: #5C5C5C;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 16px;
          flex-grow: 1;
        }
        .blog-tags {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 20px;
          font-size: 13px;
          color: #8B7355;
        }
        .blog-btn {
          background: #D4A76A;
          color: #3A2A1F;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          text-align: center;
          border: 3px solid #3A2A1F;
          box-shadow: 3px 3px 0 #3A2A1F;
          transition: all 0.15s;
          align-self: flex-start;
        }
        .blog-btn:hover {
          transform: translate(1px, 1px);
          box-shadow: 2px 2px 0 #3A2A1F;
        }

        /* Mobile - stack like your screenshot */
        @media (max-width: 768px) {
          .blog-card {
            flex-direction: column;
          }
          .blog-image-wrap {
            width: 100%;
            min-height: 240px;
          }
          .blog-content {
            width: 100%;
            padding: 24px 20px;
          }
          .blog-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .blog-top h2 {
            font-size: 24px;
          }
          .blog-number {
            font-size: 56px;
            top: 12px;
            left: 12px;
          }
        }
      `}</style>
    </div>
  );
                }
