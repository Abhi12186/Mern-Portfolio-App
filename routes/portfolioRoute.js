const express = require('express');
const sendEmailController = require('../controllers/portfolioController');

const router = express.Router();

// POST /api/v1/portfolio/sendEmail
router.post('/sendEmail', sendEmailController);

module.exports = router;
