'use client';

import { useState, useEffect } from 'react';
import { colors, fonts } from '@/lib/design-tokens';

export default function BookingPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dogName: '', date: '', notes: '' });
  const [service, setService] = useState('bath');
  const [addOns, setAddOns] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const s = localStorage.getItem('pawpalace-service') || 'bath';
    setService(s);
    const saved = localStorage.getItem('pawpalace-addons');
    if (saved) setAddOns(JSON.parse(saved));
  }, []);

  const serviceNames: any = { bath: 'Bath & Tidy', groom: 'Full Grooming', nails: 'Nail Care' };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...form, service: serviceNames[service], addOns })
    });
    setSent(true);
    localStorage.removeItem('pawpalace-addons');
  };

  if (sent) {
    return (
      <main style={{ backgroundColor: colors.background, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: fonts.heading, fontSize: '48px', color: colors.textDark }}>Request Sent!</h1>
          <p style={{ fontFamily: fonts.body, fontSize: '18px', color: colors.textLight, marginTop: '16px' }}>Check your email — we'll confirm within 2 hours.</p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: colors.background, minHeight: '100vh', padding: '120px 24px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: fonts.heading, fontSize: '40px', color: colors.textDark, marginBottom: '8px' }}>Book Appointment</h1>
        <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '12px', border: '2px solid ' + colors.textDark, marginBottom: '32px' }}>
          <p style={{ fontFamily: fonts.body, margin: 0 }}><strong>{serviceNames[service]}</strong> {addOns.length > 0 && `+ ${addOns.length} add-on${addOns.length>1?'s':''}`}</p>
          {addOns.length > 0 && <p style={{ fontFamily: fonts.body, fontSize: '14px', color: colors.textLight, margin: '4px 0 0 0' }}>{addOns.join(', ')}</p>}
        </div>

        <form onSubmit={submit} style={{ display: 'grid', gap: '16px' }}>
          <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ padding: '14px', border: '2px solid ' + colors.textDark, borderRadius: '12px', fontFamily: fonts.body, fontSize: '16px' }} />
          <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={{ padding: '14px', border: '2px solid ' + colors.textDark, borderRadius: '12px', fontFamily: fonts.body, fontSize: '16px' }} />
          <input type="tel" placeholder="Phone" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={{ padding: '14px', border: '2px solid ' + colors.textDark, borderRadius: '12px', fontFamily: fonts.body, fontSize: '16px' }} />
          <input type="text" placeholder="Dog Name" required value={form.dogName} onChange={e => setForm({...form, dogName: e.target.value})} style={{ padding: '14px', border: '2px solid ' + colors.textDark, borderRadius: '12px', fontFamily: fonts.body, fontSize: '16px' }} />
          <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} style={{ padding: '14px', border: '2px solid ' + colors.textDark, borderRadius: '12px', fontFamily: fonts.body, fontSize: '16px' }} />
          <textarea placeholder="Notes (breed, special requests)" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} style={{ padding: '14px', border: '2px solid ' + colors.textDark, borderRadius: '12px', fontFamily: fonts.body, fontSize: '16px', minHeight: '100px' }} />
          <button type="submit" style={{ backgroundColor: colors.accent, color: colors.textDark, padding: '16px', borderRadius: '12px', border: '2px solid ' + colors.textDark, boxShadow: '4px 4px 0px ' + colors.textDark, fontFamily: fonts.body, fontWeight: 600, fontSize: '18px', cursor: 'pointer' }}>Send Booking Request</button>
        </form>
      </div>
    </main>
  );
}
