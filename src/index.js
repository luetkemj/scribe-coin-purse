import copperValue from './copper-value';
import parser from './parser';
import subUnits from './sub-units';
import total from './total';
import values from './values';

const coinPurse = {};

coinPurse.copperValue = copperValue;
coinPurse.parser = parser;
coinPurse.subUnits = subUnits;
coinPurse.total = total;
coinPurse.values = values;

module.exports = coinPurse;
