const transporter = require('../config/mail');
const { emailWrapper, row, sectionTitle, actionBox } = require('../utils/emailTemplates');
const { trackMail } = require('../utils/tracking');

const sendApplyEmail = async (req, res) => {
    console.log('🔥 APPLY ROUTE HIT', req.body);

    const { name, email, phone, dob, gender, country, address } = req.body;

    if (!name || !email || !phone || !country) {
        return res.status(400).json({ error: 'Missing required fields: name, email, phone, country' });
    }

    const countryMap = {
        italy:     '🇮🇹 Italy',
        nz:        '🇳🇿 New Zealand',
        canada:    '🇨🇦 Canada',
        australia: '🇦🇺 Australia'
    };
    const genderMap = { male: 'Male', female: 'Female', other: 'Other / Prefer not to say' };

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
        for (const key of Object.keys(req.files)) {
            const file = req.files[key][0];
            attachments.push({ filename: file.originalname, content: file.buffer });
            attachmentRows.push(row(
                docLabels[key] || key,
                `<span style="color:#16a34a;font-weight:600;">✅ ${file.originalname}</span>`
            ));
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
            ${row('Full Name',     `<strong>${name}</strong>`)}
            ${row('Date of Birth', formattedDob)}
            ${row('Gender',        genderMap[gender] || gender || '—')}
            ${sectionTitle('📞', 'Contact Details')}
            ${row('Email Address', `<a href="mailto:${email}" style="color:#0f3460;font-weight:600;">${email}</a>`)}
            ${row('Phone Number',  `<a href="tel:${phone}"   style="color:#0f3460;font-weight:600;">${phone}</a>`)}
            ${row('Home Address',  address || '—')}
            ${sectionTitle('🌍', 'Application Details')}
            ${row('Destination Country', `<strong style="font-size:15px;">${countryMap[country] || country}</strong>`)}
            ${sectionTitle('📁', 'Submitted Documents')}
            ${attachmentRows.join('')}
        </table>
        ${actionBox(
            '#f0fdf4', '#bbf7d0', '#166534', '💡',
            `Review the attached documents and contact the applicant at <a href="mailto:${email}" style="color:#166534;">${email}</a> to acknowledge receipt and outline the next steps.`
        )}
    `);

    try {
        await transporter.sendMail({
            from:    `"Legacy ScholarGate" <${process.env.MAIL_USER}>`,
            to:      process.env.MAIL_USER,
            replyTo: email,
            subject: `🎓 Scholarship Application — ${name} → ${countryMap[country] || country}`,
            html,
            attachments,
            text: `Application from ${name} | Email: ${email} | Phone: ${phone} | DOB: ${formattedDob} | Gender: ${gender} | Country: ${country} | Address: ${address}`
        });

        console.log('✅ Application email sent');
        trackMail('APPLY', email);
        res.json({ success: true, message: 'Application sent successfully' });
    } catch (err) {
        console.error('❌ Application mail error:', err);
        res.status(500).json({ error: 'Failed to send application' });
    }
};

module.exports = { sendApplyEmail };