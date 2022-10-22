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


validator.isPhoneNumber("+919367788755") // true
validator.isPhoneNumber("1234567") // false

Acceptable formats :

- +919367788755
- 8989829304
- +16308520397
- 786-307-3615


```


```javascript
var { format } = require('jsvalidator-tools');

format.toUsd(25000); // $25,000.00
format.toUsd(25000, "de-DE", "JPY"); // 25.000 ¥

```


