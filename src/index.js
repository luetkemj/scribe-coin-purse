import copperValue from './copper-value';
import parser from './parser';
import subUnits from './sub-units';
import values from './values';

const coinPurse = {};

coinPurse.copperValue = copperValue;
coinPurse.parser = parser;
coinPurse.subUnits = subUnits;
coinPurse.values = values;

module.exports = coinPurse;
