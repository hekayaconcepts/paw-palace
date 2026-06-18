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
    image: '/blog/cost-hero.jpg',
  },
  {
    slug: 'how-often-groom-rainy-vancouver',
    title: 'How Often Should You Groom Your Dog in Vancouver\'s Rain?',
    excerpt: 'Vet-approved schedule to prevent matting in our wet climate. The 4-week rule that saves coats.',
    category: 'Health',
    readTime: '3 min',
    image: '/blog/rain-hero.jpg',
  },
  {
    slug: 'japanese-scissor-vs-clipper',
    title: 'Japanese Scissor vs Clipper Cut: Best for Vancouver Doodles',
    excerpt: 'Which finish lasts longer in rain? We compare the $85 scissor cut to the standard clipper.',
    category: 'Styles',
    readTime: '5 min',
    image: '/blog/scissor-hero.jpg',
  },
  {
    slug: 'nagayu-spa-vancouver',
    title: 'Nagayu CO2 Spa: Does It Help Itchy Skin?',
    excerpt: 'We tested the treatment Vancouver groomers charge $17 for. Real results on hot spots and allergies.',
    category: 'Spa',
    readTime: '4 min',
    image: '/blog/nagayu-hero.jpg',
  },
];

const categories = ['All', 'Pricing', 'Health', 'Styles', 'Spa'];

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All'
   ? posts
    : posts.filter(p => p.category === activeCat);

  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      {/* Header - mobile safe */}
      <div className="sticky top-0 z-10 bg-[#FAFAF9]/95 backdrop-blur border-b border-[#E5E5E3]">
        <div className="w-full max-w-[1200px] mx-auto px-4 py-4">
          <h1 className="text-[28px] md:text-[36px] font-semibold text-[#1A1A1A]">Paw Palace Journal</h1>
          <p className="text-[14px] text-[#666] mt-1">Vancouver dog grooming guides, tested in our Kitsilano studio</p>
        </div>
      </div>

      {/* Categories - horizontal scroll on mobile, no overflow */}
      <div className="w-full max-w-[1200px] mx-auto px-4 py-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-max">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-full text-[14px] font-medium whitespace-nowrap transition-all ${
                activeCat === cat
                 ? 'bg-[#1A1A1A] text-white'
                  : 'bg-white text-[#666] border border-[#E5E5E3] hover:border-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid - 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="w-full max-w-[1200px] mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-[16px] overflow-hidden border border-[#E5E5E3] hover:border-[#1A1A1A] transition-all h-full flex flex-col">
                {/* Image - prevents overflow */}
                <div className="relative w-full aspect-[4/3] bg-[#F5F5F3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur rounded-full text-[11px] font-medium text-[#1A1A1A]">
                    {post.category}
                  </span>
                </div>

                {/* Content - with line clamp to prevent overflow */}
                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="text-[18px] font-semibold text-[#1A1A1A] leading-snug mb-2 group-hover:text-[#666] transition-colors"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                    {post.title}
                  </h2>
                  <p className="text-[14px] text-[#666] leading-relaxed mb-4 flex-1"
                     style={{
                       display: '-webkit-box',
                       WebkitLineClamp: 3,
                       WebkitBoxOrient: 'vertical',
                       overflow: 'hidden'
                     }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-[12px] text-[#999]">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>Paw Palace</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
       .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
       .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
      }
