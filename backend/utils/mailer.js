import nodemailer from 'nodemailer'

let transporter = null

function getTransporter() {
  if (transporter) return transporter
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) return null
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  })
  return transporter
}

/**
 * Sends a notification email to the StritGRAD team when a form is submitted.
 * If SMTP is not configured (e.g. in local development), this safely logs
 * the submission to the console instead of failing the request.
 */
export async function sendFormNotification({ subject, html }) {
  const t = getTransporter()
  if (!t) {
    console.log(`[mailer] SMTP not configured — would have sent email: "${subject}"`)
    return { skipped: true }
  }
  try {
    await t.sendMail({
      from: process.env.MAIL_FROM || 'StritGRAD Academy Website <no-reply@stritgradacademy.org.za>',
      to: process.env.MAIL_TO || 'info@stritgradacademy.org.za',
      subject,
      html
    })
    return { sent: true }
  } catch (err) {
    console.error('[mailer] Failed to send email:', err.message)
    return { error: true }
  }
}
