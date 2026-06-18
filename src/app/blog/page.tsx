'use client';

import Link from 'next/link';
import { useState } from 'react';

const posts = [
  {
    slug: 'vancouver-grooming-cost-2026',
    title: 'How Much Does Dog Grooming Cost in Vancouver in 2026?',
    excerpt: 'Complete price guide for Labs, Doodles, and small breeds. What you actually pay in Kitsilano vs North Van.',
    category: 'Pricing',
    readTime: '4 min',
  },
  {
    slug: 'how-often-groom-rainy-vancouver',
    title: 'How Often Should You Groom Your Dog in Vancouver\'s Rain?',
    excerpt: 'Vet-approved schedule to prevent matting in our wet climate. The 4-week rule that saves coats.',
    category: 'Health',
    readTime: '3 min',
  },
  {
    slug: 'japanese-scissor-vs-clipper',
    title: 'Japanese Scissor vs Clipper Cut: Best for Vancouver Doodles',
    excerpt: 'Which finish lasts longer in rain? We compare the $85 scissor cut to the standard clipper.',
    category: 'Styles',
    readTime: '5 min',
  },
  {
    slug: 'nagayu-spa-vancouver',
    title: 'Nagayu CO2 Spa: Does It Help Itchy Skin?',
    excerpt: 'We tested the treatment Vancouver groomers charge $17 for. Real results on hot spots and allergies.',
    category: 'Spa',
    readTime: '4 min',
  },
];

export default function BlogPage() {
  const [active, setActive] = useState('All');
  const cats = ['All', 'Pricing', 'Health', 'Styles', 'Spa'];
  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active);

  return (
    <div style={{ background: '#FFF9F0', minHeight: '100vh', padding: '20px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <h1 style={{ fontSize: '32px', fontFamily: 'serif', color: '#5C3D2E', marginBottom: '8px' }}>
          Paw Palace Journal
        </h1>
        <p style={{ color: '#8B7355', marginBottom: '24px' }}>
          Vancouver dog grooming guides, tested in our Kitsilano studio
        </p>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid #D4B896',
                background: active === c ? '#5C3D2E' : 'white',
                color: active === c ? 'white' : '#5C3D2E',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div style={{ display: 'grid', gap: '20px' }}>
          {filtered.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #E8DCC6',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  display: 'inline-block',
                  background: '#F5EFE6',
                  color: '#8B7355',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  marginBottom: '12px'
                }}>
                  {post.category}
                </div>
                <h2 style={{
                  fontSize: '20px',
                  color: '#5C3D2E',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>
                  {post.title}
                </h2>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', marginBottom: '12px' }}>
                  {post.excerpt}
                </p>
                <div style={{ color: '#999', fontSize: '13px' }}>
                  {post.readTime} • Paw Palace
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
