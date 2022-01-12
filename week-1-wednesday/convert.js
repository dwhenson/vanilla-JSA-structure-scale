const Convert = (function () {
  const Constructor = function (weightInMg) {
    this.weightInMg = weightInMg;
  };

  Constructor.prototype.inMg = function () {
    return Number.parseFloat(this.weightInMg);
  };

  Constructor.prototype.inGrams = function () {
    return Number.parseFloat(this.weightInMg) / 1000;
  };

  Constructor.prototype.inKg = function () {
    return Number.parseFloat(this.weightInMg) / 1000 / 1000;
  };

  return Constructor;
})();

const hummingbird = new Convert(4000);
const grams = hummingbird.inGrams(); // ?
const kg = hummingbird.inKg(); // ?
const mg = hummingbird.inMg(); // ?
