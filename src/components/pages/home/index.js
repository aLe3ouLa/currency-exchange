import React, { useState } from "react";
import Actions from "../../blocks/actions/actions.components";
import { connect } from "react-redux";
import Currencies from "../../fragment/Currencies/currencies.component";
const Homepage = ({ balance: { balance } }) => {
  const [currency, setCurrency] = useState("EUR");
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  balance: state.balance,
});

export default connect(mapStateToProps)(Homepage);
