import React, { Component } from "react";

export default class Header extends Component {
  
  render() {
    return (
        <header id="header" class="d-flex align-items-center">
        <div class="container d-flex justify-content-between">
          <div id="logo">
            <h1><a href="/">Know your<span> Coins</span></a></h1>
          </div>
        </div>
      </header>
    );
  }
}
