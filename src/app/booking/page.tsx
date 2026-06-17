'use client';

import { useState, useEffect } from 'react';
import { colors, fonts } from '@/lib/design-tokens';

const SERVICES = [ /* same as before */
  { id: 'dog-bath', name: 'Dog Bath & Blow Dry', group: 'Dog' },
  { id: 'dog-full', name: 'Dog Full Service Grooming', group: 'Dog' },
  { id: 'dog-style', name: 'Dog Grooming & Styling', group: 'Dog' },
  { id: 'dog-nails', name: 'Dog Nail Trimming', group: 'Dog' },
  { id: 'dog-ears', name: 'Dog Ear Cleaning', group: 'Dog' },
  { id: 'dog-teeth', name: 'Dog Teeth Brushing', group: 'Dog' },
  { id: 'dog-gland', name: 'Dog Anal Gland Expression', group: 'Dog' },
  { id: 'cat-bath', name: 'Cat Bathing', group: 'Cat' },
  { id: 'cat-groom', name: 'Cat Grooming', group: 'Cat' },
  { id: 'cat-style', name: 'Cat Grooming & Styling', group: 'Cat' },
  { id: 'cat-nails', name: 'Cat Nail Trimming', group: 'Cat' },
  { id: 'cat-ears', name: 'Cat Ear Cleaning', group: 'Cat' },
];

export default function BookingPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', petName: '', date: '', notes: '' });
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCal, setShowCal] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [calDate, setCalDate] = useState(new Date());

  //... keep all your existing logic (toggleService, submit, calendar etc.)...

  const toggleService = (id: string) => setSelected(prev => prev.includes(id)? prev.filter(x => x!== id) : [...prev, id]);
  const submit = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); const serviceNames = selected.map(id => SERVICES.find(s => s.id === id)?.name).filter(Boolean); await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({...form, service: serviceNames.join(', ') }) }); setSent(true); };
  const today = new Date(); today.setHours(0,0,0,0); const year = calDate.getFullYear(); const month = calDate.getMonth(); const firstDay = new Date(year, month, 1).getDay(); const daysInMonth = new Date(year, month + 1, 0).getDate(); const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']; const selectDate = (day: number) => { const d = new Date(year, month, day); if (d < today) return; setForm({...form, date: d.toISOString().split('T')[0]}); setShowCal(false); }; const formatDate = (iso: string) => iso? new Date(iso+'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''; const closeAll = () => { setShowCal(false); setShowServices(false); };
  const inputStyle = { padding: '16px 18px', border: `2px solid ${colors.textDark}`, borderRadius: '14px', fontFamily: fonts.body, fontSize: '16px', backgroundColor: 'white', width: '100%', boxSizing: 'border-box' as const };
  const selectedLabel = selected.length === 0? 'Select Services' : selected.length === 1? SERVICES.find(s => s.id === selected[0])?.name : `${selected.length} services selected`;

  // CHANGE THIS URL to swap images
  const bgImage = 'https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg'; // funny Chihuahua bath
  // const bgImage = 'https://images.pexels.com/photos/2742261/pexels-photo-2742261.jpeg'; // Vancouver-common Labrador

  if (sent) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ textAlign: 'center', background: 'rgba(255,255,0.9)', padding: '40px', borderRadius: '20px', border: `3px solid ${colors.textDark}` }}>
        <div style={{ fontSize: '64px' }}>🐾</div><h1 style={{ fontFamily: fonts.heading, fontSize: '42px', color: colors.textDark }}>Request Sent!</h1>
      </div>
    </main>
  );

  return (
    <main onClick={closeAll} style={{ minHeight: '100vh', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* LIGHT overlay - was 0.88, now 0.45 */}
      <div style={{ backgroundColor: 'rgba(255,255,0.45)', minHeight: '100vh', padding: '100px 20px 60px', backdropFilter: 'blur(2px)' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', backgroundColor: 'rgba(244,239,234,0.92)', padding: '28px', borderRadius: '20px', border: `2px solid ${colors.textDark}`, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }} onClick={e => e.stopPropagation()}>
          <h1 style={{ fontFamily: fonts.heading, fontSize: '44px', color: colors.textDark, marginBottom: '24px' }}>Book Appointment</h1>
          {/*... rest of your form (services dropdown, inputs, calendar) stays exactly the same... */}
          <form onSubmit={submit} style={{ display: 'grid', gap: '14px' }}>
            {/* paste your existing services dropdown + inputs here */}
            <div style={{ position: 'relative' }}>
              <button type="button" onClick={() => setShowServices(!showServices)} style={{...inputStyle, textAlign: 'left', display: 'flex', justifyContent: 'space-between'}}><span style={{ color: selected.length? colors.textDark : '#999' }}>{selectedLabel}</span><span>▼</span></button>
              {showServices && ( /* dropdown content from previous code */ null )}
            </div>
            <input style={inputStyle} placeholder="Your Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            <input style={inputStyle} type="email" placeholder="Email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            <input style={inputStyle} type="tel" placeholder="Phone" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            <input style={inputStyle} placeholder="Pet Name" required value={form.petName} onChange={e => setForm({...form, petName: e.target.value})} />
            {/* calendar button etc. */}
            <button type="submit" disabled={loading || selected.length===0} style={{ backgroundColor: colors.accent, color: colors.textDark, padding: '18px', borderRadius: '14px', border: `2px solid ${colors.textDark}`, fontWeight: 700 }}>Send Booking Request</button>
          </form>
        </div>
      </div>
    </main>
  );
              }
