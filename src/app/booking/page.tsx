'use client';
import { useState, useEffect } from 'react';
import { colors, fonts } from '@/lib/design-tokens';

const SERVICES = [ /* your 12 services */ ];

export default function BookingPage() {
  // ... keep all your state logic exactly as before ...

  return (
    <main style={{ backgroundColor: colors.background, minHeight: '100vh', padding: '20px 16px' }}>
      <div style={{ maxWidth: '440px', margin: '0 auto' }}>
        
        {/* SMALL HERO IMAGE - loads fast, mobile-friendly */}
        <div style={{ 
          height: '140px', 
          borderRadius: '16px 16px 0 0',
          overflow: 'hidden',
          border: `3px solid ${colors.textDark}`,
          borderBottom: 'none',
          backgroundImage: `linear-gradient(rgba(244,239,234,0.22), rgba(244,239,234,0.22)), url(https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }} />

        {/* FORM CARD - back to your theme */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '24px', 
          borderRadius: '0 0 16px 16px',
          border: `3px solid ${colors.textDark}`,
          borderTop: 'none',
          boxShadow: `5px 5px 0px ${colors.textDark}`
        }}>
          <h1 style={{ fontFamily: fonts.heading, fontSize: '32px', color: colors.textDark, margin: '0 16px 0' }}>
            Book Appointment
          </h1>
          
          {/* your form inputs here - use the inputStyle from before */}
        </div>
      </div>
    </main>
  );
}
