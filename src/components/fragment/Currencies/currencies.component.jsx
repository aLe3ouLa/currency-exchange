import React from "react";

import { Select } from "./currencies.styles";

const Currencies = ({ name, value, onChange, isDisabled }) => (
  <div>
    <Select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    >
      <option value="GBP" label="GBP" />
      <option value="EUR" label="EUR" />
      <option value="USD" label="USD" />
      <option value="JPY" label="JPY" />
    </Select>
  </div>
);

export default Currencies;
