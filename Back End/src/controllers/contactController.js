const transporter = require('../config/mail');
const { emailWrapper, row, sectionTitle, actionBox } = require('../utils/emailTemplates');
const { trackMail } = require('../utils/tracking');

const sendContactEmail = async (req, res) => {
    console.log('🔥 CONTACT ROUTE HIT', req.body);

    const { name, email, phone, date, shift, message } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ error: 'Missing required fields: name, email, phone' });
    }

    const shiftMap = {
        morning:   'Morning (11:00 am – 3:00 pm)',
        afternoon: 'Afternoon (3:00 pm – 8:00 pm)'
    };
    const shiftLabel = shiftMap[shift] || 'Not specified';

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
            ${row('Full Name',     name)}
            ${row('Email Address', `<a href="mailto:${email}" style="color:#0f3460;font-weight:600;">${email}</a>`)}
            ${row('Phone Number',  `<a href="tel:${phone}"   style="color:#0f3460;font-weight:600;">${phone}</a>`)}
            ${sectionTitle('📆', 'Appointment Preference')}
            ${row('Preferred Date',  `<strong>${formattedDate}</strong>`)}
            ${row('Preferred Shift', shiftLabel)}
            ${sectionTitle('💬', 'Message')}
            <tr>
                <td colspan="2" style="padding:14px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #0f3460;font-size:14px;color:#334155;line-height:1.8;font-style:italic;">
                    "${message || 'No message provided.'}"
                </td>
            </tr>
        </table>
        ${actionBox(
            '#eff6ff', '#bfdbfe', '#1e40af', '💡',
            `Reply directly to <a href="mailto:${email}" style="color:#1e40af;">${email}</a> to confirm their appointment slot.`
        )}
    `);

    try {
        await transporter.sendMail({
            from:    `"Legacy ScholarGate" <${process.env.MAIL_USER}>`,
            to:      process.env.MAIL_USER,
            replyTo: email,
            subject: `📅 Appointment Request — ${name}`,
            html,
            text: `Appointment from ${name} | Email: ${email} | Phone: ${phone} | Date: ${formattedDate} | Shift: ${shiftLabel} | Message: ${message}`
        });

        console.log('✅ Contact email sent');
        trackMail('CONTACT', email);
        res.json({ success: true, message: 'Mail sent successfully' });
    } catch (err) {
        console.error('❌ Contact mail error:', err);
        res.status(500).json({ error: 'Mail failed' });
    }
};

module.exports = { sendContactEmail };