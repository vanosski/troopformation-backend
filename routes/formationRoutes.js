const express = require('express');
const router = express.Router();
const { calculateFormation } = require('../controllers/formationController');

// Ensure you have defined the route correctly
router.post('/calculate', calculateFormation); // Ensure this is defined

module.exports = router;