# logdown-print-method-name

## Installation

```bash
npm install --save logdown-print-method-name
```

## Usage

```js
const logdown = require('logdown')
const printMethodName = require('logdown-print-method-name')

const logger = printMethodName(logdown('foo'))

logger.log('lorem')
logger.warn('lorem')
```

Example [here](https://github.com/caiogondim/logdown-print-method-name.js/example/index.js).

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
