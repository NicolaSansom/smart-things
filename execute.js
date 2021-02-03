require('dotenv').config()

const { SmartThingsClient, BearerTokenAuthenticator } = require('@smartthings/core-sdk')
const client = new SmartThingsClient(new BearerTokenAuthenticator(process.env.PAT))
const alfy = require('alfy')
const input = alfy.input
const format = input.match(/([\w+]+)/g)
const [id, capability, command] = format

export const excuteDeviceCommand = (id, command) => {
  client.devices.execute(input, [{ capability: 'switch', command }]).catch(() => '')
}

const executeScene = (deviceId) => {
  client.scenes.execute(deviceId).catch(() => '')
}

if (capability === 'scenes') {
  executeScene(id)
}

if (capability === 'switch') {
  executeScene(id, command)
}
