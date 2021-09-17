import React, { Component } from "react";
import {coinsData} from "../../data/myCoinsData"
import CointItem from "./CointItem";

export default class MyCoinListing extends Component {
  state={
    searchResult:[
{name:1,value:2},{name:1,value:2},{name:1,value:2},{name:1,value:2},{name:1,value:2},{name:1,value:2}
    ]
  }
  
  render() {
    return (
      <>  
      <section id="services">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Coins</h2>
          <p>Here is some random desciption for the coins</p>
        </div>
        <div class="row gy-4">
        {coinsData.map((item, index) => {
                    return <CointItem myCoin={item} index={index} />;
                  })}
        </div>
      </div>
    </section>
    </>
  
    );
  }
}
