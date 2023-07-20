

```bash
D:\documents\projects\github\branch\front_road>mkdir my_restify
D:\documents\projects\github\branch\front_road>cd my_restify
D:\documents\projects\github\branch\front_road\my_restify>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (my_restify)
version: (1.0.0)
description: first restify app
entry point: (index.js)
test command:
git repository:
keywords:
author: hong
license: (ISC)
About to write to D:\documents\projects\github\branch\front_road\my_restify\package.json:

{
  "name": "my_restify",
  "version": "1.0.0",
  "description": "first restify app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "hong",
  "license": "ISC"
}


Is this OK? (yes)



```

```bash
npm install express --save

# start app
D:\documents\projects\github\branch\front_road\my_restify>node  index.js
(node:23748) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is depr
ecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
restify listening at http://[::]:8080

```

测试
```http request
GET http://localhost:8080/hello/hong

response: "hello hong"
```

