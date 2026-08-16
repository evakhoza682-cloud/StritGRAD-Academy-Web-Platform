import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { pool } from '../db/pool.js'
import { sendFormNotification } from '../utils/mailer.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const router = Router()

async function saveSubmission(formType, payload) {
  await pool.query('INSERT INTO submissions (form_type, payload) VALUES ($1, $2)', [formType, JSON.stringify(payload)])
}

function handleValidation(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ error: errors.array()[0].msg })
    return true
  }
  return false
}

/** Generic helper to build a simple, safe HTML notification body */
function toHtml(title, data) {
  const rows = Object.entries(data)
    .map(([k, v]) => `<tr><td style="padding:4px 12px;font-weight:600;color:#0a1628;">${k}</td><td style="padding:4px 12px;">${v ?? ''}</td></tr>`)
    .join('')
  return `<h2 style="color:#0a1628;">${title}</h2><table>${rows}</table>`
}

// --- Newsletter ---
router.post('/newsletter', [body('email').isEmail().withMessage('Please provide a valid email address.')], asyncHandler(async (req, res) => {
  if (handleValidation(req, res)) return
  await pool.query('INSERT INTO newsletter_subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING', [req.body.email])
  await saveSubmission('newsletter', req.body)
  await sendFormNotification({ subject: 'New Newsletter Subscriber', html: toHtml('New Newsletter Subscriber', req.body) })
  res.json({ message: 'Subscribed successfully.' })
}))

// --- Contact ---
router.post('/contact', [
  body('fullName').notEmpty().withMessage('Full name is required.'),
  body('email').isEmail().withMessage('A valid email address is required.'),
  body('message').notEmpty().withMessage('Message is required.')
], asyncHandler(async (req, res) => {
  if (handleValidation(req, res)) return
  await saveSubmission('contact', req.body)
  await sendFormNotification({ subject: `New Contact Enquiry: ${req.body.enquiryType || 'General'}`, html: toHtml('New Contact Enquiry', req.body) })
  res.json({ message: 'Message sent successfully.' })
}))

// --- Volunteer ---
router.post('/volunteer', [
  body('fullName').notEmpty().withMessage('Full name is required.'),
  body('email').isEmail().withMessage('A valid email address is required.')
], asyncHandler(async (req, res) => {
  if (handleValidation(req, res)) return
  await saveSubmission('volunteer', req.body)
  await sendFormNotification({ subject: 'New Volunteer Application', html: toHtml('New Volunteer Application', req.body) })
  res.json({ message: 'Application received.' })
}))

// --- Mentor ---
router.post('/mentor', [
  body('fullName').notEmpty().withMessage('Full name is required.'),
  body('email').isEmail().withMessage('A valid email address is required.')
], asyncHandler(async (req, res) => {
  if (handleValidation(req, res)) return
  await saveSubmission('mentor', req.body)
  await sendFormNotification({ subject: 'New Mentor Registration', html: toHtml('New Mentor Registration', req.body) })
  res.json({ message: 'Mentor registration received.' })
}))

// --- Facilitator ---
router.post('/facilitator', [
  body('fullName').notEmpty().withMessage('Full name is required.'),
  body('email').isEmail().withMessage('A valid email address is required.')
], asyncHandler(async (req, res) => {
  if (handleValidation(req, res)) return
  await saveSubmission('facilitator', req.body)
  await sendFormNotification({ subject: 'New Facilitator Registration', html: toHtml('New Facilitator Registration', req.body) })
  res.json({ message: 'Facilitator registration received.' })
}))

// --- Corporate Volunteering ---
router.post('/corporate-volunteering', [
  body('fullName').notEmpty().withMessage('Contact person is required.'),
  body('email').isEmail().withMessage('A valid email address is required.')
], asyncHandler(async (req, res) => {
  if (handleValidation(req, res)) return
  await saveSubmission('corporate-volunteering', req.body)
  await sendFormNotification({ subject: 'New Corporate Volunteering Enquiry', html: toHtml('New Corporate Volunteering Enquiry', req.body) })
  res.json({ message: 'Enquiry received.' })
}))

// --- Corporate Sponsorship ---
router.post('/corporate-sponsorship', [
  body('fullName').notEmpty().withMessage('Contact person is required.'),
  body('email').isEmail().withMessage('A valid email address is required.')
], asyncHandler(async (req, res) => {
  if (handleValidation(req, res)) return
  await saveSubmission('corporate-sponsorship', req.body)
  await sendFormNotification({ subject: 'New Corporate Sponsorship Enquiry', html: toHtml('New Corporate Sponsorship Enquiry', req.body) })
  res.json({ message: 'Enquiry received.' })
}))

// --- Partners ---
router.post('/partners', [
  body('company').notEmpty().withMessage('Company name is required.'),
  body('contact').notEmpty().withMessage('Contact person is required.'),
  body('email').isEmail().withMessage('A valid email address is required.')
], asyncHandler(async (req, res) => {
  if (handleValidation(req, res)) return
  await saveSubmission('partners', req.body)
  await sendFormNotification({ subject: `New Partner Enquiry: ${req.body.company}`, html: toHtml('New Partner Enquiry', req.body) })
  res.json({ message: 'Partner enquiry received.' })
}))

// --- Donate (stub — wire up PayFast/PayPal/Stripe here) ---
router.post('/donate', [
  body('amount').isFloat({ gt: 0 }).withMessage('A valid donation amount is required.')
], asyncHandler(async (req, res) => {
  if (handleValidation(req, res)) return
  await saveSubmission('donate', req.body)
  // In production: create a PayFast/Stripe/PayPal checkout session here and
  // return { redirectUrl } for the frontend to redirect the donor to.
  await sendFormNotification({ subject: 'New Donation Intent', html: toHtml('New Donation Intent', req.body) })
  res.json({ message: 'Donation intent recorded. Payment gateway integration required to complete checkout.' })
}))

export default router
