# Pages Framework Object Oriented With JavaScript

JsPages is an experimental prototype of a web framework, inspired by [Yegor Bugayenko](https://www.yegor256.com/) with the project [jpages](https://github.com/yegor256/jpages).

This is how you start a web app:
```javascript
'use strict';

const pageSimple = require('./page-simple');
const outputSimple = require('./output-simple');

const http = require('node:http');

const server = http.createServer((req, res) => {

    const page = pageSimple('Hello World!');
    const output = outputSimple();
    page
        .metadata()
        .output(output)
        .write(res);
});

server.listen(8000);
```