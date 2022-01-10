const convert = (function () {
  const format = function (convertedNumber, units) {
    return `${convertedNumber.toLocaleString()} ${units}`;
  };

  const mgToGrams = function (number) {
    return format(Number.parseInt(number, 10) / 1000, "grams");
  };

  const mgToKg = function (number) {
    return format(Number.parseInt(number, 10) * 1000 * 1000, "kg");
  };

  const gramsToMg = function (number) {
    return format(Number.parseInt(number, 10) * 1000, "mg");
  };

  const gramsToKg = function (number) {
    return format(Number.parseInt(number, 10) / 1000, "kg");
  };

  const kgToMg = function (number) {
    return format(Number.parseInt(number, 10) * 1000 * 1000, "mg");
  };

  const kgToGrams = function (number) {
    return format(Number.parseInt(number, 10) * 1000, "grams");
  };

  return { mgToGrams, mgToKg, gramsToMg, gramsToKg, kgToMg, kgToGrams };
})();
