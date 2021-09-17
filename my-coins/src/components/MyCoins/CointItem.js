import React, { Component } from "react";
import { withRouter } from "react-router";

class CointItem extends Component {
  redirectToDetail = ()=>{
const {myCoin} = this.props;
    this.props.history.push({
      pathname:
        "/detail/" +
        myCoin.Id+
        "/" +
        myCoin.Name+
        "/" +
        myCoin.Ticker ,
    });
  }
  render() {
    const {myCoin} = this.props;
    return (
        
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100" onClick={this.redirectToDetail}>
              <div class="box">
                <div class="icon"><i class="bi bi-currency-bitcoin"></i></div>
                <h4 class="title"><a href="">{myCoin.Name}</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
              </div>
            </div>


    );
  }
}

export default withRouter(CointItem);
