import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, dogName, service, addOns, date, notes } = await req.json();

  try {
    // Email to you
    await resend.emails.send({
      from: 'Paw Palace <onboarding@resend.dev>',
      to: 'hekayaconcepts@gmail.com',
      subject: `New Booking: ${name} - ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #C47A5A;">New Booking Request 🐾</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Dog:</strong> ${dogName}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Add-ons:</strong> ${addOns.join(', ') || 'None'}</p>
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Notes:</strong> ${notes || 'None'}</p>
          <hr style="margin: 20px 0; border: none; border-top: 2px solid #F4EFEA;">
          <p style="color: #666; font-size: 14px;">Reply to this email to confirm with the client.</p>
        </div>
      `
    });

    // Confirmation to client
    await resend.emails.send({
      from: 'Paw Palace <onboarding@resend.dev>',
      to: email,
      subject: 'We received your booking request!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #3A2E27;">Thanks ${name}! 🐶</h2>
          <p>We've received your request for <strong>${service}</strong> for ${dogName}.</p>
          ${addOns.length > 0 ? `<p><strong>Add-ons:</strong> ${addOns.join(', ')}</p>` : ''}
          <p>Preferred date: <strong>${date}</strong></p>
          <p>We'll confirm your appointment within 2 hours.</p>
          <p style="margin-top: 30px;">— Paw Palace Team<br>Washington, D.C.</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
