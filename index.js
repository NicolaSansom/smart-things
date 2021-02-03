require('dotenv').config();
const {SmartThingsClient, BearerTokenAuthenticator} = require('@smartthings/core-sdk')
const client = new SmartThingsClient(new BearerTokenAuthenticator(process.env.PAT));
const alfy = require('alfy');
const input = await alfy.input;

const listScenes = () => {
  return client.scenes.list();
}

const getScenes = async () => {
  const scenes = await listScenes();
  const options = scenes && scenes.map(({sceneName, sceneId}) => {
    return {
      title: `🛋️  ${sceneName}`,
      arg: sceneId,
    }
  });
  return options;
}

if(input === 'scenes' || input === 's') {
  const scenes = await getScenes();
  return alfy.output(scenes);
}
