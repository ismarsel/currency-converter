const currenciesUrl = "https://openexchangerates.org/api/currencies.json";

function createPriceRequestUrl(base, target) {
  const priceUrl = new URL(
    "https://min-api.cryptocompare.com/data/price?fsym=RUB&tsyms=BND"
  );
  priceUrl.searchParams.set("fsym", base);
  priceUrl.searchParams.set("tsyms", target);
  return priceUrl.toString();
}
export { currenciesUrl, createPriceRequestUrl };
