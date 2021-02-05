require('dotenv').config()

const { SmartThingsClient, BearerTokenAuthenticator } = require('@smartthings/core-sdk')
const client = new SmartThingsClient(new BearerTokenAuthenticator(process.env.PAT))
const alfy = require('alfy')
const input = alfy.input
const format = input.split(' ')
const [id, capability, command] = format

export const excuteDeviceCommand = (id, command) => {
  client.devices.executeCommand(id, { capability: 'switch', command }).catch(() => null)
}

const executeScene = (deviceId) => {
  client.scenes.execute(deviceId).catch(() => '')
}

if (capability === 'scene') {
  executeScene(id)
}

if (capability === 'switch') {
  excuteDeviceCommand(id, command)
}
