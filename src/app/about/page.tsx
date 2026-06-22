'use client'

import { useEffect, useRef, useState } from 'react'

export default function AboutPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  // Magazine-style scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Interactive page tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -20,
    })
  }

  return (
    <div style={{ backgroundColor: '#FFF7ED', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500&display=swap');
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .magazine-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .magazine-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .drop-cap::first-letter {
          font-family: 'Playfair Display', serif;
          float: left;
          font-size: 5.5rem;
          line-height: 0.8;
          margin: 8px 12px 0 0;
          color: #C67B5C;
          font-weight: 600;
        }
      `}</style>

      {/* Hero Magazine Cover */}
      <div 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '80px 24px 60px',
          perspective: '1000px'
        }}
      >
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ 
            fontFamily: 'DM Sans, sans-serif', 
            color: '#C67B5C', 
            fontSize: '14px', 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Est. Vancouver
          </p>
          <h1 style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
            color: '#3D2B1F',
            fontWeight: 700,
            lineHeight: 0.9,
            margin: 0
          }}>
            About<br/>Paw Palace
          </h1>
        </div>

        {/* Magazine spread */}
        <div 
          className="reveal"
          style={{
            transform: `rotateY(${mousePos.x * 0.1}deg) rotateX(${mousePos.y * 0.1}deg)`,
            transition: 'transform 0.3s ease-out',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="magazine-grid">
            {/* Left column - Story */}
            <div>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '48px', 
                borderRadius: '4px',
                boxShadow: '0 20px 40px rgba(61,43,31,0.08)',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-2px', 
                  left: '48px', 
                  right: '48px', 
                  height: '4px', 
                  backgroundColor: '#D4A855' 
                }} />
                
                <p className="drop-cap" style={{ 
                  fontSize: '18px', 
                  lineHeight: 1.8, 
                  color: '#3D2B1F',
                  marginBottom: '24px'
                }}>
                  Paw Palace Dog Grooming 宠妃宠物美容 was founded by Hang Li & Hailun Sun in the heart of Vancouver. Located at 4088 Macdonald St, we built our reputation on one simple principle: every dog deserves to be treated like royalty.
                </p>
                
                <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#3D2B1F', marginBottom: '24px' }}>
                  We specialize in gentle, detailed grooming for all breeds — from the tiniest Yorkie to the fluffiest Bernedoodle. No rushing, no cages, just careful scissor work and calm handling. Vancouver's rain means muddy paws year-round, and we understand West Coast coats better than anyone.
                </p>

                <div style={{ 
                  borderLeft: '3px solid #D4A855', 
                  paddingLeft: '24px', 
                  margin: '32px 0',
                  fontStyle: 'italic'
                }}>
                  <p style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: '22px', 
                    color: '#3D2B1F',
                    lineHeight: 1.4,
                    margin: 0
                  }}>
                    "We take time with each dog. We discuss their needs before we start, because trust is everything."
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Images */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ 
                overflow: 'hidden', 
                borderRadius: '4px',
                transform: `translateZ(20px)`,
                boxShadow: '0 15px 30px rgba(61,43,31,0.12)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&auto=format" 
                  alt="Golden retriever after grooming"
                  style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ overflow: 'hidden', borderRadius: '4px', boxShadow: '0 10px 20px rgba(61,43,31,0.1)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&auto=format" 
                    alt="Poodle grooming detail"
                    style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ overflow: 'hidden', borderRadius: '4px', boxShadow: '0 10px 20px rgba(61,43,31,0.1)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&auto=format" 
                    alt="Dog spa treatment"
                    style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Magazine Footer */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div className="reveal" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px',
          borderTop: '1px solid #D4C4A8',
          paddingTop: '60px'
        }}>
          <div>
            <h3 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontSize: '1.5rem', 
              color: '#3D2B1F',
              marginBottom: '16px'
            }}>
              Visit Us
            </h3>
            <p style={{ color: '#3D2B1F', lineHeight: 1.6, marginBottom: '8px' }}>
              <strong>Hang Li & Hailun Sun</strong><br/>
              Paw Palace Dog Grooming<br/>
              4088 Macdonald St<br/>
              Vancouver, BC V6L 2P2
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontSize: '1.5rem', 
              color: '#3D2B1F',
              marginBottom: '16px'
            }}>
              Hours
            </h3>
            <p style={{ color: '#3D2B1F', lineHeight: 1.8, fontFamily: 'DM Sans, monospace' }}>
              Mon–Fri: 10:30–17:30<br/>
              Saturday: 10:30–15:00<br/>
              Sunday: Closed
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontSize: '1.5rem', 
              color: '#3D2B1F',
              marginBottom: '16px'
            }}>
              Book
            </h3>
            <p style={{ color: '#3D2B1F', lineHeight: 1.6, marginBottom: '16px' }}>
              (604) 722-2070<br/>
              hello@pawpalace.ca
            </p>
            <a 
              href="/booking"
              style={{
                display: 'inline-block',
                backgroundColor: '#C67B5C',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                borderRadius: '2px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A85C3F'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C67B5C'}
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
