import React from "./node_modules/react";
import { ExchangeIcon, Exchange, ExchangeContainer } from "./actions.style";

import {
  faSyncAlt,
  faInfoCircle,
  faPlus,
} from "./node_modules/@fortawesome/free-solid-svg-icons";

const Actions = () => {
  return (
    <ExchangeContainer>
      <Exchange to="/">
        <ExchangeIcon icon={faPlus} />
        <p>Add money</p>
      </Exchange>
      <Exchange to="/exchange">
        <ExchangeIcon icon={faSyncAlt} />
        <p>Exchange</p>
      </Exchange>
      <Exchange to="/rates">
        <ExchangeIcon icon={faInfoCircle} />
        <p>Rates</p>
      </Exchange>
    </ExchangeContainer>
  );
};

export default Actions;
