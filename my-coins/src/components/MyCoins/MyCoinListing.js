import React, { Component } from "react";
import {coinsData} from "../../data/myCoinsData"
import CointItem from "./CointItem";

export default class MyCoinListing extends Component {
  
  render() {
    return (
      <section id="services">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Services</h2>
          <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
        </div>

        <div class="row gy-4">
        {coinsData.map((item, index) => {
                    return <CointItem myCoin={item} index={index} />;
                  })}
        </div>
      </div>
    </section>
  
    );
  }
}
