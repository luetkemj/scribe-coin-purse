export default function parser(exp) {
  // parse value/denomination pairs
  const regexVDP = /([0-9]+[a-z]{2})/gi;

  // parse value from value/denomination pairs
  const regexV = /([0-9]*)/;

  // parse denomination from value/denomination pairs
  const regexD = /[a-z]{2}/i;

  const array = [];

  let m;

  do {
    m = regexVDP.exec(exp);
    if (m) {
      const o = {};
      o.match = m[0];
      o.value = regexV.exec(m[0])[0];
      o.denomination = regexD.exec(m[0])[0].toUpperCase();
      array.push(o);
    }
  } while (m);

  return array;
}
