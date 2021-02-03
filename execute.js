require('dotenv').config();
const {SmartThingsClient, BearerTokenAuthenticator} = require('@smartthings/core-sdk')
const client = new SmartThingsClient(new BearerTokenAuthenticator(process.env.PAT));
const alfy = require('alfy');
const input = await alfy.input;

const executeScene = () => {
  client.scenes.execute(input).catch(() => '');
}

executeScene();