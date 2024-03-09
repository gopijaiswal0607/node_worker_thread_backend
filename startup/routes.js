const express = require('express');
const fileUpload = require('express-fileupload');
const uploadRoutes = require('../routes/upload.routes');
const policyRoutes = require('../routes/policy.routes');
const addMessageRoutes = require('../routes/message.routes')
module.exports = function (app) {
app.use(fileUpload());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// initial route
app.get('', (req, res) => res.send('Welcome To node js work thread service backend'));
// add api for upload
 
app.use('/data',uploadRoutes);
app.use('/find',policyRoutes);
app.use('/add',addMessageRoutes);
}


