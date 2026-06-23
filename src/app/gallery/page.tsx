'use client'

import React, { useEffect, useRef, useState } from 'react'

type BeforeAfterProps = { before: string; after: string; breed: string; service: string }

function BeforeAfter({ before, after, breed, service }: BeforeAfterProps) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dragging = useRef(false)

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current ||!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const clientX = 'touches' in e? e.touches[0].clientX : (e as MouseEvent).clientX
      let p = ((clientX - rect.left) / rect.width) * 100
      p = Math.max(0, Math.min(100, p))
      setPos(p)
    }
    const onUp = () => { dragging.current = false }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseDown={() => (dragging.current = true)}
      onTouchStart={() => (dragging.current = true)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#000',
        boxShadow: '0 10px 24px rgba(61,43,31,0.12)',
        cursor: 'ew-resize',
      }}
    >
      <div style={{ position: 'relative', width: '100%', paddingBottom: '125%' }}>
        <img
          src={after}
          alt={`${breed} after`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: `${pos}%`, height: '100%', overflow: 'hidden' }}>
          <img
            src={before}
            alt={`${breed} before`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: `${pos}%`,
            width: '2px',
            height: '100%',
            backgroundColor: 'white',
            transform: 'translateX(-1px)',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 32,
              height: 32,
              backgroundColor: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L2 8L6 13M10 3L14 8L10 13" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '14px 16px',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
            color: 'white',
          }}
        >
          <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 18 }}>{breed}</div>
          <div style={{ fontSize: 12, opacity: 0.9, fontFamily: 'DM Sans, sans-serif' }}>{service}</div>
        </div>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const items: Array<BeforeAfterProps> = [
    {
      breed: 'Goldendoodle',
      service: 'Full Groom & Teddy Bear Cut',
      before: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&auto=format',
      after: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&auto=format',
    },
    {
      breed: 'Standard Poodle',
      service: 'Scissor Cut & Spa',
      before: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&auto=format',
      after: 'https://images.unsplash.com/photo-1615751073681-1f9c6ef1c1b7?w=800&auto=format',
    },
    {
      breed: 'Shih Tzu',
      service: 'Puppy Cut',
      before: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format',
      after: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format',
    },
    {
      breed: 'Bernedoodle',
      service: 'De-matt & Full Groom',
      before: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?w=800&auto=format',
      after: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format',
    },
    {
      breed: 'Bichon Frise',
      service: 'Breed Standard Cut',
      before: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=800&auto=format',
      after: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&auto=format',
    },
    {
      breed: 'Mini Poodle',
      service: 'Asian Fusion Style',
      before: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&auto=format',
      after: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&auto=format',
    },
  ]

  return (
    <div style={{ backgroundColor: '#FFF7ED', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ color: '#C67B5C', fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8, fontFamily: 'DM Sans, sans-serif' }}>
            Our Work
          </p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem,5vw,3.5rem)', color: '#3D2B1F', margin: 0 }}>
            Gallery
          </h1>
          <p style={{ color: '#6B5D52', fontFamily: 'DM Sans, sans-serif', marginTop: 12 }}>Drag the slider to see before and after</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
          {items.map((it, i) => (
            <BeforeAfter key={i} {...it} />
          ))}
        </div>
      </div>
    </div>
  )
    }
