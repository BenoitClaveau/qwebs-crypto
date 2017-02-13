# qwebs-crypto

Cryptographic service for [Qwebs server](https://www.npmjs.com/package/qwebs).
  
## Features

  * [Qwebs](https://www.npmjs.com/package/qwebs)
  * [API](#api) 

<a name="api"/>
## API

  * encrypt(source, password)
  * decrypt(source, password)

### Declare and inject $crypto

#### Via routes.json
```routes.json
{
  "services": [
    { "name": "$crypto", "location": "qwebs-crypto" }
  ]
}
```

#### Or in javascript
```js
const Qwebs = require("qwebs");
const qwebs = new Qwebs();

qwebs.inject("$crypto" ,"qwebs-crypto");
```

## Installation

```bash
$ npm install qwebs-crypto
```
