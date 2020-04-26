import React from "react";

import { Container } from "./currencies.styles";
import styled from "styled-components";

const Select = styled.select`
  width: 80px;
  padding: ${({ theme }) => theme.spacing.xxs};
  font-size: 1.6rem;
  border: 0;
  height: 34px;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right transparent;
  appearance: none;
  background-position-x: 50px;
`;

const Currencies = ({ name, value, onChange, isDisabled }) => (
  <Container>
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
    </Select>
  </Container>
);

export default Currencies;
