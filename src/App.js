import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/home";
import Exchange from "./components/pages/exchange";
import Header from "./components/layout/header/header.component";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/exchange" component={Exchange} />
      </Switch>
    </>
  );
};

export default App;
