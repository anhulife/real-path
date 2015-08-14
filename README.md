# real-path

> get real case path

## install

```
$ npm install --save real-path
```

## Usage

```js
var realPath = require('real-path');

// Unix-like
realPath('/foo/bar.JS');
//=> /foo/bar.js

// Windows
realPath('C:\\foo\\bar.JS');
//=> C:\\foo\\bar.js
```

## License

MIT © [anhulife](https://github.com/anhulife)
