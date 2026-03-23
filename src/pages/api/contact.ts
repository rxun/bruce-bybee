export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, organization, projectType, eventDate, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
        status: 400,
      });
    }

    // Send notification to Bruce
    await resend.emails.send({
      from: 'Bruce Bybee Photography <noreply@send.brucebybee.com>',
      to: 'brucectbybee@gmail.com',
      subject: `Contact Inquiry - ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
        <p><strong>Type of Project:</strong> ${projectType}</p>
        ${eventDate ? `<p><strong>Event Date:</strong> ${eventDate}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation to the inquirer
    await resend.emails.send({
      from: 'Bruce Bybee Photography <noreply@send.brucebybee.com>',
      to: email,
      subject: 'Thank you for your inquiry',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out. I've received your inquiry and will respond within 24 hours.</p>
        <p>Best,<br>Bruce Bybee</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message. Please try again.' }), {
      status: 500,
    });
  }
};
