# Identifiers - Handle

Extract, validate and normalize [Handles](https://en.wikipedia.org/wiki/Handle_System).

**Current version:** 0.1.1  
**Supported Node.js versions:** 18, 20, 22, 23

## Installation

Add the following to your `package.json` via `yarn add identifiers-handle` or `npm install --save identifiers-handle`:

```shell
"identifiers-handle": "^0.1.0"
```

## Usage

```javascript
const handle = require("identifiers-handle");

handle.extract("http://hdl.handle.net/10149/596901");
//=> ["10149/596901"]
```

## Other versions

We also maintain versions of this library for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2017-2024 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
