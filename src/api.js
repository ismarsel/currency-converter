const API_KEY = "6b825fe12c81453e99a647624f6b7d5e";
const getRatesUrl = "https://openexchangerates.org/api/latest.json";

function createPriceRequestUrl(base, target) {
  const priceUrl = new URL(
    "https://min-api.cryptocompare.com/data/price?fsym=RUB&tsyms=BND"
  );
  priceUrl.searchParams.set("fsym", base);
  priceUrl.searchParams.set("tsyms", target);
  return priceUrl.toString();
}
export { API_KEY, getRatesUrl, createPriceRequestUrl };
