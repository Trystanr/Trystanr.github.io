 'use strict';
/* eslint-env es6*/

const watson = require('watson-developer-cloud');

/**
 * Instantiate the Watson Conversation Service
 */
const conversation = new watson.ConversationV1({
  username: process.env.CONVERSATION_USERNAME || 'f182dbf2-52fd-43a7-bec7-8fda636f324e',
  password: process.env.CONVERSATION_PASSWORD || 'dKSJbqaioPi0',
  version_date: watson.ConversationV1.VERSION_DATE_2016_09_20
});

/**
 * Payload for the Watson Conversation Service
 * <workspace-id> and user input text required.
 */
const payload = {
  workspace_id: process.env.WORKSPACE_ID || '64cf1fda-b1cf-4526-b150-1d7052bc9035',
  input: {
    text: 'Ive been on hold for a minute',
    context: ''
  }

};

conversation.message(payload, function(err, data) {
  if (err) {
    // APPLICATION-SPECIFIC CODE TO PROCESS THE ERROR
    // FROM CONVERSATION SERVICE
    console.error(JSON.stringify(err, null, 2));
  } else {
    // APPLICATION-SPECIFIC CODE TO PROCESS THE DATA
    // FROM CONVERSATION SERVICE
    console.log(JSON.stringify(data, null, 2));
  }
});
