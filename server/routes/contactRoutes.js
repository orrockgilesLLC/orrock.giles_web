// routes/contactRoutes.js
const express = require('express');
const { handleContactForm } = require('../controllers/contactController');

const router = express.Router();

// Route to handle POST request for contact form submissions
router.post('/', handleContactForm);

module.exports = router;