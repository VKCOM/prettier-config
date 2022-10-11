# VK Prettier Config

This is a shared config file for Prettier from VK. This package is used to avoid duplicating the config file between repositories.

To get started, you will need a configured Prettier and a `.prettierrc.js' file in the root of the repository:

`.prettierrc.js`:

```js
module.exports = require('@vkontakte/prettier-config').createConfig();
```

`createConfig` function takes only one optional argument `printWidth`, if your project needs to change the width of the lines. **100** is a default value.

```js
module.exports = require('@vkontakte/prettier-config').createConfig(80);
```
