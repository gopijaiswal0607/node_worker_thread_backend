const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

// Task 4: Post-service API
// Schedule Message
router.post('/message/schedule', messageController.scheduleMessage);

module.exports = router;
