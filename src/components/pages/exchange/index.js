import React from "react";
import CustomButton from "../../fragment/Button/button.component";
import Rates from "../../fragment/Rates/rates.component";
import Convert from "../../blocks/Convert/convert.component";
import ChangeCurrency from "../../fragment/ChangeCurrency/change-currency.component";
import { connect } from "react-redux";
import {
  setFromValue,
  setToValue,
  setFromCurrency,
  setToCurrency,
  changeFromTo,
} from "../../../redux/current/current-values.actions";
import { exchange } from "../../../redux/balance/balance.actions";

class Exchange extends React.Component {
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

  handeExchangeCurrencies = () => {
    this.props.changeFromTo();
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
      <div>
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
          <ChangeCurrency
            handeExchangeCurrencies={this.handeExchangeCurrencies}
          />
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
      </div>
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
  setFromValue: (fromValue) => dispatch(setFromValue(fromValue)),
  setToValue: (toValue) => dispatch(setToValue(toValue)),
  setFromCurrency: (fromCurrency) => dispatch(setFromCurrency(fromCurrency)),
  setToCurrency: (toCurrency) => dispatch(setToCurrency(toCurrency)),
  exchange: (balance) => dispatch(exchange(balance)),
  changeFromTo: () => dispatch(changeFromTo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
