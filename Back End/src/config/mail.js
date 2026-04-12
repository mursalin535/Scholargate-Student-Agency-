require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'mail.legacyscholargate.bd',
  port: parseInt(process.env.MAIL_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

transporter.verify((err) => {
  if (err) console.error('❌ Mail error:', err);
  else      console.log('✅ Mail server ready');
});

module.exports = transporter;