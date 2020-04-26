import React from "react";

import { Container } from "./currency-select.styles";

const CurrencySelect = ({ name, value, onChange, isDisabled }) => (
  <Container>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    >
      <option value="GBP" label="GBP" />
      <option value="EUR" label="EUR" />
      <option value="USD" label="USD" />
    </select>
  </Container>
);

export default CurrencySelect;
