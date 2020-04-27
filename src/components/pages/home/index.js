import React, { useState } from "react";
import Actions from "../../blocks/actions/actions.components";
import { connect } from "react-redux";
import Currencies from "../../fragment/Currencies/currencies.component";
import LastExchange from "../../blocks/LastExchange/last-exchange.components";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
`;

const Homepage = ({ balance: { balance } }) => {
  const [currency, setCurrency] = useState("EUR");

  const renderLastExchange = balance &&
    balance.lastExchange &&
    balance.lastExchange.fromValue > 0 && (
      <LastExchange lastExchange={balance.lastExchange} />
    );
  return (
    <HomeContainer>
      <Currencies
        name="Home Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        isDisabled={false}
      />
      <p>{balance[currency]} </p>
      <Actions />

      <br />
      <h4>Last Exchange: </h4>
      {renderLastExchange}
    </HomeContainer>
  );
};

const mapStateToProps = (state) => ({
  balance: state.balance,
});

export default connect(mapStateToProps)(Homepage);
