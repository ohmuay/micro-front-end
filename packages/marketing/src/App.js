import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
export default () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
