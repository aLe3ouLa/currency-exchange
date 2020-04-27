import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faChartLine } from "@fortawesome/free-solid-svg-icons";

import { RatesContainer, Currency, LineChart } from "./rates.styles";
import { getCurrencySymbol } from "../../../utils/currencies";

const Rates = ({
  rates: { rates },
  active: { active },
  isLoading: { isLoading },
}) => {
  const { fromCurrency, toCurrency } = active;

  return (
    <RatesContainer>
      {rates.date && rates.rates[toCurrency] && !isLoading ? (
        <div>
          <LineChart icon={faChartLine} />
          <Currency>
            {`${getCurrencySymbol(fromCurrency)}1 = ${getCurrencySymbol(
              toCurrency
            )} ${rates.rates[toCurrency].toFixed(4)}`}
          </Currency>
        </div>
      ) : (
        <FontAwesomeIcon icon={faCircleNotch} spin />
      )}
    </RatesContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    rates: state.rates,
    isLoading: state.isLoading,
    active: state.active,
  };
};

export default connect(mapStateToProps)(Rates);
