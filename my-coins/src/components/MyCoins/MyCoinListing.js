import React, { Component } from "react";
import {coinsData} from "../../data/myCoinsData"
import CointItem from "./CointItem";
import CustomAddress from "../Common/SearchBar";

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
        <div class="section-header" style={{    display: 'flex',
    
  }}>
          <h2>Coins</h2>
          <div style={{marginLeft:'auto'}}>
          <CustomAddress />
          </div>
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
