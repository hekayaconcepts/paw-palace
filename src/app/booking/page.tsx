'use client';

import { useState, useEffect } from 'react';
import { colors, fonts } from '@/lib/design-tokens';

export default function BookingPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dogName: '', date: '', notes: '' });
  const [service, setService] = useState('bath');
  const [addOns, setAddOns] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showCal, setShowCal] = useState(false);
  const [calDate, setCalDate] = useState(new Date());

  useEffect(() => {
    const s = localStorage.getItem('pawpalace-service') || 'bath';
    setService(s);
    const saved = localStorage.getItem('pawpalace-addons');
    if (saved) setAddOns(JSON.parse(saved));
  }, []);

  const serviceNames: any = { bath: 'Bath & Tidy', groom: 'Full Grooming', nails: 'Nail Care' };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...form, service: serviceNames[service], addOns })
    });
    setSent(true);
    localStorage.removeItem('pawpalace-addons');
  };

  // Calendar logic
  const today = new Date();
  today.setHours(0,0,0,0);
  const year = calDate.getFullYear();
  const month = calDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const selectDate = (day: number) => {
    const d = new Date(year, month, day);
    if (d < today) return;
    const iso = d.toISOString().split('T')[0];
    setForm({...form, date: iso});
    setShowCal(false);
  };

  const formatDisplayDate = (iso: string) => {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  if (sent) {
    return (
      <main style={{ backgroundColor: colors.background, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🐾</div>
          <h1 style={{ fontFamily: fonts.heading, fontSize: '42px', color: colors.textDark, marginBottom: '12px' }}>Request Sent!</h1>
          <p style={{ fontFamily: fonts.body, fontSize: '17px', color: colors.textLight, lineHeight: 1.5 }}>Check your email — we'll confirm for {form.dogName} within 2 hours.</p>
        </div>
      </main>
    );
  }

  const inputStyle = {
    padding: '16px 18px',
    border: `2px solid ${colors.textDark}`,
    borderRadius: '14px',
    fontFamily: fonts.body,
    fontSize: '16px',
    backgroundColor: 'white',
    width: '100%',
    boxSizing: 'border-box' as const,
  };

  return (
    <main style={{ backgroundColor: colors.background, minHeight: '100vh', padding: '100px 20px 60px' }}>
      <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
        <h1 style={{ fontFamily: fonts.heading, fontSize: 'clamp(36px, 8vw, 52px)', color: colors.textDark, marginBottom: '24px', lineHeight: 1.1 }}>Book<br/>Appointment</h1>

        <div style={{ backgroundColor: 'white', padding: '18px', borderRadius: '14px', border: `3px solid ${colors.textDark}`, marginBottom: '28px', boxShadow: `4px 4px 0px ${colors.textDark}` }}>
          <p style={{ fontFamily: fonts.body, margin: 0, fontWeight: 600, fontSize: '17px', color: colors.textDark }}>{serviceNames[service]}</p>
          {addOns.length > 0 && <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.primary, margin: '4px 0 0 0' }}>+ {addOns.join(' • ')}</p>}
        </div>

        <form onSubmit={submit} style={{ display: 'grid', gap: '14px' }}>
          <input style={inputStyle} type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          <input style={inputStyle} type="email" placeholder="Email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <input style={inputStyle} type="tel" placeholder="Phone" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          <input style={inputStyle} type="text" placeholder="Dog Name" required value={form.dogName} onChange={e => setForm({...form, dogName: e.target.value})} />

          {/* Custom Date Picker */}
          <div style={{ position: 'relative' }}>
            <button type="button" onClick={() => setShowCal(!showCal)} style={{...inputStyle, textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span style={{ color: form.date? colors.textDark : '#999' }}>{form.date? formatDisplayDate(form.date) : 'Select Date'}</span>
              <span>📅</span>
            </button>

            {showCal && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', backgroundColor: 'white', border: `3px solid ${colors.textDark}`, borderRadius: '16px', boxShadow: `8px 8px 0px ${colors.textDark}`, zIndex: 50, overflow: 'hidden' }}>
                <div style={{ backgroundColor: colors.primary, color: 'white', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button type="button" onClick={() => setCalDate(new Date(year, month - 1))} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer', padding: '4px 8px' }}>‹</button>
                  <span style={{ fontFamily: fonts.heading, fontSize: '18px' }}>{monthNames[month]} {year}</span>
                  <button type="button" onClick={() => setCalDate(new Date(year, month + 1))} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer', padding: '4px 8px' }}>›</button>
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
                    {['S','M','T','W','T','F','S'].map(d => <div key={d} style={{ textAlign: 'center', fontSize: '12px', color: colors.textLight, fontWeight: 600, padding: '4px' }}>{d}</div>)}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                    {Array.from({length: firstDay}).map((_, i) => <div key={'e'+i} />)}
                    {Array.from({length: daysInMonth}).map((_, i) => {
                      const day = i + 1;
                      const d = new Date(year, month, day);
                      const isPast = d < today;
                      const isSelected = form.date === d.toISOString().split('T')[0];
                      return (
                        <button key={day} type="button" disabled={isPast} onClick={() => selectDate(day)} style={{
                          aspectRatio: '1', border: 'none', background: isSelected? colors.accent : 'transparent', color: isPast? '#ccc' : isSelected? colors.textDark : colors.textDark, borderRadius: '8px', cursor: isPast? 'not-allowed' : 'pointer', fontFamily: fonts.body, fontSize: '15px', fontWeight: isSelected? 700 : 400
                        }}>{day}</button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <textarea style={{...inputStyle, minHeight: '110px', resize: 'vertical'}} placeholder="Notes (breed, special requests)" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />

          <button type="submit" disabled={loading ||!form.date} style={{ backgroundColor: colors.accent, color: colors.textDark, padding: '18px', borderRadius: '14px', border: `2px solid ${colors.textDark}`, boxShadow: `4px 4px 0px ${colors.textDark}`, fontFamily: fonts.body, fontWeight: 700, fontSize: '18px', cursor: 'pointer', marginTop: '8px', opacity: (loading ||!form.date)? 0.6 : 1 }}>
            {loading? 'Sending...' : 'Send Booking Request'}
          </button>
        </form>
      </div>
    </main>
  );
                                                                               } 
