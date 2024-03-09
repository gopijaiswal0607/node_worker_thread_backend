const multer = require('multer');
const csv = require('csv-parser');
const path = require('path');

// const filepath = require('../core/worker.core')
const fs = require('fs');
// const UploadCore= require('../core/worker.core')
// Set up multer for file upload
const { Worker } = require('worker_threads');
class uploadController{
    static upload = async(req,res)=>{
        try {
            // Access the uploaded file from req.file
            const file = req.files.file; 
            // Check if file exists
            if (!file) {
              return res.status(400).json({ error: 'No file uploaded' });
            }
            const worker = new Worker(path.resolve(__dirname, '../core/worker.core'), {
              workerData: { fileContent: file.data }
            });
        
            // Listen for messages from the worker thread
            worker.on('message', (message) => {
              if (message.success) {
                // Respond with success message
                res.status(200).json({ message: message.message });
              } else {
                // Respond with error message
                res.status(500).json({ error: message.error });
              }
            });
        
            // Handle errors from the worker thread
            worker.on('error', (error) => {
              console.error('Error in worker thread:', error);
              res.status(500).json({ error: 'Internal Server Error' });
            });
          } catch (error) {
            console.error('Error uploading file:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    }
}
module.exports = uploadController