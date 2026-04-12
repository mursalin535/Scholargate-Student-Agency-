const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { testMail, sendContactEmail, sendApplyEmail } = require('../controllers/emailController');

// Match original paths
router.get('/test', testMail);

router.post('/api/contact', sendContactEmail);

router.post('/api/apply', upload.fields([
  { name: 'photo',       maxCount: 1 },
  { name: 'passport',    maxCount: 1 },
  { name: 'certificate', maxCount: 1 },
  { name: 'additional',  maxCount: 1 }
]), sendApplyEmail);

module.exports = router;
