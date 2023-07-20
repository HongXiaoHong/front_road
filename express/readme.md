基于 Express 框架，可以快速构建 Web 应用

https://www.expressjs.com.cn/starter/hello-world.html
创建过程:

```bash

D:\documents\projects\github\branch\front_road>mkdir express

D:\documents\projects\github\branch\front_road>cd express

D:\documents\projects\github\branch\front_road\express>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (express)
version: (1.0.0)
description: express learn
entry point: (index.js)
test command:
git repository:
keywords:
author: hong
license: (ISC)
About to write to D:\documents\projects\github\branch\front_road\express\package.json:

{
  "name": "express",
  "version": "1.0.0",
  "description": "express learn",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "hong",
  "license": "ISC"
}


Is this OK? (yes) yes

D:\documents\projects\github\branch\front_road\express>npm install express --save

added 58 packages in 3s

D:\documents\projects\github\branch\front_road\express>node app.js
Example app listening on port 10000

```