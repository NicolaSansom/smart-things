# Node script that allows you to trigger SmartThings scenes.

1. Generate [PAT token](`https://account.smartthings.com/tokens`)
2. Place in a `.env`
3. `yarn && yarn scences`
4. Run `listScenes()` to find scene ids
5. Create exclude methods for example:

```js
const executeMovieMode = () => {
  client.scenes.execute('sceneid').catch(() => '');
}
```
