const fetch = require('node-fetch');
require('dotenv').config();
const {SmartThingsClient, BearerTokenAuthenticator} = require('@smartthings/core-sdk')
const client = new SmartThingsClient(new BearerTokenAuthenticator(process.env.PAT));

const listScenes = () => {
  client.scenes.list().then(scenes => {
    console.log('scenes', scenes)
 });
}

const executeMovieMode = () => {
  client.scenes.execute('0ca9d064-06c0-4e4e-9d61-516a100c008b').catch(() => '');
}

const executeGoMode = () => {
  client.scenes.execute('8c2c1809-377f-4a15-9818-0d5096b52537').catch(() => '');
}

listScenes();