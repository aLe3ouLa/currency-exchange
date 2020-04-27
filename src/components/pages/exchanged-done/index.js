import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../../fragment/Button/button.component";
import { getCurrencySymbol } from "../../../utils/currencies";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const Done = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${({ theme }) => theme.color.primary};
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

const ExchangedDone = ({ balance: { balance } }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <Container>
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
    </Container>
  );
};

const mapStateToProps = (state) => ({
  balance: state.balance,
});

export default connect(mapStateToProps)(ExchangedDone);
