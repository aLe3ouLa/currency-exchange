import React from "react";
import { connect } from "react-redux";
import { changeFromTo } from "../../../redux/current/current-values.actions";

import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { ExchangeContainer, ExchangeIcon } from "./change-currency.styles";

const ChangeCurrency = ({ changeFromTo }) => {
  const handeExchangeCurrencies = () => {
    changeFromTo();
  };
  return (
    <ExchangeContainer onClick={handeExchangeCurrencies}>
      <ExchangeIcon icon={faExchangeAlt} rotation={90} />
    </ExchangeContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeFromTo: () => dispatch(changeFromTo()),
});

export default connect(null, mapDispatchToProps)(ChangeCurrency);
