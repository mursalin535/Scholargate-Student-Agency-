const { testMail } = require('./statusController');
const { sendContactEmail } = require('./contactController');
const { sendApplyEmail } = require('./applicationController');

module.exports = {
    testMail,
    sendContactEmail,
    sendApplyEmail
};
