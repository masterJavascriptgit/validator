# jsvalidator-tools

The best data validation and data unit conversion package .



## Getting started

To install the package

```bash
  npm install jsvalidator-tools
```


## Usage/Examples

```javascript
var { validator } = require('jsvalidator-tools');


validator.isEmail("Example#@34") // false
validator.isEmail("Example@gmail.com") // true
