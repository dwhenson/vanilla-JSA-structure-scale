const Convert = (function () {
  const Constructor = function (weightInMg) {
    this.weightInMg = weightInMg;
  };

  Constructor.prototype.addMg = function (amountToAdd) {
    this.weightInMg = Number.parseFloat(this.weightInMg) + amountToAdd;
    return this;
  };

  Constructor.prototype.addGrams = function (amountToAdd) {
    this.weightInMg = Number.parseFloat(this.weightInMg) + amountToAdd * 1000;
    return this;
  };

  Constructor.prototype.addKg = function (amountToAdd) {
    this.weightInMg = Number.parseFloat(this.weightInMg) + amountToAdd * 1000 * 1000;
    return this;
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
const afterEating = hummingbird.addMg(150).addGrams(1).inGrams();
