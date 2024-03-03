const express = require('express');

module.exports = function (app) {
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// initial route
app.get('', (req, res) => res.send('Hellow , Welcome To node js work thread service backend'));
}