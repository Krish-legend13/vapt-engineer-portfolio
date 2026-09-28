// Vercel Serverless Function: /api/contact
// Receives contact form submissions and delivers them to muralikrishnancy2021@gmail.com
// Uses environment variables for security. Never expose keys in client-side code.

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { name, purpose, message, timestamp } = req.body || {};

    // 1. Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    const cleanName = name.trim();
    const cleanPurpose = (purpose && typeof purpose === 'string') ? purpose.trim() : 'General Inquiry';
    const cleanMessage = message.trim();
    const cleanTime = timestamp || new Date().toISOString();
    const recipient = 'muralikrishnancy2021@gmail.com';

    // 2. Email Delivery via Resend (Recommended Vercel Integration)
    // To enable real email delivery on Vercel:
    // Add RESEND_API_KEY in Vercel Dashboard -> Project Settings -> Environment Variables
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const emailPayload = {
        from: process.env.RESEND_FROM || 'Portfolio Inquiry <onboarding@resend.dev>',
        to: [recipient],
        subject: `[Portfolio Inquiry] ${cleanPurpose} — from ${cleanName}`,
        text: `New Portfolio Message Received:\n\nName: ${cleanName}\nPurpose: ${cleanPurpose}\nTimestamp: ${cleanTime}\n\nMessage:\n${cleanMessage}\n`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c1218; color: #e6edf3; border: 1px solid #00f0ff; border-radius: 6px; padding: 24px;">
            <div style="border-bottom: 1px solid rgba(0,240,255,0.2); padding-bottom: 14px; margin-bottom: 18px;">
              <span style="font-size: 11px; font-weight: 700; color: #00ff88; letter-spacing: 0.1em; text-transform: uppercase;">// INCOMING PORTFOLIO INQUIRY</span>
              <h2 style="margin: 8px 0 0 0; color: #00f0ff; font-size: 20px;">${cleanPurpose}</h2>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #8b949e; width: 120px;">SENDER:</td>
                <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${cleanName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #8b949e;">PURPOSE:</td>
                <td style="padding: 8px 0; color: #00ff88;">${cleanPurpose}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #8b949e;">TIMESTAMP:</td>
                <td style="padding: 8px 0; color: #8b949e; font-family: monospace;">${cleanTime}</td>
              </tr>
            </table>

            <div style="background: #111a24; border-left: 3px solid #00f0ff; padding: 14px; border-radius: 4px; margin-bottom: 20px;">
              <div style="font-size: 11px; color: #8b949e; margin-bottom: 8px; font-family: monospace;">MESSAGE BODY:</div>
              <div style="white-space: pre-wrap; line-height: 1.6; font-size: 14px; color: #e6edf3;">${cleanMessage}</div>
            </div>

            <div style="font-size: 11px; color: #484f58; text-align: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px;">
              GMK Portfolio Operations — Delivered to ${recipient}
            </div>
          </div>
        `
      };

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      if (!resendResponse.ok) {
        const errText = await resendResponse.text();
        console.error('Resend delivery error:', errText);
        return res.status(502).json({
          success: false,
          message: 'Email service error. Please try again or email directly.'
        });
      }

      const resendData = await resendResponse.json();
      return res.status(200).json({
        success: true,
        message: 'Message delivered to muralikrishnancy2021@gmail.com',
        id: resendData.id
      });
    }

    // 3. Webhook delivery fallback (e.g. Discord, Telegram or Formspree webhook)
    if (process.env.CONTACT_WEBHOOK_URL) {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `**New Portfolio Message for Murali**\n**From:** ${cleanName}\n**Purpose:** ${cleanPurpose}\n**Time:** ${cleanTime}\n\n**Message:**\n${cleanMessage}`
        })
      });

      return res.status(200).json({
        success: true,
        message: 'Message delivered via secure webhook.'
      });
    }

    // 4. Default / Setup Notice:
    // When RESEND_API_KEY is not yet populated in Vercel environment variables,
    // log message details so submissions are not lost, and inform the user.
    console.log(`[PORTFOLIO CONTACT] Message received from "${cleanName}" (${cleanPurpose}): ${cleanMessage}`);
    return res.status(200).json({
      success: true,
      message: 'Message recorded. (Configure RESEND_API_KEY in Vercel Project Settings to enable live email delivery to muralikrishnancy2021@gmail.com).'
    });

  } catch (error) {
    console.error('Contact handler error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing message.'
    });
  }
}
