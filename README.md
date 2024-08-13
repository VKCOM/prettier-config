# VK Prettier Config

This is a shared config file for Prettier from VK. This package is used to avoid duplicating the config file between repositories.

```sh
yarn add -D prettier @vkontakte/prettier-config
```

`package.json`:

```json
{
  "prettier": "@vkontakte/prettier-config"
}
```

### createConfig

`createConfig` function takes only one optional argument `printWidth`, if your project needs to change the width of the lines. **100** is a default value.

`prettier.config.mjs`:

```js
import { createConfig } from './index.js';

export default createConfig(80);
```
