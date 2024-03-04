const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller');

// Task 1: Data Upload API
// Upload Data
router.post('/upload', uploadController.upload);

module.exports = router;
