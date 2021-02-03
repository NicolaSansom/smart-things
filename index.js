require('dotenv').config();
const {SmartThingsClient, BearerTokenAuthenticator} = require('@smartthings/core-sdk')
const client = new SmartThingsClient(new BearerTokenAuthenticator(process.env.PAT));
const alfy = require('alfy');
const input = await alfy.input;

const listScenes = () => {
  return client.scenes.list();
}

const listDevices = () => {
  return client.devices.list();
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

const getDevices = async () => {
  const devices = await listDevices();
  const options = devices && devices.map(({label, components, deviceId}) => {
    const deviceIcon = components[0].categories[0].name;
    const icon = deviceIcon === 'Light' ? '💡' : 'something';
    return {
      title: `${icon} ${label}`,
      arg: deviceId,
    }
  });

  return options;
}

if(input === 'scenes' || input === 's') {
  const scenes = await getScenes();
  return alfy.output(scenes);
}

if(input === 'devices' || input === 'd') {
  const devices = await getDevices();
  return alfy.output(devices);
}


