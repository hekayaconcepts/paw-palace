'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', petName: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', phone: '', petName: '', message: '' }) } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  return (
    <div style={{ backgroundColor: '#FFF7ED', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        .contact-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: start; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .input { width: 100%; padding: 14px; border: 1px solid #D4C4A8; border-radius: 2px; font-size: 15px; font-family: 'DM Sans', sans-serif; background: white; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; gap: 40px; } }
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#C67B5C', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Get in touch</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', color: '#3D2B1F', margin: 0 }}>Contact</h1>
        </div>

        <div className="contact-grid">
          <div style={{ backgroundColor: 'white', padding: '28px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(61,43,31,0.08)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#3D2B1F', marginBottom: '20px' }}>Send a message</h2>
            {status === 'sent' && <div style={{ padding: '16px', backgroundColor: '#F0F7F0', borderLeft: '4px solid #4A7C59', marginBottom: '20px' }}><p style={{ color: '#2D5016', margin: 0, fontWeight: 500 }}>Thank you! We'll reply within 24 hours.</p></div>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-row">
                <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="input" />
                <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="input" />
              </div>
              <div className="form-row">
                <input placeholder="Phone (optional)" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="input" />
                <input placeholder="Pet's name" value={form.petName} onChange={(e) => setForm({...form, petName: e.target.value})} className="input" />
              </div>
              <textarea required placeholder="How can we help? Tell us about your dog's breed, coat type, or any special needs..." rows={5} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="input" style={{ resize: 'vertical' }} />
              <button type="submit" disabled={status === 'sending'} style={{ backgroundColor: status === 'sending' ? '#A85C3F' : '#C67B5C', color: 'white', padding: '16px', border: 'none', borderRadius: '2px', fontSize: '15px', fontWeight: 500, letterSpacing: '0.5px', cursor: status === 'sending' ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans' }}>{status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}</button>
              {status === 'error' && <p style={{ color: '#B91C1C', fontSize: '14px', margin: 0 }}>Something went wrong. Please call (604) 722-2070</p>}
            </form>
          </div>
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#3D2B1F', marginBottom: '12px' }}>Paw Palace</h3>
              <p style={{ color: '#3D2B1F', lineHeight: 1.6, marginBottom: '8px' }}>Hang Li & Hailun Sun<br/>4088 Macdonald St<br/>Vancouver, BC V6L 2P2</p>
              <p style={{ color: '#3D2B1F', lineHeight: 1.6 }}><strong>(604) 722-2070</strong><br/>hello@pawpalace.ca</p>
            </div>
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F', marginBottom: '8px' }}>Hours</h4>
              <p style={{ color: '#6B5D52', lineHeight: 1.7, fontFamily: 'DM Sans, monospace', fontSize: '14px' }}>Monday–Friday: 10:30–17:30<br/>Saturday: 10:30–15:00<br/>Sunday: Closed</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '4px', borderLeft: '4px solid #D4A855' }}>
              <p style={{ color: '#3D2B1F', fontSize: '14px', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>For fastest booking, use our online booking system. This form is best for questions about services, pricing, or special needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}