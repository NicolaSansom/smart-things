require('dotenv').config();
const {SmartThingsClient, BearerTokenAuthenticator} = require('@smartthings/core-sdk')
const client = new SmartThingsClient(new BearerTokenAuthenticator(process.env.PAT));

const listScenes = () => {
  client.scenes.list().then(scenes => {
    console.log('scenes', scenes)
 });
}

const executeMovieMode = () => {
  client.scenes.execute(process.env.MOVIE_MODE).catch(() => '');
}

const executeGoMode = () => {
  client.scenes.execute(process.env.GAME_MODE).catch(() => '');
}

executeGoMode();