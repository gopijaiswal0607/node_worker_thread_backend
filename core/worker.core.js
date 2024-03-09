const csv = require('csv-parser');
const fs = require('fs');
const stream = require('stream');
const { parentPort, workerData } = require('worker_threads');
const UtilityCore = require('./utility.core')
const UtilityDatalayer= require('../datalayer/utility.datalayer')

// Function to process the file data
  processFileData = () => {
  return new Promise((resolve, reject) => {
    const data = [];
    // const fileStream = fs.createReadStream(workerData.fileContent)
    const bufferStream = new stream.PassThrough();
    bufferStream.end(workerData.fileContent)
      .pipe(csv())
      .on('data', (row) => {
        // Save each row of data into the data array
        data.push(row);
      })
      .on('end', async () => {
        try {
          const reformedData = await UtilityCore.splitDifferentCollectionData(data);
          await UtilityDatalayer.insertAllInformation(reformedData);
          resolve('File uploaded and data saved successfully');
        } catch (error) {
          // Reject with error message
          console.error("Error while streaming the file",error);
          reject(error);
        }
      });

    // Handle errors during file processing
    fileStream.on('error', (error) => {
      reject(error);
    });
  });
};

// Start processing file data
processFileData().then((message) => {
    // Send message to parent thread
    parentPort.postMessage({ success: true, message });
  })
  .catch((error) => {
    // Send error message to parent thread
    console.error("Error in process",error)
    parentPort.postMessage({ success: false, error: error.message });
  });
