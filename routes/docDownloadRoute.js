const express = require('express');
const router = express.Router();
const {docDownload, contactForm} = require('../controllers/docDownloadController')

router.get('/docDownload', docDownload)
router.post('/contactForm', contactForm)

module.exports = router;