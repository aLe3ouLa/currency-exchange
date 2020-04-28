import React from "react";

import FormInput from "../../fragment/FormInput/form-input.component";
import Currencies from "../../fragment/Currencies/currencies.component";
import Balance from "../../fragment/Balance/balance.component";

import { Container, FormWrapper, CurrencyCtn } from "./convert.styles";

const Convert = ({
  balance,
  fromValue,
  toValue,
  toCurrency,
  fromCurrency,
  isFromValue,
  rates: { rates },
  handleChange,
  handleCurrencyChange,
}) => {
  const value = isFromValue ? fromValue : toValue;
  const currency = isFromValue ? fromCurrency : toCurrency;
  return (
    <Container isFromValue={isFromValue}>
      <CurrencyCtn>
        <Currencies
          name={currency}
          value={currency}
          onChange={handleCurrencyChange}
          isDisabled={false}
        />
        <FormWrapper>
          <FormInput
            name="value"
            value={value}
            onChange={handleChange}
            disabled={!rates.date}
            isFromValue={isFromValue}
            isZero={value === 0}
          />
        </FormWrapper>
      </CurrencyCtn>
      <Balance
        balance={balance}
        currency={currency}
        fromValue={fromValue}
        isFromValue={isFromValue}
      />
    </Container>
  );
};

export default Convert;
