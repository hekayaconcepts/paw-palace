import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, phone, petName, dogName, service, date, notes } = await req.json();

  const pet = petName || dogName || 'your pet';
  const services = service || 'Grooming Service';

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Paw Palace <onboarding@resend.dev>',
      to: 'hekayaconcepts@gmail.com',
      subject: `New Booking: ${name} - ${services}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; background: #FFF9F5; padding: 24px; border-radius: 12px;">
          <h2 style="color: #C47A5A; margin: 0 0 16px 0; font-size: 24px;">New Booking Request 🐾</h2>
          <div style="background: white; padding: 20px; border-radius: 8px; border: 2px solid #3A2E27;">
            <p style="margin: 8px 0;"><strong style="color: #3A2E27;">Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #3A2E27;">Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong style="color: #3A2E27;">Phone:</strong> ${phone}</p>
            <p style="margin: 8px 0;"><strong style="color: #3A2E27;">Pet:</strong> ${pet}</p>
            <p style="margin: 8px 0;"><strong style="color: #3A2E27;">Services:</strong> ${services}</p>
            <p style="margin: 8px 0;"><strong style="color: #3A2E27;">Preferred Date:</strong> ${date}</p>
            <p style="margin: 8px 0;"><strong style="color: #3A2E27;">Notes:</strong> ${notes || 'None'}</p>
          </div>
          <p style="color: #666; font-size: 13px; margin-top: 16px;">Reply directly to confirm with the client.</p>
        </div>
      `
    });

    await resend.emails.send({
      from: 'Paw Palace <onboarding@resend.dev>',
      to: email,
      subject: 'We received your booking request!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; background: #F4EFEA; padding: 24px;">
          <div style="background: white; padding: 28px; border-radius: 12px; border: 2px solid #3A2E27;">
            <h2 style="color: #3A2E27; margin: 0 0 12px 0;">Thanks ${name}! 🐶🐱</h2>
            <p style="color: #3A2E27; font-size: 16px; line-height: 1.5;">We've received your request for <strong>${services}</strong> for ${pet}.</p>
            <p style="color: #3A2E27; margin: 16px 0;">Preferred date: <strong>${date}</strong></p>
            <p style="color: #666;">We'll confirm your appointment within 2 hours.</p>
            <div style="margin-top: 28px; padding-top: 20px; border-top: 2px solid #F4EFEA;">
              <p style="margin: 0; color: #3A2E27; font-weight: 600;">Paw Palace Pet Grooming</p>
              <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;">Vancouver, Canada • 4.6★ (140 reviews)</p>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
