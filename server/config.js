/**
 * config module - google storage
 * @module config
 */

var path = require('path')

const bucketName = 'education app' // Put here your bucketName
const Storage = require('@google-cloud/storage');
const projectId = 'education-app-291403';

const storage = new Storage({
  keyFilename: path.join(__dirname, '/../storage.json'),
  projectId: projectId
});


module.exports = {
  storage,
  bucketName
}
