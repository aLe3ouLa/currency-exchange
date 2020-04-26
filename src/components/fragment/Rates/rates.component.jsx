import React, { useEffect } from "react";
import FontAwesome from "react-fontawesome";

import {
  Container,
  Loading,
  Currency,
  LineChart,
  Circle,
} from "./rates.styles";
import { getCurrencySymbol } from "../../../utils/currencies";
import { connect } from "react-redux";

import { fetchRates } from "../../../redux/rates/rates.actions";

const Rates = ({
  rates: { rates },
  active: { active },
  isLoading,
  fetchRates,
}) => {
  const { fromCurrency, toCurrency } = active;

  useEffect(() => {
    fetchRates(fromCurrency);
  }, [fetchRates, fromCurrency]);

  return (
    <Container>
      {rates.date && rates.rates[toCurrency] ? (
        <div>
          <LineChart name="line-chart" />
          <Currency>
            {`${getCurrencySymbol(fromCurrency)}1 = ${getCurrencySymbol(
              toCurrency
            )} ${rates.rates[toCurrency].toFixed(4)}`}
          </Currency>
          <Loading isLoading={isLoading}>
            <Circle name="circle" />
          </Loading>
        </div>
      ) : (
        <FontAwesome name="circle-o-notch" spin />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    rates: state.rates,
    isLoading: state.isLoading,
    active: state.active,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRates: (currency) => dispatch(fetchRates(currency)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Rates);
