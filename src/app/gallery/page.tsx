'use client'

import React, { useEffect, useRef, useState } from 'react'

type BeforeAfterProps = { before: string; after: string; breed: string; service: string }

function BeforeAfter({ before, after, breed, service }: BeforeAfterProps) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dragging = useRef(false)

  useEffect(() => {
    function onMove(e: MouseEvent | TouchEvent) {
      if (!dragging.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
      let p = ((clientX - rect.left) / rect.width) * 100
      p = Math.max(0, Math.min(100, p))
      setPos(p)
    }

    function onUp() {
      dragging.current = false
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove)
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
      style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, backgroundColor: '#000' }}
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
        />
      </div>

      <div style={{ padding: '8px 0', color: '#fff' }}>
        <div style={{ fontWeight: 600 }}>{breed}</div>
        <div style={{ fontSize: 12 }}>{service}</div>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  // Keep an empty list here so the page builds even if there are no images in the repo yet.
  const items: Array<BeforeAfterProps> = []

  return (
    <section style={{ padding: 24 }}>
      <h1>Gallery</h1>
      {items.length === 0 ? (
        <p>No gallery items yet.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 16 }}>
          {items.map((it, i) => (
            <BeforeAfter key={i} {...it} />
          ))}
        </div>
      )}
    </section>
  )
}
