const convert = (function () {
  const format = function (convertedNumber, units = "") {
    return `${convertedNumber.toLocaleString()} ${units}`.trim();
  };

  const mgToGrams = function (number, units) {
    return format(Number.parseInt(number, 10) / 1000, units ? "grams" : "");
  };

  const mgToKg = function (number, units) {
    return format(Number.parseInt(number, 10) * 1000 * 1000, units ? "kg" : "");
  };

  const gramsToMg = function (number, units) {
    return format(Number.parseInt(number, 10) * 1000, units ? "mg" : "");
  };

  const gramsToKg = function (number, units) {
    return format(Number.parseInt(number, 10) / 1000, units ? "kg" : "");
  };

  const kgToMg = function (number, units) {
    return format(Number.parseInt(number, 10) * 1000 * 1000, units ? "mg" : "");
  };

  const kgToGrams = function (number, units) {
    return format(Number.parseInt(number, 10) * 1000, units ? "grams" : "");
  };

  return { mgToGrams, mgToKg, gramsToMg, gramsToKg, kgToMg, kgToGrams };
})();

convert.gramsToKg(500, true); // ?
