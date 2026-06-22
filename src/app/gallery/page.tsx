'use client'

import { useState } from 'react'

function BeforeAfter({ before, after, breed, service }: { before: string; after: string; breed: string; service: string }) {
  const [pos, setPos] = useState(50)

  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', backgroundColor: '#000' }}>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '125%' }}>
        <img src={after} alt={`${breed} after`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: `${pos}%`, height: '100%', overflow: 'hidden' }}>
          <img src={before} alt={`${breed} before`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', minWidth: `${10000/pos}%` }} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: `${pos}%`, width: '2px', height: '100%', backgroundColor: 'white', transform: 'translateX(-
