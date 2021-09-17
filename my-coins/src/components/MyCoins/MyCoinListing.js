import React, { Component } from "react";
import _ from 'lodash'
import { connect } from "react-redux";
import {coinsData} from "../../data/myCoinsData"
import CointItem from "./CointItem";
import SearchBar from "../Common/SearchBar";
import SoringElement from "../Common/SortingElement";

class MyCoinListing extends Component {

  getSortedCoins = ()=>{
    const {sortBy} = this.props;
    let myCoinArray = [];
    myCoinArray = _.sortBy(coinsData, sortBy,'asc')
    return myCoinArray;
  }

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
            {this.getSortedCoins().map((item, index) => {
              return <CointItem myCoin={item} index={index} />;
            })}
          </div>
        </div>
    </section>
    );
  }
}

const mapStateToProps = (reducerObj) => {
  const sortBy = reducerObj.coinObject.sortBy;
  return {
    sortBy
  };
};

export default connect(mapStateToProps, {
})(MyCoinListing);