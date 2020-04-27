import React from "react";
import CustomButton from "../../fragment/Button/button.component";
import Rates from "../../fragment/Rates/rates.component";
import Convert from "../../blocks/Convert/convert.component";
import ChangeCurrency from "../../fragment/ChangeCurrency/ChangeCurrency.component";
import { connect } from "react-redux";

import { fetchRates } from "../../../redux/rates/rates.actions";
import {
  setFromValue,
  setToValue,
  setFromCurrency,
  setToCurrency,
} from "../../../redux/current/current-values.actions";
import { exchange } from "../../../redux/balance/balance.actions";
import Page from "../../fragment/page/page.component";

class Exchange extends React.Component {
  componentDidMount() {
    this.props.fetchRates(this.props.active.fromCurrency);
    this.timer = setInterval(
      () => this.props.fetchRates(this.props.active.fromCurrency),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  handleClick = () => {
    this.props.exchange();
    this.props.history.push("/exchange-done");
  };

  handleToValueChange = (event) => {
    this.props.setToValue(event.target.value);
  };

  handleFromValueChange = (event) => {
    this.props.setFromValue(event.target.value);
  };

  handleFromCurrencyChange = (event) => {
    this.props.setFromCurrency(event.target.value);
  };
  handleToCurrencyChange = (event) => {
    this.props.setToCurrency(event.target.value);
  };

  render() {
    const {
      rates,
      active: { active },
      balance: { balance },
    } = this.props;
    const isExchangeButtonDisabled =
      balance[active.fromCurrency] < active.fromValue ||
      balance[active.fromCurrency] === 0 ||
      active.fromValue === 0 ||
      active.fromValue === "";

    return (
      <Page>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Convert
            balance={balance}
            toValue={active.toValue}
            toCurrency={active.toCurrency}
            fromCurrency={active.fromCurrency}
            fromValue={active.fromValue}
            rates={rates}
            isFromValue={true}
            handleChange={this.handleFromValueChange}
            handleCurrencyChange={this.handleFromCurrencyChange}
          />
          <ChangeCurrency />
          <Rates />
          <Convert
            balance={balance}
            toValue={active.toValue}
            toCurrency={active.toCurrency}
            fromCurrency={active.fromCurrency}
            fromValue={active.fromValue}
            rates={rates}
            isFromValue={false}
            handleChange={this.handleToValueChange}
            handleCurrencyChange={this.handleToCurrencyChange}
          />
        </div>

        <CustomButton
          isDisabled={isExchangeButtonDisabled}
          onClick={this.handleClick}
        >
          Exchange
        </CustomButton>
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rates: state.rates,
    active: state.active,
    balance: state.balance,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRates: (currency) => dispatch(fetchRates(currency)),
  setFromValue: (fromValue) => dispatch(setFromValue(fromValue)),
  setToValue: (toValue) => dispatch(setToValue(toValue)),
  setFromCurrency: (fromCurrency) => dispatch(setFromCurrency(fromCurrency)),
  setToCurrency: (toCurrency) => dispatch(setToCurrency(toCurrency)),
  exchange: (balance) => dispatch(exchange(balance)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
