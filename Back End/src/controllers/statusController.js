const transporter = require('../config/mail');
const statusView = require('../views/statusView');
const { getStats, trackMail } = require('../utils/tracking');
const { emailWrapper, row } = require('../utils/emailTemplates');

const getHealthStatus = async (req, res) => {
    const stats = getStats();
    let mailStatus = '✅ SMTP Connected';
    let mailColor = '#10b981';

    try {
        await transporter.verify();
    } catch (err) {
        mailStatus = '❌ SMTP Error';
        mailColor = '#ef4444';
        console.error('SMTP Connection Failure:', err.message);
    }

    res.send(statusView(
        'Server Dashboard',
        '✅ Operational',
        `Backend is active. Mail Service: <span style="color:${mailColor};font-weight:700;">${mailStatus}</span>`,
        stats
    ));
};

const testMail = async (req, res) => {
    const recipient = 'ceo@legacyscholargate.bd';
    const html = emailWrapper(`
        <h2 style="margin:0 0 6px;color:#1e293b;font-size:20px;font-weight:800;">✅ Test Email</h2>
        <p style="margin:0 0 24px;color:#64748b;font-size:14px;">Your professional email template is operational.</p>
    `);

    try {
        await transporter.sendMail({
            from: `"Legacy ScholarGate" <ceo@legacyscholargate.bd>`,
            to: recipient,
            subject: '✅ Test — Mail Service Working',
            html
        });

        trackMail('TEST', recipient);

        res.send(statusView(
            'Test Result',
            '✅ Success',
            'Verification email delivered successfully. Tracking updated.'
        ));
    } catch (err) {
        console.error('❌ Test mail error:', err);
        res.status(500).send(statusView(
            'Test Result',
            '❌ Failed',
            'Could not establish connection with SMTP server. Check credentials.'
        ));
    }
};

module.exports = {
    getHealthStatus,
    testMail
};
