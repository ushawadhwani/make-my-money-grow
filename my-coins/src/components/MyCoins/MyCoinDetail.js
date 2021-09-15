import React, { Component } from "react";

export default class MyCoinDetail extends Component {
  
  render() {
    return (
           <>
           <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Inner Page</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Inner Page</li>
          </ol>
        </div>

      </div>
    </section>

    <section class="inner-page pt-4">
      <div class="container">
        <p>
          Example inner page template
        </p>
      </div>
    </section>


     </>
    );
  }
}
