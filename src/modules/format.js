class Format {
  constructor() {}

  toUsd = (amount, language, currency) => {
    language ??= "en-US";
    currency ??= "USD";

    const USD = new Intl.NumberFormat(language, {
      style: "currency",
      currency: currency,
    });

    return USD.format(amount);
  };
}

const format = new Format();

export default format;
