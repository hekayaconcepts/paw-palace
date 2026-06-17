'use client';

import { useState, useEffect } from 'react';
import { colors, fonts } from '@/lib/design-tokens';

const SERVICES = [
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

  useEffect(() => {
    const saved = localStorage.getItem('pawpalace-service');
    if (saved && SERVICES.find(s => s.id === saved)) setSelected([saved]);
  }, []);

  const toggleService = (id: string) => setSelected(prev => prev.includes(id)? prev.filter(x => x!== id) : [...prev, id]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    const serviceNames = selected.map(id => SERVICES.find(s => s.id === id)?.name).filter(Boolean);
    await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({...form, service: serviceNames.join(', ') }) });
    setSent(true);
  };

  const today = new Date(); today.setHours(0,0,0,0);
  const year = calDate.getFullYear(); const month = calDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const selectDate = (day: number) => { const d = new Date(year, month, day); if (d < today) return; setForm({...form, date: d.toISOString().split('T')[0]}); setShowCal(false); };
  const formatDate = (iso: string) => iso? new Date(iso+'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
  const closeAll = () => { setShowCal(false); setShowServices(false); };

  const inputStyle = { padding: '16px 18px', border: `2px solid ${colors.textDark}`, borderRadius: '14px', fontFamily: fonts.body, fontSize: '16px', backgroundColor: 'white', width: '100%', boxSizing: 'border-box' as const };
  const selectedLabel = selected.length === 0? 'Select Services' : selected.length === 1? SERVICES.find(s => s.id === selected[0])?.name : `${selected.length} services selected`;

  // Dog background - works on mobile + desktop
  const bgImage = 'https://images.pexels.com/photos/6130994/pexels-photo-6130994.jpeg';

  if (sent) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ textAlign: 'center', background: 'rgba(244,239,234,0.96)', padding: '40px', borderRadius: '20px', border: `3px solid ${colors.textDark}` }}>
        <div style={{ fontSize: '64px' }}>🐾</div>
        <h1 style={{ fontFamily: fonts.heading, fontSize: '42px', color: colors.textDark }}>Request Sent!</h1>
        <p style={{ fontFamily: fonts.body, color: colors.textLight }}>We'll confirm within 2 hours.</p>
      </div>
    </main>
  );

  return (
    <main onClick={closeAll} style={{ minHeight: '100vh', backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* soft cream overlay so form pops */}
      <div style={{ backgroundColor: 'rgba(244,239,234,0.88)', minHeight: '100vh', padding: '100px 20px 60px', backdropFilter: 'blur(1px)' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }} onClick={e => e.stopPropagation()}>
          <h1 style={{ fontFamily: fonts.heading, fontSize: '48px', color: colors.textDark, marginBottom: '28px', lineHeight: 1, textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>Book<br/>Appointment</h1>

          <form onSubmit={submit} style={{ display: 'grid', gap: '14px' }}>
            <div style={{ position: 'relative' }}>
              <button type="button" onClick={() => setShowServices(!showServices)} style={{...inputStyle, textAlign: 'left', display: 'flex', justifyContent: 'space-between'}}>
                <span style={{ color: selected.length? colors.textDark : '#999' }}>{selectedLabel}</span>
                <span>▼</span>
              </button>
              {showServices && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', backgroundColor: 'white', border: `3px solid ${colors.textDark}`, borderRadius: '16px', boxShadow: `8px 8px 0px ${colors.textDark}`, zIndex: 60, maxHeight: '300px', overflowY: 'auto' }}>
                  {['Dog','Cat'].map(group => (
                    <div key={group}>
                      <div style={{ padding: '10px 16px 4px', fontFamily: fonts.heading, fontSize: '12px', color: colors.primary, textTransform: 'uppercase' }}>{group}</div>
                      {SERVICES.filter(s => s.group === group).map(s => {
                        const active = selected.includes(s.id);
                        return (
                          <button key={s.id} type="button" onClick={() => toggleService(s.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: active? '#FFF4E8' : 'white', border: 'none', borderBottom: '1px solid #F0E6DD', cursor: 'pointer', textAlign: 'left' }}>
                            <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: `2px solid ${active? colors.primary : colors.textDark}`, backgroundColor: active? colors.primary : 'white' }} />
                            <span style={{ fontFamily: fonts.body, fontSize: '15px', color: colors.textDark }}>{s.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <input style={inputStyle} placeholder="Your Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            <input style={inputStyle} type="email" placeholder="Email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            <input style={inputStyle} type="tel" placeholder="Phone" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            <input style={inputStyle} placeholder="Pet Name" required value={form.petName} onChange={e => setForm({...form, petName: e.target.value})} />

            <div style={{ position: 'relative' }}>
              <button type="button" onClick={() => setShowCal(!showCal)} style={{...inputStyle, textAlign: 'left', display: 'flex', justifyContent: 'space-between'}}>
                <span style={{ color: form.date? colors.textDark : '#999' }}>{form.date? formatDate(form.date) : 'Select Date'}</span><span>📅</span>
              </button>
              {showCal && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', backgroundColor: 'white', border: `3px solid ${colors.textDark}`, borderRadius: '16px', boxShadow: `8px 8px 0px ${colors.textDark}`, zIndex: 50, overflow: 'hidden' }}>
                  <div style={{ backgroundColor: colors.primary, color: 'white', padding: '14px', display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={() => setCalDate(new Date(year, month-1))} style={{ background: 'none', border: 'none', color: 'white', fontSize: '22px' }}>‹</button>
                    <span style={{ fontFamily: fonts.heading }}>{monthNames[month]} {year}</span>
                    <button type="button" onClick={() => setCalDate(new Date(year, month+1))} style={{ background: 'none', border: 'none', color: 'white', fontSize: '22px' }}>›</button>
                  </div>
                  <div style={{ padding: '12px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '4px' }}>{['S','M','T','W','T','F','S'].map(d => <div key={d} style={{ textAlign: 'center', fontSize: '12px', color: colors.textLight }}>{d}</div>)}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '4px', marginTop: '6px' }}>
                      {Array(firstDay).fill(0).map((_,i) => <div key={i} />)}
                      {Array.from({length: daysInMonth}, (_,i) => i+1).map(day => { const d = new Date(year,month,day); const past = d < today; const sel = form.date === d.toISOString().split('T')[0]; return <button key={day} type="button" disabled={past} onClick={() => selectDate(day)} style={{ aspectRatio: '1', border: 'none', background: sel? colors.accent : 'transparent', color: past? '#ccc' : colors.textDark, borderRadius: '8px' }}>{day}</button>})}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <textarea style={{...inputStyle, minHeight: '100px'}} placeholder="Notes (breed, special requests)" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
            <button type="submit" disabled={loading || selected.length===0 ||!form.date} style={{ backgroundColor: colors.accent, color: colors.textDark, padding: '18px', borderRadius: '14px', border: `2px solid ${colors.textDark}`, boxShadow: `4px 4px 0px ${colors.textDark}`, fontFamily: fonts.body, fontWeight: 700, fontSize: '18px', opacity: (loading||selected.length===0)?0.6:1 }}>{loading? 'Sending...' : 'Send Booking Request'}</button>
          </form>
        </div>
      </div>
    </main>
  );
                              }
