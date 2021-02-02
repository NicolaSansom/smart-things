# Simple node script that allows you to trigger SmartThings scenes.

1. Generate [PAT token](`https://account.smartthings.com/tokens`)
2. `yarn && yarn scences`
3. Run `listScenes()` to find scene ids
4. Create exclude methods for example:

```js
const executeMovieMode = () => {
  client.scenes.execute('sceneid').catch(() => '');
}
```
