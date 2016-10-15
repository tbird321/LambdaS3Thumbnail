/*
 * This sample will demonstrate downloading an image from S3, resize it and then upload the new version.
 * 
 * Credentials:
 *  The AWS SDK for Node.js will look for credentials first in the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY and then 
 *  fall back to the shared credentials file. For further information about credentials read the AWS SDK for Node.js documentation
 *  http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Credentials_from_the_Shared_Credentials_File_____aws_credentials_
 * 
 * Setup:
 *  Install the Image Magick CLI which can be download from http://www.imagemagick.org/. Be sure to have the CLI added to the system path.
 *  Create a S3 bucket to host the image to be resized
 *  Upload image to S3 bucket
 *  Update the _sampleEvent.js with the bucket and object key 
 *  Create a second bucket with the same name as the first but with the suffix '-thumbnails'
 */

// Set the region to the locations of the S3 buckets
process.env['AWS_REGION'] = 'us-west-2'

var fs = require('fs');
var app = require('./app');

var event = JSON.parse(fs.readFileSync('_sampleEvent.json', 'utf8').trim());

var context = {};
context.done = function () {
    console.log("Lambda Function Complete");
}

app.handler(event, context);