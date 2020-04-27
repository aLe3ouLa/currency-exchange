import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/home";
import Exchange from "./components/pages/exchange";
import Header from "./components/layout/header/header.component";
import exchangedDone from "./components/pages/exchanged-done";
import Rates from "./components/pages/rates";
import { fetchRates } from "./redux/rates/rates.actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRates(this.props.active.fromCurrency);
    this.timer = setInterval(
      () => this.props.fetchRates(this.props.active.fromCurrency),
      10000
    );
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/exchange" component={Exchange} />
          <Route path="/exchange-done" component={exchangedDone} />
          <Route path="/rates" component={Rates} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.active,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRates: (currency) => dispatch(fetchRates(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
