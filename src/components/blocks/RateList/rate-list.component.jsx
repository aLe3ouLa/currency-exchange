import React from "react";
import { connect } from "react-redux";

const RateList = ({ rates: { rates } }) => {
  const renderedRates = rates.rates;
  return (
    <div>
      <p>Base: {rates.base}</p>
      {Object.keys(renderedRates).map((key, index) => {
        return key && <p key={index}>{`${key} -- ${renderedRates[key]}`}</p>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  rates: state.rates,
});

export default connect(mapStateToProps)(RateList);
