const express = require('express');
const { addReview } = require('../controllers/reviewController');
const router = express.Router();

router.post('/', addReview); // Add a review to a dorm

module.exports = router;
