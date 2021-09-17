import React, { Component } from "react";

export default class SoringElement extends Component {
  
  render() {
    return (
          <nav id="navbar" class="navbar" style={{flexDirection:'row-reverse'}}>
            <ul>
            <li class="dropdown"><a><span>Sort by</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a>Drop Down 1</a></li>
              <li><a>Drop Down 2</a></li>
              <li><a>Drop Down 3</a></li>
              <li><a>Drop Down 4</a></li>
            </ul>
          </li>
            </ul>
          </nav>
    );
  }
}
