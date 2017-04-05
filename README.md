# Scribe Coin Purse [![Build Status](https://travis-ci.org/luetkemj/scribe-coin-purse.svg?branch=master)](https://travis-ci.org/luetkemj/scribe-coin-purse)

[![NPM](https://nodei.co/npm/scribe-rpg-coin-purse.svg?downloads=true)](https://nodei.co/npm/scribe-rpg-coin-purse/)

A Fantasy RPG Currency Exchange.

## Getting started

`npm install --save scribe-rpg-coin-purse`

## Usage

**es5**: `var coinPurse = require("scribe-rpg-coin-purse")`

**es6** `import * as coinPurse from 'scribe-rpg-coin-purse';`

## Features

This project makes it easy to:
* Parse coinage in text.
* Calculate total copper value from in a string such as '1gp 3sp 6ep 12cp'.
* Organize coinage by value.

### API
#### copperValue(string);
Returns the total coin value in copper
```javascript
coinPurse.copperValue('3GP, 4cp'); // => 304
```

#### subUnits(number);
Takes a copper value and returns and object containing each denomination and their value
```javascript
coinPurse.subUnits(1161);
/*
 {
  CP: 1,
  SP: 1,
  EP: 1,
  GP: 1,
  PP: 1,
};
*/
```

#### parser(string);
Performs a regex on the string to find value denomination pairs returns an array of objects for each
match containing the match, value and denomination.
```javascript
coinPurse.parser('This sword is worth 6gp. And this potion is 12sp.');
/*
  [
    { match: '6gp', value: '6', denomination: 'GP' },
    { match: '12cp', value: '12', denomination: 'SP' },
  ]
*/

```

## Contributing

Feel free to open an issue or a pull request.

[issues](https://github.com/luetkemj/scribe-coin-purse/issues/new)
