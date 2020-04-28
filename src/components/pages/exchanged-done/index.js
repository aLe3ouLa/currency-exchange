import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../../fragment/Button/button.component";
import { getCurrencySymbol } from "../../../utils/currencies";
import {
  ExchangedDoneContainer,
  Done,
  Paragraph,
} from "./exchanged-done.styles";

const ExchangedDone = ({ balance: { balance } }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <ExchangedDoneContainer>
      <Done icon={faCheckCircle} />
      <Paragraph>{`You exchanged ${getCurrencySymbol(
        balance.lastExchange.fromCurrency
      )}${balance.lastExchange.fromValue} to ${getCurrencySymbol(
        balance.lastExchange.toCurrency
      )}${balance.lastExchange.toValue}`}</Paragraph>
      <Link to="/">
        <p>Set up auto-exchanged</p>
      </Link>

      <CustomButton onClick={handleClick}>Done</CustomButton>
    </ExchangedDoneContainer>
  );
};

const mapStateToProps = (state) => ({
  balance: state.balance,
});

export default connect(mapStateToProps)(ExchangedDone);
