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
  const submit = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); const serviceNames = selected.map(id => SERVICES.find(s => s.id === id)?.name).filter(Boolean); await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({...form, service: serviceNames.join(', ') }) }); setSent(true); };

  const today = new Date(); today.setHours(0,0,0,0);
  const year = calDate.getFullYear(); const month = calDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const selectDate = (day: number) => { const d = new Date(year, month, day); if (d < today) return; setForm({...form, date: d.toISOString().split('T')[0]}); setShowCal(false); };
  const formatDate = (iso: string) => iso? new Date(iso+'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
  const closeAll = () => { setShowCal(false); setShowServices(false); };

  const inputStyle = { padding: '14px 16px', border: `2px solid ${colors.textDark}`, borderRadius: '12px', fontFamily: fonts.body, fontSize: '16px', backgroundColor: 'white', width: '100%', boxSizing: 'border-box' as const };
  const selectedLabel = selected.length === 0? 'Select Services' : selected.length === 1? SERVICES.find(s => s.id === selected[0])?.name : `${selected.length} services selected`;

  // VANCOUVER COMMON BREED: Labrador Retriever
  const bgImage = 'https://images.pexels.com/photos/2742261/pexels-photo-2742261.jpeg';

  if (sent) return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.94)', padding: '40px', borderRadius: '20px', border: `3px solid ${colors.textDark}` }}>
        <div style={{ fontSize: '56px' }}>🐾</div>
        <h1 style={{ fontFamily: fonts.heading, fontSize: '36px', color: colors.textDark }}>Request Sent!</h1>
      </div>
    </main>
  );

  return (
    <main onClick={closeAll} style={{ minHeight: '100vh', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* 22% CREAM OVERLAY - image is 78% visible */}
      <div style={{ backgroundColor: 'rgba(244, 239, 234, 0.22)', minHeight: '100vh', padding: '80px 16px 40px' }}>
        <div style={{ maxWidth: '480px', width: '92%', margin: '0 auto', backgroundColor: 'rgba(255, 255, 0.96)', padding: '24px', borderRadius: '20px', border: `3px solid ${colors.textDark}`, boxShadow: `6px 6px 0px ${colors.textDark}` }} onClick={e => e.stopPropagation()}>

          <h1 style={{ fontFamily: fonts.heading, fontSize: 'clamp(28px, 8vw, 40px)', color: colors.textDark, margin: '0 0 20px 0', lineHeight: 1.1 }}>
            Book Appointment
          </h1>

          <form onSubmit={submit} style={{ display: 'grid', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <button type="button" onClick={() => setShowServices(!showServices)} style={{...inputStyle, textAlign: 'left', display: 'flex', justifyContent: 'space-between'}}>
                <span style={{ color: selected.length? colors.textDark : '#999', fontSize: '15px' }}>{selectedLabel}</span>
                <span>▼</span>
              </button>
              {showServices && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '6px', backgroundColor: 'white', border: `2px solid ${colors.textDark}`, borderRadius: '12px', maxHeight: '260px', overflowY: 'auto', zIndex: 60 }}>
                  {['Dog','Cat'].map(group => (
                    <div key={group}>
                      <div style={{ padding: '8px 12px', fontSize: '11px', color: colors.primary, fontWeight: 600 }}>{group}</div>
                      {SERVICES.filter(s => s.group === group).map(s => {
                        const active = selected.includes(s.id);
                        return (
                          <button key={s.id} type="button" onClick={() => toggleService(s.id)} style={{ width: '100%', padding: '10px 12px', background: active? '#FFF4E8' : 'white', border: 'none', textAlign: 'left', display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: `2px solid ${colors.primary}`, backgroundColor: active? colors.primary : 'white' }} />
                            <span style={{ fontSize: '14px' }}>{s.name}</span>
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
                <span style={{ color: form.date? colors.textDark : '#999' }}>{form.date? formatDate(form.date) : 'Select Date'}</span>
                <span>📅</span>
              </button>
              {showCal && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '6px', backgroundColor: 'white', border: `2px solid ${colors.textDark}`, borderRadius: '12px', zIndex: 50 }}>
                  <div style={{ backgroundColor: colors.primary, color: 'white', padding: '12px', display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={() => setCalDate(new Date(year, month-1))} style={{ background: 'none', border: 'none', color: 'white' }}>‹</button>
                    <span>{monthNames[month]} {year}</span>
                    <button type="button" onClick={() => setCalDate(new Date(year, month+1))} style={{ background: 'none', border: 'none', color: 'white' }}>›</button>
                  </div>
                  <div style={{ padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '3px' }}>
                    {['S','M','T','W','T','F','S'].map(d => <div key={d} style={{ textAlign: 'center', fontSize: '11px' }}>{d}</div>)}
                    {Array(firstDay).fill(0).map((_,i) => <div key={i} />)}
                    {Array.from({length: daysInMonth}, (_,i) => i+1).map(day => { const d = new Date(year,month,day); const past = d < today; const sel = form.date === d.toISOString().split('T')[0]; return <button key={day} disabled={past} onClick={() => selectDate(day)} style={{ aspectRatio: '1', border: 'none', background: sel? colors.accent : 'transparent' }}>{day}</button>})}
                  </div>
                </div>
              )}
            </div>

            <textarea style={{...inputStyle, minHeight: '80px'}} placeholder="Notes" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
            <button type="submit" disabled={loading || selected.length===0 ||!form.date} style={{ backgroundColor: colors.accent, padding: '16px', borderRadius: '12px', border: `2px solid ${colors.textDark}`, fontWeight: 700 }}>
              Send Booking Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
    }
