require('dotenv').config()
const { SmartThingsClient, BearerTokenAuthenticator } = require('@smartthings/core-sdk')
const client = new SmartThingsClient(new BearerTokenAuthenticator(process.env.PAT))
const alfy = require('alfy')
const input = alfy.input

const listScenes = () => {
  return client.scenes.list()
}

const listDevices = () => {
  return client.devices.list()
}

const getScenes = async () => {
  const scenes = await listScenes()
  const options =
    scenes &&
    scenes.map(({ sceneName, sceneId }) => {
      return {
        title: `🛋️  ${sceneName}`,
        arg: `${sceneId} scene`,
      }
    })
  return options
}

const getDevices = async (command) => {
  const devices = await listDevices()
  const options =
    devices &&
    devices.map(({ label, components, deviceId }) => {
      const deviceIcon = components[0].categories[0].name
      const icon = deviceIcon === 'Light' ? '💡' : 'something'
      return {
        title: `${icon} ${label}`,
        arg: `${deviceId} switch ${command || 'on'}`,
      }
    })

  return options
}

if (input === 'scenes' || input === 's') {
  const scenes = await getScenes()
  alfy.output(scenes)
} else if (input === 'devices' || input === 'd') {
  const devices = await getDevices()
  alfy.output(devices)
} else if (input === 'off') {
  const devices = await getDevices('off')
  alfy.output(devices)
} else if (input === 'on') {
  const devices = await getDevices('on')
  alfy.output(devices)
} else {
  const devices = await getDevices()
  const scenes = await getScenes()
  const items = [...devices, ...scenes].filter(({ title }) => title.toLowerCase().includes(input))
  alfy.output(items)
}
