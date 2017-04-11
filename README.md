# Scribe Coin Purse [![Build Status](https://travis-ci.org/luetkemj/scribe-coin-purse.svg?branch=master)](https://travis-ci.org/luetkemj/scribe-coin-purse)

[![NPM](https://nodei.co/npm/scribe-rpg-coin-purse.svg?downloads=true)](https://nodei.co/npm/scribe-rpg-coin-purse/)

A Fantasy RPG Currency Exchange.

## Getting started

`npm install --save scribe-rpg-coin-purse`

## Features

This project makes it easy to:
* Add and subtract multiple denominations
* Parse strings for value denomination pairs
* Keep your coins organized

## Documentation

- [config](#config)
  - [Supported config values:](#supported-config-values)
    - [denominations](#denominations)
- [copperValue(string, config)](#coppervaluestring-config)
  - [Description](#description)
  - [Usage](#usage)
  - [Example](#example)
- [parser(exp, config)](#parserexp-config)
  - [Description](#description-1)
  - [Usage](#usage-1)
  - [Example](#example-1)
- [subUnits(coppers, config)](#subunitscoppers-config)
  - [Description](#description-2)
  - [Usage](#usage-2)
  - [Example](#example-2)
- [total(array, config)](#totalarray-config)
  - [Description](#description-3)
  - [Usage](#usage-3)

### config

Most functions accept a config object.

#### Supported config values:

##### denominations

An array of denomination objects

Schema:

```javacript
{
  name: String,
  abrv: String, (must be two uppercase letters)
  copperValue: Number,
}
```

Default:

```javacript
[
  {
    name: 'copper',
    abrv: 'CP',
    copperValue: 1,
  },
  {
    name: 'silver',
    abrv: 'SP',
    copperValue: 10,
  },
  {
    name: 'electrum',
    abrv: 'EP',
    copperValue: 50,
  },
  {
    name: 'gold',
    abrv: 'GP',
    copperValue: 100,
  },
  {
    name: 'platinum',
    abrv: 'PP',
    copperValue: 1000,
  },
]
```

### copperValue(string, config)

#### Description
Returns the total copper value of *string*.

#### Usage

copperValue(string, config)

 * **string** {string} _required_
   * A string with value denomination pairs in it to be parsed

* **config** {object} _optional_
   * an object containing configuration options
   * default value: { [denominations](https://github.com/luetkemj/scribe-coin-purse/wiki/config#denominations) }

 * @return {number} sum of all value denomination pairs in string

#### Example
```javascript
const val = copperValue('This sword is worth 20gp');

val === 200;
```

### parser(exp, config)

#### Description
Returns an array of objects describing each denomination value pair found within *exp*.

#### Usage

parser(exp, config)

 * **exp** {string} _required_
   * A string containing value denomination pairs

 * **config** {object} _optional_
   * an object containing configuration options
   * default value: { [denominations](https://github.com/luetkemj/scribe-coin-purse/wiki/config#denominations) }

 * @return {array}
```javascript
[
  {
    match: String, // the match found
    value: String, // the value in the found match
    denomination: String, // the denomination in the found match
  },
  ...
]
```

#### Example
```javascript
const val = parser('This sword is worth 20gp');

val === { match: '20gp', value: '20', denomination: 'GP' };
```

### subUnits(coppers, config)

#### Description
Takes a copper value and returns and object containing each denomination and their value.

#### Usage

subUnits(coppers, config)

 * **exp** {number} _required_
   * A number representing the total copper value to be parsed

* **config** {object} _optional_
   * an object containing configuration options
   * default value: { [denominations](https://github.com/luetkemj/scribe-coin-purse/wiki/config#denominations) }

 * @return {object} [contains a key for each denomination in denominations]
```javascript
{
  CP: 0,
  SP: 0,
  EP: 0,
  GP: 0,
  PP: 0,
}
```

#### Example
```javascript
const val = subUnits(1161);

val === {
  CP: 1,
  SP: 1,
  EP: 1,
  GP: 1,
  PP: 1,
};
```

### total(array, config)

#### Description
Returns the total copper value of all expressions in *array*

#### Usage

total(array, config)

 * **array** {array} _required_
   * An array of strings containing value denomination pairs

* **config** {object} _optional_
   * an object containing configuration options
   * default value: { [denominations](https://github.com/luetkemj/scribe-coin-purse/wiki/config#denominations) }

 * @return {number}

 #### Example
 ```javascript
 const val = total(['1CP', '1CP']);

 val === 2;
 ```

 ### values(copperValue, config)

 #### Description
 Returns each total denomination value within given copperValue

 #### Usage

 total(array, config)

  * **array** {array} _required_
    * An array of strings containing value denomination pairs

 * **config** {object} _optional_
    * an object containing configuration options
    * default value: { [denominations](https://github.com/luetkemj/scribe-coin-purse/wiki/config#denominations) }

  * @return {number}

 #### Example:
 ```javascript
 const vals = values(1161);

 vals === {
   CP: 1161,
   SP: 116,
   EP: 23,
   GP: 11,
   PP: 1,
 }
 ```

## Contributing

Feature requests, issues, and contributions are all welcome.

[issues](https://github.com/luetkemj/scribe-coin-purse/issues/new)
