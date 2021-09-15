import React, { Component } from "react";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";
import MyCoinDetail from "./MyCoins/MyCoinDetail";
import MyCoinListing from "./MyCoins/MyCoinListing";


export default class MyRouting extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <BrowserRouter>

      <Switch>
        <Route exact path="/"
        
        component={MyCoinListing}
        
        />
        <Route exact path="/detail" 
        
        component={MyCoinDetail}
        
        />
        <Redirect from="*" to="/" /> 
      </Switch>
      </BrowserRouter>

    );
  }
}
