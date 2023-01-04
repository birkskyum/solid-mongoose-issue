# Issue with mongoose and solidstart

```sh
npm i
npm run build
npm start
```

Mongoose is imported and the version is printed in:

[`./src/routes/index.tsx`](https://github.com/birkskyum/solid-mongoose-issue/blob/main/src/routes/index.tsx)

Resulting in:


./dist/server.js:107060
var decimal128$3 = driver$1.get().Decimal128;
                                 ^

TypeError: Cannot read properties of null (reading 'Decimal128')
    at ./dist/server.js:107060:34
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:530:24)

Node.js v18.12.1
