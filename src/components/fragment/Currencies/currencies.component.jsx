import React from "react";

import { Select } from "./currencies.styles";

const availableCurrencies = ["GBP", "EUR", "USD", "JPY"];

const Currencies = ({ name, value, onChange, isDisabled }) => (
  <Select
    data-testid="select"
    id={name}
    name={name}
    value={value}
    onChange={onChange}
    disabled={isDisabled}
  >
    {availableCurrencies.map((currency) => {
      return <option key={currency} value={currency} label={currency} />;
    })}
  </Select>
);

export default Currencies;
