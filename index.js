const add = (stringOfNumbers) =>
  stringOfNumbers
    .trim()
    .split(/,|\n/)
    .filter(x => x !== '')
    .map(x => parseInt(x))
    .reduce((sum, x) => sum + x, 0);

module.exports = {
  add 
};

