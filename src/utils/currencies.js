export const getCurrencySymbol = (currencyCode) => {
  switch (currencyCode) {
    case "AED":
      return "AED";
    case "AUD":
      return "A$";
    case "BGN":
      return "Лв";
    case "CAD":
      return "C$";
    case "CHF":
      return "Fr0";
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
    default:
      return "£";
  }
};
