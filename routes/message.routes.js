const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Task 4: Post-service API
// Schedule Message
router.post('/message/schedule', messageController.scheduleMessage);

module.exports = router;
