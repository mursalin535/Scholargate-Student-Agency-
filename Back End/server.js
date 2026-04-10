require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

// ─────────────────────────────────────────────
// Nodemailer Setup (Custom Domain SMTP)
// ─────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: 'mail.legacyscholargate.bd', // srhostbd mail server
  port: 465,                         // SSL port (or 587 for TLS)
  secure: true,                      // true for 465, false for 587
  auth: {
    user: 'ceo@legacyscholargate.bd',
    pass: 'Y^+1alD]-R*Fn7X#'
  }
});

transporter.verify((err) => {
  if (err) {
    console.error('❌ Mail error:', err);
  } else {
    console.log('✅ Mail server ready for client');
  }
});

// ─────────────────────────────────────────────
// HTML EMAIL WRAPPER
// ─────────────────────────────────────────────
const emailWrapper = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">
        <!-- HEADER -->
        <tr>
          <td style="padding:0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#0f3460;padding:32px 40px 24px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p style="margin:0 0 4px;color:#7dd3fc;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Legacy ScholarGate</p>
                        <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px;">Education Consultancy</h1>
                      </td>
                      <td align="right" style="vertical-align:top;">
                        <div style="background:rgba(255,255,255,0.10);border-radius:12px;padding:10px 16px;display:inline-block;">
                          <p style="margin:0;color:#bae6fd;font-size:19px;">🎓</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="background:linear-gradient(90deg,#1e40af,#0f3460);padding:10px 40px;">
                  <p style="margin:0;color:#93c5fd;font-size:12px;font-style:italic;letter-spacing:0.5px;">
                    "Adventure Awaits, Let Us Show You the Way."
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:36px 40px 28px;">
            ${content}
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0 0 6px;color:#475569;font-size:12px;font-weight:600;">Legacy ScholarGate</p>
                  <p style="margin:0 0 4px;color:#94a3b8;font-size:11px;">📍 Dhaka, Bangladesh 1206</p>
                  <p style="margin:0 0 4px;color:#94a3b8;font-size:11px;">📞 09611-772246 &nbsp;|&nbsp; 📱 +880 1913-895849</p>
                  <p style="margin:0;color:#94a3b8;font-size:11px;">📧 info@legacyscholargate.bd</p>
                </td>
                <td align="right" style="vertical-align:bottom;">
                  <p style="margin:0;color:#cbd5e1;font-size:10px;">© ${new Date().getFullYear()} Legacy ScholarGate<br/>All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`;

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const row = (label, value) => `
  <tr>
    <td width="35%" style="padding:11px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-right:none;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">
      ${label}
    </td>
    <td style="padding:11px 14px;background:#ffffff;border:1px solid #e2e8f0;font-size:13px;color:#1e293b;vertical-align:top;line-height:1.5;">
      ${value || '<span style="color:#94a3b8;">—</span>'}
    </td>
  </tr>
`;

const sectionTitle = (icon, title) => `
  <tr>
    <td colspan="2" style="padding:20px 0 10px;">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding-right:10px;font-size:16px;">${icon}</td>
          <td style="font-size:11px;font-weight:800;color:#0f3460;text-transform:uppercase;letter-spacing:2px;border-bottom:2px solid #0f3460;padding-bottom:6px;">
            ${title}
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr><td colspan="2" style="height:4px;"></td></tr>
`;

const actionBox = (bg, border, textColor, icon, text) => `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
    <tr>
      <td style="background:${bg};border:1px solid ${border};border-radius:10px;padding:16px 20px;">
        <p style="margin:0;color:${textColor};font-size:13px;line-height:1.7;">
          ${icon} <strong>Suggested next step:</strong> ${text}
        </p>
      </td>
    </tr>
  </table>
`;

// ─────────────────────────────────────────────
// TEST ROUTE
// ─────────────────────────────────────────────
app.get('/test-mail', async (req, res) => {
  console.log('🔥 TEST ROUTE HIT');

  const html = emailWrapper(`
    <h2 style="margin:0 0 6px;color:#1e293b;font-size:20px;font-weight:800;">✅ HTML Template Working</h2>
    <p style="margin:0 0 24px;color:#64748b;font-size:14px;">Your professional email template is set up correctly.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${row('Status', '<span style="color:#16a34a;font-weight:700;">✅ All systems operational</span>')}
    </table>
  `);

  await transporter.sendMail({
    from: `"Legacy ScholarGate" <ceo@legacyscholargate.bd>`,
    to: 'ceo@legacyscholargate.bd',
    subject: '✅ Test — HTML Email Template Working',
    html
  });

  res.send('Test mail sent — check your inbox!');
});

// ─────────────────────────────────────────────
// CONTACT / APPOINTMENT ROUTE
// ─────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  console.log('🔥 CONTACT ROUTE HIT', req.body);

  const { name, email, phone, date, shift, message } = req.body;

  const shiftLabel = shift === 'morning'
    ? 'Morning (11:00 am – 3:00 pm)'
    : 'Afternoon (3:00 pm – 8:00 pm)';

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    : '—';

  const html = emailWrapper(`
    <h2 style="margin:0 0 6px;color:#1e293b;font-size:20px;font-weight:800;">📅 New Appointment Request</h2>
    <p style="margin:0 0 28px;color:#64748b;font-size:14px;line-height:1.7;">
      A prospective student has submitted an appointment booking through the website.
      Please find their details below and reach out at your earliest convenience.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${sectionTitle('👤', 'Personal Information')}
      ${row('Full Name', name)}
      ${row('Email Address', `<a href="mailto:${email}" style="color:#0f3460;font-weight:600;">${email}</a>`)}
      ${row('Phone Number', `<a href="tel:${phone}" style="color:#0f3460;font-weight:600;">${phone}</a>`)}
      ${sectionTitle('📆', 'Appointment Preference')}
      ${row('Preferred Date', `<strong>${formattedDate}</strong>`)}
      ${row('Preferred Shift', shiftLabel)}
      ${sectionTitle('💬', 'Message')}
      <tr>
        <td colspan="2" style="padding:14px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #0f3460;font-size:14px;color:#334155;line-height:1.8;font-style:italic;">
          "${message || 'No message provided.'}"
        </td>
      </tr>
    </table>

    ${actionBox(
      '#eff6ff', '#bfdbfe', '#1e40af',
      '💡',
      `Reply directly to <a href="mailto:${email}" style="color:#1e40af;">${email}</a> to confirm their appointment slot and share any preparation details.`
    )}
  `);

  try {
    await transporter.sendMail({
      from: `"Legacy ScholarGate" <ceo@legacyscholargate.bd>`,
      to: 'ceo@legacyscholargate.bd',
      replyTo: email,
      subject: `📅 Appointment Request — ${name}`,
      html,
      text: `Appointment from ${name} | Email: ${email} | Phone: ${phone} | Date: ${formattedDate} | Shift: ${shiftLabel} | Message: ${message}`
    });

    console.log('✅ Contact email sent');
    res.json({ success: true, message: 'Mail sent successfully' });
  } catch (err) {
    console.error('❌ Contact mail error:', err);
    res.status(500).json({ error: 'Mail failed' });
  }
});

// ─────────────────────────────────────────────
// SCHOLARSHIP APPLICATION ROUTE
// ─────────────────────────────────────────────
app.post('/api/apply', upload.fields([
  { name: 'photo',       maxCount: 1 },
  { name: 'passport',    maxCount: 1 },
  { name: 'certificate', maxCount: 1 },
  { name: 'additional',  maxCount: 1 }
]), async (req, res) => {
  console.log('🔥 APPLY ROUTE HIT', req.body);

  const { name, email, phone, dob, gender, country, address } = req.body;

  const countryMap = { italy: '🇮🇹 Italy', nz: '🇳🇿 New Zealand', canada: '🇨🇦 Canada' };
  const genderMap  = { male: 'Male', female: 'Female', other: 'Other / Prefer not to say' };

  const formattedDob = dob
    ? new Date(dob).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    : '—';

  const attachments = [];
  const attachmentRows = [];
  const docLabels = {
    photo:       '📸 Passport-size Photo',
    passport:    '📄 Passport Copy',
    certificate: '🎓 Academic Certificate',
    additional:  '📎 Additional Document'
  };

  if (req.files) {
    for (const key in req.files) {
      const file = req.files[key][0];
      attachments.push({ filename: file.originalname, content: file.buffer });
      attachmentRows.push(row(docLabels[key] || key, `<span style="color:#16a34a;font-weight:600;">✅ ${file.originalname}</span>`));
    }
  }

  if (attachmentRows.length === 0) {
    attachmentRows.push(row('Documents', '<span style="color:#f59e0b;">⚠️ No documents attached</span>'));
  }

  const html = emailWrapper(`
    <h2 style="margin:0 0 6px;color:#1e293b;font-size:20px;font-weight:800;">🎓 New Scholarship Application</h2>
    <p style="margin:0 0 28px;color:#64748b;font-size:14px;line-height:1.7;">
      A new scholarship application has been submitted via the Legacy ScholarGate website.
      Please review the applicant's information and attached documents at your earliest convenience.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${sectionTitle('👤', 'Personal Information')}
      ${row('Full Name', `<strong>${name}</strong>`)}
      ${row('Date of Birth', formattedDob)}
      ${row('Gender', genderMap[gender] || gender)}
      ${sectionTitle('📞', 'Contact Details')}
      ${row('Email Address', `<a href="mailto:${email}" style="color:#0f3460;font-weight:600;">${email}</a>`)}
      ${row('Phone Number', `<a href="tel:${phone}"  style="color:#0f3460;font-weight:600;">${phone}</a>`)}
      ${row('Home Address', address)}
      ${sectionTitle('🌍', 'Application Details')}
      ${row('Destination Country', `<strong style="font-size:15px;">${countryMap[country] || country}</strong>`)}
      ${sectionTitle('📁', 'Submitted Documents')}
      ${attachmentRows.join('')}
    </table>

    ${actionBox(
      '#f0fdf4', '#bbf7d0', '#166534',
      '💡',
      `Review the attached documents and contact the applicant at <a href="mailto:${email}" style="color:#166534;">${email}</a> to acknowledge receipt and outline the next steps in the application process.`
    )}
  `);

  try {
    await transporter.sendMail({
      from: `"Legacy ScholarGate" <ceo@legacyscholargate.bd>`,
      to: 'ceo@legacyscholargate.bd',
      replyTo: email,
      subject: `🎓 Scholarship Application — ${name} → ${countryMap[country] || country}`,
      html,
      attachments,
      text: `Scholarship application from ${name} | Email: ${email} | Phone: ${phone} | DOB: ${formattedDob} | Gender: ${gender} | Country: ${country} | Address: ${address}`
    });

    console.log('✅ Application email sent');
    res.json({ success: true, message: 'Application sent successfully' });
  } catch (err) {
    console.error('❌ Application mail error:', err);
    res.status(500).json({ error: 'Failed to send application' });
  }
});

// ─────────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});