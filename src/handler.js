import BitmovinTranscode from './BitmovinTranscode';

'use strict';
require('dotenv').config();
const jf = require('jsonfile');

function processSNS(event) {
  const message = event.Records[0].Sns.Message;
  return message;
}

function entry(event, context, callback) {
  console.log('Starting new bitmovin transcode job');
  const message = processSNS(event);
  BitmovinTranscode.getVideoLink(message);
  callback(null, 'Success!');
}

function test() {
  console.log('Starting TEST bitmovin transcode');
  // const transcoder = new BitmovinTranscode();
  const event = jf.readFileSync('event.json');
  const message = processSNS(event);
  // BitmovinTranscode.getVideoLink(message);
  // transcoder.getVideoLink(message);
  getVideoLink(message);
}

module.exports = {
  entry,
  test,
};
