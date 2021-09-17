import React, { Component } from "react";
import {coinsData} from "../../data/myCoinsData"
import CointItem from "./CointItem";
import SearchBar from "../Common/SearchBar";
import SoringElement from "../Common/SortingElement";

export default class MyCoinListing extends Component {
  render() {
    return (
      <section id="services">
        <div class="container" data-aos="fade-up">
          <div class="section-header" style={{  display: 'flex'}}>
            <h2>Coins</h2>
            <div style={{marginLeft:'auto'}}>
            <SearchBar />
            </div>
          </div>
          <div class="row gy-4">
          <SoringElement />
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
