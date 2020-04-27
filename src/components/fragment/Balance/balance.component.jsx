import React from "react";

import { BalanceContainer } from "./balance.styles";
import { getCurrencySymbol } from "../../../utils/currencies";

const Balance = ({ balance, currency, fromValue, isFromValue }) => {
  const currentBalance = balance[currency] ? balance[currency] : 0;
  const currentCurrency = getCurrencySymbol(currency);

  const errorBalance = balance[currency] < fromValue;
  return (
    <BalanceContainer error={isFromValue && errorBalance}>
      Balance: {currentCurrency} {currentBalance}
    </BalanceContainer>
  );
};

export default Balance;
