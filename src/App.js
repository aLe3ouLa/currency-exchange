import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/home";
import Exchange from "./components/pages/exchange";
import Header from "./components/layout/header/header.component";
import exchangedDone from "./components/pages/exchanged-done";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/exchange" component={Exchange} />
        <Route path="/exchange-done" component={exchangedDone} />
      </Switch>
    </>
  );
};

export default App;
