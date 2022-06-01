const form = document.querySelector(".currency_converter_form");
const baseCurrencySelection = document.getElementById("currency_converter_form__base_currency");
const convertCurrencySelection = document.getElementById("currency_converter_form__convert_currency");
const baseAmountInput = document.getElementById("base__inputs__amount");
const convertAmountInput = document.getElementById("convert__inputs__amount");

const currencyOptionsGenerator = function (currencies) {
  const currencyOptions = [];

  currencies.forEach((currency) => {
    const optionElement = document.createElement("option");
    optionElement.text = currency;
    optionElement.value = currency;

    currencyOptions.push(optionElement);
  });

  return currencyOptions;
};

const updateCurrencyList = function (currencies) {
  const baseCurrencyOptions = currencyOptionsGenerator(currencies);
  baseCurrencyOptions.forEach((option) => {
    baseCurrencySelection.appendChild(option);
  });

  const convertCurrencyOptions = currencyOptionsGenerator(currencies);
  convertCurrencyOptions.forEach((option) => {
    convertCurrencySelection.appendChild(option);
  });
};

(async function () {
  const currencyConvertData = await fetch("https://api.exchangerate.host/latest").then((res) => res.json());
  const currencies = Object.keys(currencyConvertData.rates);

  updateCurrencyList(currencies);
})();

const updateCurrencyConversion = async function (base, convert) {
  const currencyConversionRateDataFromBase = await fetch(
    `https://api.exchangerate.host/lastet?base=${baseCurrencySelection.value}`
  ).then((res) => res.json());

  console.log(base);
  console.log(convert);
  console.log(currencyConversionRateDataFromBase.rates[convert]);

  return base * currencyConversionRateDataFromBase.rates[convert];
};

baseCurrencySelection.addEventListener("input", async () => {
  const currencyConversionRateDataFromBase = await fetch(
    `https://api.exchangerate.host/lastet?base=${baseCurrencySelection.value}`
  ).then((res) => res.json());

  const value = baseAmountInput.value * currencyConversionRateDataFromBase.rates[convertCurrencySelection.value];

  convertAmountInput.value = value;
});

baseAmountInput.addEventListener("input", async () => {
  const currencyConversionRateDataFromBase = await fetch(
    `https://api.exchangerate.host/lastet?base=${baseCurrencySelection.value}`
  ).then((res) => res.json());

  const value = baseAmountInput.value * currencyConversionRateDataFromBase.rates[convertCurrencySelection.value];

  convertAmountInput.value = value;
});

convertCurrencySelection.addEventListener("input", async () => {
  const currencyConversionRateDataFromBase = await fetch(
    `https://api.exchangerate.host/lastet?base=${baseCurrencySelection.value}`
  ).then((res) => res.json());

  const value = baseAmountInput.value * currencyConversionRateDataFromBase.rates[convertCurrencySelection.value];

  convertAmountInput.value = value;
});

convertAmountInput.addEventListener("input", async () => {
  const currencyConversionRateDataFromBase = await fetch(
    `https://api.exchangerate.host/lastet?base=${convertCurrencySelection.value}`
  ).then((res) => res.json());

  const value = convertAmountInput.value * currencyConversionRateDataFromBase.rates[baseCurrencySelection.value];

  baseAmountInput.value = value;
});
