import React from "react";

import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { ExchangeContainer, ExchangeIcon } from "./change-currency.styles";

const ChangeCurrency = ({ handeExchangeCurrencies }) => {
  return (
    <ExchangeContainer onClick={handeExchangeCurrencies}>
      <ExchangeIcon icon={faExchangeAlt} rotation={90} />
    </ExchangeContainer>
  );
};

export default ChangeCurrency;
