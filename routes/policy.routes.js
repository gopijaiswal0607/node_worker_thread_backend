const express = require('express');
const router = express.Router();
const policyController = require('../controllers/policy.controller');
// Task 2: Policy Info APIs
// Search Policy Info
router.get('/policy/search/:username', policyController.searchPolicyInfoByUsername);

// Aggregated Policy
router.get('/policy/aggregated', policyController.getAggregatedPolicy);

module.exports = router;
