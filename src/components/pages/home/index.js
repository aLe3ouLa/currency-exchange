import React, { useState } from "react";
import Actions from "../../blocks/actions/actions.components";
import { connect } from "react-redux";
import Currencies from "../../fragment/Currencies/currencies.component";
const Homepage = ({ balance: { balance } }) => {
  const [currency, setCurrency] = useState("EUR");

  const renderLastExchange = balance &&
    balance.lastExchange &&
    balance.lastExchange.fromValue > 0 && (
      <>
        <p>Exchanged to {balance.lastExchange.toCurrency}</p>
        <p>{balance.lastExchange.date}</p>
        <p>
          {`-${balance.lastExchange.fromValue} +${balance.lastExchange.toValue}`}
        </p>
      </>
    );
  console.log(balance);
  return (
    <div>
      <Currencies
        name="Home Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        isDisabled={false}
      />
      <p>{balance[currency]} </p>
      <Actions />

      <br />

      {renderLastExchange}
    </div>
  );
};

const mapStateToProps = (state) => ({
  balance: state.balance,
});

export default connect(mapStateToProps)(Homepage);
