import React, { Component } from "react";

export default class Header extends Component {
  
  render() {
    return (
        <header id="header" class="d-flex align-items-center">
        <div class="container d-flex justify-content-between">
  
          <div id="logo">
            <h1><a href="index.html">Know your<span> Coins</span></a></h1>
          </div>
  
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="/">Home</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
  
        </div>
      </header>


    );
  }
}
