const express = require('express');
const { getDorms, createDorm } = require('../controllers/dormController');
const router = express.Router();

router.get('/', getDorms); // Fetch all dorms
router.post('/', createDorm); // Create a new dorm

module.exports = router;
